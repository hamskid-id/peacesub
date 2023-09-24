import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../elements/text"
import { DashboardLayout } from "../dashLayout"
import { useEffect } from "react";
import { getAllTransactionsHistory, getTotalFund, getTotalSpent } from "../../store/historySlice";
import Spinner from "../../spinners/spinner";
import { Translayout } from "../transactionLayoute";

export const WalletSummary=()=>{
    const dispatch = useDispatch();
    const {
        walletList
    } = useSelector(state=>state.wallet);
    const {
        getAllTranStatus,
        allTrans,
        totalSpent,
        totalFund
    } = useSelector(state=>state.history);
    useEffect(()=>{
        dispatch(getAllTransactionsHistory())
        dispatch(getTotalFund())
        dispatch(getTotalSpent())
    },[dispatch,getAllTransactionsHistory])
    return(
        <DashboardLayout metaTitle="Peacesub - Wallet Summary">
            <div className="m-auto bg-white shadow w-full">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text
                        style="text-center font-medium text-xl"
                        value="TRANSACTION STATISTICS"
                    />
                </div>
                <div className="px-4 grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-8 m-auto my-4">
                    {
                        [
                            {
                                title:"WALLET BALANCE",
                                amount:walletList[1]?`${walletList[1]?.balance}₦`:''
                            },{
                                title:"TOTAL FUNDING",
                                amount:`${totalFund}₦`
                            },{
                                title:"TOTAL SPENT",
                                amount:`${totalSpent}₦`
                            },
                        ].map((prod,index)=>{
                            const{
                                title,
                                amount
                            }=prod
                            return(
                                <div 
                                    key={index}
                                    className={`bg-white p-4 rounded shadow`}
                                >
                                    <Text
                                        style="text-start font-light text-lg mb-3"
                                        value={title}
                                    />
                                    <Text
                                        style="text-start font-medium text-lg mb-3"
                                        value={amount}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                {
                    getAllTranStatus ==="pending"?
                    <Spinner/>:
                    <Translayout
                        data={allTrans}
                    />
                }
            </div>
        </DashboardLayout>
    )
}