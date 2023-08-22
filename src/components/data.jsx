import { Btn } from "../elements/btn"
import { Text } from "../elements/text"

export const Data=()=>{
    return(
        <div  className="lg:px-16 md:px-16 xl:px-16 py-20 sm:px-4 xxs:px-4 xs:px-4">
            <Text
                style="font-medium text-5xl text-center c-brown mb-6"
                value="Affordable Data Plans And Prices"
            />
            <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-2">
                {[
                    {
                        img:"https://peacesub.com.ng/static/styling/img/mtn.png",
                        name:"MTN DATA"
                    },{
                        img:"https://peacesub.com.ng/static/styling/img/airtel.png",
                        name:"ARTEL DATA"
                    },{
                        img:"https://peacesub.com.ng/static/styling/img/glo.png",
                        name:"GLO DATA"
                    },{
                        img:"https://peacesub.com.ng/static/styling/img/9mobile.png",
                        name:"9MOBILE DATA"
                    },
                ].map((tab,index)=>{
                    return(
                        <div 
                            className="flex flex-col bg-white overflow-x-hidden pt-4"
                            key={index}
                            >
                                <div className="m-auto w-16 h-16">
                                    <img 
                                        src={tab.img}
                                        alt="object not found"
                                        className="w-full"
                                    />
                                </div>
                            <Text
                                style="text-center my-3 text-sm"
                                value={tab.name}
                            />
                            <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-center text-sm font-light">
                                    {/* <thead
                                        className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                        <tr>
                                        <th scope="col" className=" px-6 py-4">#</th>
                                        <th scope="col" className=" px-6 py-4">First</th>
                                        <th scope="col" className=" px-6 py-4">Last</th>
                                        <th scope="col" className=" px-6 py-4">Handle</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        <tr className="border-b dark:border-neutral-500">
                                        {/* <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td> */}
                                        <td className="whitespace-nowrap  px-6 py-4">250MB</td>
                                        <td className="whitespace-nowrap  px-6 py-4">90$</td>
                                        <td className="whitespace-nowrap  px-6 py-4">1month</td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                        {/* <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td> */}
                                        <td className="whitespace-nowrap  px-6 py-4 ">100MB</td>
                                        <td className="whitespace-nowrap  px-6 py-4">80$</td>
                                        <td className="whitespace-nowrap  px-6 py-4">2month</td>
                                        </tr>
                                        <tr className="border-b dark:border-neutral-500">
                                        {/* <td className="whitespace-nowrap  px-6 py-4 font-medium">3</td> */}
                                        <td className="whitespace-nowrap  px-6 py-4 ">200MB</td>
                                        <td className="whitespace-nowrap  px-6 py-4">90$</td>
                                        <td className="whitespace-nowrap  px-6 py-4">3month</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            <div className="m-auto w-fit py-6">
                                <Btn
                                    style="text-white bg-tick-blue py-4 px-8 text-sm"
                                    value="Order Now"
                                />
                            </div>
                            </div>
                    )
                })
                }
            </div>
        </div>
    )
}