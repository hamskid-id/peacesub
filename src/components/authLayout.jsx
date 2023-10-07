import {Helmet} from "react-helmet";
export const AuthLayout =({children,adjHeight,metaTitle,style})=>{
    return(
        <div className={`${adjHeight?"ht-100":" h-screen"} authLayout flex justify-cebter items-center `}>
            <div className={`${style? style:"mx-auto  bg-white rounded-md p-6 lg:w-2/6 xl:w-2/6 md:w-2/6 sm:w-full xs:w-full xxs:w-full overflow-auto shadow"}`}>
                <div className="mb-4 m-auto w-fit">
                    <img 
                        src="https://5starcompany.com.ng/home/img/logo/logo.png"
                        alt="object not found"
                        className="w-17 h-17"
                    />
                </div>
                <Helmet>
                    <title>Peacesub - {metaTitle}</title>
                </Helmet>
                <div className="overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}