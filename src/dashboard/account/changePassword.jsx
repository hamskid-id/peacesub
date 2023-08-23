import { InputField } from "../../components/cutormFormField";
import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { DashboardLayout } from "../dashLayout";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const ChangePassword =()=>{
    const validationSchema = Yup.object().shape({
        newpass: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        cpass: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('newpass')], 'Passwords must match')
            
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
        oldpass,
        newpass,
        cpass,
        
    })=>{
            console.log(
                oldpass,
                newpass,
                cpass,
            )
    }

    return(
        <DashboardLayout>
        <form 
            onSubmit={handleSubmit(SubmitHandler)}
            className="bg-white p-4 lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto shadow">
            <div className="bg-whitesmoke w-full p-6 mb-2">
                <Text   
                    style="text-center font-medium text-xl"
                    value="Change Password"
                />
            </div>
            <div className="flex flex-col">
                {
                    [
                        {
                            title:"oldpass",
                            labelName:"Old password*",
                            selectArrayOption:null,
                            type:"password",
                            error:errors.oldpass,
                            placeHold:"oldpass",
                            subTitle:null
                        },{
                            title:"newpass",
                            labelName:"New password*",
                            selectArrayOption:null,
                            type:"password",
                            error:errors.newpass,
                            placeHold:"new password",
                            subTitle:null
                        },{
                            title:"cpass",
                            labelName:"Confrim Password*",
                            selectArrayOption:null,
                            type:"password",
                            error:errors.cpass,
                            placeHold:"",
                            subTitle:null
                        }
                    ].map((prof,index)=>{
                        const{
                            title,
                            labelName,
                            subTitle,
                            placeHold,
                            selectArrayOption,
                            type,
                            error
                        }=prof;
                        return(
                            <div 
                                key={index}
                                className="w-full">
                                <InputField
                                    name={title}
                                    subTitle={subTitle}
                                    placeHolder={placeHold}
                                    type={type}
                                    labelTitle={labelName}
                                    labelStyle="text-sm font-medium text-start"
                                    register={register}
                                    errors={error}
                                    style="text-start rounded-md p-4 border text-xs mb-4"
                                />
                            </div>
                        )
                    })
                }
            </div>
            <Btn
                style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                value="Proceed"
            />
        </form>
        </DashboardLayout>
    )
}