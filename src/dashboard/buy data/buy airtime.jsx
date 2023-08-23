import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout"
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";

export const BuyAirtime=()=>{

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        Network,
        MobileNumber,
        bypass,
        Amount
    })=>{
            console.log(
                Network,
                MobileNumber,
                bypass,
                Amount
            )
    }

    return(
        <DashboardLayout>
            <div className="bg-white shadow lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="Buy Airtime"
                    />
                </div>
                <div className="p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} >
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
                                    title:"MobileNumber",
                                    labelName:"Mobile Number",
                                    selectArrayOption:null,
                                    type:"number",
                                    error:errors.MobileNumber,
                                    placeHold:"MobileNumber",
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
                                    title:"bypass",
                                    labelName:"Bypass number validator",
                                    selectArrayOption:null,
                                    type:"checkbox",
                                    error:errors.bypass,
                                    placeHold:"bypass",
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
                </div>
            </div>
        </DashboardLayout>
    )
}