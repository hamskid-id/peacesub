import { Text } from "../elements/text"
import { AiOutlineDeliveredProcedure, AiOutlineControl, AiOutlineAudit,AiOutlineMacCommand, AiOutlineRadarChart } from "react-icons/ai";

export const Services =()=>{
    return(
        <div className="pb-10 py-10 px-10">
            <div className="mb-4 mt-6 w-fit ">
                <div className="text-xl c-brown">Service We</div>
                <div className="service c-blue text-7xl break-all">Provide</div>
            </div>
            <Text
                style="text-start text-sm leading-6 c-brown font-normal lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full"
                value="We Provide Awesome Services We use cutting-edge technology to run our services. Our data delivery and wallet funding is automated, airtime top-up and data purchase are automated and get delivered to you almost instantly. We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment and Airtime to cash..."
            />
            <div className="py-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-6 my-4">
                {
                    [
                        {
                            icon:<AiOutlineAudit
                                   size="1.5rem"
                                    color="brown"
                            />,
                            name:"Making an Online recharge has become very easy and safe on peacesub.",
                            title:"Airtime TopUp"
                        },{
                            icon:<AiOutlineDeliveredProcedure
                                size="1.5rem"
                                color="brown"
                            />,
                            name:"Start enjoying this very low rate dataplan for your internet browsing Databundle",
                            title:"Buy Data"
                        },{
                            icon:<AiOutlineControl
                               size="1.5rem"
                                color="brown"
                            />,
                            name:"instantly Activate Cable Subscription with favourable discount compare to others.",
                            title:"Cable Subscription"
                        },{
                            icon:<AiOutlineMacCommand
                            size="1.5rem"
                                color="brown"
                            />,
                            name:"Cover your airtime easily to cash here at peacesub with less Charges",
                            title:"Airtime To Cash"
                        },{
                            icon:<AiOutlineRadarChart
                                    size="1.5rem"
                                    color="brown"
                            />,
                            name:"Because we understand your needs, we have made bill and utilities payment more convenient.",
                            title:"Utility Bills Payment"
                        }
                    ].map((ab,index)=>{
                        const{
                            icon,
                            name,
                            title
                        }=ab;
                        return(
                            <div 
                                key={index}
                                className=" mb-2 p-4 rounded-lg bg-white"
                            >
                                <div className="icon p-4 bg-light-yellow w-fit mb-4">
                                    {icon}
                                </div>
                                <Text   
                                    value={title}
                                    style="text-lg c-brown mb-4 font-medium"
                                />
                                <Text   
                                    value={name}
                                    style="text-sm c-brown"
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}