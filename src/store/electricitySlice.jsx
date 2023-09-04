import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';

const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
export const electricityPay = createAsyncThunk(
    'electricity/electricityPay', 
    async ({
        disco,
        // meter,
        type,
        amount,
        phone,
    }, {rejectWithValue,dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/electricitypay`,{

                "amount":amount,
                "phone":phone,
                "serviceID":disco,
                "billersCode": "1111111111111",
                "variation_code" :type,

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

export const electricityvtpass = createAsyncThunk(
    'electricity/electricityvtpass', 
    async ({
        disco,
        // meter,
        type,
        reqId,
        amount,
        phone
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `https://sandbox.vtpass.com/api/pay`,{
                "request_id" : reqId,
                "amount":amount,
                "phone":phone,
                "serviceID":disco,
                "billersCode": "1111111111111",
                "variation_code" :type,

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

export const getElectricityBill = createAsyncThunk(
    'electricity/getElectricityBill', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/electricity`,setHeaders());
            return response?.data
        } catch(err){
            return (
                err.response?.data?.message
            )
        }
    }
)

const electricity_Slice = createSlice({
    name:"electricity",
    initialState: {
        elePayStatus:'',
        vtRes:{},
       vtpassStatus:'',
       getElectricityBillStatus:'',
       elePayRes:{},
       EleBill:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(electricityPay.pending,(state, action)=>{
            return {
                ...state,
                elePayStatus:'pending'
            }

        });
        builder.addCase(electricityPay.fulfilled,(state, action)=>{
            const{
                status,
                message
            }=action.payload;
            
            if(message?.code =="000"){
                toast(message?.response_description);
                return{
                    ...state,
                    elePayStatus:'success',
                    elePayRes:message
                }
            }else{
                toast.error(message?.response_description)
                return{
                    ...state,
                    elePayStatus:'failed'
                }
            }
        })
        builder.addCase(electricityPay.rejected,(state, action)=>{
            toast.error(action?.payload?.response_description)
            return{
                ...state,
                elePayStatus:'rejected'
            }
        })

        builder.addCase(electricityvtpass.pending,(state, action)=>{
            return {
                ...state,
                vtpassStatus:'pending'
             }
        });

        builder.addCase(electricityvtpass.fulfilled,(state, action)=>{
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
        builder.addCase(electricityvtpass.rejected,(state, action)=>{
            toast.error(action.payload.response_description)
            return{
                ...state,
               vtpassStatus:'rejected'
            }
        })

        builder.addCase(getElectricityBill.pending,(state, action)=>{
            return {
                ...state,
                getElectricityBillStatus:'pending'
             }
        });

        builder.addCase(getElectricityBill.fulfilled,(state, action)=>{
                const{
                    data,
                    status,
                    success,
                    message
                }=action.payload;
                if(success){
                    toast(message);
                    return{
                        ...state,
                        getElectricityBillStatus:'success'
                    }
                }else{
                    toast.error(message)
                    return{
                        ...state,
                        getElectricityBillStatus:'failed',
                    }
            }

        })
        builder.addCase(getElectricityBill.rejected,(state, action)=>{
            // toast.error(message)
            console.log(action.payload)
            return{
                ...state,
                getElectricityBillStatus:'rejected'
            }
        })
    }
})
export default electricity_Slice;