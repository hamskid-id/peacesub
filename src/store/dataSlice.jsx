import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2'

const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
export const purchaseData = createAsyncThunk(
    'data/purchaseData', 
    async ({
        service,
        amount,
        phone,
        // code,
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/purchasedata`,{
                "amount":amount,
                "phone":"08011111111",
                "serviceID": "airtel-data",
                "billersCode": "08011111111",
                "variation_code" : "airt-50",

            },{
                headers: {
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

export const vtpassData = createAsyncThunk(
    'data/vtpassData', 
    async ({
        service,
        amount,
        requestId,
        phone,
        // code,
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `https://sandbox.vtpass.com/api/pay`,{
                "request_id" : requestId,
                "amount":amount,
                "phone":phone,
                "serviceID":"airtel-data",
                "billersCode": "1212121212",
                "variation_code" :"airt-50",

            },{
                headers: {
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

export const getDataAirtimeType = createAsyncThunk(
    'data/getDataAirtimeType', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/datatypes`,setHeaders());
            return response?.data
        } catch(err){
            return (
                err.response?.data?.message
            )
        }
    }
)

const purchaseData_Slice = createSlice({
    name:"data",
    initialState: {
        purchaseDataStatus:'',
        vtRes:{},
       vtpassStatus:'',
       getDataAirtimeTypeStatus:'',
       purchaseDataRes:{},
       dataAirtimeTp:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(purchaseData.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                purchaseDataStatus:'pending'
            }

        });
        builder.addCase(purchaseData.fulfilled,(state, action)=>{
            const{
                status,
                message
            }=action.payload;
            
            if(message?.code =="000"){
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
                        <hr class="text-xs text-dark border mb-4"/>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                            Quantity
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                                ${quantity}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                                Amount
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                                ${amount}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                                Email
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                                ${email}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                                Phone Number
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                                ${phone}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                                Product Name
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                               ${product_name}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                                Status
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                               ${status}
                            </h6>
                        </div>
                          <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                                 Method
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                               ${ method}
                            </h6>
                        </div>
                           <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                                Convinience Fee
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                               ${convinience_fee}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                                Commission
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                               ${commission}
                            </h6>
                        </div>
                    <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                            Transaction Id
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                               ${transactionId}
                            </h6>
                        </div>
                         <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                                Type
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                               ${type}
                            </h6>
                        </div>
                        <div
                            class="flex items-center justify-between mb-3"
                        >
                            <h6 class=" text-xs text-dark mb-3">
                                Unit Price
                            </h6>
                            <h6 class=" text-xs text-dark mb-3">
                               ${unit_price}
                            </h6>
                        </div>
                    </div>`,
                    showCloseButton: true,
                })
                return{
                    ...state,
                    purchaseDataStatus:'success',
                    purchaseDataRes:message
                }
            }else{
                toast.error(message?.response_description)
                Swal.fire({
                    text:message?.response_description,
                    icon:'error',
                    allowOutsideClick: false,
                    showCloseButton: true,
                })
                return{
                    ...state,
                    purchaseDataStatus:'failed'
                }
            }
        })
        builder.addCase(purchaseData.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload?.response_description,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                purchaseDataStatus:'rejected'
            }
        })

        builder.addCase(vtpassData.pending,(state, action)=>{
            return {
                ...state,
                vtpassStatus:'pending'
             }
        });

        builder.addCase(vtpassData.fulfilled,(state, action)=>{
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
        builder.addCase(vtpassData.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            return{
                ...state,
               vtpassStatus:'rejected'
            }
        })

        builder.addCase(getDataAirtimeType.pending,(state, action)=>{
            return {
                ...state,
                getDataAirtimeTypeStatus:'pending'
             }
        });

        builder.addCase(getDataAirtimeType.fulfilled,(state, action)=>{
                const{
                    status,
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getDataAirtimeTypeStatus:'success',
                        dataAirtimeTp:message
                    }
                }else{
                    return{
                        ...state,
                        getDataAirtimeTypeStatus:'failed',
                    }
            }

        })
        builder.addCase(getDataAirtimeType.rejected,(state, action)=>{
            toast.error(action.payload)
            console.log(action.payload)
            return{
                ...state,
                getDataAirtimeTypeStatus:'rejected'
            }
        })
    }
})
export default purchaseData_Slice;