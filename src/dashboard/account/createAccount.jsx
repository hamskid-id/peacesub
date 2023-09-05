import { useDispatch, useSelector } from "react-redux";
import { InputField } from "../../components/cutormFormField";
import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { DashboardLayout } from "../dashLayout";
import { useForm } from "react-hook-form"
import { createAccount } from "../../store/authSlice";

export const CreateUserAccount =()=>{
     const dispatch = useDispatch();
    const {createAccountStatus} = useSelector(state=>state.auth);
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        firstname,
        lastname,
        bvn,
        email,
        phone,
        address,
        provider,
        gender,
        dob
    })=>{
        dispatch(createAccount({
            firstname,
            lastname,
            bvn,
            email,
            phone,
            address,
            provider,
            gender,
            dob
        }))
    }

    return(
        <DashboardLayout  metaTitle="Peacesub - Create an account to place your order">
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
                            title:"firstname",
                            labelName:"First Name",
                            selectArrayOption:null,
                            type:"text",
                            error:errors.firstname,
                            placeHold:"first name",
                            subTitle:null
                        },{
                            title:"lastname",
                            labelName:"Last Name",
                            selectArrayOption:null,
                            type:"text",
                            error:errors.lastname,
                            placeHold:"last name",
                            subTitle:null
                        },{
                            title:"email",
                            labelName:"Email",
                            selectArrayOption:null,
                            type:"email",
                            error:errors.email,
                            placeHold:"email",
                            subTitle:null
                        },{
                            title:"address",
                            labelName:"Address",
                            selectArrayOption:null,
                            type:"text",
                            error:errors.address,
                            placeHold:"Address",
                            subTitle:null
                        },{
                            title:"gender",
                            labelName:"gender",
                            selectArrayOption:null,
                            type:"text",
                            error:errors.gender,
                            placeHold:"gender",
                            subTitle:null
                        },{
                            title:"phone",
                            labelName:"Phone Number",
                            selectArrayOption:null,
                            type:"tel",
                            error:errors.phone,
                            placeHold:"Phone",
                            subTitle:null
                        },{
                            title:"provider",
                            labelName:"Provider",
                            selectArrayOption:null,
                            type:"text",
                            error:errors.provider,
                            placeHold:"provider",
                            subTitle:null
                        },{
                            title:"dob",
                            labelName:"Date of Birth",
                            selectArrayOption:null,
                            type:"date",
                            error:errors.dob,
                            placeHold:"dob",
                            subTitle:null
                        },{
                            title:"bvn",
                            labelName:"BVN",
                            selectArrayOption:null,
                            type:"number",
                            error:errors.bvn,
                            placeHold:"bvn",
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
                loadingStatus={createAccountStatus ==="pending"?true:false}
            />
        </form>
        </DashboardLayout>
    )
}