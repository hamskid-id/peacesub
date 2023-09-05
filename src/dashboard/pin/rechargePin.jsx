import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout"
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";

export const RechargePin=()=>{

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        Network,
        nameOncard,
        newtworkAmount,
        quantity,
        Amount
    })=>{
            console.log(
                Network,
                nameOncard,
                newtworkAmount,
                quantity,
                Amount
            )
    }

    return(
        <DashboardLayout metaTitle="Peacesub - Purchase recharge pin">
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="START YOUR OWN RECHARGE CARD PRINTING BUSINESS AND EARN YOUR OWN EXTRA CASH"
                    />
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} className="xs:order-last xxs:order-last sm:order-last md:order-first lg:order-first xl:order-first">
                        {
                            [
                                {
                                    title:"Network",
                                    labelName:"Network",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.Network,
                                    placeHold:"Network",
                                    subTitle:null
                                },{
                                    title:"newtworkAmount",
                                    labelName:"Network Amount",
                                    selectArrayOption:null,
                                    type:"number",
                                    error:errors.newtworkAmount,
                                    placeHold:"newtworkAmount",
                                    subTitle:null
                                },{
                                    title:"nameOncard",
                                    labelName:"Name on Card",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.nameOncard,
                                    placeHold:"nameOncard",
                                    subTitle:null
                                },{
                                    title:"Amount",
                                    labelName:"Amount",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.Amount,
                                    placeHold:"Amount",
                                    subTitle:null
                                },{
                                    title:"quantity",
                                    labelName:"Quantity",
                                    selectArrayOption:null,
                                    type:"number",
                                    error:errors.quantity,
                                    placeHold:"quantity",
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
                            value="Generate"
                        />
                    </form>
                    <div className="p-4">
                        <div className="mb-2">
                            <Text
                                style="font-medium text-center text-xl mb-3"
                                value="AVAILABLE PINS"
                            />
                        </div>
                        <div className="mb-2">
                            <div className="p-3 rounded-sm bg-mtn text-white mb-2">
                                AVAILABLE MTN PIN - 9
                            </div>
                            <div className="p-3 bg-airtel rounded-sm text-white mb-2">
                            AVAILABLE AIRTEL PIN - 0
                            </div>
                            <div className="p-3 bg-glo rounded-sm text-white mb-2">
                            AVAILABLE GLO PIN - 3
                            </div>
                            <div className="p-3 bg-9mobile rounded-sm text-white mb-2">
                            AVAILABLE 9MOBILE PIN - 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}