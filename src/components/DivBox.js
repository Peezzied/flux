export default function DivBox({children, container, div, ...props}){
    return(
    <div className={div} {...props}>
        <div className={container}>
            {children}
        </div>
    </div>
    )
}