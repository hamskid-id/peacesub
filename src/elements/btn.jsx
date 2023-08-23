export const Btn=({
    value,
    style,
    clickFunc
})=><button 
        type="button"
        className={`inline-block rounded-sm leading-normal  ${style}`} onClick={clickFunc}>{value}</button>