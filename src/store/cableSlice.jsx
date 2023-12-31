import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2';

export const subscribeCable = createAsyncThunk(
    'cable/subscribeCable', 
    async ({
        Network,
        phone
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/purchase-tv`,{
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

export const validateCable = createAsyncThunk(
    'cable/validateCable', 
    async ({
        NetworkName,
        phone,
        Network
    }, {rejectWithValue, dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/validate-tv`,{
                "networkID":NetworkName,
                "phone":phone
            },setHeaders()
        );
        const{
            status
        }=response?.data;
        if(status){
            dispatch(subscribeCable({
                Network,
                phone
            }))
        }
        return response?.data;
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)


export const getcableType = createAsyncThunk(
    'cable/getcableType', 
    async ({
        network
    }) =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/list-tv/${network}`,setHeaders());
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
       getcableTypeStatus:'',
       subCableRes:{},
       validateCableStatus:'',
       cableTp:[],
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
            
            if(status){
                Swal.fire({
                    text:message,
                    allowOutsideClick: false,
                    icon:'success',
                    showCloseButton: true,
                })
                return{
                    ...state,
                    subscribeCableStatus:'success',
                    subCableRes:message
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
                    subscribeCableStatus:'failed'
                }
            }
        })
        builder.addCase(subscribeCable.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                subscribeCableStatus:'rejected'
            }
        })

        builder.addCase(validateCable.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                validateCableStatus:'pending'
            }

        });
        
        builder.addCase(validateCable.fulfilled,(state, action)=>{
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
                    validateCableStatus:'success',
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
                    validateCableStatus:'failed'
                }
            }
        })
        builder.addCase(validateCable.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                validateCableStatus:'rejected'
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
                    data,
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getcableTypeStatus:'success',
                        cableTp:data
                    }
                }else{
                    toast.error(message)
                    return{
                        ...state,
                        getcableTypeStatus:'failed',
                    }
            }

        })

        builder.addCase(getcableType.rejected,(state, action)=>{
            toast.error(action?.payload)
            return{
                ...state,
                getcableTypeStatus:'rejected'
            }
        })

    }
})
export default cable_Slice;