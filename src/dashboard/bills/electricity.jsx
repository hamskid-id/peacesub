import { InputField } from "../../components/cutormFormField";
import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout";
import { useDispatch, useSelector } from "react-redux";
import { electricityPay, getElectricityBill } from "../../store/electricitySlice";
import { useEffect } from "react";
import Spinner from "../../spinners/spinner";

export const ElectricityBill =()=>{
    const dispatch = useDispatch();
    const {
        elePayStatus,
        getElectricityBillStatus,
        EleBill
    } = useSelector(state=>state.electricity);
    useEffect(()=>{
        dispatch(getElectricityBill());
    },[dispatch,getElectricityBill])
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        Network,
        type,
        phone,
    })=>{
            dispatch(electricityPay({
                type,
                Network,
                phone,
            }))
        }
        console.log(EleBill);
    return(
        <DashboardLayout  metaTitle="Peacesub - Electricity subscription">
            {
                getElectricityBillStatus === "pending"?
                    <Spinner/>:
            <div className="bg-white shadow lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full m-auto">
                <form  
                    onSubmit={handleSubmit(SubmitHandler)} 
                    className="flex flex-col shadow p-4 bg-white">
                    <Text   
                        style="text-center font-medium text-2xl mb-4"
                        value="Electricity Bill Payment"
                    />
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
                                EleBill?.map((option,index)=>{
                                    return(
                                        <option value={option.id} key={index}>{option.code} ({option.name}) {"  "} Discount-{option.discount}</option>
                                    )
                                })
                            }
                            </select>
                            {errors.Network && (<p className="text-danger text-sm text-start">{errors.message}</p>)}
                        </div>
                        <div
                            className="w-full">
                            <InputField
                                name="type"
                                subTitle={null}
                                selectArrayOption={["prepaid","postpaid"]}
                                placeHolder=""
                                type="select"
                                labelTitle="Type"
                                labelStyle="text-sm font-medium text-start"
                                register={register}
                                errors={errors.type}
                                style="text-start rounded-md p-4 border text-xs mb-4"
                            />
                        </div>
                        <div
                            className="w-full">
                            <InputField
                                name="phone"
                                subTitle={null}
                                selectArrayOption={null}
                                placeHolder="Enter your mobile number"
                                type="tel"
                                labelTitle="Phone Number"
                                labelStyle="text-sm font-medium text-start"
                                register={register}
                                errors={errors.phone}
                                style="text-start rounded-md p-4 border text-xs mb-4"
                            />
                        </div>
                    <Btn
                        style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                        value="Validate"
                        loadingStatus={elePayStatus ==="pending"?true:false}
                    />
                </form>
            </div>
           }
         </DashboardLayout>
    )
}