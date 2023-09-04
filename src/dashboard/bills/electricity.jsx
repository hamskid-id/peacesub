import { InputField } from "../../components/cutormFormField";
import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout";
import { useDispatch, useSelector } from "react-redux";
import { electricityPay, electricityvtpass, getElectricityBill } from "../../store/electricitySlice";
import { useEffect } from "react";

export const ElectricityBill =()=>{
    const dispatch = useDispatch();
    const {
        elePayStatus,
        vtpassStatus,
        elePayRes,
        EleBill
    } = useSelector(state=>state.electricity);
    useEffect(()=>{
        dispatch(getElectricityBill());
        console.log("hello")
    },[dispatch,getcableName,getcableType])
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        disco,
        // meter,
        type,
        Amount,
        phone,
        action
    })=>{
            switch(action){
                case "Electricty Payment":
                    dispatch( electricityPay({
                        disco,
                        // meter,
                        type,
                        amount:Amount,
                        phone,
                    }))
                break;
                case "Electricity vt pass" :
                    dispatch(electricityvtpass({
                        disco,
                        // meter,
                        type,
                        amount:Amount,
                        phone,
                    }))
                break;
                default :
                    dispatch(electricityPay({
                        disco,
                        // meter,
                        type,
                        amount:Amount,
                        phone,
                    }))
            }
    }

    return(
        <DashboardLayout>
            <div className="bg-white shadow lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full m-auto">
                <form  
                    onSubmit={handleSubmit(SubmitHandler)} 
                    className="flex flex-col shadow p-4 bg-white">
                    <Text   
                        style="text-center font-medium text-2xl mb-4"
                        value="Electricity Bill Payment"
                    />
                    {
                        [
                            {
                                title:"action",
                                labelName:"Kindly Select action",
                                selectArrayOption:["Electricty Payment","Electricity vt pass"],
                                type:"select",
                                error:errors.action,
                                placeHold:"",
                                subTitle:null
                            },{
                                title:"disco",
                                labelName:"Disco name",
                                selectArrayOption:EleBill,
                                type:"select",
                                error:errors.disco,
                                placeHold:"disco",
                                subTitle:null
                            },
                            // },{
                            //     title:"meter",
                            //     labelName:"Meter number",
                            //     selectArrayOption:null,
                            //     type:"number",
                            //     error:errors.meter,
                            //     placeHold:"meter",
                            //     subTitle:null
                            // },{
                                {
                                title:"type",
                                labelName:"Meter Type",
                                selectArrayOption:["prepaid","postpaid"],
                                type:"select",
                                error:errors.type,
                                placeHold:"type",
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
                        value="Validate"
                        loadingStatus={( elePayStatus ==="pending" || vtpassStatus ==="pending")?true:false}
                    />
                </form>
            </div>
         </DashboardLayout>
    )
}