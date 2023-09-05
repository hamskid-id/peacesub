import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2';

const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
export const subscribeCable = createAsyncThunk(
    'cable/subscribeCable', 
    async ({
        quantity,
        service,
        type,
        amount,
        phone,
        // code,
    }, {rejectWithValue,dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/cablesubscribe`,{
                "amount":amount,
                "phone":phone,
                "serviceID":"dstv",
                "billersCode": "1212121212",
                "variation_code" :"dstv-padi",
                "subscription_type" : "TV Subscription",
                "quantity" : quantity,

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

export const cablevtpass = createAsyncThunk(
    'cable/cablevtpass', 
    async ({
        quantity,
        service,
        type,
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
                "serviceID":"dstv",
                "billersCode": "1212121212",
                "variation_code" :"dstv-padi",
                "subscription_type" : "TV Subscription",
                "quantity" : quantity,

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

export const getcableName = createAsyncThunk(
    'cable/getcableName', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/cabletvname`,setHeaders());
            return response?.data
        } catch(err){
            return (
                err.response?.data?.message
            )
        }
    }
)

export const getcableType = createAsyncThunk(
    'cable/getcableType', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/cabletvtype`,setHeaders());
            return response?.data
        } catch(err){
            return (
                err.response?.data?.message
            )
        }
    }
)

const cable_Slice = createSlice({
    name:"cable",
    initialState: {
        subscribeCableStatus:'',
        vtRes:{},
       vtpassStatus:'',
       getcableTypeStatus:'',
       getcableNameStatus:'',
       subCableRes:{},
       cableTp:[],
       cableName:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(subscribeCable.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                subscribeCableStatus:'pending'
            }

        });
        builder.addCase(subscribeCable.fulfilled,(state, action)=>{
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
                    subscribeCableStatus:'success',
                    subCableRes:message
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
                    subscribeCableStatus:'failed'
                }
            }
        })
        builder.addCase(subscribeCable.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload?.response_description,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                subscribeCableStatus:'rejected'
            }
        })

        builder.addCase(cablevtpass.pending,(state, action)=>{
            return {
                ...state,
                vtpassStatus:'pending'
             }
        });

        builder.addCase(cablevtpass.fulfilled,(state, action)=>{
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
        builder.addCase(cablevtpass.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            return{
                ...state,
               vtpassStatus:'rejected'
            }
        })

        builder.addCase(getcableType.pending,(state, action)=>{
            return {
                ...state,
                getcableTypeStatus:'pending'
             }
        });

        builder.addCase(getcableType.fulfilled,(state, action)=>{
                const{
                    status,
                    cableTvTypes
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getcableTypeStatus:'success',
                        cableTp:cableTvTypes
                    }
                }else{
                    return{
                        ...state,
                        getcableTypeStatus:'failed',
                    }
            }

        })
        builder.addCase(getcableType.rejected,(state, action)=>{
            toast.error(action.payload)
            console.log(action.payload)
            return{
                ...state,
                getcableTypeStatus:'rejected'
            }
        })

        builder.addCase(getcableName.pending,(state, action)=>{
            return {
                ...state,
                getcableNameStatus:'pending'
             }
        });

        builder.addCase(getcableName.fulfilled,(state, action)=>{
                const{
                    status,
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getcableNameStatus:'success',
                        cableName:message
                    }
                }else{
                    return{
                        ...state,
                        getcableNameStatus:'failed',
                    }
            }

        })
        builder.addCase(getcableName.rejected,(state, action)=>{
            toast.error(action.payload)
            console.log(action.payload)
            return{
                ...state,
                getcableNameStatus:'rejected'
            }
        })
    }
})
export default cable_Slice;