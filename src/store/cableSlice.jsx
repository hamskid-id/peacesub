import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { Toast, apiBaseUrl, setHeaders } from './apiBaseUrl';
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

export const getcableType = createAsyncThunk(
    'cable/getcableType', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/list-tv/DSTV`,setHeaders());
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
                    console.log(message)
                    Toast.fire({
                        icon: 'error',
                        title:message
                    })
                    return{
                        ...state,
                        getcableTypeStatus:'failed',
                    }
            }

        })

        builder.addCase(getcableType.rejected,(state, action)=>{
            Toast.fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                getcableTypeStatus:'rejected'
            }
        })

    }
})
export default cable_Slice;