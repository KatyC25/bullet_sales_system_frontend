import { useState, Fragment } from 'react'
import InputLabel from './InputLabel'


const nombreEmpresa = [
    { label: 'Nombre de la empresa', inputName: 'nombre', type: 'text' },
    { label: 'Periodo de la empresa', inputName: 'periodo', type: 'text' },

]

const activos = [
    { label: 'Caja', inputName: 'caja', type: 'number' },
    { label: 'Banco', inputName: 'banco', type: 'number' },
    { label: 'Mercancias', inputName: 'mercancias', type: 'number' },
    { label: 'Documentos por cobrar', inputName: 'documentos', type: 'number' },
    { label: 'Deudores diversos', inputName: 'deudores', type: 'number' },
]

const activosFijos = [
    { label: 'Edificio', inputName: 'edificio', type: 'number' },
    { label: 'Mobiliario y Equipo', inputName: 'mobiliarioE', type: 'number' },
    { label: 'Depositos en garantia', inputName: 'depositos', type: 'number' },
]
const activosDiferidos = [
    { label: 'Gastos de instalacion', inputName: 'GastosdeInstalacion', type: 'number' },
    { label: 'Papeleria y utiles', inputName: 'papeleria', type: 'number' },
]
const pasivosCirculante = [
    { label: 'Proveedores', inputName: 'proveedores', type: 'number' },
    { label: 'Documentos por pagar', inputName: 'documentosp', type: 'number' },
    { label: 'Acreedores diversos', inputName: 'acreedores', type: 'number' },

]
const pasivoFijo = [
    { label: 'Acreedores hipotecarios', inputName: 'acreedoresh', type: 'number' },

]
const pasivoDiferido = [
    { label: 'Rentas cobradas por anticipado', inputName: 'rentas', type: 'number' },

]
const patrimonio = [
    { label: 'Capital social', inputName: 'capital', type: 'number' },

]

function generarInputLabels(arreglo, key_name) {
    return (<div>
        {arreglo.map((obj, index) => <InputLabel
            label={obj.label}
            inputName={obj.inputName}
            key={key_name + index
            } type={obj.type} />)}
    </div>)

}

export default function Pestaña(props) {

    return (
        <div className='w-screen px-10 py-20 bg-white border-gray-100 rounded-3xl'>
            <h1 className='text-5xl font-semibold'> Balance General</h1>
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
                <h2 className='text-lg text-center font-serif'>Activos de la empresa</h2>
                <h2 className='text-center font-serif'>Activos Circulantes</h2>
                {generarInputLabels(activos, 'activos')}
                <h2 className='text-center font-serif'>Activos Fijos</h2>
                {generarInputLabels(activosFijos, 'activosFijos')}
                <h2 className='text-center font-serif'> Activos Diferidos</h2>
                {generarInputLabels(activosDiferidos, 'activosDiferidos')}
                <h2 className='text-lg text-center font-serif'>Pasivos de la empresa</h2>
                <h2 className='text-center font-serif'>Pasivos circulante</h2>
                {generarInputLabels(pasivosCirculante, 'pasivosCirculantes')}
                <h2 className='text-center font-serif'>Pasivos fijos</h2>
                {generarInputLabels(pasivoFijo, 'pasivoFijo')}
                <h2 className='text-center font-serif'>Pasivos diferidos</h2>
                {generarInputLabels(pasivoDiferido, 'pasivoDiferido')}
                <h2 className='text-lg text-center font-serif'>Patrimonio</h2>
                {generarInputLabels(patrimonio, 'patrimonio')}

                <button className=' active:scale-[.98] w-full active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-indigo-400 text-white text-lg font-bold'
                    type="Calcular" >Calcular</button>
            </form>
        </div>
    )

};



//                 <div >
//                     <label className='text-lg font-medium'>Nombre de la empresa</label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce razon social'

//                     />


//                 </div>
//                 <div>
//                     <label className='text-lg font-medium'>Periodo </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el periodo a evaluar'
//                     />
//                 </div>
//                 <div >
//                     <h2 className='font-semibold text-3 xl'>Activos</h2>
//                     <h3 className='text-2xl font-semibold'>Activo Circulante</h3>
//                     <label className='text-lg font-medium'>Caja </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor de caja'
//                     />
//                 </div>

//                 <div>
//                     <label className='text-lg font-medium'>Banco </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor de banco'
//                     />
//                 </div>
//                 <div>
//                     <label className='text-lg font-medium'>Mercancias </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor de las Mercancias'
//                     />
//                 </div>
//                 <div>
//                     <label className='text-lg font-medium'>Documentos por cobrar</label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor de los documentos'
//                     />
//                 </div>
//                 <div>
//                     <label className='text-lg font-medium'>Deudores diversos </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor de los deudores'
//                     />
//                 </div>
//                 {/* 

//                 <div>
//                     <h3 className='text-2xl font-semibold'>Activo Fijos</h3>
//                     <label className='text-lg font-medium'>Edificio</label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor del edificio'
//                     />
//                 </div>
//                 <div>
//                     <label className='text-lg font-medium'>Mobiliario y equipo </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor'
//                     />
//                 </div>
//                 <div>
//                     <label className='text-lg font-medium'>Depositos en garantia </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor de banco'
//                     />
//                 </div>
//                 <div>
//                     <h3 className='text-2xl font-semibold'>Activo Diferidos</h3>
//                     <label className='text-lg font-medium'>Gastos de instalacion</label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='introduce el valor'
//                     />
//                 </div>
//                 <div>
//                     <label className='text-lg font-medium'>Papeleria y utiles</label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='introduce el valor'
//                     />
//                 </div>
//                 <div>
//                     <label className='text-lg font-medium'>Otros activos diferidos</label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='introduce el valor'
//                     />
//                 </div>

//                 <div>
//                     <h2 className='text-3xl font-semibold'>Pasivo</h2>
//                     <h3 className='text-2xl font-semibold'>Pasivo Circulante</h3>
//                     <label className='text-lg font-medium'>Proveedores </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor'
//                     />
//                 </div>
//                 <div>
//                     <label className='text-lg font-medium'>Documentos por pagar </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor de los documentos'
//                     />
//                 </div>
//                 <div>
//                     <label className='text-lg font-medium'>Accreedores diversos</label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor'
//                     />
//                 </div>
//                 <div>
//                     <h3 className='text-2xl font-semibold'>Pasivo Fijo</h3>
//                     <label className='text-lg font-medium'>Accreedores Hipotecarios </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor'
//                     />
//                 </div>
//                 <div>
//                     <h3 className='text-2xl font-semibold'>Pasivo Diferido</h3>
//                     <label className='text-lg font-medium'>Rentas cobradas por anticipado </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor'
//                     />
//                 </div>

//                 <div>
//                     <h3 className='text-3xl font-semibold'>Patrimonio</h3>
//                     <label className='text-lg font-medium'>Capital social </label>
//                     <input
//                         className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
//                         placeholder='Introduce el valor'
//                     />
//                 </div>
//  */}