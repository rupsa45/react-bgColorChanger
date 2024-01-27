import { useState } from "react"


function App() {
  const [color,setColor]=useState("olive");

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl gap-4">
      <button className="bg-blue-700 p-2 text-lg rounded-xl " onClick={()=>setColor("blue")}>Blue</button>
      <button className="bg-green-600 p-2 text-lg rounded-xl" onClick={()=>setColor("green")}>Green</button>
      <button className=" bg-pink-400 p-2 text-lg rounded-xl" onClick={()=>setColor("pink")}>Pink</button>
      <button className=" bg-white p-2 text-lg rounded-xl" onClick={()=>setColor("white")}>white</button>
      <button className=" bg-black p-2 text-lg rounded-xl" onClick={()=>setColor("black")}>Black</button>
      <button className=" bg-violet-700 p-2 text-lg rounded-xl" onClick={()=>setColor("purple")}>Purple</button>
    </div>
    </div>
   </div>
  )
}

export default App
