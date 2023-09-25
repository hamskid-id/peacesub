import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { ToastOption, apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2';
import { getDataAirtimeType } from './dataSlice';
export const purchaseAirtime = createAsyncThunk(
    'airtime/purchaseAirtime', 
    async ({
        Network,
        amount,
        phone
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/purchase-airtime`,{
                "amount":amount,
                "phone":phone,
                "networkID":Network
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

export const getairtimeNetwork = createAsyncThunk(
    'airtime/getairtimeNetwork', 
    async (_,{dispatch}) =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/list-airtime`,setHeaders());
            const{
                status,
                data
            }= response?.data
            if(status){
                dispatch(getDataAirtimeType({
                    network:data[0]?.network.toUpperCase()
                }))
            }
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

const purchaseAirtime_Slice = createSlice({
    name:"airtime",
    initialState: {
        purchaseAirtimeStatus:'',
       getAirtimeNetworkStatus:'',
       purchaseAirtimeRes:{},
       airtimeNetwork:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(purchaseAirtime.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                purchaseAirtimeStatus:'pending'
            }

        });

        builder.addCase(purchaseAirtime.fulfilled,(state, action)=>{
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
                    purchaseAirtimeStatus:'success',
                    purchaseAirtimeRes:message
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
                    purchaseAirtimeStatus:'failed'
                }
            }
        })
        builder.addCase(purchaseAirtime.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                purchaseAirtimeStatus:'rejected'
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
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        getAirtimeNetworkStatus:'success',
                        airtimeNetwork:data
                    }
                }else{
                    Swal.mixin(ToastOption).fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        getAirtimeNetworkStatus:'failed',
                    }
            }

        })
        builder.addCase(getairtimeNetwork.rejected,(state, action)=>{
            Swal.mixin(ToastOption).fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                getAirtimeNetworkStatus:'rejected'
            }
        })
    }
})
export default purchaseAirtime_Slice;