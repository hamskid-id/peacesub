import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { ToastOption, apiBaseUrl, setHeaders } from './apiBaseUrl';
import Swal from 'sweetalert2';
export const changePackage = createAsyncThunk(
    'upgrade/changePackage', 
    async ({
       newPackage
    }, {rejectWithValue,dispatch}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/change-package`,{
                "new":newPackage
            },setHeaders()
        );
        if(response?.data?.status){
            dispatch(FetchCurrentPackage())
        }
        return response?.data;
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)

export const FetchCurrentPackage = createAsyncThunk(
    'upgrade/FetchCurrentPackage', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/current-package`,setHeaders());
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

export const FetchAllAcount= createAsyncThunk(
    'upgrade/FetchAllAcount', 
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/packages`,setHeaders());
            return response?.data
        } catch(err){
            return(
                err.response?.data?.message
            )
        }
    }
)

const upgrade_Slice = createSlice({
    name:"upgrade",
    initialState: {
        changePackageStatus:'',
       currentPackageStatus:'',
       cpackageList:{},
      allAccStatus:'',
       allAccList:[],
    },
    reducers:{
    },

    extraReducers:(builder)=>{
        builder.addCase(changePackage.pending,(state, action)=>{
            Swal.fire({
                text:'Please wait...while your request is being process',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                changePackageStatus:'pending'
            }

        });

        builder.addCase(changePackage.fulfilled,(state, action)=>{
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
                    changePackageStatus:'success'
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
                    changePackageStatus:'failed'
                }
            }
        })
        builder.addCase(changePackage.rejected,(state, action)=>{
            Swal.fire({
                text:action?.payload,
                icon:'error',
                allowOutsideClick: false,
                showCloseButton: true,
            })
            return{
                ...state,
                changePackageStatus:'rejected'
            }
        })

        builder.addCase(FetchCurrentPackage.pending,(state, action)=>{
            return {
                ...state,
                currentPackageStatus:'pending'
             }
        });

        builder.addCase(FetchCurrentPackage.fulfilled,(state, action)=>{
                const{
                    status,
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        currentPackageStatus:'success',
                        cpackageList:data
                    }
                }else{
                    Swal.mixin(ToastOption).fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        currentPackageStatus:'failed',
                    }
            }

        })
        builder.addCase(FetchCurrentPackage.rejected,(state, action)=>{
            Swal.mixin(ToastOption).fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                currentPackageStatus:'rejected'
            }
        })

        builder.addCase(FetchAllAcount.pending,(state, action)=>{
            return {
                ...state,
                allAccStatus:'pending'
             }
        });

        builder.addCase(FetchAllAcount.fulfilled,(state, action)=>{
                const{
                    status,
                    message,
                    data
                }=action.payload;
                if(status){
                    return{
                        ...state,
                        allAccStatus:'success',
                       allAccList:data
                    }
                }else{
                    Swal.mixin(ToastOption).fire({
                        icon: 'error',
                        title: message
                    })
                    return{
                        ...state,
                        allAccStatus:'failed',
                    }
            }

        })
        builder.addCase(FetchAllAcount.rejected,(state, action)=>{
            Swal.mixin(ToastOption).fire({
                icon: 'error',
                title:action?.payload
            })
            return{
                ...state,
                allAccStatus:'rejected'
            }
        })
    }
})
export default upgrade_Slice;