export default function DivBox({children, container, div}){
    return(
    <div className={div}>
        <div className={"container " + container}>
            {children}
        </div>
    </div>
    )
}