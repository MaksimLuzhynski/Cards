import { ChangeEvent } from "react";
import style from "./Input.module.css"

type InputPropsType = {
    label: string
    value: string
    name: string
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input(props: InputPropsType) {
    return (<div>
        <label className={style.lable}>
            {props.label}
            <input
                className={style.input}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
        </label>
    </div>)
}