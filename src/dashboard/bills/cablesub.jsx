import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout";
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";

export const CableSub=()=>{

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        CableName,
        CablePlan,
        SmartcardNumber,
    })=>{
            console.log(
                CableName,
                CablePlan,
                SmartcardNumber,
            )
    }

    return(
        <DashboardLayout>
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="CabelSub"
                    />
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} className="xs:order-last xxs:order-last sm:order-last md:order-first lg:order-first xl:order-first">
                        {
                            [
                                {
                                    title:"CableName",
                                    labelName:"CableName",
                                    selectArrayOption:["name1","name2"],
                                    type:"select",
                                    error:errors.CableName,
                                    placeHold:"CableName",
                                    subTitle:null
                                },{
                                    title:"SmartcardNumber",
                                    labelName:"SmartcardNumber*",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.SmartcardNumber,
                                    placeHold:"SmartcardNumber*",
                                    subTitle:null
                                },{
                                    title:"CablePlan",
                                    labelName:"Cable Plan",
                                    selectArrayOption:["plan1","plan2"],
                                    type:"select",
                                    error:errors.CablePlan,
                                    placeHold:"Cable Plan",
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
                                            selectArrayOption={selectArrayOption}
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
                                Please note that there is a charge of N50 if the CablePlan greater than N9,999."
                                style="font-light text-start text-sm mb-4"
                            />
                        </div>
                         <Btn
                            style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                            value="Validate"
                        />
                    </form>
                    <div className="px-4">
                        <div className="my-2">
                            <Text
                                style="font-normal text-start text-xl mb-3"
                                value="YOU CAN CONTACT DSTV/GOTV UNIT CUSTOMER CARE..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}