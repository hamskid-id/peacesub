import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export const bulkSms = createAsyncThunk(
    'data/bulkSms', 
    async ({
        From,
        Message,
        To
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/bulk-sms-send`,{
                "sender_name": From,
                "recipients": To,
                "message": Message
            },setHeaders()
        );
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)

export const purchaseData = createAsyncThunk(
    'data/purchaseData', 
    async ({
        Network,
        phone
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/purchase-data`,{
                "networkID":Network,
                "phone":phone
            },setHeaders()
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
    async ({
        network
    },{dispatch}) =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/types-data/${network}`,setHeaders());
            const{
                status,
                data
            }=response?.data;
            if(status){
                dispatch(getDataList({
                    network,
                    type:data[0]?.category
                }))
            }
            return response?.data
        } catch(err){
            return (
                err.response?.data?.message
            )
        }
    }
)

export const getAtm = createAsyncThunk(
    'data/getAtm', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/fund-wallet-atm`,setHeaders());
            return response?.data
        } catch(err){
            return (
                err.response?.data?.message
            )
        }
    }
)


export const getDataList = createAsyncThunk(
    'data/getDataList ', 
    async ({
        network,type
    }) =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/list-data/${network}/${type}`,setHeaders());
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
        bulkStatus:'',
       getDataAirtimeTypeStatus:'',
       purchaseDataRes:{},
       atm:[],
       atmStatus:'',
       dataAirtimeTp:[],
       dataListStatus:'',
       dataList:[],
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
            
            if(status){

                Swal.fire({
                    text:message,
                    allowOutsideClick: false,
                    icon:'success',
                    showCloseButton: true,
                })
                return{
                    ...state,
                    purchaseDataStatus:'success',
                    purchaseDataRes:message
                }
            }else{
                toast
                return{
                    ...state,
                    purchaseDataStatus:'failed'
                }
            }
        })
        builder.addCase(purchaseData.rejected,(state, action)=>{
            toast.error(action?.payload)
            return{
                ...state,
                purchaseDataStatus:'rejected'
            }
        })

        builder.addCase(bulkSms.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                bulkStatus:'pending'
            }

        });
        builder.addCase(bulkSms.fulfilled,(state, action)=>{
            const{
                status,
                message
            }=action.payload;
            
            if(status){

                Swal.fire({
                    text:message,
                    allowOutsideClick: false,
                    icon:'success',
                    showCloseButton: true,
                })
                return{
                    ...state,
                    bulkStatus:'success'
                }
            }else{
                toast
                return{
                    ...state,
                   bulkStatus:'failed'
                }
            }
        })
        builder.addCase(bulkSms.rejected,(state, action)=>{
            toast.error(action?.payload)
            return{
                ...state,
                bulkStatus:'rejected'
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
                    data,
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getDataAirtimeTypeStatus:'success',
                        dataAirtimeTp:data
                    }
                }else{
                    toast.error(message)
                    return{
                        ...state,
                        getDataAirtimeTypeStatus:'failed',
                    }
            }

        })
        builder.addCase(getDataAirtimeType.rejected,(state, action)=>{
           toast.error(action?.payload)
            return{
                ...state,
                getDataAirtimeTypeStatus:'rejected'
            }
        })

        builder.addCase(getDataList.pending,(state, action)=>{
            return {
                ...state,
                dataListStatus:'pending'
             }
        });

        builder.addCase(getDataList.fulfilled,(state, action)=>{
                const{
                    status,
                    data,
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        dataListStatus:'success',
                        dataList:data
                    }
                }else{
                    toast.error(message)
                    return{
                        ...state,
                        dataListStatus:'failed',
                    }
            }

        })
        builder.addCase(getDataList.rejected,(state, action)=>{
            toast.error(action?.payload)
            return{
                ...state,
                dataListStatus:'rejected'
            }
        })

        builder.addCase(getAtm.pending,(state, action)=>{
            return {
                ...state,
                atmStatus:'pending'
             }
        });

        builder.addCase(getAtm.fulfilled,(state, action)=>{
                const{
                    status,
                    data,
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        atmStatus:'success',
                        atm:data
                    }
                }else{
                    toast.error(message)
                    return{
                        ...state,
                        atmStatus:'failed',
                    }
            }

        })
        builder.addCase(getAtm.rejected,(state, action)=>{
            toast.error(action?.payload)
            return{
                ...state,
                atmStatus:'rejected'
            }
        })
    }
})
export default purchaseData_Slice;
