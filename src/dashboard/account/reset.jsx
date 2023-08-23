import { InputField } from "../../components/cutormFormField";
import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const Reset =()=>{
    const validationSchema = Yup.object().shape({
        newpin: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        cpin: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('newpin')], 'Passwords must match'),
            
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
        oldpin,
        newpin,
        cpin
        
    })=>{
            console.log(
                oldpin,
                newpin,
                cpin
            )
    }

    return(
        <form  
            onSubmit={handleSubmit(SubmitHandler)} 
            className="flex flex-col shadow p-4 bg-white">
                    <Text   
                        style="text-center font-medium text-2xl"
                        value="Change Your Pin"
                    />
                    {
                        [
                            {
                                title:"oldpin",
                                labelName:"old Pin",
                                selectArrayOption:null,
                                type:"password",
                                error:errors.oldpin,
                                placeHold:"oldpin",
                                subTitle:null
                            },{
                                title:"newpin",
                                labelName:"New pin*",
                                selectArrayOption:null,
                                type:"password",
                                error:errors.newpin,
                                placeHold:"new pin",
                                subTitle:null
                            },{
                                title:"cpin",
                                labelName:"Confrim Pin*",
                                selectArrayOption:null,
                                type:"password",
                                error:errors.cpin,
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
                    />
                </form>
    )
}