import { Link, useNavigate } from "react-router-dom";
import { Btn } from "../../elements/btn";
import { Text } from "../../elements/text";
import { DashboardLayout } from "../dashLayout";

export const Profile =()=>{
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('DataHubUserToken'));
    const{
      firstname,
      email,
      gender,
      lastname,
      phone,
      dob
    }=user?.user;
    return(
        <DashboardLayout>
        <div className="bg-white p-4 lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto shadow">
            <div className="flex flex-col">
                {
                    [
                        {
                            title:"First Name",
                            value:firstname
                        },{
                            title:"Last Name",
                            value:lastname
                        },{
                            title:"Gender",
                            value:gender
                        },{
                            title:"Date of Birth",
                            value:dob
                        },{
                            title:"Phone Number",
                            value:phone
                        },{
                            title:"Email",
                            value:email
                        },{
                            title:"BVN",
                            value:"2343556717289"
                        },{
                            title:"Provider",
                            value:"safehaven"
                        },{
                            title:"Bank Name",
                            value:"GTBANK"
                        },{
                            title:"Account Number",
                            value:"87826352781"
                        },{
                            title:"Vend from MTN SME Stock, till stock wallet is exhausted",
                            value:"false"
                        },{
                            title:"Vend from GLO CG Stock, till stock wallet is exhausted",
                            value:"false"
                        },{
                            title:"Vend from AIRTEL CG Stock, till stock wallet is exhausted",
                            value:"false"
                        }
                    ].map((prof,index)=>{
                        const{
                            title,
                            value
                        }=prof;
                        return(
                            <div 
                                key={index}
                                className="flex justify-between mb-2 py-3 border-bottom"
                            >
                                <div>
                                    <Text
                                        style="text-md text-start font-medium break-all"
                                        value={title}
                                    />
                                </div>
                                <div>
                                    <Text
                                        style="text-sm text-start font-light break-all"
                                        value={value}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-sm text-start font-medium w-fit me-auto mb-2">
                <Link to="/password/update" className="text-sm text-start font-medium w-fit me-auto">Change Password?</Link>
            </div>
            <Btn
                style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                value="Update profile"
                clickFunc={()=>navigate("/account/Profile/update")}
            />
        </div>
        </DashboardLayout>
    )
}