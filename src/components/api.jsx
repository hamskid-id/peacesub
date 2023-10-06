import { useSelector } from "react-redux";
import { Btn } from "../elements/btn"
import { Text } from "../elements/text"
import { RevealAnimation } from "./reveal"
import { useNavigate } from "react-router-dom";

export const Api =()=>{
    const {userLoaded} =useSelector((state)=>state.auth);
    const navigate = useNavigate()
    return(
        <div className="api-bg py-20">
            <div className="m-auto w-fit p-4">
                <RevealAnimation side={true}>
                    <Text
                        style="font-medium text-5xl text-center c-brown mb-4"
                        value="Integrate Our Api"
                    />
                </RevealAnimation>
                <RevealAnimation>
                    <Text
                        style="leading-8 font-normal c-brown text-center text-sm mb-4 lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full m-auto"
                        value="With our ready-to-use and developer friendly API, you can easily integrate with your website or app for FREE to start receiving payments in a breeze..!"
                    />
                </RevealAnimation>
                <div className="m-auto w-fit">
                    <RevealAnimation side={true}>
                        <Btn
                            style="text-white bg-tick-blue py-5 px-8 text-sm"
                            value="Get Started"
                            clickFunc={()=>userLoaded?navigate("/dashboard"):navigate("/login")}
                        />
                    </RevealAnimation>
                </div>
            </div>
        </div>
    )
}