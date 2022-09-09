import Pestaña from "../components/Pestaña";
import { useState } from "react"
function TablaBalance(props) {
    const [datosEmpresa, setDatosEmpresa] = useState({})

    return (
        <div className="flex flex-col w-full xl:flex-row">
            <div className="flex flex-1 w-full lg:w-1/2 overflow-y-scroll">
                <Pestaña setDatosEmpresa={setDatosEmpresa} />
            </div>

            <table className="flex-1 table w-full text-center bg-white border-separate">
                <thead>
                    <tr className="bg-yellow-100">
                        <th className="font-sans px-3 py-1 border border-gray-100 text-gray-800  text-center  ">Balance General</th>

                    </tr>
                    <tr className="bg-yellow-100">
                        <th className="px-3 py-1 border border-gray-100 text-gray-800 text-center  ">{datosEmpresa.nombre}</th>

                    </tr>
                    <tr className="bg-yellow-100">
                        <th className="px-3 py-1 border border-gray-100 text-gray-800 text-center "> {datosEmpresa.periodo}</th>
                    </tr>
                </thead>

                <tbody>

                    <tr className="bg-yellow-300">
                        <th className="px-3 py-1 border border-gray-500 ">Detalles</th>
                        <th className="px-3 py-1 border border-gray-500 ">Suma Parcial</th>
                        <th className="px-3 py-1 border border-gray-500 ">Suma SubTotal</th>
                        <th className="px-3 py-1 border border-gray-500 ">Suma Total</th>
                    </tr>


                    <tr className="bg-yellow-200">
                        <td className="px-3 py-1 border border-gray-200"> Activo Circulante</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>



                    </tr>

                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Caja</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.caja}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Banco</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.banco}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>


                    </tr>

                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Mercancias</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.mercancias}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Documentos por cobrar</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.documentos}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                        <td className="px-3 py-1 border border-gray-200"></td>
                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Deudores diversos</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.deudores}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-200">
                        <td className="px-3 py-1 border border-gray-200"> Activo Fijo</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Edificio</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.edificio}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Mobiliario y equipo</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.mobiliarioe}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border-gray-200">Depositos en garantia</td>
                        <td className="h-8 px-3 py-1 border-gray-200">{datosEmpresa.depositos}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-200">
                        <td className="px-3 py-1 border border-gray-200"> Activos Diferidos</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>

                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Gastos de instalacion</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.GastosdeInstalacion}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Papeleria y utiles</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.papeleria}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>
                    <tr className="bg-yellow-300">


                        <th className="px-3 py-1 text-gray-800  text-center border border-gray-200"> Total Activo</th>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>
                    <tr className="bg-yellow-200">
                        <td className="px-3 py-1 border border-gray-200"> Pasivos Circulantes</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Proveedores</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.proveedores}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Documentos por pagar</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.documentosp}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Acreedores</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.acreedores}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-200">
                        <td className="px-3 py-1 border border-gray-200"> Pasivos fijos</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1  border border-gray-200">Acreedores hipotecarios</td>
                        <td className="h-8 px-3 py-1  border border-gray-200">{datosEmpresa.acreedoresh}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-200">
                        <td className="px-3 py-1 border border-gray-200"> Pasivos diferidos</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1  border border-gray-200">Rentas cobradas por anticipado</td>
                        <td className="h-8 px-3 py-1  border border-gray-200">{datosEmpresa.rentas}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>
                    <tr className="bg-yellow-300">
                        <th className="px-3 py-1 text-gray-800  text-center border border-gray-200"> Total Pasivo</th>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="px-3 py-1 border border-gray-200"> Patrimonio</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>
                    <tr className="bg-yellow-100">
                        <td className="h-8 px-3 py-1 border border-gray-200">Capital social</td>
                        <td className="h-8 px-3 py-1 border border-gray-200">{datosEmpresa.capital}</td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                    </tr>
                    <tr className="bg-yellow-300">
                        <th className="px-3 py-1 text-gray-800  text-center border border-gray-200"> Total Pasivo + Patrimonio</th>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>
                        <td className="px-3 py-1 border border-gray-200"> </td>

                    </tr>




                </tbody>




            </table>


        </div>

    )
}
export default TablaBalance