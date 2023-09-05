import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../components/cutormFormField";
import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { DashboardLayout } from "../dashLayout";
import { useForm } from "react-hook-form"
import { createAccount } from "../../store/authSlice";

export const UpdateProfile =()=>{
     const dispatch = useDispatch();
    const {createAccountStatus} = useSelector(state=>state.auth);
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        bankname,
        accName,
        accNum,
        password,
        vendairtel,
        vendglo,
        vendmtn
    })=>{
       console.log({
        bankname,
        accName,
        accNum,
        password,
        vendairtel,
        vendglo,
        vendmtn
     })
    }

    return(
        <DashboardLayout  metaTitle="Peacesub - Profile Update">
        <form 
            onSubmit={handleSubmit(SubmitHandler)} className="bg-white p-4 lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full m-auto shadow">
            <div className="bg-whitesmoke w-full p-6 mb-2">
                <Text   
                    style="text-center font-medium text-xl"
                    value="Edit Profile"
                />
            </div>

            <div className="flex flex-col">
                {
                    [
                        {
                            title:"bankname",
                            labelName:"Bank Name",
                            selectArrayOption:null,
                            type:"text",
                            error:errors.bankname,
                            placeHold:"bankname",
                            subTitle:null
                        },{
                            title:"accName",
                            labelName:"Account Name",
                            selectArrayOption:null,
                            type:"text",
                            error:errors.accName,
                            placeHold:"enter acc name",
                            subTitle:null
                        },{
                            title:"accNum",
                            labelName:"Account Number",
                            selectArrayOption:null,
                            type:"number",
                            error:errors.accNum,
                            placeHold:"enter acc num",
                            subTitle:null
                        },{
                            title:"vendmtn",
                            labelName:"VEND MTN SME FROM STOCK BALANCE?",
                            selectArrayOption:null,
                            type:"checkbox",
                            error:errors.vendmtn,
                            placeHold:"",
                            subTitle:null
                        },{
                            title:"vendglo",
                            labelName:"VEND GLO CG FROM STOCK BALANCE?",
                            selectArrayOption:null,
                            type:"checkbox",
                            error:errors.vendglo,
                            placeHold:"",
                            subTitle:null
                        },{
                            title:"vendairtel",
                            labelName:"VEND AIRTEL CG FROM STOCK BALANCE?",
                            selectArrayOption:null,
                            type:"checkbox",
                            error:errors.vendairtel,
                            placeHold:"",
                            subTitle:null
                        },{
                            title:"password",
                            labelName:"Password",
                            selectArrayOption:null,
                            type:"password",
                            error:errors.password,
                            placeHold:"enter password",
                            subTitle:null
                        },
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
                loadingStatus={createAccountStatus ==="pending"?true:false}
            />
        </form>
        </DashboardLayout>
    )
}