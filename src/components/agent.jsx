import { Btn } from "../elements/btn"
import { Text } from "../elements/text"
import { RevealAnimation } from "./reveal";

export const Agent =()=>{
    return(
        <div className="px-10 py-16 agent">
            <div className="lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full">
                <RevealAnimation side={true}>
                    <Text
                        style="font-medium text-6xl c-brown mb-4"
                        value="Become An Agent"
                    />
                </RevealAnimation>
                <RevealAnimation>
                    <Text
                        style="leading-6 font-light c-brown text-lg text-start mb-4 w-full"
                        value="Join our network of outstanding entrepreneurs patnering with network.com Bring the Network.com 'easy-payments' experience closer to your network and earn a commission for every transaction you perform for your customers... We offer our Referrers the best referral program incentives to encourage entrepreneurial and managerial skill acquisition; enhance growth and development and general empowerment among our students on campuses of higher learning and youths in diaspora. Finally, to promote technology via the use of ICT tools in our society..."
                    />
                </RevealAnimation>
                <div className="pb-4">
                    <RevealAnimation side={true}>
                        <Btn
                            style="text-white bg-light-blue py-5 px-8 text-sm"
                            value="Get Started"
                        />
                    </RevealAnimation>
                </div>
            </div>
            <div className="flex justify-between lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col  xxs:flex-col m-auto lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full" >
                {
                    [
                        {
                            name:"MUHAMMED TOHEEB",
                            info:"peacesub is best platform when its come to affordable data plan for both end user and resseller, i recommend this platform it's fast automated and secured.",
                            profile:"Student",
                            img:"https://peacesub.com.ng/static/styling/img/team/user-2.png"
                        },{
                            name:"FAITH ANDREW",
                           info:"I love the quick response to people. we might just get alone well. so far so good there is no star here but i give.",
                            profile:"Lead Developer",
                            img:"https://peacesub.com.ng/static/styling/img/team/user-4.png"
                        },{
                            info:"This site is greate... all thanks to Awoofdata i can really say that since i join this site i have been earning more than before kudos to peacesub kudos to developer....",
                            name:"OPEYEMI OLARENWAJU",
                            profile:"Marketer",
                            img:"https://peacesub.com.ng/static/styling/img/team/user-7.png"
                        },
                    ].map((review,index)=>{
                        const{
                            info,
                            name,
                            profile,
                            img
                        }=review;
                    return(
                        <div 
                            key={index}
                            className="mb-2 bg-white p-4 rounded-md md:m-2 lg:m-2 xl:m-2 sm:mx-auto xs:mx-auto xxs:mx-auto lg:w-2/6 xl:w-2/6 md:w-2/6 sm:w-full xs:w-full xxs:w-full flex flex-col justify-between">
                            <div className="w-16 mb-3">
                                <RevealAnimation>
                                    <img 
                                        src="https://assets.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e5591f791726bd27710248_favourite-31.svg" 
                                        alt="object not found"
                                        className="w-full"
                                    />
                                </RevealAnimation>
                            </div>
                            <RevealAnimation>
                                <Text   
                                    style="c-brown font-light text-xs mb-3"
                                    value={info}
                                />
                            </RevealAnimation>
                            <div className="flex items-center">
                                <div className="w-12 mb-1 me-2">
                                    <RevealAnimation>
                                        <img 
                                            src={img}
                                            alt="object not found"
                                            className="w-full"
                                        />
                                    </RevealAnimation>
                                </div>
                                <div>
                                    <RevealAnimation>
                                        <Text   
                                            style="c-brown text-lg font-medium"
                                            value={name}
                                        />
                                    </RevealAnimation>
                                    <RevealAnimation>
                                        <Text   
                                            style="c-blue"
                                            value={profile}
                                        />
                                    </RevealAnimation>
                                </div>
                            </div>
                        </div>
                    )})
                }
            </div>
            <div>
            <div className="flex justify-between lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col  xxs:flex-col mx-auto mt-20">
                {
                    [
                        {
                            img:"https://peacesub.com.ng/static/styling/img/blog/banner-home-hottesttunes.jpg",
                            text:"Enjoy Awoof Discounts.",
                            info:"We give you massive discounts on all our products/services when you create an account with us. bulk.."
                        },{
                            img:"https://peacesub.com.ng/static/styling/img/blog/0_rKtN7rFa5DKMDGJe_%20-%20Copy.jpg",
                            info:"Get a VTU website at a very budget friendly rate, for more informations contact admin. partnerships..",
                            text:"Create An Affiliate Website."
                        },{
                            img:"https://peacesub.com.ng/static/styling/img/blog/Careers-Newsroom-Carousel@2x.jpg",
                            info:"We provide well documented & easy to integrate API documention, no matter what programming language you make use of...",
                            text:"Developer's API."
                        }
                    ].map((card,index)=>{
                        const{
                            img,
                            info,
                            text
                        }=card;
                        return(
                            <div className="w-2/6 sm:w-full xs:w-full xxs:w-full my-4 rounded-lg bg-white flex flex-col justify-between md:m-4 lg:m-4 xl:m-4 sm:mx-auto xs:mx-auto xxs:mx-auto">
                                <div className="w-full">
                                    <RevealAnimation>
                                        <img 
                                            src={img}
                                            alt="object not found"
                                            className="w-full rounded-t-md"
                                        />
                                    </RevealAnimation>
                                </div>
                                <div className="p-6 flex flex-col justify-between">
                                    <RevealAnimation>
                                        <Text
                                            style="text-xl text-start leading-6 c-brown font-medium mb-4"
                                            value={text}
                                        />
                                    </RevealAnimation>
                                    <RevealAnimation>
                                        <Text
                                            style="text-sm text-start leading-5 c-brown font-light"
                                            value={info}
                                        />
                                    </RevealAnimation>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}