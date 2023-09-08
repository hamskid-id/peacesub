import { InputField } from "../../components/cutormFormField";
import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { DashboardLayout } from "../dashLayout"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Reset } from "./reset";
import { useDispatch, useSelector } from "react-redux";
import { changePin } from "../../store/profileSlice";

export const PinManagemnet =()=>{
    const dispatch = useDispatch();
    const {
        changePinStatus
    } = useSelector(state=>state.data);
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
        newpass
    })=>{
        dispatch(changePin({
            current:oldpass,
            newPin:newpass
        }))
    }

    return(
        <DashboardLayout  metaTitle="Peacesub - Manage your pin">
            <div className=" mt-4 lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8">
                <form  
                    onSubmit={handleSubmit(SubmitHandler)} 
                    className="flex flex-col shadow p-4 bg-white">
                    <Text   
                        style="text-center font-medium text-2xl"
                        value="Reset Lost Pin "
                    />
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
                    <Btn
                        style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                        value="Proceed"
                         loadingStatus={ changePinStatus ==="pending" ?true:false}
                    />
                </form>
                <Reset/>
            </div>
        </DashboardLayout>
    )
}