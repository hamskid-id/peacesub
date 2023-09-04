import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';

const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
export const purchaseData = createAsyncThunk(
    'data/purchaseData', 
    async ({
        service,
        amount,
        phone,
        // code,
    }, {rejectWithValue,dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/purchasedata`,{
                "amount":amount,
                "phone":phone,
                "serviceID":"airtel-data",
                "billersCode": "08011111111",
                "variation_code" :"airt-50",

            },{
                headers: {
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

export const vtpassData = createAsyncThunk(
    'data/vtpassData', 
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
                "serviceID":"airtel-data",
                "billersCode": "1212121212",
                "variation_code" :"airt-50",

            },{
                headers: {
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

export const getDataAirtimeType = createAsyncThunk(
    'data/getDataAirtimeType', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/datatypes`,setHeaders());
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
        vtRes:{},
       vtpassStatus:'',
       getDataAirtimeTypeStatus:'',
       purchaseDataRes:{},
       dataAirtimeTp:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(purchaseData.pending,(state, action)=>{
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
            
            if(message?.code =="000"){
                toast(message?.response_description);
                return{
                    ...state,
                    purchaseDataStatus:'success',
                    purchaseDataRes:message
                }
            }else{
                toast.error(message?.response_description)
                return{
                    ...state,
                    purchaseDataStatus:'failed'
                }
            }
        })
        builder.addCase(purchaseData.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            return{
                ...state,
                purchaseDataStatus:'rejected'
            }
        })

        builder.addCase(vtpassData.pending,(state, action)=>{
            return {
                ...state,
                vtpassStatus:'pending'
             }
        });

        builder.addCase(vtpassData.fulfilled,(state, action)=>{
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
        builder.addCase(vtpassData.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            return{
                ...state,
               vtpassStatus:'rejected'
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
                    message
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getDataAirtimeTypeStatus:'success',
                        dataAirtimeTp:message
                    }
                }else{
                    return{
                        ...state,
                        getDataAirtimeTypeStatus:'failed',
                    }
            }

        })
        builder.addCase(getDataAirtimeType.rejected,(state, action)=>{
            toast.error(action.payload)
            console.log(action.payload)
            return{
                ...state,
                getDataAirtimeTypeStatus:'rejected'
            }
        })
    }
})
export default purchaseData_Slice;