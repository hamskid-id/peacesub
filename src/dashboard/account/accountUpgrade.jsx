import { AiOutlineAlignLeft } from "react-icons/ai"
import { Btn } from "../../elements/btn"
import { Text } from "../../elements/text"
import { DashboardLayout } from "../dashLayout"

export const AccountUpgrade =()=>{
    return(
        <DashboardLayout>
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="flex flex-wrap justify-between p-4 bg-whitesmoke items-center">
                    <div>
                        <Text
                            style="text-xl text-start text-medium"
                            value="ACCOUNT UPGRADE"
                        />
                    </div>
                    <div className="w-24">
                        <img 
                            src="https://www.kindpng.com/picc/m/361-3619126_upgrade-icons-hd-png-download.png"
                            alt="object not found"
                        />
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex flex-col mb-3">
                        <Text   
                            style="text-sm text-start font-mediumm mb-3"
                            value="CURRENT PACKAGE"
                        />
                        <div class="relative flex flex-nowrap items-stretch">
                            <span
                                class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                id="addon-wrapping"
                                ><AiOutlineAlignLeft/></span
                            >
                            <input
                                type="text"
                                class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-3 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Username"
                                aria-label="Username"
                                value="SMART EARNER"
                                aria-describedby="addon-wrapping" />
                         </div>
                    </div>
                    <div className="flex flex-col mb-3">
                        <Text   
                            style="text-sm text-start font-medium mb-3"
                            value="Selcect pacakage to upgrade"
                        />
                        <div class="relative flex flex-wrap items-stretch">
                            <label
                                class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-4 text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                for="inputGroupSelect01"
                                ><AiOutlineAlignLeft/></label
                            >
                            <select
                                class="form-select relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">AFFILIATE---1000</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-fit ms-auto">
                        <Btn
                            style="bg-primary py-3 px-8 rounded-sm text-white"
                            value="Proceed"
                        />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}