import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';

const user = JSON.parse(localStorage.getItem('airtimeHubUserToken'));
export const purchaseAirtime = createAsyncThunk(
    'airtime/purchaseAirtime', 
    async ({
        service,
        amount,
        phone,
        // code,
    }, {rejectWithValue,dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}purchaseairtime`,{
                "amount":amount,
                "phone":phone,
                "serviceID":service

            },{
                headers: {
                    "Authorization":`Bearer Bearer ${user?.access_token}`
                }
            }
        );
    } catch(err){
        return rejectWithValue(
            err.response?.airtime?.message
        )
        }
    }
)

export const vtpassAirtime = createAsyncThunk(
    'airtime/vtpassAirtime', 
    async ({
        service,
        amount,
        requestId,
        phone,
        // code,
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `https://sandbox.vtpass.com/api/pay`,{
                "request_id" : requestId,
                "amount":amount,
                "phone":phone,
                "serviceID":service

            },{
                headers: {
                    "Authorization":`Bearer Bearer ${user?.access_token}`
                }
            }
        );
        return response?.airtime
    } catch(err){
        return rejectWithValue(
            err.response?.airtime?.message
        )
        }
    }
)

export const getairtimeNetwork = createAsyncThunk(
    'airtime/getairtimeNetwork', 
    async ({rejectWithValue}) =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/allnetworks`,setHeaders());
            return response?.airtime
        } catch(err){
            return rejectWithValue(
                err.response?.airtime?.message
            )
        }
    }
)

const purchaseAirtime_Slice = createSlice({
    name:"airtime",
    initialState: {
        purchaseAirtimeStatus:'',
        vtRes:{},
       vtpassStatus:'',
       getAirtimeNetworkStatus:'',
       purchaseAirtimeRes:{},
       airtimeNetwork:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(purchaseAirtime.pending,(state, action)=>{
            return {
                ...state,
                purchaseAirtimeStatus:'pending'
            }

        });
        builder.addCase(purchaseAirtime.fulfilled,(state, action)=>{
            const{
                status,
                message
            }=action.payload;
            
            if(message?.code =="000"){
                toast(message?.response_description);
                return{
                    ...state,
                    purchaseAirtimeStatus:'success',
                    purchaseAirtimeRes:message
                }
            }else{
                toast.error(message?.response_description)
                return{
                    ...state,
                    purchaseAirtimeStatus:'failed'
                }
            }
        })
        builder.addCase(purchaseAirtime.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            return{
                ...state,
                purchaseAirtimeStatus:'rejected'
            }
        })

        builder.addCase(vtpassAirtime.pending,(state, action)=>{
            return {
                ...state,
                vtpassStatus:'pending'
             }
        });

        builder.addCase(vtpassAirtime.fulfilled,(state, action)=>{
                const{
                    code,
                    response_description
                }=action.payload;
                if(code === "000"){
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
        builder.addCase(vtpassAirtime.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            return{
                ...state,
               vtpassStatus:'rejected'
            }
        })

        builder.addCase(getairtimeNetwork.pending,(state, action)=>{
            return {
                ...state,
                getAirtimeNetworkStatus:'pending'
             }
        });

        builder.addCase(getairtimeNetwork.fulfilled,(state, action)=>{
                const{
                    status,
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getAirtimeNetworkStatus:'success',
                        airtimeNetwork:message
                    }
                }else{
                    return{
                        ...state,
                        getAirtimeNetworkStatus:'failed',
                    }
            }

        })
        builder.addCase(getairtimeNetwork.rejected,(state, action)=>{
            toast.error(action.payload)
            console.log(action.payload)
            return{
                ...state,
                getAirtimeNetworkStatus:'rejected'
            }
        })
    }
})
export default purchaseAirtime_Slice;