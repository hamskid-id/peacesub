import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout"
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";
import { useDispatch, useSelector } from "react-redux";
import { bulkSms } from "../../store/dataSlice";

export const BulkSmS=()=>{
    const dispatch = useDispatch();
    const {
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const {bulkStatus} = useSelector(state=>state.data);
    const SubmitHandler =({
        From,
        Message,
        To
    })=>{
            dispatch(bulkSms({
                From,Message,To
            }))
    }

    return(
        <DashboardLayout metaTitle="Peacesub - Bulk SIM">
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="BULK SMS"
                    />
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} className="xs:order-last xxs:order-last sm:order-last md:order-first lg:order-first xl:order-first" >
                        {
                            [
                                {
                                    title:"From",
                                    labelName:"From",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.From,
                                    placeHold:"From",
                                    subTitle:null
                                },{
                                    title:"To",
                                    labelName:"To",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.To,
                                    placeHold:"To",
                                    subTitle:null
                                },{
                                    title:"Message",
                                    labelName:"Message",
                                    selectArrayOption:null,
                                    type:"textArea",
                                    error:errors.Message,
                                    placeHold:"Message",
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
                            value="Send"
                            loadingStatus={ bulkStatus ==="pending" ?true:false}
                        />
                    </form>
                    <div className="p-4">
                        <div className="mb-2">
                            <Text
                                style="font-medium text-center text-xl mb-3"
                                value="3.5naira per unit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}