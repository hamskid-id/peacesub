import { Text } from "../elements/text"
import { AiOutlineAntDesign, AiOutlineBlock, AiOutlineRadarChart, } from "react-icons/ai";
import { RevealAnimation } from "./reveal";


export const About =({aboutref})=>{
    return(
        <div className="py-10 pt-40 px-10 bg-light" ref={aboutref}>
             <RevealAnimation side={true}>
                <Text
                    style="text-center font-medium text-5xl mb-4 mt-10 c-brown"
                    value="About peacesub"
                />
             </RevealAnimation>
             <RevealAnimation>
                <Text
                    style="text-start text-sm leading-8 c-brown"
                    value="This is a telecommunication industry playing a major role in distribution, selling affordable and most cheapest data, airtime, Dstv subscription, Gotv subscription, Startimes subscription, Convert Airtime to Cash and Electricity subscription.
                    Certain things are hard; making payments shouldn't be one of them. peacesub helps you make payments for services you enjoy right from the comfort of your home or office. The experience of total convenience,fast service delivery and easy payment is just at your fingertips.."
                />
             </RevealAnimation>
            <div className="py-4 grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-8 my-4 lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                {
                    [
                        {
                            icon:<AiOutlineRadarChart
                                    size="3rem"
                                    color="brown"
                            />,
                            name:"We use cutting-edge technology to run our services. Our delivery and wallet funding is automated, any service purchased will get delivered to you instantly....",
                            title:"We Are Automated"
                        },{
                            icon:<AiOutlineAntDesign
                                size="3rem"
                                color="brown"
                            />,
                            name:"Our platform is a fully optimized platform for reliability and dependability. You get 100% value for any transaction you carry with us...",
                            title:"We Are Reliable"
                        },{
                            icon:<AiOutlineBlock
                                size="3rem"
                                color="brown"
                            />,
                            name:"Our customers are premium to us, hence satisfying them is our topmost priority. Our customer service is just a click away.....",
                            title:"24/7 Support!"
                        },
                    ].map((ab,index)=>{
                        const{
                            icon,
                            name,
                            title
                        }=ab;
                        return(
                            <div 
                                key={index}
                                className={`${index ==0?"bg-light-purple":index ==1?"bg-darkgrey":"bg-light-blue"} rounded-lg p-4 py-8 bg-glass`}
                            >
                                <RevealAnimation>
                                    <div className="icon p-6 bg-white w-fit mb-4">
                                        {icon}
                                    </div>
                                </RevealAnimation>
                                <RevealAnimation>
                                    <Text   
                                        value={title}
                                        style={`${index==2 ? "text-white":" c-brown"} text-lg font-bold mb-4`}
                                    />
                                </RevealAnimation>
                                <RevealAnimation>
                                    <Text   
                                        value={name}
                                        style={`${index==2 ? "text-white":" c-brown"} text-sm font-light`}
                                    />
                                </RevealAnimation>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}