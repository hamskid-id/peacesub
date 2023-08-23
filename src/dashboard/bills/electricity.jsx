import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout"
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";

export const ElectricityBill=()=>{

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        disco,
        meter,
        Amount,
        type,
        phone
    })=>{
            console.log(
                disco,
                meter,
                Amount,
                phone,
                type
            )
    }

    return(
        <DashboardLayout>
            <div className="bg-white shadow lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="Electricity Bill Payment"
                    />
                </div>
                <div className="p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} >
                        {
                            [
                                {
                                    title:"disco",
                                    labelName:"Disco name",
                                    selectArrayOption:["Ikeja electricity","Eko electricity"],
                                    type:"select",
                                    error:errors.disco,
                                    placeHold:"disco",
                                    subTitle:null
                                },{
                                    title:"meter",
                                    labelName:"Meter number",
                                    selectArrayOption:null,
                                    type:"number",
                                    error:errors.meter,
                                    placeHold:"meter",
                                    subTitle:null
                                },{
                                    title:"type",
                                    labelName:"Meter Type",
                                    selectArrayOption:["Prepaid","Postpaid"],
                                    type:"select",
                                    error:errors.type,
                                    placeHold:"type",
                                    subTitle:null
                                },{
                                    title:"Amount",
                                    labelName:"Amount",
                                    selectArrayOption:null,
                                    type:"number",
                                    error:errors.Amount,
                                    placeHold:"Amount",
                                    subTitle:null
                                },{
                                    title:"phone",
                                    labelName:"Customer Phone",
                                    selectArrayOption:null,
                                    type:"number",
                                    error:errors.phone,
                                    placeHold:"phone",
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
                                            selectArrayOption={selectArrayOption}
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
                        <div className="mb-3 p-3 border w-full">#20 Charge
                        </div>
                         <Btn
                            style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                            value="validate"
                        />
                    </form>
                </div>
            </div>
        </DashboardLayout>
    )
}