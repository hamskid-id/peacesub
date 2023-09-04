import { Text } from "../elements/text";
import { Btn } from "../elements/btn";
import { useNavigate } from "react-router-dom";
import { RevealAnimation } from "./reveal";
export const WelcomeSection =()=>{
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
    return(
        <div className="flex justify-between lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col  xxs:flex-col sm:flex-col-reverse xxs:flex-col-reverse xs:flex-col-reverse">
            <div className="lg:w-5/12 xl:w-5/12 md:w-5/12 sm:w-full xs:w-full xxs:w-full">
                <RevealAnimation side={true}>
                    <img
                        src="https://peacesub.com.ng/static/styling/img/illustrations/cup boy.png"
                        className="w-full h-96"
                        alt="object not found"
                    />
                </RevealAnimation>
            </div>
            <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full pt-8 px-2">
                <div className="mb-6">
                    <RevealAnimation>
                        <span className="text-start  lg:w-text-8xl xl:text-8xl md:text-8xl sm:text-6xl xs:text-6xl xxs:text-6xl font-semibold c-brown ">
                            Welcome To<span className="text-start lg:w-text-8xl xl:text-8xl md:text-8xl sm:text-6xl xs:text-6xl xxs:text-6xl font-extrabold c-blue ms-2 break-keep">Peacesub</span>
                        </span>
                    </RevealAnimation>
                </div>
                <RevealAnimation>
                    <Text
                        style="text-start text-xl mb-6 c-brown font-light"
                        value="peacesub is a registered telecommunication company that provide voice or data transmission services, such as; Mobile Data, Cable Sub, Electric Bill, Airtime (VTU)..."
                    />
                </RevealAnimation>
                <div className="flex">
                    <div className="me-4 sm:mb-2 xs:mb-2 xxs:mb-2 xl:mb-0 lg:mb-0 md:mb-0">
                        <RevealAnimation>
                            <Btn
                                style="text-white bg-tick-blue py-5 px-8 text-sm"
                                value={user?"Logout":"Login"}
                                clickFunc={()=>user?dispatch(LogOutUser()):navigate("/login")}
                            />
                        </RevealAnimation>
                    </div>
                    <div>
                        <RevealAnimation>
                            <Btn
                                style="border-brown c-brown py-5 px-5 text-sm"
                                value={user?"DashBoard":"Create Account"}
                                clickFunc={()=>user?navigate("/dashboard"):navigate("/register")}
                            />
                        </RevealAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}