import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';

export const electricityPay = createAsyncThunk(
    'electricity/electricityPay', 
    async ({
        type,
        Network,
        phone,
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/purchase-electricity`,{
                "networkID":Network,
                "phone":phone,
                "type":type
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

export const getElectricityBill = createAsyncThunk(
    'electricity/getElectricityBill', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/list-electricity`,setHeaders());
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
       getElectricityBillStatus:'',
       elePayRes:{},
       EleBill:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(electricityPay.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
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
            
            if(status){
                Swal.fire({
                    text:message,
                    allowOutsideClick: false,
                    icon:'success',
                    showCloseButton: true,
                })
                return{
                    ...state,
                    elePayStatus:'success',
                    elePayRes:message
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
                    elePayStatus:'failed'
                }
            }
        })
        builder.addCase(electricityPay.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                elePayStatus:'rejected'
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
                    status,
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        EleBill:data,
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
            toast.error(action?.payload)
            return{
                ...state,
                getElectricityBillStatus:'rejected'
            }
        })
    }
})
export default electricity_Slice;