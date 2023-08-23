import { motion, useInView, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
export const RevealAnimation =({
    children,
    side
})=>{
    const ref=useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
        }
    },[isInView])
    return(
        <div ref={ref} style={{position:"relative",width:"fitContent",overflow:"hidden"}}>
            <motion.div
                variants={{
                    hidden: side?{opacity: 0,x: -100}:{opacity: 0,y: 65},
                    visible: side? {opacity: 1,x: 0}:{opacity: 1,y: 0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5,delay:0.25}}
            >
                {children}
            </motion.div>
        </div>
    )

}