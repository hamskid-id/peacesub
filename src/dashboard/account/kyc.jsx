import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout"
import { InputField } from "../../components/cutormFormField";

export const KYC=()=>{

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        FirstName,
        LastName,
        MiddleName,
        BVN,
        file,
        StateOfOrigin,
        lg,
        Gender,
        DOB
    })=>{
            console.log(
                FirstName,
                LastName,
                MiddleName,
                BVN,
                file,
                StateOfOrigin,
                lg,
                Gender,
                DOB
            )
    }

    return(
        <DashboardLayout  metaTitle="Peacesub - KYC">
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="Verify your Accout to pass transaction limit"
                    />
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} className="xs:order-last xxs:order-last sm:order-last md:order-first lg:order-first xl:order-first">
                        {
                            [
                                {
                                    title:"FirstName",
                                    labelName:"FirstName",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.FirstName,
                                    placeHold:"FirstName",
                                    subTitle:null
                                },{
                                    title:"MiddleName",
                                    labelName:"MiddleName",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.MiddleName,
                                    placeHold:"MiddleName",
                                    subTitle:null
                                },{
                                    title:"LastName",
                                    labelName:"LastName",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.LastName,
                                    placeHold:"LastName",
                                    subTitle:null
                                },{
                                    title:"DOB",
                                    labelName:"DOB",
                                    selectArrayOption:null,
                                    type:"date",
                                    error:errors.DOB,
                                    placeHold:"DOB",
                                    subTitle:null
                                },{
                                    title:"Gender",
                                    labelName:"Gender",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.Gender,
                                    placeHold:"Gender",
                                    subTitle:null
                                },{
                                    title:"StateOfOrigin",
                                    labelName:"State Of Origin",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.StateOfOrigin,
                                    placeHold:"bStateOfOrigin",
                                    subTitle:null
                                },{
                                    title:"lg",
                                    labelName:"Local gov of origin*",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.lg,
                                    placeHold:"Local gov of origin*",
                                    subTitle:null
                                },{
                                    title:"BVN",
                                    labelName:"BVN*",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.BVN,
                                    placeHold:"BVN*",
                                    subTitle:null
                                },{
                                    title:"file",
                                    labelName:"Passport File*",
                                    selectArrayOption:null,
                                    type:"file",
                                    error:errors.file,
                                    placeHold:"file",
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
                                            style="text-start rounded-md p-4 border text-sm mb-4"
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
                    <div className="px-4 py-4">
                        <div className="mb-2">
                            <Text
                                style="font-medium text-start text-xl mb-3"
                                value="Why KYC?"
                            />
                            <Text
                                style="font-light text-start text-sm mb-3 leading-6"
                                value="To confirm your true identity. With Verify account, you can enjoy the full features of PEACESUB.COM.NG."
                            />
                        </div>
                        <div className="mb-2">
                            <Text
                                style="font-medium text-start text-xl mb-3"
                                value="Why BVN?"
                            />
                            <Text
                                style="font-light text-start text-sm mb-3 leading-6"
                                value="We request for BVN to validate your PEACESUB.COM.NG registered details and as well validate that the account number you want to add to your account truly belongs to you. Also, to create a unique identity for each of the members of this platform. Lastly, to protect you as a customer aPEACESUB.COM.NG as a business."
                            />
                        </div>
                        <div className="mb-2">
                            <Text
                                style="font-medium text-start text-xl mb-3"
                                value="Am I safe giving you my BVN?"
                            />
                            <Text
                                style="font-light text-start text-sm leading-6 mb-3"
                                value="Yes, you are. Your BVN is confidential to us. We only need it to confirm your identity with the bank account number provided. Also, take note that once you add your BVN, no other user on this platform can add the BVN."
                            />
                            <Text
                                style="font-medium text-start text-sm mb-3 leading-6"
                                value="NOTE: Ensure you use your personal BVN for this KYC. You will be charge N100 per attempts"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}