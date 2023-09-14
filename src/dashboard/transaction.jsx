import { useDispatch, useSelector } from "react-redux"
import { Text } from "../elements/text"
import { DashboardLayout } from "./dashLayout"
import { useEffect } from "react";
import {getAllTransactionsHistory } from "../store/historySlice";
import { Translayout } from "./transactionLayoute";
import Spinner from "../spinners/spinner";

export const Transaction =()=>{
    const dispatch = useDispatch();
    const {
        getAllTranStatus,
        allTrans
    } = useSelector(state=>state.history);
    useEffect(()=>{
        dispatch(getAllTransactionsHistory())
    },[dispatch,getAllTransactionsHistory])
    return(
        <DashboardLayout metaTitle="Peacesub - Transaction details">
            <div className="bg-white shadow w-full m-auto p-4">
                <div>
                    <Text
                        style="text-2xl text-center font-medium mb-3"
                        value="Your Account History And Activities"
                    />
                    {
                        getAllTranStatus ==="pending"?
                        <Spinner/>:
                        <Translayout    
                            title="All transactions history"
                            data={allTrans}
                        />
                    }
                </div>
            </div>
        </DashboardLayout>
    )
}