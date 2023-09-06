import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { Toast, apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2'

const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
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
       getDataAirtimeTypeStatus:'',
       purchaseDataRes:{},
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
                toast.error(message)
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
    }
})
export default purchaseData_Slice;