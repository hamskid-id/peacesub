import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout"
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataAirtimeType, getDataList, purchaseData } from "../../store/dataSlice";
import Spinner from "../../spinners/spinner";

export const BuyData=()=>{

    const dispatch = useDispatch();
    const {
        purchaseDataStatus,
        dataAirtimeTp,
        dataList,
        dataListStatus,
        getDataAirtimeTypeStatus
    } = useSelector(state=>state.data);
    useEffect(()=>{
        dispatch(getDataAirtimeType());
        dispatch(getDataList())
    },[dispatch,getDataAirtimeType,getDataList])

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        Network,
        MobileNumber,
    })=>{
            dispatch(purchaseData({
                Network:Network,
                phone:MobileNumber,
            }))
    }
    console.log(dataList,  dataAirtimeTp)

    return(
        <DashboardLayout  metaTitle="Peacesub - Purchase Data">
            {
                getDataAirtimeTypeStatus === "pending" || dataListStatus ==="prending"?
                    <Spinner/>:
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="Buy Data Plan"
                    />
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} className="xs:order-last xxs:order-last sm:order-last md:order-first lg:order-first xl:order-first">
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
                                dataList?.map((option,index)=>{
                                    return(
                                        <option value={option.id} key={index}>{option.name}{"  "}Amount-{option.amount}naira</option>
                                    )
                                })
                            }
                            </select>
                            {errors.Network && (<p className="text-danger text-sm text-start">{errors.message}</p>)}
                        </div>
                        <div className="flex flex-col mb-3">
                            <label
                                className={`mb-2 text-sm font-medium text-start`}
                                htmlFor="Category">
                                Category
                            </label>
                            <select
                                className="text-start rounded-md p-4 border text-xs mb-4"
                                name="Category"
                                {...register(
                                    `Category`, 
                                    {
                                        required:`Category field is invalid`
                                    }
                                )
                            }
                            >
                            { 
                                dataAirtimeTp?.map((option,index)=>{
                                    return(
                                        <option value={option.category} key={index}>{option.category}</option>
                                    )
                                })
                            }
                            </select>
                            {errors.Category && (<p className="text-danger text-sm text-start">{errors.message}</p>)}
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
                            loadingStatus={ purchaseDataStatus ==="pending" ?true:false}
                        />
                    </form>
                    <div className="p-4">
                        <div className="mb-2">
                            <Text
                                style="font-medium text-center text-xl mb-3"
                                value="CODES FOR DATA BALANCE"
                            />
                        </div>
                        <div className="mb-2">
                            <div className="p-3 rounded-sm bg-mtn text-white mb-2">
                                MTN [SME *414#]
                            </div>
                            <div className="p-3 bg-mtn rounded-sm text-white mb-2">
                                MTN [SME 2 *414#]
                            </div>
                            <div className="p-3 bg-mtn rounded-sm text-white mb-2">
                                MTN [GSME *414#]
                            </div>
                            <div className="p-3 bg-airtel rounded-sm text-white mb-2">
                                AIRTEL  *310#
                            </div>
                            <div className="p-3 bg-glo rounded-sm text-white mb-2">
                                GLO  *414#
                            </div>
                            <div className="p-3 bg-9mobile rounded-sm text-white mb-2">
                                9Mobile  *414#
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         }
        </DashboardLayout>
    )
}