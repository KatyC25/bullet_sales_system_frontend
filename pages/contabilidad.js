import Tabla from "../components/Tabla"
import { useState } from "react"
function contabilidad(props) {
  const [datosEmpresa, setDatosEmpresa] = useState({})
  return (
    <div className="flex flex-col w-full xl:flex-row" >
      <div className="flex flex-1 w-full overflow-y-scroll" >
        <Tabla setDatosEmpresa={setDatosEmpresa} />

      </div>
      <div className="flex-1">
        <div className="bg-pink-300 font-serif px-3 py-1 border border-gray-100 text-gray-800  text-center  ">Estado de Resultado</div>
        <div className=" bg-pink-300 font-serif  px-3 py-1 border border-gray-100 text-gray-800 text-center  ">Empresa "{datosEmpresa.nombre}"</div>
        <div className=" bg-pink-300 font-serif px-3 py-1 border border-gray-100 text-gray-800 text-center "> {datosEmpresa.periodo}</div>

        <table className="flex-1 table w-full text-center bg-white border-separate">
          <thead>

          </thead>
          <tbody>
            <tr className="bg-pink-200 font-serif">
              <td className="px-4 py-4 border border-gray-500 ">Ventas</td>
              <td className="px-4 py-4 border border-gray-500 "> </td>
            </tr>
            <tr className="bg-pink-200 font-serif">
              <td className="px-4 py-4 border border-gray-500 ">Costos de ventas</td>
              <td className="px-4 py-4 border border-gray-500 "> </td>
            </tr>

            <tr>
              <th className="px-4 py-4 border border-gray-500 "> Utilidad Bruta</th>
              <td className="px-4 py-4 border border-gray-500 "> </td>
            </tr>

            <tr className="bg-pink-200 font-serif">
              <td className="px-4 py-4 border border-gray-500 ">Gastos de Administracion</td>
              <td className="px-4 py-4 border border-gray-500 ">{datosEmpresa.admin} </td>
            </tr>

            <tr className="bg-pink-200 font-serif">
              <td className="px-4 py-4 border border-gray-500 ">Gastos de Ventas</td>
              <td className="px-4 py-4 border border-gray-500 ">{datosEmpresa.ventas} </td>

            </tr>
            <tr>
              <th className="px-4 py-4 border border-gray-500 "> Utilidad antes de impuesto</th>
              <td className="px-4 py-4 border border-gray-500 "> {-datosEmpresa.admin - datosEmpresa.ventas}</td>
            </tr>

            <tr className="bg-pink-200 font-serif">
              <td className="px-4 py-4 border border-gray-500 ">Impuesto</td>
              <td className="px-4 py-4 border border-gray-500 ">{datosEmpresa.impuesto} </td>
            </tr>
            <tr>
              <th className="px-4 py-4 border border-gray-500 "> Utilidad despues de impuesto</th>
              <td className="px-4 py-4 border border-gray-500 "> </td>
            </tr>
            <tr className="bg-pink-200 font-serif">
              <td className="px-4 py-4 border border-gray-500 ">Impuesto</td>
              <td className="px-4 py-4  border border-gray-500 ">{datosEmpresa.impuesto} </td>
            </tr>
            <tr>
              <th className="px-4 py-4 border border-gray-500 "> Utilidad Neta</th>
              <td className="px-6 py-6 border border-gray-500 "> </td>

            </tr>



          </tbody>




        </table>






      </div>



    </div>
  )


}
export default contabilidad

