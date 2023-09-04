import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2'

const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
export const buyscratchcard = createAsyncThunk(
    'edu/buyscratchcard', 
    async ({
        amount,
        phone,
        quantity,
        examName
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/scratchcard`,{
                "serviceID": "waec-registration",
                "variation_code" : "waec-registraion",
                "amount": amount,
                "phone": phone,
                "quantity" : quantity

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

export const scratchcardvtpass = createAsyncThunk(
    'edu/scratchcardvtpass', 
    async ({
        amount,
        phone,
        quantity,
        reqId,
        serviceID,
        variation_code
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `https://sandbox.vtpass.com/api/pay`,{
                "request_id" : reqId,
                "serviceID": serviceID,
                "variation_code" : variation_code,
                "amount":amount,
                "phone":phone,
                "quantity" : quantity

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

export const getCard = createAsyncThunk(
    'edu/getCard', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/scratchcards`,setHeaders());
            return response?.data
        } catch(err){
            return (
                err.response?.data?.message
            )
        }
    }
)

const edu_Slice = createSlice({
    name:"edu",
    initialState: {
        buyCardStatus:'',
       vtpassStatus:'',
       vtRes:{},
       getCardStatus:'',
       buyCardRes:{},
       card:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(buyscratchcard.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                buyCardStatus:'pending'
            }

        });
        builder.addCase(buyscratchcard.fulfilled,(state, action)=>{
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
                    buyCardStatus:'success',
                    buyCardRes:message
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
                    buyCardStatus:'failed'
                }
            }
        })
        builder.addCase(buyscratchcard.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload?.response_description,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                buyCardStatus:'rejected'
            }
        })

        builder.addCase(scratchcardvtpass.pending,(state, action)=>{
            return {
                ...state,
                vtpassStatus:'pending'
             }
        });

        builder.addCase(scratchcardvtpass.fulfilled,(state, action)=>{
            console.log(action.payload)
                const{
                    code,
                    response_description
                }=action.payload;
                if(code === "000"){
                    console.log(action.payload)
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
        builder.addCase(scratchcardvtpass.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            return{
                ...state,
               vtpassStatus:'rejected'
            }
        })

        builder.addCase(getCard.pending,(state, action)=>{
            return {
                ...state,
                getCardStatus:'pending'
             }
        });

        builder.addCase(getCard.fulfilled,(state, action)=>{
                const{
                    status,
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getCardStatus:'success',
                        card:message
                    }
                }else{
                    toast.error(message)
                    return{
                        ...state,
                        getCardStatus:'failed',
                    }
            }

        })
        builder.addCase(getCard.rejected,(state, action)=>{
            toast.error(action.payload)
            console.log(action.payload)
            return{
                ...state,
                getCardStatus:'rejected'
            }
        })
    }
})
export default edu_Slice;