
import { Fragment } from "react"

export default function (props) {
    return (
        <Fragment>
            <label className='text-lg font-medium'>{props.label}</label>
            <input
                className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                placeholder='Introduzca el valor'
                name={props.inputName}
                type={props.type}
                required
            />
        </Fragment>
    )


}