import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { ToastOption, apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2';

export const FetchWallet = createAsyncThunk(
    'wallet/FetchWallet', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/wallets`,setHeaders());
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

export const FetchFaq= createAsyncThunk(
    'wallet/FetchFaq', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/list-faqs`,setHeaders());
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

const wallet_Slice = createSlice({
    name:"wallet",
    initialState: {
       walletStatus:'',
       walletList:[],
      faqStatus:'',
       faq:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{

        builder.addCase(FetchWallet.pending,(state, action)=>{
            return {
                ...state,
                walletStatus:'pending'
             }
        });

        builder.addCase(FetchWallet.fulfilled,(state, action)=>{
                const{
                    status,
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        walletStatus:'success',
                        walletList:data
                    }
                }else{
                    Swal.mixin(ToastOption).fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        walletStatus:'failed',
                    }
            }

        })
        builder.addCase(FetchWallet.rejected,(state, action)=>{
            Swal.mixin(ToastOption).fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                walletStatus:'rejected'
            }
        })

        builder.addCase(FetchFaq.pending,(state, action)=>{
            return {
                ...state,
                faqStatus:'pending'
             }
        });

        builder.addCase(FetchFaq.fulfilled,(state, action)=>{
                const{
                    status,
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        faqStatus:'success',
                       faq:data
                    }
                }else{
                    Swal.mixin(ToastOption).fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        faqStatus:'failed',
                    }
            }

        })
        builder.addCase(FetchFaq.rejected,(state, action)=>{
            Swal.mixin(ToastOption).fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                faqStatus:'rejected'
            }
        })
    }
})
export default wallet_Slice;