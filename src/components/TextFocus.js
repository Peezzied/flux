export function TextFocus({ data, styles, ...props}){
    const { odd, even } = styles
    return(
        <span {...props}>
            {data.map((i, index)=>(
                <span key={index} className={` ${index  % 2 === 0 ? even : odd}`}>{i + ' '}</span>
            ))}
        </span>
    )
}