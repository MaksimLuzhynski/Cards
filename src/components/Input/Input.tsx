import { ChangeEvent } from "react";
import style from "./Input.module.css"

type InputPropsType = {
    label: string
    value: string
    name: string
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ label, value, name, type, onChange }: InputPropsType) {

    return (<div>
        <label className={style.lable}>
            {label}
            <input
                className={style.input}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        </label>
    </div>)
}