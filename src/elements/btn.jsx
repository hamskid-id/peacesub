export const Btn=({
    value,
    style,
    clickFunc
})=><button 
        className={`inline-block rounded-sm leading-normal  ${style}`} 
        onClick={clickFunc}>{value}
    </button>