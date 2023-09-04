import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2'

const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
export const electricityPay = createAsyncThunk(
    'electricity/electricityPay', 
    async ({
        disco,
        // meter,
        type,
        amount,
        phone,
    }, {rejectWithValue,dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/electricitypay`,{

                "amount":amount,
                "phone":phone,
                "serviceID":disco,
                "billersCode": "1111111111111",
                "variation_code" :type,

            },{
                headers: {
                    "api-key":`ab8085f10d5322b9bcd08a6adb975401`,
                    "secret-key":`SK_70529d32acb17b3d3641a27325a9dd16b15a0a41d45`,
                    "Authorization":`Bearer Bearer ${user?.access_token}`
                }
            }
        );
        
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)

export const electricityvtpass = createAsyncThunk(
    'electricity/electricityvtpass', 
    async ({
        disco,
        // meter,
        type,
        reqId,
        amount,
        phone
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `https://sandbox.vtpass.com/api/pay`,{
                "request_id" : reqId,
                "amount":amount,
                "phone":phone,
                "serviceID":disco,
                "billersCode": "1111111111111",
                "variation_code" :type,

            },{
                headers: {
                    "api-key":`ab8085f10d5322b9bcd08a6adb975401`,
                    "secret-key":`SK_70529d32acb17b3d3641a27325a9dd16b15a0a41d45`,
                    "Authorization":`Bearer Bearer ${user?.access_token}`
                }
            }
        );
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)

export const getElectricityBill = createAsyncThunk(
    'electricity/getElectricityBill', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/electricity`,setHeaders());
            return response?.data
        } catch(err){
            return (
                err.response?.data?.message
            )
        }
    }
)

const electricity_Slice = createSlice({
    name:"electricity",
    initialState: {
        elePayStatus:'',
        vtRes:{},
       vtpassStatus:'',
       getElectricityBillStatus:'',
       elePayRes:{},
       EleBill:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(electricityPay.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                elePayStatus:'pending'
            }

        });
        builder.addCase(electricityPay.fulfilled,(state, action)=>{
            const{
                status,
                message
            }=action.payload;
            
            if(message?.code =="000"){
                toast(message?.response_description);
                console.log(message);
                const{
                    amount,
                    commission,
                    convinience_fee,
                    email,
                    method,
                    phone,
                    product_name,
                    quantity,
                    status,
                    transactionId,
                    type,
                    unit_price
                }=message?.content?.transactions
                Swal.fire({
                    text:message?.response_description,
                    allowOutsideClick: false,
                    icon:'success',
                    html:`
                    <p>${message?.response_description}</p>
                    <div>
                        <hr class="text-dark border mb-3"/>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                            Quantity
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                                ${quantity}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                                Amount
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                                ${amount}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                                Email
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                                ${email}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                                Phone Number
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                                ${phone}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                                Product Name
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                               ${product_name}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                                Status
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                               ${status}
                            </h6>
                        </div>
                          <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                                 Method
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                               ${ method}
                            </h6>
                        </div>
                           <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                                Convinience Fee
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                               ${convinience_fee}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                                Commission
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                               ${commission}
                            </h6>
                        </div>
                    <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                            Transaction Id
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                               ${transactionId}
                            </h6>
                        </div>
                         <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                                Type
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                               ${type}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class="h7 text-dark mb-3">
                                Unit Price
                            </h6>
                            <h6 class="h7 text-dark mb-3">
                               ${unit_price}
                            </h6>
                        </div>
                    </div>`,
                    showCloseButton: true,
                })
                return{
                    ...state,
                    elePayStatus:'success',
                    elePayRes:message
                }
            }else{
                Swal.fire({
                    text:message?.response_description,
                    icon:'error',
                    allowOutsideClick: false,
                    showCloseButton: true,
                })
                return{
                    ...state,
                    elePayStatus:'failed'
                }
            }
        })
        builder.addCase(electricityPay.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            Swal.fire({
                text:action?.payload?.response_description,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                elePayStatus:'rejected'
            }
        })

        builder.addCase(electricityvtpass.pending,(state, action)=>{
            return {
                ...state,
                vtpassStatus:'pending'
             }
        });

        builder.addCase(electricityvtpass.fulfilled,(state, action)=>{
                const{
                    code,
                    response_description
                }=action.payload;
                if(code === "000"){
                    toast(response_description);
                    return{
                        ...state,
                        vtpassStatus:'success',
                        vtRes:action.payload
                    }
                }else{
                    toast.error(response_description)
                    return{
                        ...state,
                        vtpassStatus:'failed',
                    }
            }

        })
        builder.addCase(electricityvtpass.rejected,(state, action)=>{
            toast.error(action.payload.response_description)
            return{
                ...state,
               vtpassStatus:'rejected'
            }
        })

        builder.addCase(getElectricityBill.pending,(state, action)=>{
            return {
                ...state,
                getElectricityBillStatus:'pending'
             }
        });

        builder.addCase(getElectricityBill.fulfilled,(state, action)=>{
                const{
                    status,
                    message
                }=action.payload;
                if(status){
                    toast(message);
                    return{
                        ...state,
                        EleBill:message,
                        getElectricityBillStatus:'success'
                    }
                }else{
                    toast.error(message)
                    return{
                        ...state,
                        getElectricityBillStatus:'failed',
                    }
            }

        })
        builder.addCase(getElectricityBill.rejected,(state, action)=>{
            // toast.error(message)
            console.log(action.payload)
            return{
                ...state,
                getElectricityBillStatus:'rejected'
            }
        })
    }
})
export default electricity_Slice;