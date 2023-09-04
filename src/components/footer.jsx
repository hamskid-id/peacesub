import { Text } from "../elements/text"
import { RevealAnimation } from "./reveal";

export const Footer =()=>{
    return(
        <div className="py-16 px-10 bg-light-blue footer">
            <div className="w-20 h-20 mb-4">
                <RevealAnimation side={true}>
                    <img 
                        src="https://peacesub.com.ng/static/logo.png"
                        alt="object not found"
                        className="w-full"
                    />
                </RevealAnimation>
            </div>
            <RevealAnimation>
                <Text
                    style="text-white mb-4 font-light text-lg"
                    value="Here at peacesub., we offer you the most affordable and most cheapest data, airtime, Dstv, Gotv and Startimes subscription...."
                />
            </RevealAnimation>
            <div className="mb-4">
                <RevealAnimation>
                    <Text
                        style="text-white mb-4 text-xl"
                        value="Services"
                    />
                </RevealAnimation>
                <ul className="list-disc">
                    {
                        ["Buy Data","Airtime TopUp","Cable Subscription","Bill Payment","Bulk Sms"].map((link,index)=>{
                            return(
                                <li 
                                    key={index}
                                    className="text-white font-normal text-sm mb-3 ms-8"
                                >
                                    <RevealAnimation>
                                        {link}
                                    </RevealAnimation>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="mb-4">
                <RevealAnimation>
                    <Text
                        style="text-white mb-4"
                        value="CONTACT US"
                    />
                </RevealAnimation>
                <div>
                    {
                        [{phone:"PHONE:",value:"08067556850"},{phone:" EMAIL:",value:"peacesub@gmail.com"},{phone:"ADDRESS:",value:"State University area,Oke Baale,Osogbo, Osun State"}].map((link,index)=>{
                            const{
                                phone,value
                            }=link;
                            return(
                                <div 
                                    key={index}
                                    className=" mb-3"
                                >
                                    <RevealAnimation>
                                        <Text
                                            style="text-white mb-4 font-mediumn text-sm"
                                            value={phone}
                                        />
                                    </RevealAnimation>
                                    <RevealAnimation>
                                        <Text
                                            style="text-white text-sm font-light mb-4"
                                            value={value}
                                        />
                                    </RevealAnimation>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <RevealAnimation>
                <Text
                    style="text-white mb-4 font-mediumn text-2xl"
                    value="ABOUT PEACESUB 2"
                />
            </RevealAnimation>
            <RevealAnimation>
                <Text
                    style="text-white mb-4 font-light text-sm"
                    value="We offer fast and reliable data Bundles for all network, cable TV subscriptions, vtu for all network, phcn prepaid meter subscription. We are number one trusted vendor. Patronise us now and you won't regret it."
                />
            </RevealAnimation>
        </div>
    )
}