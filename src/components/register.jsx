import { Text } from "../elements/text"
import { AuthLayout } from "./authLayout"
import { useForm } from "react-hook-form"
import { InputField } from "./cutormFormField";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Btn } from "../elements/btn";

export const Register =()=>{

     const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        cpassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
    const formOptions = { 
        resolver: yupResolver(validationSchema) 
    };
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm(formOptions);

    const SubmitHandler =({
        userName,
        email,
        address,
        phone,
        referrraluserName,
        password,
        cpassword,
        fullName
    })=>{
            console.log(
                userName,
                email,
                address,
                phone,
                referrraluserName,
                password,
                cpassword,
                fullName
            )
    }

    return(
        <AuthLayout adjHeight={true}>
            <Text
                style="c-brown font-semibold text-3xl mb-2"
                value="Sign Up"
            />
            <Text
                style="font-medium text-lg mb-6"
                value="kindly create an account to proceed."
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
                            title:"fullName",
                            labelName:"fullName",
                            type:"text",
                            error:errors.fullName,
                            placeHold:"Enter fullName"

                        }, {
                            title:"email",
                            labelName:"Email Address",
                            type:"email",
                            error:errors.email,
                            placeHold:"enter email",

                        },{
                            title:"phone",
                            labelName:"Phone Number",
                            type:"phone",
                            error:errors.phone,
                            placeHold:"enter email",

                        },{
                            title:"address",
                            labelName:"Address",
                            type:"text",
                            error:errors.address,
                            placeHold:"enter address",

                        },{
                            title:"referrraluserName",
                            labelName:"Referral userName ",
                            type:"text",
                            error:errors.referrraluserName,
                            placeHold:"Enter userName",

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
                                    labelStyle="text-sm font-medium text-start"
                                    register={register}
                                    errors={error}
                                    style="w-full text-start rounded-sm p-4 text-xs border"
                                />
                            </div>
                        )
                })
            }
            <div 
                className="w-full mb-2"
            >
                <InputField
                    name="password"
                    placeHolder="Enter password"
                    type="password"
                    labelTitle="Password"
                    labelStyle="text-sm font-medium text-start"
                    register={register}
                    errors={errors.password}
                    style="w-full text-start rounded-sm p-4 text-xs border"
                />
            </div>
            <div 
                className="w-full mb-2"
            >
                <InputField
                    name="cpassword"
                    placeHolder="confirm password"
                    type="password"
                    labelTitle="Confirm password"
                    labelStyle="text-sm font-medium text-start"
                    register={register}
                    errors={errors.cpassword}
                    style="w-full text-start rounded-sm p-4 text-xs border"
                />
            </div>
            <div 
                className="w-full mb-2"
            >
                <InputField
                    name="check"
                    type="checkbox"
                    labelTitle="I agree with the terms and condition"
                    labelStyle="text-sm font-medium text-start"
                    register={register}
                    errors={errors.check}
                    style="me-2 text-start rounded-sm p-4 text-xs border"
                />
            </div>
            <Btn
                value="sign up"
                style="w-full p-3 text-center bg-light-blue text-white mt-3 mb-3"
            />
            <div className="flex items-center m-auto w-fit">
                <span className="me-1 text-sm font-medium">Already have an account?</span>
                <Link to="/login" className="text-sm">Sigin here?</Link>
            </div>
            </form>
        </AuthLayout>
    )
}