
import { useDispatch, useSelector } from "react-redux";
import { DashboardLayout } from "../dashLayout"
import { Translayout } from "../transactionLayoute"
import { useEffect } from "react";
import Spinner from "../../spinners/spinner";
import { getAllDataHistory } from "../../store/historySlice";
import { Text } from "../../elements/text";

export const DataTransaction =()=>{
    const dispatch = useDispatch();
    const {
        getDataTranStatus,
        allDataTrans
    } = useSelector(state=>state.history);
    useEffect(()=>{
        dispatch(getAllDataHistory());
    },[dispatch,getAllDataHistory])
    return(
        <DashboardLayout metaTitle="Peacesub - Data Transaction">
            <div className="bg-white shadow w-full m-auto p-4">
                <Text
                    style="text-center font-semibold text-xl"
                    value="Data Transaction History"
                />
                <div>
                    {
                        getDataTranStatus ==="pending"?
                        <Spinner/>:
                        <Translayout   
                            title="Transaction history"
                            data={allDataTrans}
                        />
                    }
                </div>
            </div>
        </DashboardLayout>
    )
}