
import { Text } from "../../elements/text"
import { DashboardLayout } from "../dashLayout"

export const DataTransaction =()=>{
    return(
        <DashboardLayout metaTitle="Peacesub - Data Transaction">
            <div className="bg-white shadow lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full m-auto p-4">
                <div>
                    <Text
                        style="text-2xl text-center font-medium mb-3"
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