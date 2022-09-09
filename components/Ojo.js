import * as React from 'react'
import { useState } from "react";
import Dropdown from "./Dropdown";
import { useRecoilValue } from 'recoil';
import { tokenState } from '../atoms/atoms';

export default function Ojo() {
    const categorias = ["Conveniencia", "Categoria 2", "Comparacion", "Convicción"]
    const [selectedCategory, setSelectedCategory] = useState(-1);

    const token = useRecoilValue(tokenState)
    console.log(token)


    return (
        <div className='w-full px-10 py-20 bg-white border-gray-100 rounded-3xl'>
            <h1 className='text-5xl font-semibold'>Introduce los datos del producto</h1>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Nombre </label>
                    <input
                        className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                        placeholder='Introduce el nombre del producto'
                    />
                </div>

                <div className='w-full'>
                    <div className="flex flex-col flex-1">
                        <Dropdown
                            text={selectedCategory >= 0 ? categorias[selectedCategory] : 'Categorías'}>
                            <ul className='absolute justify-center flex-1'>
                                {categorias.map((category, index) => (
                                    <li key={`categorias-${index}`} className="w-full py-2 text-center bg-indigo-100 rounded-b cursor-pointer hover:bg-indigo-200"
                                        onClick={() => setSelectedCategory(index)}>
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </Dropdown>
                    </div>
                </div>

                <div>

                    <label className='text-lg font-medium'> Cantidad</label>
                    <input
                        className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                        placeholder='Introduce la cantidad de productos'
                    />

                </div>
                <div>

                    <label className='text-lg font-medium'>Precio</label>
                    <input
                        className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                        placeholder='Introduce el precio unitario'
                    />

                </div>
                <div className='flex-col mt-8 gap-y-4'>
                    <button className='active:scale-[.98] w-full active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-indigo-400 text-white text-lg font-bold'>
                        Guardar
                    </button>

                </div>



            </div>



        </div>
    )



}
;