import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { Toast, apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2';

export const changePassword = createAsyncThunk(
    'profile/changePassword', 
    async ({
       current,newPass
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/change-password`,{
                "current":current,
                "new":newPass
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

export const changePin = createAsyncThunk(
    'profile/changePin', 
    async ({
       current,newPin
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/change-pin`,{
                "current":current,
                "new":newPin
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

export const profileInfo = createAsyncThunk(
    'profile/profileInfo', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/profile`,setHeaders());
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

const profileInfo_Slice = createSlice({
    name:"profile",
    initialState: {
        changePinStatus:'',
       profileInfoStatus:'',
       profileRes:{},
       changePassStatus:'',
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(changePassword.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                changePassStatus:'pending'
            }

        });

        builder.addCase(changePassword.fulfilled,(state, action)=>{
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
                    changePassStatus:'success'
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
                    changePassStatus:'failed'
                }
            }
        })

        builder.addCase(changePassword.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                changePassStatus:'rejected'
            }
        })

        builder.addCase(changePin.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                changePinStatus:'pending'
            }

        });

        builder.addCase(changePin.fulfilled,(state, action)=>{
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
                    changePinStatus:'success'
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
                    changePinStatus:'failed'
                }
            }
        })

        builder.addCase(changePin.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                changePinStatus:'rejected'
            }
        })

        builder.addCase(profileInfo.pending,(state, action)=>{
            return {
                ...state,
                profileInfoStatus:'pending'
             }
        });

        builder.addCase(profileInfo.fulfilled,(state, action)=>{
                const{
                    status,
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        profileInfoStatus:'success',
                        profileRes:data
                    }
                }else{
                    Toast.fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        profileInfoStatus:'failed',
                    }
            }

        })
        builder.addCase(profileInfo.rejected,(state, action)=>{
            Toast.fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                profileInfoStatus:'rejected'
            }
        })
    }
})
export default profileInfo_Slice;