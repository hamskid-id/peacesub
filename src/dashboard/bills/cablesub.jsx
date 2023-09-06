import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout";
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import {getcableType, subscribeCable } from "../../store/cableSlice";
import Spinner from "../../spinners/spinner";

export const CableSub=()=>{
    const dispatch = useDispatch();
    const {
        subscribeCableStatus,
        getcableTypeStatus,
        cableTp,
    } = useSelector(state=>state.cable);
    useEffect(()=>{
        dispatch(getcableType());
    },[dispatch,getcableType])


    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        Network,
        Phone,
    })=>{
        dispatch(subscribeCable({
            Network,
            phone:Phone,
        }))
    }

    return(
        <DashboardLayout  metaTitle="Peacesub - cable subscription">
            {
                getcableTypeStatus ==="pending"?
                    <Spinner/>:
            
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="Purchase Cabel Tv"
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
                                cableTp?.map((option,index)=>{
                                    return(
                                        <option value={option.id} key={index}>{option.name} {"  "} Discount-{option.discount}</option>
                                    )
                                })
                            }
                            </select>
                            {errors.Network && (<p className="text-danger text-sm text-start">{errors.message}</p>)}
                        </div>
                        <div
                            className="w-full">
                            <InputField
                                name="Phone"
                                subTitle={null}
                                selectArrayOption={null}
                                placeHolder="Enter your mobile number"
                                type="tel"
                                labelTitle="Phone Number"
                                labelStyle="text-sm font-medium text-start"
                                register={register}
                                errors={errors.Phone}
                                style="text-start rounded-md p-4 border text-xs mb-4"
                            />
                        </div>
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