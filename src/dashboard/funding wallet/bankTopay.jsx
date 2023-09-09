import { useForm } from "react-hook-form"
import { DashboardLayout } from "../dashLayout";
import { Text } from "../../elements/text";
import { Btn } from "../../elements/btn";
import { InputField } from "../../components/cutormFormField";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Toast } from "../../store/apiBaseUrl";
import { useFlutterwave} from 'flutterwave-react-v3';
import { PayWithPayStack } from "./paystack";
import { payWithMonnify } from "./monnify";
import { FlutterSwal } from "./flutter";

export const FundDetails=()=>{
    const{
        selectedMethod
    } = useParams();

    const {
        atm
    } = useSelector(state=>state.data);
    const [methodInfo, setMethodInfo]=useState({});

    const [flutterMethodInfo, setFlutterMethodInfo]=useState({
        public_key: '',
        tx_ref: Date.now(),
        amount: '',
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: '',
           phone_number: '',
          name:'',
        },
        customizations: {
          title: '',
          description: '',
          logo: '',
        }
    });
    
    const handleFlutterPayment = useFlutterwave(flutterMethodInfo);
    
    const payWithFlutterWave =()=>{
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
               const{
                    data,
                    event
               }=response;
               FlutterSwal(data?.tx_ref,data?.amount,data?.charged_amount,data?.status,data?.payment_type,data?.customer?.name,data?.customer?.phone_number,data?.customer?.email,data?.card?.type,event);
            },
            onClose: () => {
                Toast.fire({
                    icon: 'info',
                    title:"Popup Closed"
                })
            },
          });
    }

    useEffect(()=>{
        const FilteredMethod = atm?.find((opt)=>opt.id ==selectedMethod);
        setMethodInfo(FilteredMethod);
    },[atm])

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const SubmitHandler =({
        phone,
        Amount,
        Age,
        Title,
        Description,
        Name,
        Email
    })=>{
        setFlutterMethodInfo((prevState)=>{
                return{
                    ...prevState,
                    public_key: methodInfo?.ppkey,
                    title: Title,
                    description: Description,
                    amount: Amount,
                    customer: {
                        email: Email,
                        phone_number: phone,
                        name:Name,
                    }
                }
            });
            switch(selectedMethod){
                case '1':PayWithPayStack(methodInfo?.ppkey,Email,Amount);
                break;
                case '2':payWithFlutterWave();
                break;
                case '3':payWithMonnify(methodInfo?.ppkey,Email,Amount,Description,Name,Age);
                break;
                default: PayWithPayStack(methodInfo?.ppkey,Email,Amount);
            }
    }

    return(
        <DashboardLayout metaTitle="Peacesub - Bank To Pay">
            <div className="bg-white shadow lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                <div className="bg-whitesmoke w-full p-6 mb-2">
                    <Text   
                        style="text-center font-medium text-xl"
                        value="BankPayment (minimum amount is ₦3000)"
                    />
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 p-4">
                    <form onSubmit={handleSubmit(SubmitHandler)} className="xs:order-last xxs:order-last sm:order-last md:order-first lg:order-first xl:order-first" >
                        {
                            [
                                {
                                    title:"Email",
                                    labelName:"Email",
                                    selectArrayOption:null,
                                    type:"email",
                                    error:errors.Email,
                                    placeHold:"kindly provide your email",
                                    subTitle:null
                                },{
                                    title:"Name",
                                    labelName:"Name",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.Name,
                                    placeHold:"enter your name",
                                    subTitle:null
                                },{
                                    title:"phone",
                                    labelName:"Phone Number",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.phone,
                                    placeHold:"Bank paid to",
                                    subTitle:null
                                },{
                                    title:"Title",
                                    labelName:"Title*",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.Title,
                                    placeHold:"Title",
                                    subTitle:null
                                },{
                                    title:"Age",
                                    labelName:"Age*",
                                    selectArrayOption:null,
                                    type:"number",
                                    error:errors.Age,
                                    placeHold:"Age",
                                    subTitle:null
                                },{
                                    title:"Description",
                                    labelName:"Description*",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.Description,
                                    placeHold:"Description",
                                    subTitle:null
                                },{
                                    title:"Amount",
                                    labelName:"Amount",
                                    selectArrayOption:null,
                                    type:"text",
                                    error:errors.Amount,
                                    placeHold:"Amount NGN",
                                    subTitle:null
                                }
                            ].map((prof,index)=>{
                                const{
                                    title,
                                    labelName,
                                    subTitle,
                                    placeHold,
                                    selectArrayOption,
                                    type,
                                    error
                                }=prof;
                                return(
                                    <div 
                                        key={index}
                                        className="w-full">
                                        <InputField
                                            name={title}
                                            subTitle={subTitle}
                                            placeHolder={placeHold}
                                            type={type}
                                            labelTitle={labelName}
                                            labelStyle="text-sm font-medium text-start"
                                            register={register}
                                            errors={error}
                                            style="text-start rounded-md p-4 border text-xs mb-4"
                                        />
                                    </div>
                                )
                            })
                        }
                        <div>
                            <Text
                                value="Your account will be suspended, if you submit without transfer
                                Please note that there is a charge of N50 if the amount greater than N9,999."
                                style="font-light text-start text-sm mb-4"
                            />
                        </div>
                         <Btn
                            style="bg-primary w-full p-3 text-white mt-4 rounded-sm"
                            value="Proceed"
                        />
                    </form>
                    <div className="px-4">
                        <div className="mb-2">
                            <Text
                                style="font-medium text-start text-xl mb-3"
                                value="Guarantee Trust Bank (GT bank)
                                        AZEEZ OLAIDE SHOBAMIKE
                                        0623169129"
                                />
                            <Text
                                style="font-light text-start text-sm mb-3 leading-6"
                                value="You can deposit or transfer fund into our account stated above. Use your registered username as depositor's name, naration or remarks Your account will be funded as soon as your payment is confirmed."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}