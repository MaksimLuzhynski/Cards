import style from "./Button.module.css"

type ButtonPropsType = {
    name: string
    type: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    // classButtonStyle: "normal" | "red"
    className?:string
}

export function Button(props: ButtonPropsType) {

    // const classButtonStyle : {"normal" : string, "red" : string} = {
    //         "normal" : style.button,
    //         "red" : style.button_red
    // }    

    return (<div>
        <button
            // className={`${style.button} ${classButtonStyle[props.classButtonStyle]}`}
            className={`${style.button} ${props.className}`}
            type={props.type}
            onClick={props.onClick}
        >
            {props.name}
        </button>
    </div>)
}