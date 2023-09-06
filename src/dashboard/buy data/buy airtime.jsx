import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout"
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getairtimeNetwork, purchaseAirtime } from "../../store/airtimeSlice";
import Spinner from "../../spinners/spinner";

export const BuyAirtime=()=>{
    const dispatch = useDispatch();
    const {
        purchaseAirtimeStatus,
        airtimeNetwork,
        getAirtimeNetworkStatus,
        purchaseAirtimeRes
    } = useSelector(state=>state.airtime);
    useEffect(()=>{
        dispatch(getairtimeNetwork());
        console.log("hello")
    },[dispatch,getairtimeNetwork])

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        Network,
        MobileNumber,
        Amount
    })=>{
            dispatch(purchaseAirtime({
                Network:Network,
                amount:Amount,
                phone:MobileNumber,
            }))
    }

    console.log(airtimeNetwork)

    return(
        <DashboardLayout  metaTitle="Peacesub - Purchase Airtime">
             {
                getAirtimeNetworkStatus === "pending"?
                    <Spinner/>:
            <div className="bg-white shadow lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="Buy Airtime"
                    />
                </div>
                <div className="p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} >
                        <div className="flex flex-col mb-3">
                            <label
                                className={`mb-2 text-sm font-medium text-start`}
                                htmlFor="Network">
                                Network
                            </label>
                            <select
                                className="text-start rounded-md p-4 border text-xs mb-4"
                                name="Network"
                                {...register(
                                    `Network`, 
                                    {
                                        required:`Network field is invalid`
                                    }
                                )
                            }
                            >
                            { 
                                airtimeNetwork?.map((option,index)=>{
                                    return(
                                        <option value={option.id} key={index}>{option.network.toUpperCase()} {"  "} Discount-{option.discount}naira</option>
                                    )
                                })
                            }
                            </select>
                            {errors.Network && (<p className="text-danger text-sm text-start">{errors.message}</p>)}
                        </div>
                        {
                            [
                                {
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
                                // },{
                                //     title:"bypass",
                                //     labelName:"Bypass number validator",
                                //     selectArrayOption:null,
                                //     type:"checkbox",
                                //     error:errors.bypass,
                                //     placeHold:"bypass",
                                //     subTitle:null
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
                         <Btn
                            style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                            value="Proceed"
                            loadingStatus={( purchaseAirtimeStatus ==="pending" )?true:false}
                        />
                    </form>
                </div>
            </div>
            }
        </DashboardLayout>
    )
}