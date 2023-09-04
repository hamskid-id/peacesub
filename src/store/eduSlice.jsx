import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';

const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
export const buyscratchcard = createAsyncThunk(
    'edu/buyscratchcard', 
    async ({
        amount,
        phone,
        quantity,
        examName
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/scratchcard`,{
                "serviceID": examName,
                "variation_code" : examName,
                "amount": amount,
                "phone": phone,
                "quantity" : quantity

            },{
                headers: {
                    "api-key":`ab8085f10d5322b9bcd08a6adb975401`,
                    "secret-key":`SK_70529d32acb17b3d3641a27325a9dd16b15a0a41d45`,
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

export const scratchcardvtpass = createAsyncThunk(
    'edu/scratchcardvtpass', 
    async ({
        amount,
        phone,
        quantity,
        reqId,
        serviceID,
        variation_code
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `https://sandbox.vtpass.com/api/pay`,{
                "request_id" : reqId,
                "serviceID": serviceID,
                "variation_code" : variation_code,
                "amount":amount,
                "phone":phone,
                "quantity" : quantity

            },{
                headers: {
                    "api-key":`ab8085f10d5322b9bcd08a6adb975401`,
                    "secret-key":`SK_70529d32acb17b3d3641a27325a9dd16b15a0a41d45`,
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

export const getCard = createAsyncThunk(
    'edu/getCard', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/scratchcards`,setHeaders());
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
       vtpassStatus:'',
       vtRes:{},
       getCardStatus:'',
       buyCardRes:{},
       card:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(buyscratchcard.pending,(state, action)=>{
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
            
            if(message?.code =="000"){
                toast(message?.response_description);
                return{
                    ...state,
                    buyCardStatus:'success',
                    buyCardRes:message
                }
            }else{
                toast.error(message?.response_description)
                return{
                    ...state,
                    buyCardStatus:'failed'
                }
            }
        })
        builder.addCase(buyscratchcard.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            return{
                ...state,
                buyCardStatus:'rejected'
            }
        })

        builder.addCase(scratchcardvtpass.pending,(state, action)=>{
            return {
                ...state,
                vtpassStatus:'pending'
             }
        });

        builder.addCase(scratchcardvtpass.fulfilled,(state, action)=>{
            console.log(action.payload)
                const{
                    code,
                    response_description
                }=action.payload;
                if(code === "000"){
                    console.log(action.payload)
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
        builder.addCase(scratchcardvtpass.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            return{
                ...state,
               vtpassStatus:'rejected'
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
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getCardStatus:'success',
                        card:message
                    }
                }else{
                    toast.error(message)
                    return{
                        ...state,
                        getCardStatus:'failed',
                    }
            }

        })
        builder.addCase(getCard.rejected,(state, action)=>{
            toast.error(action.payload)
            console.log(action.payload)
            return{
                ...state,
                getCardStatus:'rejected'
            }
        })
    }
})
export default edu_Slice;