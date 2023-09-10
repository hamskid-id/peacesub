import { AiOutlineAlignLeft } from "react-icons/ai"
import { DashboardLayout } from "../dashLayout"
import { Text } from "../../elements/text"
import { useNavigate } from "react-router-dom"
import { Btn } from "../../elements/btn"
import { useDispatch, useSelector } from "react-redux"
import { getAtm } from "../../store/dataSlice"
import { useEffect } from "react"
import { useState } from "react"
import Spinner from "../../spinners/spinner"

export const WalletFunding =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedMethod, setSelectedMethod] = useState('');
    const {
        atm,atmStatus
    } = useSelector(state=>state.data);
    useEffect(()=>{
        dispatch(getAtm())
    },[dispatch,getAtm])
    return(
        <DashboardLayout metaTitle="Peacesub - Fund Market">
            {
                atmStatus ==="pending"?
                    <Spinner/>:
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="flex flex-wrap justify-between p-4 bg-whitesmoke items-center">
                    <div>
                        <Text
                            style="text-xl text-start text-medium"
                            value="WALLET FUNDING"
                        />
                    </div>
                    <div className="w-24">
                        <img 
                            src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/wallet.png"
                            alt="object not found"
                        />
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex flex-col mb-3">
                        <Text   
                            style="text-sm text-start font-medium mb-3"
                            value="Select Payment Option"
                        />
                        <div class="relative flex flex-wrap items-stretch">
                            <label
                                class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-4 text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                for="inputGroupSelect01"
                                ><AiOutlineAlignLeft/></label
                            >
                            <select
                                class="form-select relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                id="inputGroupSelect01"
                                onChange={(e)=>setSelectedMethod(e.target.value)}
                            >
                                <option selected disabled>Choose...</option>
                                    {
                                        atm?.map((opt)=>{
                                            const{
                                                id,name
                                            }=opt;
                                            return(
                                                <option key={id} value={id}>{name}</option>
                                            )
                                        })
                                    }
                            </select>
                        </div>
                    </div>
                    <div className="w-fit ms-auto">
                        {selectedMethod && <Btn
                            style="bg-primary py-3 px-8 rounded-sm text-white"
                            value="Proceed"
                            clickFunc={()=>navigate(`/bankpayment/${selectedMethod}`)}
                        />}
                        
                    </div>
                </div>
            </div>
            }
        </DashboardLayout>
    )
}