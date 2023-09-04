import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import { apiBaseUrl, setHeaders } from './apiBaseUrl';


export const createAccount = createAsyncThunk(
    'auth/createAccount', 
    async ({
        firstname,
        lastname,
        address,
        phone,
        gender,
        dob,
        email,
        provider,
        bvn
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `https://api.paylony.com/api/v1/create_account`,{
                firstname,
                lastname,
                address,
                phone,
                gender,
                dob,
                email,
                provider,
                bvn
            },{
                headers: {
                    "Authorization":`Bearer Bearer sk_test_pqvard3tkffusqzvlsten58f4rwduzedzevowik`
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

export const registerUser = createAsyncThunk(
    'auth/registerUser', 
    async ({
        firstname,
        lastname,
        address,
        phone,
        gender,
        dob,
        email,
        password
    }, {rejectWithValue}) =>{
    try{
        const response = await axios.post(
            `${apiBaseUrl}/register`,{
                firstname,
                lastname,
                address,
                phone,
                gender,
                dob,
                email,
                password
            }
        );
        console.log(response?.data?.success)
        return response?.data
    } catch(err){
        return rejectWithValue(
            err.response?.data?.message
        )
        }
    }
)

export const LogInUser = createAsyncThunk(
    'auth/LogInUser', 
    async ({
        email,
        password
    },{rejectWithValue}) =>{
        try{
            const response = await axios.post(
                `${apiBaseUrl}/login`,{
                    email,
                    password
                }
            );
            return response?.data
        }catch(err){
            return rejectWithValue(
                err.response?.data?.message
            )
        }
    }
)

const auth_Slice = createSlice({
    name:"auth",
    initialState: {
        userdata:localStorage.getItem('DataHubUserToken') ? JSON.parse(localStorage.getItem('DataHubUserToken')):{},
        registerStatus:'',
        accountData:{},
        registerError:'',
       LoginStatus:'',
       LoginError:'',
       userLoaded:false,
    },
    reducers:{
        LogOutUser(state, action){
            localStorage.removeItem('DataHubUserToken');
            // window.location.replace("/login")
            return {
                ...state,
                userdata:{},
                registerStatus:'',
                registerError:'',
                LoginStatus:'',
                createAccountStatus:'',
                LoginError:'',
                userLoaded:false
            }
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(createAccount.pending,(state, action)=>{
            return {
                ...state,
                createAccountStatus:'pending'
            }

        });
        builder.addCase(createAccount.fulfilled,(state, action)=>{
            console.log("hello",action.payload);
            const{
                success,
                status,
                message,
                data
            }=action.payload;
            
            if(success){
                toast(message);
                return{
                    ...state,
                    createAccountStatus:'success',
                    accountData:data
                }
            }else{
                toast.error(message)
                return{
                    ...state,
                    createAccountStatus:'failed'
                }
            }
        })
        builder.addCase(createAccount.rejected,(state, action)=>{
            toast.error(action.payload)
            return{
                ...state,
                createAccountStatus:'rejected'
            }
        })

        builder.addCase(registerUser.pending,(state, action)=>{
            return {
                ...state,
                registerStatus:'pending'
            }

        });
        builder.addCase(registerUser.fulfilled,(state, action)=>{
            console.log("hello",action.payload);
            const{
                success,
                status,
                message,
                data
            }=action.payload;
            console.log(action?.payload?.data)
            if( success){
                console.log(hello);
                toast(message);
                window.location.replace("/login");
                return{
                    ...state,
                    registerStatus:'success'
                }
            }else{
                return{
                    ...state,
                    registerStatus:'failed',
                    registerError:message
                }
            }
        })
        builder.addCase(registerUser.rejected,(state, action)=>{
            return{
                ...state,
                registerStatus:'rejected',
                registerError:action.payload
            }
        })

        builder.addCase(LogInUser.pending,(state, action)=>{
            return {
                ...state,
                LoginStatus:'pending'
             }
        });

        builder.addCase(LogInUser.fulfilled,(state, action)=>{
                const{
                    data,
                    status,
                    message
                }=action.payload;
                if(status){
                    toast("LogIn successfull");
                    localStorage.setItem(
                            'DataHubUserToken',
                            JSON.stringify(data)
                        )
                    window.location.replace("/dashboard");
                    return{
                        ...state,
                        userdata:data,
                        LoginStatus:'success'
                    }
                }else return{
                ...state,
                LoginStatus:'failed',
                LoginError:message
            }

        })
        builder.addCase(LogInUser.rejected,(state, action)=>{
            return{
                ...state,
               LoginStatus:'rejected',
               LoginError:action.payload
            }
        })
    }
})

export const {
    LogOutUser
} = auth_Slice.actions;
export default auth_Slice;