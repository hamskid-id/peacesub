import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout";
import { useDispatch, useSelector } from "react-redux";
import { buyscratchcard, getCard} from "../../store/eduSlice";
import { useEffect } from "react";
import Spinner from "../../spinners/spinner";

export const ResultChecker =()=>{
    const dispatch = useDispatch();
    const {
        buyCardStatus,
        getCardStatus,
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
       Network
    })=>{
        dispatch(buyscratchcard({
            Network
        }))
    }

    return(
        <DashboardLayout  metaTitle="Peacesub - Purchase scartch card">
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
                            card?.map((option,index)=>{
                                return(
                                    <option value={option.id} key={index}>{option.name} {"  "} Amount-{option.price}naira</option>
                                )
                            })
                        }
                        </select>
                        {errors.Network && (<p className="text-danger text-sm text-start">{errors.message}</p>)}
                    </div>
                    <Btn
                        style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                        value="Generate"
                        loadingStatus={( buyCardStatus ==="pending")?true:false}
                    />
                </form>
            </div>
            }
         </DashboardLayout>
    )
}