import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout";
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { getcableName, getcableType, subscribeCable } from "../../store/cableSlice";
import Spinner from "../../spinners/spinner";

export const CableSub=()=>{
    const dispatch = useDispatch();
    const {
        subscribeCableStatus,
        getcableTypeStatus,
        getcableNameStatus,
        subCableRes,
        cableTp,
        cableName
    } = useSelector(state=>state.cable);
    useEffect(()=>{
        dispatch(getcableType());
        dispatch(getcableName());
        console.log("hello")
    },[dispatch,getcableName,getcableType])


    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        CableName,
        CableType,
        Amount,
        Phone,
        // vcode,
        Quantity,
        // Service,
    })=>{
        dispatch(subscribeCable({
            quantity:Quantity,
            service:CableName,
            type:CableType,
            amount:Amount,
            phone:Phone,
        }))
    }

    return(
        <DashboardLayout  metaTitle="Peacesub - cable subscription">
            {
                getcableNameStatus ==="pending" || getcableTypeStatus ==="pending"?
                    <Spinner/>:
            
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
                                    selectArrayOption:cableName,
                                    type:"select",
                                    error:errors.CableName,
                                    placeHold:"CableName",
                                    subTitle:null
                                },{
                                    title:"CableType",
                                    labelName:"Cable Type",
                                    selectArrayOption:cableTp,
                                    type:"select",
                                    error:errors.CableType,
                                    placeHold:"Cable Type",
                                    subTitle:null
                                // },{
                                //     title:"Service",
                                //     labelName:"Service*",
                                //     selectArrayOption:null,
                                //     type:"text",
                                //     error:errors.Service,
                                //     placeHold:"Service*",
                                //     subTitle:null
                                    },{
                                // },{
                                //     title:"vcode",
                                //     labelName:"Variation Code",
                                //     selectArrayOption:null,
                                //     type:"text",
                                //     error:errors.vcode,
                                //     placeHold:"variation code",
                                //     subTitle:null
                                // },{
                                    title:"Amount",
                                    labelName:"Amount",
                                    selectArrayOption:null,
                                    type:"number",
                                    error:errors.Amount,
                                    placeHold:"Amount",
                                    subTitle:null
                                },{
                                    title:"Phone",
                                    labelName:"Phone Number",
                                    selectArrayOption:null,
                                    type:"tel",
                                    error:errors.Phone,
                                    placeHold:"Phone",
                                    subTitle:null
                                },{
                                    title:"Quantity",
                                    labelName:"Quantity",
                                    selectArrayOption:null,
                                    type:"tel",
                                    error:errors.Quantity,
                                    placeHold:"Quantity",
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
                                Please note that there is a charge of N50 if the CableType greater than N9,999."
                                style="font-light text-start text-sm mb-4"
                            />
                        </div>
                         <Btn
                            style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                            value="Validate"
                            loadingStatus={( subscribeCableStatus ==="pending")?true:false}
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
            }
        </DashboardLayout>
    )
}