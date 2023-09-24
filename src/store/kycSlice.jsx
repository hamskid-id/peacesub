import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { ToastOption, apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2';
export const performKyc = createAsyncThunk(
    'kyc/performKyc', 
    async ({
        bvn,
        account_number,
        bank_code
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/kyc`,{
                bvn,
                account_number,
                bank_code
            },setHeaders()
        );
        return response?.data;
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)

export const FetchBankList = createAsyncThunk(
    'kyc/FetchBankList', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/bank-list`,setHeaders());
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

const kyc_Slice = createSlice({
    name:"kyc",
    initialState: {
        kycStatus:'',
       fetchBankListStatus:'',
       bankList:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(performKyc.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                kycStatus:'pending'
            }

        });

        builder.addCase(performKyc.fulfilled,(state, action)=>{
            console.log(action.payload)
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
                    kycStatus:'success'
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
                    kycStatus:'failed'
                }
            }
        })
        builder.addCase(performKyc.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                kycStatus:'rejected'
            }
        })

        builder.addCase(FetchBankList.pending,(state, action)=>{
            return {
                ...state,
                fetchBankListStatus:'pending'
             }
        });

        builder.addCase(FetchBankList.fulfilled,(state, action)=>{
                const{
                    status,
                    message,
                    success,
                    data
                }=action.payload;
                if(status || success ===1){
                    return{
                        ...state,
                        fetchBankListStatus:'success',
                        bankList:data
                    }
                }else{
                    Swal.mixin(ToastOption).fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        fetchBankListStatus:'failed',
                    }
            }

        })
        builder.addCase(FetchBankList.rejected,(state, action)=>{
            Swal.mixin(ToastOption).fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                fetchBankListStatus:'rejected'
            }
        })
    }
})
export default kyc_Slice;