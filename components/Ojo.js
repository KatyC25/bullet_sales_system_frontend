import * as React from 'react'
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Ojo() {
    const categorias = ["Conveniencia", "Categoria 2", "Comparacion", "Convicción"]
    const [selectedCategory, setSelectedCategory] = useState(-1);







    return (

        <div className='bg-white px-10 py-20 rounded-3xl border-gray-100'>
            <h1 className='text-5xl font-semibold'>Introduce los datos del producto</h1>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Nombre </label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Introduce el nombre del producto'
                    />
                </div>

                <div className="flex flex-col justify-center ">
                    <Dropdown
                        text={selectedCategory >= 0 ? categorias[selectedCategory] : 'Categoría'}>
                        <ul>
                            {categorias.map((category, index) => (
                                <li key={`categoria-${index}`} className="py-2 text-center rounded-b cursor-pointer bg-blue-50 hover:bg-blue-100"
                                    onClick={() => setSelectedCategory(index)}>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </Dropdown>

                </div>















                <div>

                    <label className='text-lg font-medium'> Cantidad</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Introduce la cantidad de productos'
                    />

                </div>
                <div>

                    <label className='text-lg font-medium'>Precio</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Introduce el precio unitario'
                    />

                </div>
                <div className='mt-8 flex-col gap-y-4'>
                    <button className='active:scale-[.98] w-full active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-yellow-500 text-white text-lg font-bold'> Ingresar</button>

                </div>



            </div>



        </div>
    )



}
;