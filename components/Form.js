import axios from "axios"
import { useEffect, useState, useRef } from "react"
import { useRecoilState } from "recoil"
import { tokenState } from "../atoms/atoms"
import { useRouter } from "next/router"
import ErrorBox from "./ErrorBox"

export default function Form() {
    const [token, setToken] = useRecoilState(tokenState)
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const error = useRef(false)

    useEffect(() => {
        error.current = false
        if (token) {
            router.push('/inventario')
        }
        axios.post(
            'http://localhost:8000/api/login/', { username: username, password: password }
        ).then(res => {
            setToken(res.data.token)
            router.push('/inventario')
        }).catch(res => {
            error.current = res.data
        })
    }, [username, password])

    return (
        <div className='px-10 py-20 bg-white border-gray-100 rounded-3xl'>
            <h1 className='text-5xl font-semibold'>Bienvenido</h1>
            <ErrorBox error={error.current} />
            <p className='mt-4 text-lg font-medium text-gray-500'> Por favor introduce tus datos.</p>
            <div className='mt-8'>
                <div >
                    <label className='text-lg font-medium'> Correo </label>
                    <input
                        className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                        placeholder='Introduce tu Correo Electronico'
                    />

                </div>
                <div>

                    <label className='text-lg font-medium'> Contraseña</label>
                    <input
                        className='w-full p-4 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                        placeholder='Introduce tu Contraseña'
                    />

                </div>
                <div className='flex items-center justify-between mt-8 '>
                    <div>
                        <input
                            type="checkbox"
                            id='remember'
                        />
                        <label className='ml-2 text-base font-medium' htmlFor="remember"> Recordar por 30 dias </label>
                    </div>


                </div>
                <div className='flex-col mt-8 gap-y-4'>
                    <button className='active:scale-[.98] w-full active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold'> Entrar</button>

                </div>
                <p> </p>
            </div>

        </div>
    )
};