export default function Form() {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-gray-100'>
            <h1 className='text-5xl font-semibold'>Bienvenido</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'> Por favor introduce tus datos.</p>
            <div className='mt-8'>
                <div >
                    <label className='text-lg font-medium'> Correo </label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Introduce tu Correo Electronico'
                    />

                </div>
                <div>

                    <label className='text-lg font-medium'> Contraseña</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Introduce tu Contraseña'
                    />

                </div>
                <div className='mt-8 flex justify-between items-center '>
                    <div>
                        <input
                            type="checkbox"
                            id='remember'
                        />
                        <label className='ml-2 font-medium text-base' for="remember"> Recordar por 30 dias </label>
                    </div>


                </div>
                <div className='mt-8 flex-col gap-y-4'>
                    <button className='active:scale-[.98] w-full active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold'> Entrar</button>

                </div>
                <p> </p>
            </div>

        </div>
    )
};