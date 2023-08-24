import { InputField } from "../../components/cutormFormField";
import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout";

export const ResultChecker =()=>{
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        examname,
        quantity,
        Amount
        
    })=>{
            console.log(
                examname,
                quantity,
                Amount
            )
    }

    return(
        <DashboardLayout>
            <div className="bg-white shadow lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full m-auto">
                <form  
                    onSubmit={handleSubmit(SubmitHandler)} 
                    className="flex flex-col shadow p-4 bg-white">
                    <Text   
                        style="text-center font-medium text-2xl"
                        value="GENERATE RESULT CHECKER PIN"
                    />
                    {
                        [
                            {
                                title:"examname",
                                labelName:"Exam Name",
                                selectArrayOption:null,
                                type:"text",
                                error:errors.examname,
                                placeHold:"examname",
                                subTitle:null
                            },{
                                title:"quantity",
                                labelName:"Quantity*",
                                selectArrayOption:null,
                                type:"number",
                                error:errors.quantity,
                                placeHold:"quantity",
                                subTitle:null
                            },{
                                title:"Amount",
                                labelName:"Amount*",
                                selectArrayOption:null,
                                type:"password",
                                error:errors.Amount,
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
                        value="Generate"
                    />
                </form>
            </div>
         </DashboardLayout>
    )
}