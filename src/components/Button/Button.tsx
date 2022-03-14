import style from "./Button.module.css"

type ButtonPropsType = {
    name: string
    type: "button" | "submit" | "reset" | undefined
}

export function Button(props: ButtonPropsType) {
    return (<div>
        <button
            className={style.button}
            type={props.type}
        >
            {props.name}
        </button>
    </div>)
}