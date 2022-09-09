export default function Home() {
    return (
        <div className="w-full max-w-[1000px] m-auto">
            <table className="w-full p-0 font-serif text-center border-collapse table-fixed bg-slate-400 margin-0">
                <caption className="text-2xl ">ESTADO DE RESULTADO</caption>

                <thead>
                    <tr>
                        <th className='text-black border border-while'>Cuentas</th>
                        <th className='text-black border border-while'>Valor</th>
                        <th className='text-black border border-while'>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-while hover:bg-zinc-500' data-label="Consola">Ventas</td>
                        <td className='border border-while hover:bg-zinc-500' data-label="Precio">$500</td>
                        <td className='border border-while' />
                    </tr>
                    <tr>
                        <td className='border border-while hover:bg-zinc-500' data-label="Consola">(-)Costo de Ventas</td>
                        <td className='border border-while hover:bg-zinc-500' data-label="Precio">$500</td>
                        <td className='border border-while hover:bg-zinc-500'>1000</td>
                    </tr>
                    <tr>
                        <td className='border border-while hover:bg-zinc-500 ' data-label="Consola">(-)Costo de ventas</td>
                        <td className='border border-while hover:bg-zinc-500 ' data-label="Precio">$500</td>
                        <td className='border border-while' />
                    </tr>
                    <tr>
                        <td className='border border-while hover:bg-zinc-500' data-label="Consola">Utilidad bruta</td>
                        <td className='border border-while hover:bg-zinc-500' data-label="Precio">$500</td>
                        <td className='border border-while' />
                    </tr>
                    <tr>
                        <td className='text-black border border-while' data-label="Consola">(-)Gasto Administrativos</td>
                        <td className='border border-while hover:bg-zinc-500' data-label="Precio">$500</td>
                        <td className='border border-while' />
                    </tr>
                    <tr>
                        <td className='border border-while hover:bg-zinc-500' data-label="Consola">Utilidad antes de impuestos</td>
                        <td className='border border-while hover:bg-zinc-500' data-label="Precio">$500</td>
                        <td className='border border-while' />
                    </tr>
                    <tr>
                        <td className='border border-while hover:bg-zinc-500' data-label="Consola">(-)Impuesto</td>
                        <td className='border border-while hover:bg-zinc-500' data-label="Precio">$500</td>
                        <td className='border border-while' />
                    </tr>
                    <tr>
                        <td className='border border-while hover:bg-zinc-500' data-label="Consola">Utilidad Neta</td>
                        <td className='border border-while hover:bg-zinc-500' data-label="Precio">$500</td>
                        <td className='border border-while' />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}