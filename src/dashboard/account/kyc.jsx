import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout"
import { InputField } from "../../components/cutormFormField";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchBankList, performKyc } from "../../store/kycSlice";
import Spinner from "../../spinners/spinner";

export const KYC=()=>{

    const dispatch = useDispatch();
    const {
        kycStatus,
        fetchBankListStatus,
        bankList
    } = useSelector(state=>state.kyc);
    useEffect(()=>{
        dispatch(FetchBankList())
    },[dispatch, FetchBankList])
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        BVN,
        acc,
        bank
    })=>{
            dispatch(performKyc({
                bvn:BVN,
                account_number:acc,
                bank_code:bank
            }))
    }

    return(
        <DashboardLayout  metaTitle="Peacesub - KYC">
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="Verify your Accout to pass transaction limit"
                    />
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 p-4">
                {
                    fetchBankListStatus === "pending"?
                    <Spinner/>:
                        <form onSubmit={handleSubmit(SubmitHandler)} className="xs:order-last xxs:order-last sm:order-last md:order-first lg:order-first xl:order-first">
                            <div className="flex flex-col mb-3">
                                <label
                                    className={`mb-2 text-sm font-medium text-start`}
                                    htmlFor="bank">
                                    Bank
                                </label>
                                <select
                                    className="text-start rounded-md p-4 border text-xs mb-4"
                                    name="bank"
                                    {...register(
                                        `bank`, 
                                        {
                                            required:`bank field is invalid`
                                        }
                                    )
                                }
                                >
                                { 
                                bankList?.map((option,index)=>{
                                        return(
                                            <option value={option.code} key={index}>{option.name.toUpperCase()}</option>
                                        )
                                    })
                                }
                                </select>
                                {errors.bank && (<p className="text-danger text-sm text-start">{errors.message}</p>)}
                            </div>
                            {
                                [
                                    {
                                        title:"BVN",
                                        labelName:"BVN*",
                                        selectArrayOption:null,
                                        type:"text",
                                        error:errors.BVN,
                                        placeHold:"BVN*",
                                        subTitle:null
                                    },{
                                        title:"acc",
                                        labelName:"Account Number*",
                                        selectArrayOption:null,
                                        type:"acc",
                                        error:errors.acc,
                                        placeHold:"acc",
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
                                                style="text-start rounded-md p-4 border text-sm mb-4"
                                            />
                                        </div>
                                    )
                                })
                            }
                            <div>
                                <Btn
                                    style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                                    value="Proceed"
                                    loadingStatus={kycStatus==="pending" ?true:false}
                                />
                            </div>
                        </form>
                    }
                    <div className="px-4 py-4">
                        <div className="mb-2">
                            <Text
                                style="font-medium text-start text-xl mb-3"
                                value="Why KYC?"
                            />
                            <Text
                                style="font-light text-start text-sm mb-3 leading-6"
                                value="To confirm your true identity. With Verify account, you can enjoy the full features of PEACESUB.COM.NG."
                            />
                        </div>
                        <div className="mb-2">
                            <Text
                                style="font-medium text-start text-xl mb-3"
                                value="Why BVN?"
                            />
                            <Text
                                style="font-light text-start text-sm mb-3 leading-6"
                                value="We request for BVN to validate your PEACESUB.COM.NG registered details and as well validate that the account number you want to add to your account truly belongs to you. Also, to create a unique identity for each of the members of this platform. Lastly, to protect you as a customer aPEACESUB.COM.NG as a business."
                            />
                        </div>
                        <div className="mb-2">
                            <Text
                                style="font-medium text-start text-xl mb-3"
                                value="Am I safe giving you my BVN?"
                            />
                            <Text
                                style="font-light text-start text-sm leading-6 mb-3"
                                value="Yes, you are. Your BVN is confidential to us. We only need it to confirm your identity with the bank account number provided. Also, take note that once you add your BVN, no other user on this platform can add the BVN."
                            />
                            <Text
                                style="font-medium text-start text-sm mb-3 leading-6"
                                value="NOTE: Ensure you use your personal BVN for this KYC. You will be charge N100 per attempts"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}