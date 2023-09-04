import { Text } from "../elements/text"
import { AuthLayout } from "./authLayout"
import { useForm } from "react-hook-form"
import { InputField } from "./cutormFormField";
import { Link } from "react-router-dom";
import { Btn } from "../elements/btn";

export const Reset =()=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const SubmitHandler =({
        email
    })=>{
            console.log(
                email
            )
    }

    return(
        <AuthLayout>
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
            />
            </form>
        </AuthLayout>
    )
}