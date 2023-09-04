
export const AuthLayout =({children,adjHeight})=>{
    return(
        <div className={`${adjHeight?"ht-100":" h-screen"} authLayout flex justify-cebter items-center `}>
            <div className="mx-auto  bg-white rounded-md p-6 lg:w-2/6 xl:w-2/6 md:w-2/6 sm:w-full xs:w-full xxs:w-full overflow-auto shadow">
                <div className="w-20 h-20 mb-4 m-auto">
                    <img 
                        src="https://peacesub.com.ng/static/logo.png"
                        alt="object not found"
                        className="w-full"
                    />
                </div>
                <div className="overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}