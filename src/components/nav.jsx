import { AiOutlineAlignRight } from "react-icons/ai"
import { Btn } from "../elements/btn"
import { Text } from "../elements/text"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { LogOutUser } from "../store/authSlice"
import { useDispatch } from "react-redux"

export const Nav =()=>{
    const navRef = useRef(null);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
    const dispatch =useDispatch();
    return(
        <div className="flex justify-between lg:items-center xl:items-center md:items-center xs:items-start sm:items-start xxs:items-start lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col">
            <div className="lg:w-3/12 xl:w-3/12 md:w-3/12 sm:w-full xs:w-full items-center xxs:w-full flex">
                <img 
                    src="https://peacesub.com.ng/static/logo.png"
                    alt="object not found"
                    className="w-14 h-14"
                />
                <span 
                    className="ms-auto hamburger"
                    onClick={()=>navRef.current.classList.toggle("active")}
                    ><AiOutlineAlignRight
                    color="brown"
                    size="2rem"
                /></span>
            </div>
            <div ref={navRef} className="nav justify-between lg:items-center xl:items-center md:items-center xs:items-start sm:items-start xxs:items-start lg:w-9/12 xl:w-9/12 md:w-9/12 sm:w-full xs:w-full xxs:w-full lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col">
                <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 sm:w-full xs:w-full xxs:w-full flex lg:items-center xl:items-center md:items-center xs:items-start sm:items-start xxs:items-start justify-between lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col">
                    {
                        [
                            {
                                name:"HOME"
                            },{
                                name:"ABOUT US"
                            },{
                                name:"SERVICE"
                                
                            },{
                                name:"PRICING"
                            }
                        ].map((link,index)=>{
                            return(
                                <div 
                                    key={index}
                                > 
                                    <Text
                                        style="text-sm sm:mb-3 xs:mb-3 xxs:mb-3 xl:mb-0 lg:mb-0 md:mb-0 c-brown"
                                        value={link.name}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex justify-end lg:items-center xl:items-center md:items-center xs:items-start sm:items-start xxs:items-start lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col xl:w-2/6 lg:w-2/6 md:w-2/6 sm:w-full xs:w-full xxs:w-full">
                    <div className="me-4 sm:mb-2 xs:mb-2 xxs:mb-2 xl:mb-0 lg:mb-0 md:mb-0">
                        <Btn
                            style="text-white bg-tick-blue py-3 px-6 text-sm"
                            value={user?"Logout":"Login"}
                            clickFunc={()=>user?dispatch(LogOutUser()):navigate("/login")}
                        />
                    </div>
                    <div>
                        <Btn
                            style="border-brown c-brown py-3 px-6 text-sm"
                            value={user?"DashBoard":"Create Account"}
                            clickFunc={()=>user?navigate("/dashboard"):navigate("/register")}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}