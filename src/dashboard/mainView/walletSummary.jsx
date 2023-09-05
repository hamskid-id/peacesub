import { Text } from "../../elements/text"
import { DashboardLayout } from "../dashLayout"

export const WalletSummary=()=>{
    return(
        <DashboardLayout metaTitle="Peacesub - Wallet Summary">
            <div className="m-auto bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full">
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
                                amount:"0.0₦"
                            },{
                                title:"TOTAL FUNDING",
                                amount:"0.0₦"
                            },{
                                title:"TOTAL SPENT",
                                amount:"0.0₦"
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
                <div className="p-4">
                    <Text
                        style="text-lg text-center font-medium mb-3"
                        value="No Records / Hamzat27 Has Not Perform Any Transaction"
                    />
                    <div className="w-44 m-auto">
                        <img 
                            src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
                            alt="object not found"
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}