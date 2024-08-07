import { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addColor,showRes,showUi } from './Features/tileSlice'
import Ui from "../src/components/Ui";

function App() {
  const colors=useSelector((state) => state.tilecolor)
  console.log(colors)
  
const [tile,setTile] =useState()
const dispatch=useDispatch()
function handleSubmit(){
 for(let i=0;i<60;i++){
     let count=0
          let num=Math.floor(Math.random()*2)
           if(num===1&& count!==tile) {
            dispatch(addColor("green"))
           }
           else{
           dispatch(addColor("red"))
           count++
           }
   
 }
 dispatch(showUi(true))
}
const showui=useSelector(state => state.showUi)
console.log(showui)

  return (
     
      <div className='w-full   bg-blue-950 flex flex-col justify-center items-center'
       
      >
         <div   className='w-fit my-20 p-20 bg-white rounded-xl flex justify-center items-center' 
          
         >
           <input readOnly={showui} className='text-2xl overflow-hidden text-center rounded-lg h-14 mx-2 p-2 border-black border-2 ' 
             placeholder='Number of Tiles'
            
             onChange={(e) =>{setTile(e.target.value)}}
           ></input>
           <button onClick={handleSubmit} className='bg-blue-500 h-14 text-white p-2 rounded-2xl justify-center items-center'>SUBMIT</button>
         </div>
       <Ui/>
      </div>
      
   
  )
}

export default App
