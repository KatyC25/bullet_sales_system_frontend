import Ojo from "../components/Ojo";


function App() {
    return (

        <div className="flex w-full h-screen">
            <div ClassName="w-full flex items-center justify-center lg:w-1/2">
                <Ojo />


            </div>
            <div className=" hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">


            </div>

        </div>
    )


}
export default App;