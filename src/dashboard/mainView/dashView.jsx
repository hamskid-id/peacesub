import {  AiOutlineArrowRight, AiOutlineCopy } from "react-icons/ai"
import { Btn } from "../../elements/btn"
import { Text } from "../../elements/text"
import { DashboardLayout } from "../dashLayout"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

export const DashView=()=>{
    const navigate = useNavigate();
    const{
        vaccounts,user
      } =JSON.parse(localStorage.getItem('DataHubUserToken'));
    const dispatch = useDispatch();
    const {
        walletList
    } = useSelector(state=>state.wallet);
    const{
        firstname
    }=user
    return(
        <DashboardLayout metaTitle="5starhubs - Dashboard">
            <div className="py-4">
                <ul
                    className="flex list-none flex-col flex-wrap pl-0 md:flex-row"
                    id="pills-tab"
                    role="tablist"
                    data-te-nav-ref>
                        {
                            vaccounts?.map((acc,index)=>{
                                const{
                                    provider
                                }=acc
                                return(
                                    <li 
                                        role="presentation"
                                        key={index}
                                    >
                                        <a
                                            href={`#pills-${provider}`}
                                            className="mb-1 block rounded bg-neutral-100 px-7 w-fit pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-start dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                                            id={`pills-${provider}-tab`}
                                            data-te-toggle="pill"
                                            data-te-target={`#pills-${provider}`}
                                            data-te-nav-active
                                            role="tab"
                                            aria-controls={`pills-${provider}`}
                                            aria-selected="true"
                                        >{provider}
                                        </a >
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="mb-6">
                    {
                        vaccounts?.map((acc,index)=>{
                            const{
                                account_name,
                                account_number,
                                assignment,
                                created_at,
                                domain,
                                id,
                                provider,
                                reference,
                                status,
                                updated_at,
                                user_id
                            }=acc
                            return(
                                <div
                                    key={index}
                                    className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block bg-white p-6 shadow"
                                    id={`pills-${provider}`}
                                    role="tabpanel"
                                    aria-labelledby={`pills-${provider}-tab`}
                                    data-te-tab-active={index ==0?true:false}
                                    >
                                    {/* <div className="w-28 mb-4">
                                        <img 
                                            src="https://www.seekpng.com/png/detail/356-3560448_fidelity-bank-old-logo-brandessence-fidelity-bank-nigeria.png"
                                            alt="object not found"
                                        />
                                    </div> */}
                                    <Text
                                        style="text-start font-medium text-xl mb-3"
                                        value={`Account Number: ${ account_number}`}
                                    />
                                    <Text
                                        style="text-start font-medium text-xl mb-3"
                                        value={` ${account_name}`}
                                    />
                                    <Text
                                        style="text-start font-medium text-xl mb-1"
                                        value={`Bank Name: ${provider}`}
                                    />
                                    
                                    <Text
                                        style="text-end font-medium text-xl mb-3"
                                        value={status.toUpperCase()}
                                    />
                                    <Text
                                        style="text-end font-medium text-xl mb-3"
                                        value={domain.toUpperCase()}
                                    />
                                    <Text
                                        style="text-end font-light text-sm mb-3"
                                        value="AUTOMATED BANK TRANSFER"
                                    />
                                    <Text
                                        style="text-end font-light text-sm mb-3"
                                        value="Make transfer to this account to fund your wallet"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="bg-whitesmoke flex lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col shadow">
                    <div className="w-full xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full p-4">
                        <div className="p-4 rounded-md mb-4 w-fit ms-auto">
                            <Btn
                                style="px-6 py-2 w-fit ms-auto border-black "
                                value="Fund wallet"
                                clickFunc={()=>navigate('/fundwallet')}
                            />
                        </div>
                        <Text
                            style="text-start font-medium text-4xl mb-3"
                            value={`Welcome ${firstname}`}
                        />
                        <Text
                            style="text-start font-medium text-xl mb-4"
                            value="SMART EARNER"
                        />
                        <Text
                            style="text-start font-medium text-2xl mb-3"
                            value={`₦ ${walletList[0]?.balance}`}
                        />
                        <Text
                            style="text-start font-lmedium text-xl mb-3"
                            value="WALLET BALANCE"
                        />
                        <div className="flex">
                            <span className="me-2">
                                <Btn
                                    style="px-6 py-2 w-fit ms-auto bg-white text-black shadow"
                                    value="Wallet Balance"
                                />
                            </span>
                            <span>
                                <Btn
                                    style="px-6 py-2 text-white w-fit ms-auto bg-primary"
                                    value="Bonus"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="p-4 bg-grey">
                        <div className="w-24 h-24">
                            <img
                                src="https://peacesub.com.ng/static/newdashboard/img/bg-img/icon-6.png"
                                alt="object not found"
                                className="w-full"
                            />
                        </div>
                        <Text
                            style="text-start font-medium text-sm mb-3 c-blue"
                            value="Support"
                        />
                        <Text
                            style="text-start font-medium text-2xl mb-3"
                            value="Need some help?"
                        />
                        <Text
                            style="text-start font-lmedium text-md mb-3 text-black"
                            value="Have anything to say to us? Please contact our Support Team on Whatsapp"
                        />
                        <div className="me-auto w-fit">
                            <Btn
                                style="px-6 py-2 bg-primary text-white"
                                value="Contact Us"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-8 m-auto my-4">
                    {
                        walletList?.map((prod,index)=>{
                            const{
                                name,
                                balance
                            }=prod
                            return(
                                <div 
                                    key={index}
                                    className={` bg-white p-4 rounded shadow flex flex-col justify-content-center items-center`}
                                >
                                <div className="m-auto w-16 h-16 mb-2">
                                        <img 
                                            src={
                                                name =="wallet"?
                                                "https://peacesub.com.ng/static/icon.jpeg":
                                                name =="MTN SME DATA"||name =="MTN CG DATA"?
                                                "https://peacesub.com.ng/static/styling/img/mtn.png":
                                                name =="GLO CG DATA"?
                                                "https://peacesub.com.ng/static/styling/img/glo.png":
                                                name =="AIRTEL CG DATA"?
                                                "https://peacesub.com.ng/static/styling/img/airtel.png":
                                                name =="9MOBILE CG DATA"?
                                                "https://peacesub.com.ng/static/styling/img/9mobile.png":null
                                            }
                                            alt="object not found"
                                            className="w-full"
                                        />
                                </div>
                                    <Text
                                        style="text-start font-light text-lg mb-3 "
                                        value={name}
                                    />
                                    <Text
                                        style="text-start font-medium text-lg mb-3"
                                        value={balance}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="grid grid-flow-row-dense lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4 my-4">
                    <div className="xs:col-span-2 xxs:col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 bg-white p-4 shadow">
                        <Text   
                            style="text-start text-2xl font-medium mb-2"
                            value="Services"
                        />
                        <div className="flex flex-col">
                            {
                                [
                                    {
                                        name:"Buy Data",
                                        route:"/purchase/data"
                                    },{
                                        name:"Buy Data Pin/Coupon",
                                        route:"/purchase/datacoupon"
                                    },{
                                        name:"Buy Airtime",
                                        route:"/purchase/airtime"
                                    },{
                                        name:"Airtime to Cash",
                                        route:"/"
                                    },{
                                        name:"Cable Subscription",
                                        route:"/cablesub"
                                    },{
                                        name:"Electricity Payment",
                                        route:"/electrcitybill"
                                    },{
                                        name:"Recharge Card Printing",
                                        route:"/purchase/rechargeCardPin"
                                    },{
                                        name:"Education Pin",
                                        route:"/purchase/scratchcard"
                                    },{
                                        name:"Bulk Sim",
                                        route:"/purchase/bulkSms"
                                    }
                                ].map((prod,index)=>{
                                    const{name,route}=prod
                                    return(
                                        <div 
                                            key={index}
                                            className="flex justify-between border mb-1 p-4 rounded cursor-auto"
                                            onClick={()=>navigate(route)}
                                        >
                                            <Text
                                                style="text-start text-sm font-mdiumn"
                                                value={name}
                                            />
                                            <AiOutlineArrowRight/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-span-2 bg-white p-4 flex flex-col justify-center items-center shadow">
                        <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8 my-4 lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                            <div className="p-4 bg-white shadow">
                                <Text   
                                    style="text-start font-medium text-lg mb-3"
                                    value="Retailer Website"
                                />
                                <div className="border p-4 text-start text-sm mb-4">
                                    Own a 5starhubs retailer website and retail all our services; Such as DATA, Recharge cards printing, AIRTIME and BILLS Payment.
                                </div>
                                <div className="me-auto w-fit">
                                    <Btn
                                        style="px-6 py-2 bg-primary text-white"
                                        value="Request"
                                    />
                                </div>
                            </div>
                            <div className="p-4 bg-white shadow">
                                <Text   
                                    style="text-start font-medium text-lg mb-3"
                                    value="Others"
                                />
                                <div className="border p-4 text-start text-sm mb-4">
                                    Refer people to 5starhubs and earn N500 immediately the person upgrade his/her account to affiliate or topuser
                                </div>
                                <div className="relative mb-4 flex flex-wrap items-stretch">
                                    <span
                                        className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                        >Referal Link</span
                                    >
                                    <input
                                        type="text"
                                        value="https://5starhubs.vercel.app/signup/?referal=Hamzat27"
                                        className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                        aria-label="Amount (to the nearest dollar)" />
                                    <span
                                        className="bg-primary flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                        ><AiOutlineCopy color="white"/></span
                                    >
                                    </div>
                                    <div className="flex justify-between mb-3">
                                        <div>
                                            <Text
                                                style="font-medium text-lg text-start"
                                                value="My Total Referaal"
                                            />
                                        </div>
                                        <div>
                                            <Text
                                                style="font-medium text-lg text-start"
                                                value="0"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-between border mb-1 p-4 rounded cursor-auto">
                                        <Text
                                            style="text-start text-sm font-mdiumn"
                                            value="Referral List"
                                        />
                                        <AiOutlineArrowRight/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </DashboardLayout>
    )
}
