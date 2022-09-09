import { useRef } from "react"
import ErrorBox from "../components/ErrorBox"
function Registro() {
    const error = useRef(false)
    return (
        <div className='px-10 py-20 bg-white border-gray-100 rounded-3xl'>
            <h1 className='text-5xl text-center font-semibold'>Registro</h1>
            <ErrorBox error={error.current} />
            <p className='mt-4 text-lg text font-medium text-gray-500'>Ingresa tus datos a registrar</p>
            <div className='mt-8'>
                <div >
                    <label className='text-lg font-medium'> Usuario </label>
                    <input
                        className='w-full p-4 mt-1 bg-transparent border-2 border-red-300 rounded-xl'
                        placeholder='Introduce tu Usuario'
                        name="username"
                    />

                </div>
                <div >
                    <label className='text-lg font-medium'> Correo Electronico </label>
                    <input
                        className='w-full p-4 mt-1 bg-transparent border-2 border-red-300 rounded-xl'
                        placeholder='Introduce tu Emmail'
                        name="email"
                        type="email"
                    />

                </div>

                <div>

                    <label className='text-lg font-medium'>Introduce una Contraseña</label>
                    <input
                        className='w-full p-4 mt-1 bg-transparent border-2 border-red-300 rounded-xl'
                        placeholder='Introduce tu Contraseña'
                        type="password"
                        name="password1"
                    />

                </div>



                <div>

                    <label className='text-lg  font-medium'>Confirma la Contraseña</label>
                    <input
                        className='w-full p-4 mt-1 bg-transparent border-2 border-red-300 rounded-xl'
                        placeholder='Contraseña'
                        type="password"
                        name="password2"
                    />


                </div>
                <div className='flex-col mt-8 gap-y-4'>
                    <button className='active:scale-[.98] w-full active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-red-500 text-white text-lg font-bold'>Registrarse</button>

                </div>
                <p> </p>
            </div>

        </div>

    )


}
export default Registro