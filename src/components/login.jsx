import { Text } from "../elements/text"
import { AuthLayout } from "./authLayout"
import { useForm } from "react-hook-form"
import { InputField } from "./cutormFormField";
import { Link } from "react-router-dom";
import { Btn } from "../elements/btn";

export const SignIn =()=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        userName,
        password
    })=>{
            console.log(
                userName,
                password
            )
    }

    return(
        <AuthLayout>
            <Text
                style="c-brown font-mediumn text-3xl mb-2"
                value="Login"
            />
            <Text
                style="c-brown font-light text-lg mb-6"
                value="Sign in to your account to continue."
            />
            <form  onSubmit={handleSubmit(SubmitHandler)}>
                {
                    [
                        {
                            title:"userName",
                            labelName:"userName Address",
                            type:"text",
                            error:errors.userName,
                            placeHold:"Enter userName",

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
                                    labelStyle="text-sm font-medium text-start mb-3 c-brown"
                                    register={register}
                                    errors={error}
                                    style="w-full text-start rounded-md p-3 text-xs border"
                                />
                            </div>
                        )
                })
            }
            <Link to="/reset">Forgot your password?</Link>
            <Btn
                value="Log In"
                style="w-full p-2 text-center bg-light-blue text-white mt-3 mb-3"
            />
            <div className="flex items-center m-auto w-fit">
                <span className="me-1 text-sm c-brown">Dont have an account?</span>
                <Link to="/register" className="text-sm">Sigup here?</Link>
            </div>
            </form>
        </AuthLayout>
    )
}