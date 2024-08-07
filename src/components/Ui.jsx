
import { useState } from 'react'
import {useSelector} from "react-redux"
export default function Ui() {

    const [score,setScore] = useState(1)
    const [status,setStatus] = useState(false)


    let colors=[]
    const obj =useSelector(state => state.tilecolor)
    obj.map((v) =>{colors.push(v.realColor)})
    console.log(colors)
    function changeColor(c,i){
        document.getElementById(i).style.backgroundColor=c
        if(c==="green")
        {
            
            setScore(score*2)
            console.log(score)
        }
        else{
            document.getElementById('score').innerHTML+='<h3>GAME OVER</h3>'
           setTimeout((() => setStatus(true)),1200) 
          
            
        }
    }



    return (
        <>
         <div id='score' className='w-fit text-center rounded-lg p-2 text-xl bg-green-300 my-10' >Score : {score}</div>
         <div hidden={status}>
         <div   className='grid grid-cols-6 my-10'>
       
       { 
              
               colors.map((v,i) =>{ return(
                   <div onClick={() => changeColor(v,i)}  id={i}  key={i} className='w-14 h-14 m-2 cursor-pointer bg-gray-400 rounded-lg'></div>
               ) })
       }
       </div>
         </div>
         <div hidden={!status}>
         <div   className='grid grid-cols-6 my-10'>
       
       { 
              
               colors.map((v,i) =>{ return(
                   <div style={{backgroundColor:v}}  id={i}  key={i} className='w-14 h-14 m-2 cursor-pointer bg-gray-400 rounded-lg'></div>
               ) })
       }
       </div>
         </div>
         
        
            
        </>
    )
}
