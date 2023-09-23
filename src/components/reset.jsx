import { Text } from "../elements/text"
import { AuthLayout } from "./authLayout"
import { useForm } from "react-hook-form"
import { InputField } from "./cutormFormField";
import { Btn } from "../elements/btn";
import {useDispatch, useSelector} from "react-redux";
import { ForgetPassword } from "../store/authSlice";

export const Reset =()=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const dispatch = useDispatch();
    const {forgetStatus} = useSelector(state=>state.auth);
    const SubmitHandler =({
        email
    })=>{
            dispatch(ForgetPassword({
                email
            }))
    }

    return(
        <AuthLayout  metaTitle="Peacesub -Password Reset">
            <Text
                style="font-extrabold text-3xl mb-2"
                value="Reset Password"
            />
            <Text
                style="font-medium text-lg mb-6"
                value="kindly enter your email to proceed"
            />
            <form  onSubmit={handleSubmit(SubmitHandler)}>
                {
                    [
                        {
                            title:"email",
                            labelName:"Email Address",
                            type:"text",
                            error:errors.email,
                            placeHold:"Enter email",

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
            <Btn
                value="send"
                style="w-full p-3 text-center bg-tick-blue text-white mt-3 mb-3"
                loadingStatus={forgetStatus ==="pending"?true:false}
            />
            </form>
        </AuthLayout>
    )
}