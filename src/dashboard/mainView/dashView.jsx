import {  AiOutlineArrowRight, AiOutlineCopy } from "react-icons/ai"
import { Btn } from "../../elements/btn"
import { Text } from "../../elements/text"
import { DashboardLayout } from "../dashLayout"

export const DashView=()=>{
    return(
        <DashboardLayout>
            <div className="py-4">
                <ul
                    className="flex list-none flex-col flex-wrap pl-0 md:flex-row"
                    id="pills-tab"
                    role="tablist"
                    data-te-nav-ref>
                    <li role="presentation">
                        <a
                        href="#pills-home"
                        className="mb-1 block rounded bg-neutral-100 px-7 w-fit pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-start dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                        id="pills-home-tab"
                        data-te-toggle="pill"
                        data-te-target="#pills-home"
                        data-te-nav-active
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        >Fidelity Bank</a >
                    </li>
                    <li role="presentation">
                        <a
                        href="#pills-profile"
                        className="mb-1 block rounded bg-neutral-100 w-fit px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-start dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                        id="pills-profile-tab"
                        data-te-toggle="pill"
                        data-te-target="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                        >Moniepoint microfinance bank</a>
                    </li>
                    <li role="presentation">
                        <a
                        href="#pills-contact"
                        className="mb-1 block rounded bg-neutral-100 w-fit px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-start dark:data-[te-nav-active]:text-primary-700 md:mr-4"
                        id="pills-contact-tab"
                        data-te-toggle="pill"
                        data-te-target="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                        >Wema Bank</a>
                    </li>
                    </ul>
                    <div className="mb-6">
                    <div
                        className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block bg-white p-6 shadow"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        data-te-tab-active>
                        <div className="w-28 mb-4">
                            <img 
                                src="https://www.seekpng.com/png/detail/356-3560448_fidelity-bank-old-logo-brandessence-fidelity-bank-nigeria.png"
                                alt="object not found"
                            />
                        </div>
                        <Text
                            style="text-start font-medium text-xl mb-3"
                            value="Account Number: 4554631322"
                        />
                        <Text
                            style="text-start font-medium text-xl mb-3"
                            value="PEACESUB.COM.NG - Hamzat27"
                        />
                        <Text
                            style="text-start font-medium text-xl mb-1"
                            value="Bank Name: Fidelity bank"
                        />
                         <Text
                            style="text-end font-medium text-xl mb-3"
                            value="1.5%"
                        />
                        <Text
                            style="text-end font-medium text-xl mb-3"
                            value="Charge"
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
                    <div
                        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block bg-white p-6 shadow"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab">
                        <div className="w-28  mb-4">
                            <img 
                                src="https://nigerialogos.com/logos/moniepoint/moniepoint.svg"
                                alt="object not found"
                            />
                        </div>
                        <Text
                            style="text-start font-medium text-xl mb-3"
                            value="Account Number: 6343283255"
                        />
                        <Text
                            style="text-start font-medium text-xl mb-3"
                            value="PEACESUB.COM.NG - Hamzat27"
                        />
                        <Text
                            style="text-start font-medium text-xl mb-1"
                            value="Bank Name:Moniepoint Microfinance Bank"
                        />
                        <Text
                            style="text-end font-medium text-xl mb-3"
                            value="1.5%"
                        />
                        <Text
                            style="text-end font-medium text-xl mb-3"
                            value="Charge"
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
                    <div
                        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block bg-white p-6 shadow"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab">
                        <div className="w-28  mb-4">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/en/e/ef/Wema_Bank_Plc.jpg"
                                alt="object not found"
                            />
                        </div>
                        <Text
                            style="text-start font-medium text-xl mb-3"
                            value="Account Number: 9286734915"
                        />
                        <Text
                            style="text-start font-medium text-xl mb-3"
                            value="PEACESUB.COM.NG - Hamzat27"
                        />
                        <Text
                            style="text-start font-medium text-xl mb-1"
                            value="Bank Name: Wema bank"
                        />
                         <Text
                            style="text-end font-medium text-xl mb-3"
                            value="1.5%"
                        />
                        <Text
                            style="text-end font-medium text-xl mb-3"
                            value="Charge"
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
                </div>
                <div className="bg-whitesmoke flex lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col shadow">
                    <div className="w-full xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full p-4">
                        <div className="p-4 rounded-md mb-4 w-fit ms-auto">
                            <Btn
                                style="px-6 py-2 w-fit ms-auto border-black "
                                value="Fund wallet"
                            />
                        </div>
                        <Text
                            style="text-start font-medium text-4xl mb-3"
                            value="Welcome Hamzat27"
                        />
                        <Text
                            style="text-start font-medium text-xl mb-4"
                            value="SMART EARNER"
                        />
                        <Text
                            style="text-start font-medium text-2xl mb-3"
                            value="₦ 0.00"
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
                        [
                            {
                                title:"MTN CG DATA BALANCE",
                                amount:"0.0GB"
                            },{
                                title:"GLO CG DATA BALANCE",
                                amount:"0.0GB"
                            },{
                                title:"AIRTEL CG DATA BALANCE",
                                amount:"0.0GB"
                            },
                        ].map((prod,index)=>{
                            const{
                                title,
                                amount
                            }=prod
                            return(
                                <div 
                                    key={index}
                                    className={`${index ===0?"bg-mtn":index==1?"bg-glo":"bg-airtel"} p-4 rounded shadow`}
                                >
                                    <Text
                                        style="text-start font-light text-lg mb-3 text-white"
                                        value={title}
                                    />
                                    <Text
                                        style="text-start font-medium text-lg mb-3 text-white"
                                        value={amount}
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
                                        route:""
                                    },{
                                        name:"Buy Data Pin/Coupon",
                                        route:""
                                    },{
                                        name:"Buy Airtime",
                                        route:""
                                    },{
                                        name:"Airtime to Cash",
                                        route:""
                                    },{
                                        name:"Cable Subscription",
                                        route:""
                                    },{
                                        name:"Electricity Payment",
                                        route:""
                                    },{
                                        name:"Recharge Card Printing",
                                        route:""
                                    },{
                                        name:"Education Pin",
                                        route:""
                                    },{
                                        name:"Bulk Sim",
                                        route:""
                                    }
                                ].map((prod,index)=>{
                                    const{name,route}=prod
                                    return(
                                        <div 
                                            key={index}
                                            className="flex justify-between border mb-1 p-4 rounded cursor-auto">
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
                        <div>
                            <Text
                                style="text-xl text-center font-medium mb-3"
                                value="You have not performed any transactions"
                            />
                            <div className="w-44 m-auto">
                                <img 
                                    src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
                                    alt="object not found"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8 my-4 lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                    <div className="p-4 bg-white shadow">
                        <Text   
                            style="text-start font-medium text-lg mb-3"
                            value="Retailer Website"
                        />
                        <div className="border p-4 text-start text-sm mb-4">
                            Own a PEACESUB.COM.NG retailer website and retail all our services; Such as DATA, Recharge cards printing, AIRTIME and BILLS Payment.
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
                            Refer people to PEACESUB.COM.NG and earn N500 immediately the person upgrade his/her account to affiliate or topuser
                        </div>
                        <div className="relative mb-4 flex flex-wrap items-stretch">
                            <span
                                className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                >Referal Link</span
                            >
                            <input
                                type="text"
                                value="https://peacesub.com.ng/signup/?referal=Hamzat27"
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
        </DashboardLayout>
    )
}