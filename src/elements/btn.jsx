export const Btn=({
    value,
    style,
    clickFunc,
    loadingStatus
})=><button 
        className={`inline-block rounded-md leading-normal btn ${style}`} 
        onClick={clickFunc}>
        {
            loadingStatus ===true ? 
                (
                    <div className="text-xs">
                    <span
                        className="me-2 inline-block h-4 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] me-1"
                            >Loading...</span>
                    </span></div>
                ):<span>{value}</span>
        }
    </button>