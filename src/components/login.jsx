import { Text } from "../elements/text"
import { AuthLayout } from "./authLayout"
import { useForm } from "react-hook-form"
import { InputField } from "./cutormFormField";
import { Link} from "react-router-dom";
import { Btn } from "../elements/btn";
import { useDispatch, useSelector } from "react-redux";
import { LogInUser } from "../store/authSlice";

export const SignIn =()=>{
    const dispatch = useDispatch();
    const {LoginError,LoginStatus} = useSelector(state=>state.auth);
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        email,
        password
    })=>{
        dispatch(LogInUser({
            email,
            password
        }))   
    }

    return(
        <AuthLayout  metaTitle="Peacesub -Sign in to your account">
            <Text
                style="text-center text-lg "
                value="Login"
            />
            <Text
                style="font-semibold text-center text-lg mb-6"
                value="Sign in to your account to continue."
            />
            <form onSubmit={handleSubmit(SubmitHandler)}>
                {
                    [
                        {
                            title:"email",
                            labelName:"Email",
                            type:"email",
                            error:errors.email,
                            placeHold:"Enter email",

                        },{
                            title:"password",
                            labelName:"Password",
                            type:"password",
                            error:errors.password,
                            placeHold:"Enter password"

                        }
                    ].map((option,index)=>{
                        const{
                            title,
                            labelName,
                            placeHold,
                            type,
                            error
                        }=option;
                        return(
                            <div 
                                className="w-full mb-2"
                                key={index}
                            >
                                <InputField
                                    name={title}
                                    placeHolder={placeHold}
                                    type={type}
                                    labelTitle={labelName}
                                    labelStyle="text-sm font-medium text-start mb-3"
                                    register={register}
                                    errors={error}
                                    style="w-full text-start rounded-sm p-4 text-xs border"
                                />
                            </div>
                        )
                })
            }
            <Link to="/reset">Forgot your password?</Link>
            {LoginError && <Text style="text-danger text-xs" value={LoginError}/>}
            <Btn
                value="Log In"
                style="w-full p-3 text-center bg-tick-blue text-white mt-3 mb-3"
                loadingStatus={LoginStatus ==="pending"?true:false}
            />
            <div className="flex items-center m-auto w-fit">
                <span className="me-1 text-sm font-medium">Dont have an account?</span>
                <Link to="/register" className="text-sm">Sigup here?</Link>
            </div>
            </form>
        </AuthLayout>
    )
}