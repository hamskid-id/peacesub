import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { Toast, apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2'

export const buyscratchcard = createAsyncThunk(
    'edu/buyscratchcard', 
    async ({
        Network
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/purchase-education`,{
                "networkID":Network
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

export const getCard = createAsyncThunk(
    'edu/getCard', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/list-education`,setHeaders());
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
            
            if(status){
                Swal.fire({
                    text:message,
                    allowOutsideClick: false,
                    icon:'success',
                    showCloseButton: true,
                })
                return{
                    ...state,
                    buyCardStatus:'success',
                    buyCardRes:message
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
                    buyCardStatus:'failed'
                }
            }
        })
        builder.addCase(buyscratchcard.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                buyCardStatus:'rejected'
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
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getCardStatus:'success',
                        card:data
                    }
                }else{
                    Toast.fire({
                        icon: 'error',
                        title:message
                    })
                    return{
                        ...state,
                        getCardStatus:'failed',
                    }
            }

        })
        builder.addCase(getCard.rejected,(state, action)=>{
            Toast.fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                getCardStatus:'rejected'
            }
        })
    }
})
export default edu_Slice;