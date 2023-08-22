import { Text } from "../elements/text";
import { Btn } from "../elements/btn";
export const WelcomeSection =()=>{
    return(
        <div className="flex justify-between lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col  xxs:flex-col sm:flex-col-reverse xxs:flex-col-reverse xs:flex-col-reverse">
            <div className="lg:w-5/12 xl:w-5/12 md:w-5/12 sm:w-full xs:w-full xxs:w-full">
                <img
                    src="https://peacesub.com.ng/static/styling/img/illustrations/cup boy.png"
                    className="w-full"
                    alt="object not found"
                />
            </div>
            <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full pt-8 px-2">
                <div className="mb-6">
                    <span className="text-start text-6xl font-medium c-brown">
                        Welcome To<span className="text-start text-6xl font-extrabold c-blue ms-2 break-all">Peacesub</span>
                    </span>
                </div>
                 <Text
                    style="text-start text-lg mb-6 c-brown font-light"
                    value="peacesub is a registered telecommunication company that provide voice or data transmission services, such as; Mobile Data, Cable Sub, Electric Bill, Airtime (VTU)..."
                />
                <div className="flex  lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col">
                    <div className="me-4 sm:mb-2 xs:mb-2 xxs:mb-2 xl:mb-0 lg:mb-0 md:mb-0">
                        <Btn
                            style="text-white bg-tick-blue py-5 px-8 text-sm"
                            value="Login"
                        />
                    </div>
                    <div>
                        <Btn
                            style="border-brown c-brown py-5 px-8 text-sm"
                            value="Create Account"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}