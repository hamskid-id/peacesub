import { InputField } from "../../components/cutormFormField";
import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout";
import { useDispatch, useSelector } from "react-redux";
import { buyscratchcard, getCard, scratchcardvtpass } from "../../store/eduSlice";
import { useEffect } from "react";
import Spinner from "../../spinners/spinner";

export const ResultChecker =()=>{
    const dispatch = useDispatch();
    const {
        buyCardStatus,
        vtpassStatus,
        getCardStatus,
        buyCardRes,
        card
    } = useSelector(state=>state.edu);
    useEffect(()=>{
        dispatch(getCard())
    },[dispatch,getCard])
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        quantity,
        Amount,
        examName,
        phone
    })=>{
        dispatch(buyscratchcard({
            amount:Amount,
            examName,
            phone:phone,
            quantity:quantity
        }))
    }

    return(
        <DashboardLayout>
             {
                getCardStatus ==="pending"?
                    <Spinner/>:
            <div className="bg-white shadow lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full m-auto">
                <form  
                    onSubmit={handleSubmit(SubmitHandler)} 
                    className="flex flex-col shadow p-4 bg-white">
                    <Text   
                        style="text-center font-medium text-2xl mb-4"
                        value="RESULT CHECKER PIN"
                    />
                    {
                        [
                            {
                                title:"examName",
                                labelName:"Exam name",
                                selectArrayOption:card,
                                type:"select",
                                error:errors.examName,
                                placeHold:"exam name",
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
                                type:"number",
                                error:errors.Amount,
                                placeHold:"",
                                subTitle:null
                            },{
                                title:"phone",
                                labelName:"Phone*",
                                selectArrayOption:null,
                                type:"tel",
                                error:errors.phone,
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
                                value,
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
                    <Btn
                        style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                        value="Generate"
                        loadingStatus={( buyCardStatus ==="pending" || vtpassStatus ==="pending")?true:false}
                    />
                </form>
            </div>
            }
         </DashboardLayout>
    )
}