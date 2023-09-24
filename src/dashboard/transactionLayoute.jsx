import { Text } from "../elements/text"

export const Translayout =({title,data})=>{
    const headStyle = "px-6 py-4"
    const bodyStyle ="whitespace-nowrap  px-6 py-4 font-medium"
    return(
        <div className="px-4">
           { title && (
                <Text 
                    style="text-start font-light text-lg my-2"
                    value={title}
                />
           )} 
            <div className="flex flex-wrap justify-between mb-2">
                <div className="flex items-center mb-1">
                    <label htmlFor="sort" className="w-48 me-1">Sort By:</label>
                    <select 
                        name="sort"
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    >
                        <option>Date</option>
                    </select>
                </div>
                <div className="mb-1 lg:w-1/4 xl:w-1/4 md:w-1/4 sm:w-1/2 xs:w-1/2">
                    <input
                        type="search"
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        id="exampleSearch"
                        placeholder="Type query" />
                </div>
            </div>

            <div className="flex flex-col overflow-x-auto">
                <div className="sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-center text-sm font-light">
                                <thead
                                    className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                    <tr>
                                        {
                                            [   
                                                "#",
                                                "Id",
                                                "Title",
                                                "Remark",
                                                // "Token",
                                                // "Server Response",
                                                "Server",
                                                "New Balance(₦)",
                                                "Prev Balance(₦)",
                                                "Type",
                                                "Status",
                                                "Recipient",
                                                "Amount(₦)",
                                                "Commission",
                                                "Charges(₦)",
                                                "Reference",
                                                "Created At",
                                                "Updated At",
                                            ].map((head,index)=>{
                                                return  <th scope="col" key={index} className={headStyle}>{head}</th>
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((info,index)=>{
                                            const{
                                                id,
                                                title,
                                                remark,
                                                // token,
                                                // server_response,
                                                server,
                                                new_balance,
                                                prev_balance,
                                                type,
                                                status,
                                                recipient,
                                                amount,
                                                commission,
                                                charges,
                                                reference,
                                                created_at,
                                                updated_at,
                                            }=info
                                            return(
                                                <tr 
                                                    className="border-b dark:border-neutral-500"
                                                    key={index}
                                                >
                                                    <td className={bodyStyle}>{index+1}</td>
                                                    {
                                                        [
                                                            id,
                                                            title,
                                                            remark,
                                                            // token,
                                                            // server_response?.status,
                                                            server,
                                                            new_balance,
                                                            prev_balance,
                                                            type,
                                                            status,
                                                            recipient,
                                                            amount,
                                                            commission,
                                                            charges,
                                                            reference
                                                        ].map((body,index)=>{
                                                            return  (
                                                                <td className={bodyStyle} key={index}>{body}</td>
                                                                )
                                                        })
                                                    }
                                                    <td className={bodyStyle}>{
                                                            new Date(created_at)
                                                            .toLocaleString()
                                                        }
                                                    </td>
                                                    <td className={bodyStyle}>{
                                                            new Date(updated_at)
                                                            .toLocaleString()
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {
                data?.length ===0 &&(
                    <div className="w-44 m-auto">
                        <img 
                            src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
                            alt="object not found"
                        />
                    </div>
                )
            }
            
        </div>
    )
}