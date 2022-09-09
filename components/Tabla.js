import { useState, Fragment } from 'react'
import InputLabel from './InputLabel'

const nombreEmpresa = [
    { label: 'Nombre de la empresa', inputName: 'nombre', type: 'text' },
    { label: 'Periodo de la empresa', inputName: 'periodo', type: 'text' },

]
const Gastos = [
    { label: 'Gastos de Administracion', inputName: 'admin', type: 'text' },
    { label: 'Gastos de ventas', inputName: 'ventas', type: 'text' },

]
const Impuesto = [
    { label: 'Impuestos', inputName: 'impuesto', type: 'text' },
]


function generarInputLabels(arreglo, key_name) {
    return (<div>
        {arreglo.map((obj, index) => <InputLabel
            label={obj.label}
            inputName={obj.inputName}
            key={key_name + index}
            type={obj.type}
        />)}
    </div>)

}
export default function Tabla(props) {

    return (
        <div className='w-screen px-10 py-20 bg-white border border-pink-300 rounded-3xl'>
            <h1 className='text-5xl font-semibold'> Estado de Resultado</h1>
            <form className="mt-8" onSubmit={event => {
                event.preventDefault()
                const obj = {}
                for (let element of event.target.elements) {
                    let value = element.value
                    if (value) {
                        obj[element.name] = isNaN(value) ? value : Number(value)

                    }
                }
                props.setDatosEmpresa(obj)
            }}>
                <h2 className='text-lg text-center font-serif'>Datos Esenciales</h2>
                {generarInputLabels(nombreEmpresa, 'generales')}


                {generarInputLabels(Gastos, 'Gastos')}

                {generarInputLabels(Impuesto, 'Impuesto')}


                <button className=' active:scale-[.98] w-full active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-pink-400 text-white text-lg font-bold'
                    type="Calcular" >Calcular</button>
            </form>
        </div>
    )
};








