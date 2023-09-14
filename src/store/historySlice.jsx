import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { Toast, apiBaseUrl, setHeaders } from './apiBaseUrl';

export const getAllTransactionsHistory = createAsyncThunk(
    'airtime/getAllTransactionsHistory', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/transaction-history`,setHeaders());
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

export const getAllDataHistory = createAsyncThunk(
    'airtime/getAllDataHistory', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/data-history`,setHeaders());
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

export const getTotalSpent = createAsyncThunk(
    'airtime/getTotalSpent', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/total-spent`,setHeaders());
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

export const getTotalFund = createAsyncThunk(
    'airtime/getTotalFund', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/total-fund`,setHeaders());
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

const history_Slice = createSlice({
    name:"history",
    initialState: {
       getAllTranStatus:'',
       allTrans:[],
       getDataTranStatus:'',
       allDataTrans:[],
       getTotalSpentStatus:'',
       totalSpent:'',
       getTotalFundStatus:'',
       totalFund:'',
    },
    reducers:{
    },

    extraReducers:(builder)=>{

        builder.addCase(getAllTransactionsHistory.pending,(state, action)=>{
            return {
                ...state,
                getAllTranStatus:'pending'
             }
        });

        builder.addCase(getAllTransactionsHistory.fulfilled,(state, action)=>{
                const{
                    status,
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getAllTranStatus:'success',
                        allTrans:data
                    }
                }else{
                    Toast.fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        getAllTranStatus:'failed',
                    }
            }

        })
        builder.addCase(getAllTransactionsHistory.rejected,(state, action)=>{
            Toast.fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                getAllTranStatus:'rejected'
            }
        })

        builder.addCase(getAllDataHistory.pending,(state, action)=>{
            return {
                ...state,
                getDataTranStatus:'pending'
             }
        });

        builder.addCase(getAllDataHistory.fulfilled,(state, action)=>{
                const{
                    status,
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getDataTranStatus:'success',
                        allDataTrans:data
                    }
                }else{
                    Toast.fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        getDataTranStatus:'failed',
                    }
            }

        })
        builder.addCase(getAllDataHistory.rejected,(state, action)=>{
            Toast.fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                getDataTranStatus:'rejected'
            }
        })

        builder.addCase(getTotalSpent.pending,(state, action)=>{
            return {
                ...state,
                getTotalSpentStatus:'pending'
             }
        });

        builder.addCase(getTotalSpent.fulfilled,(state, action)=>{
                const{
                    status,
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getTotalSpentStatus:'success',
                        totalSpent:data
                    }
                }else{
                    Toast.fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        getTotalSpentStatus:'failed',
                    }
            }

        })
        builder.addCase(getTotalSpent.rejected,(state, action)=>{
            Toast.fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                getTotalSpentStatus:'rejected'
            }
        })

        builder.addCase(getTotalFund.pending,(state, action)=>{
            return {
                ...state,
                getTotalFundStatus:'pending'
             }
        });

        builder.addCase(getTotalFund.fulfilled,(state, action)=>{
                const{
                    status,
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getTotalFund:'success',
                        totalFund:data
                    }
                }else{
                    Toast.fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        getTotalFundStatus:'failed',
                    }
            }

        })
        builder.addCase(getTotalFund.rejected,(state, action)=>{
            Toast.fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                getTotalFundStatus:'rejected'
            }
        })
    }
})
export default history_Slice;