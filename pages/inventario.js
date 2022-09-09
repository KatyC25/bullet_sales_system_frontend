import Ojo from "../components/Ojo";



function App() {
    return (

        <div className="flex flex-col w-full h-screen xl:flex-row">
            <div className="flex items-center justify-center flex-1 w-full lg:w-1/2">
                <Ojo />
            </div>

            <table className="flex-1 table w-full text-center bg-white border-separate">
                <thead>
                    <tr>
                        <th className="h-6 px-4 py-2 text-gray-800 border border-gray-200">Nombre</th>
                        <th className=" h-6 px-4 py-2 text-gray-800 border border-gray-200"> Categoria</th>
                        <th className=" h-6 px-4 py-2 text-gray-800 border border-gray-200">Cantidad</th>
                        <th className="h-6 px-4 py-2 text-gray-800 border border-gray-200">Precio</th>
                        <th className="h-6 px-4 py-2 text-gray-800 border border-gray-200">Ventas</th>

                    </tr>
                </thead>
                <tbody>
                    <tr className="h-5 bg-indigo-200">
                        <td className="border border-gray-200">hola</td>
                        <td className="border border-gray-200">como</td>
                        <td className="border border-gray-200">estas</td>
                        <td className="border border-gray-200">?</td>
                        <td className="border border-gray-200">Bien</td>
                    </tr>
                    <tr className="h-5 bg-indigo-100" >
                        <td className="border border-gray-200">no</td>
                        <td className="border border-gray-200">quiero</td>
                        <td className="border border-gray-200">hi</td>
                        <td className="border border-gray-200">quo</td>
                        <td className="border border-gray-200">qd</td>
                    </tr>
                    <tr className="h-5 bg-indigo-200">
                        <td className="border-gray-200 border-">Veneco</td>
                        <td className="border border-gray-200">Yajharis</td>
                        <td className="border border-gray-200">Oscar</td>
                        <td className="border border-gray-200">Katherine</td>
                        <td className="border border-gray-200">quiero</td>
                    </tr>
                    <tr className="h-5 bg-indigo-100">
                        <td className="border border-gray-200">ing</td>
                        <td className="border border-gray-200">de</td>
                        <td className="border border-gray-200">sistemas</td>
                        <td className="border border-gray-200">gana</td>
                        <td className="border border-gray-200">remos</td>
                    </tr>
                    <tr className="h-5 bg-indigo-200">
                        <td className="border border-gray-200">ola</td>
                        <td className="border border-gray-200">k</td>
                        <td className="border border-gray-200">ase</td>
                        <td className="border border-gray-200">mañana</td>
                        <td className="border border-gray-200">a darle</td>
                    </tr>

                </tbody>
            </table>



        </div>
    )


}
export default App;