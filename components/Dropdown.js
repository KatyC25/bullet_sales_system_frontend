import { useState } from "react";

export default function Dropdown(props) {

  const [active, setActive] = useState(false);


  return (
    <div className="flex flex-col mt-8 w-35 ">
      <button onClick={() => setActive(!active)}
        className="py-4 transition-colors duration-300 bg-indigo-300 rounded-2xl hover:bg-indigo-400 text-white text-lg font-bold">
        {props.text}
      </button>

      <div className={`${active ? 'visible' : 'invisible'} w-full`}
        onClick={() => setActive(!active)}>
        {props.children}
      </div>

    </div>
  )
}