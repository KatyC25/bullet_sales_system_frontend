import { useState } from "react";

export default function Dropdown(props) {

  const [active, setActive] = useState(false);


  return (
    <div className="flex flex-col mt-16 w-35 ">
      <button onClick={() => setActive(!active)}
        className="py-4 transition-colors duration-300 bg-blue-200 rounded-lg hover:bg-blue-400">
        {props.text}
      </button>

      <div className={`${active ? 'visible' : 'invisible'} w-full`}
        onClick={() => setActive(!active)}>
        {props.children}
      </div>

    </div>
  )
}