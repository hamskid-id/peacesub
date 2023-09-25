import { Text } from "../elements/text"
import {AiFillQuestionCircle} from "react-icons/ai";
import { RevealAnimation } from "./reveal";
import { useDispatch, useSelector } from "react-redux";
import { FetchFaq} from "../store/wallet";
import { useEffect } from "react";


export const Faq =({faqref})=>{
    const dispatch = useDispatch();
    const {
         faq
    } = useSelector(state=>state.wallet);

    useEffect(()=>{
        dispatch(FetchFaq())
    },[dispatch,FetchFaq])

    return(
        <div className="p-10 bg-light" ref={faqref}>
            {
                faq?.length > 0 &&(
                    <div>
                        <RevealAnimation side={true}>
                            <Text
                                style="text-center font-medium text-5xl mb-4 mt-10 c-brown"
                                value="Frequently Asked Question"
                            />
                        </RevealAnimation>
                        <div className="py-4 grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-10 my-4 lg:w-3/4 xl:w-3/4 md:w-3/4 sm:w-full xs:w-full xxs:w-full m-auto">
                            {
                                faq?.map((ab,index)=>{
                                    const{
                                    content,
                                        title
                                    }=ab;
                                    return(
                                        <div 
                                            key={index}
                                            className={`p-3 bg-glass`}
                                        >
                                            <RevealAnimation>
                                                <div className="flex mb-3 items-start">
                                                    <div className="icon bg-white w-fit mb-4 me-3">
                                                        <AiFillQuestionCircle
                                                            size="3rem"
                                                            color="brown"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Text   
                                                            value={title}
                                                            style={"c-brown text-lg font-bold mb-4"}
                                                        />
                                                    </div>
                                                </div>
                                            </RevealAnimation>
                                            <RevealAnimation>
                                                <Text   
                                                    value={content}
                                                    style={" c-brown text-sm font-light"}
                                                />
                                            </RevealAnimation>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}