import { Text } from "../elements/text"
import { AuthLayout } from "./authLayout"
import { useForm } from "react-hook-form"
import { InputField } from "./cutormFormField";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Btn } from "../elements/btn";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/authSlice";

export const Register =()=>{
    const dispatch = useDispatch();
    const {registerError,registerStatus} = useSelector(state=>state.auth);

    const SubmitHandler =({
        lastname,
        email,
        address,
        phone,
        gender,
        dob,
        password,
        firstname
    })=>{
            dispatch(registerUser({
                lastname,
                email,
                address,
                phone,
                gender,
                dob,
                password,
                firstname
            }))
    }

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

    return(
        <AuthLayout adjHeight={true} metaTitle="Peacesub -Register">
            <Text
                style="text-center text-lg "
                value="Sign Up"
            />
            <Text
               style="font-semibold text-center text-lg mb-6"
                value="kindly create an account to proceed."
            />
            <form onSubmit={handleSubmit(SubmitHandler)}>
                {
                    [
                        {
                            title:"lastname",
                            labelName:"Lastname",
                            type:"text",
                            error:errors.lastname,
                            placeHold:"Enter lastname",

                        },{
                            title:"firstname",
                            labelName:"firstname",
                            type:"text",
                            error:errors.firstname,
                            placeHold:"Enter firstname"

                        }, {
                            title:"email",
                            labelName:"Email",
                            type:"email",
                            error:errors.email,
                            placeHold:"Enter email",

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
                            title:"gender",
                            labelName:"Gender",
                            type:"text",
                            error:errors.gender,
                            placeHold:"Enter lastname",

                        },,{
                            title:"dob",
                            labelName:"Date of Birth",
                            type:"date",
                            error:errors.dob,
                            placeHold:"Dob",

                        }
                    ].map((arroption,index)=>{
                        const{
                            title,
                            labelName,
                            placeHold,
                            type,
                            error
                        }=arroption;
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
            {registerError && <Text style="text-danger" value={registerError}/>}
            <Btn
                value="sign up"
                style="w-full p-3 text-center bg-tick-blue text-white mt-3 mb-3"
                loadingStatus={registerStatus ==="pending"?true:false}
            />
            <div className="flex items-center m-auto w-fit">
                <span className="me-1 text-sm font-medium">Already have an account?</span>
                <Link to="/login" className="text-sm">Sigin here?</Link>
            </div>
        </form>
        </AuthLayout>
    )
}