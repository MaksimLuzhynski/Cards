import style from "./Button.module.css"

type ButtonPropsType = {
    name: string
    type: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

export function Button(props: ButtonPropsType) {
    return (<div>
        <button
            className={style.button}
            type={props.type}
            onClick={props.onClick}
        >
            {props.name}
        </button>
    </div>)
}