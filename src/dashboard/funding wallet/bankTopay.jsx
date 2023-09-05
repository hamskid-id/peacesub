import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout";
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";

export const BankToPay=()=>{

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        BankToPay,
        Amount,
        Reference,
    })=>{
            console.log(
                BankToPay,
                Amount,
                Reference,
            )
    }

    return(
        <DashboardLayout metaTitle="Peacesub - Bank To Pay">
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="BankPayment (minimum amount is ₦3000)"
                    />
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} className="xs:order-last xxs:order-last sm:order-last md:order-first lg:order-first xl:order-first" >
                        {
                            [
                                {
                                    title:"BankToPay",
                                    labelName:"Bank paid to",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.BankToPay,
                                    placeHold:"Bank paid to",
                                    subTitle:null
                                },{
                                    title:"Reference",
                                    labelName:"Reference or Narration*",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.Reference,
                                    placeHold:"Reference or Narration*",
                                    subTitle:null
                                },{
                                    title:"Amount",
                                    labelName:"Amount",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.Amount,
                                    placeHold:"Amount",
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
                        <div>
                            <Text
                                value="Your account will be suspended, if you submit without transfer
                                Please note that there is a charge of N50 if the amount greater than N9,999."
                                style="font-light text-start text-sm mb-4"
                            />
                        </div>
                         <Btn
                            style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                            value="Proceed"
                        />
                    </form>
                    <div className="px-4">
                        <div className="mb-2">
                            <Text
                                style="font-medium text-start text-xl mb-3"
                                value="Guarantee Trust Bank (GT bank)
                                        AZEEZ OLAIDE SHOBAMIKE
                                        0623169129"
                                />
                            <Text
                                style="font-light text-start text-sm mb-3 leading-6"
                                value="You can deposit or transfer fund into our account stated above. Use your registered username as depositor's name, naration or remarks Your account will be funded as soon as your payment is confirmed."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}