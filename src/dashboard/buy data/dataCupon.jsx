import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout"
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";

export const BuyDataCoupon=()=>{

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        dataPlan,
        NameOfPlan,
        Quantity
    })=>{
            console.log(
                dataPlan,
                NameOfPlan,
                Quantity
            )
    }

    return(
        <DashboardLayout>
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="GENERATE MTN DATA E-PIN"
                    />
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} className="xs:order-last xxs:order-last sm:order-last md:order-first lg:order-first xl:order-first">
                        {
                            [
                                {
                                    title:"dataPlan",
                                    labelName:"Data Plan",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.dataPlan,
                                    placeHold:"dataPlan",
                                    subTitle:null
                                },{
                                    title:"Quantity",
                                    labelName:"Data Type",
                                    selectArrayOption:null,
                                    type:"number",
                                    error:errors.Quantity,
                                    placeHold:"Quantity",
                                    subTitle:null
                                },{
                                    title:"NameOfPlan",
                                    labelName:"Name of plan",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.NameOfPlan,
                                    placeHold:"NameOfPlan",
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
                    <div className="p-4">
                        <div className="mb-2">
                            <Text
                                style="font-light text-center text-lg mb-3"
                                value="MTN data e-pins allows you to load data on your phone just like any conventional airtime recharge card!"
                            />
                        </div>
                        <div className="mb-2">
                            <div className="p-3 rounded-sm bg-mtn text-white mb-2">
                                AVAILABLE MTN PIN - 0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}