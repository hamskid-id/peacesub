import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { Toast, apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2';

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
            `${apiBaseUrl}/purchasedata`,{
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
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/types-data/MTN`,setHeaders());
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
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/list-data/MTN/SME`,setHeaders());
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
                Swal.fire({
                    text:message,
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
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
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
                Swal.fire({
                    text:message,
                    icon:'error',
                    allowOutsideClick: false,
                    showCloseButton: true,
                })
                return{
                    ...state,
                   bulkStatus:'failed'
                }
            }
        })
        builder.addCase(bulkSms.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
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
                    Toast.fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        getDataAirtimeTypeStatus:'failed',
                    }
            }

        })
        builder.addCase(getDataAirtimeType.rejected,(state, action)=>{
            Toast.fire({
                icon: 'error',
                title: message
            })
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
                    Toast.fire({
                        icon: 'error',
                        title:message
                    })
                    return{
                        ...state,
                        dataListStatus:'failed',
                    }
            }

        })
        builder.addCase(getDataList.rejected,(state, action)=>{
            Toast.fire({
                icon: 'error',
                title:action?.payload
            })
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
                    Toast.fire({
                        icon: 'error',
                        title:message
                    })
                    return{
                        ...state,
                        atmStatus:'failed',
                    }
            }

        })
        builder.addCase(getAtm.rejected,(state, action)=>{
            Toast.fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                atmStatus:'rejected'
            }
        })
    }
})
export default purchaseData_Slice;