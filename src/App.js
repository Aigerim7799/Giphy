// import React, {useState} from 'react'

// export default function App() {

// const [number, setNumber] = useState(0)
// const [val, setVal] = useState('996')

// const sendNumber = (event)=>{
//   event.preventDefault()
//   alert(val)
// }




//   return (
//     <div>
//       <h1>Count: {number}</h1>
//       <button 
//         onClick ={()=>setNumber(number+1)}
//       >+</button>
//       <button
//       onClick={()=>setNumber(number-1)}
//       >-</button>

//       <form onSubmit ={sendNumber}>
//         <input
//         value ={val}
//         type='number'
//         maxLength = {12}
//         onChange={e=>{setVal(e.target.value)
        
//         }}
//         />
//       </form>

//     </div>
//   )
// }
import React, {useState} from 'react'
import {SITE, API} from './config'
import './App.css';

export default function App() {


const [val, setVal] = useState('')
const [data, setData]=useState([])

const getGiphybyName =async(event)=>{
  event.preventDefault()
  let url = SITE+val+API+'&limit5'
  let req = await fetch(url)
  let resp = await req.json()
  console.log(resp.data)
  setData(resp.data)
  setVal('')
}

  return (
    <div className='container'>
      <form onSubmit = {getGiphybyName}>
        <input
        value = {val}
        onChange={e=>{setVal(e.target.value)
        }}
        />
        <button>Search</button>
      </form>
      <h1>Find necessary giphy</h1>
      <div className='block'>
      
      {data && data.length !==0?
      data.map((el, index)=>{
        return(
          <div className='card' key={index}  >
          <iframe  src={el.embed_url}></iframe>
          <h4>{el.title}</h4>
          </div>
         
        )
      })
      :<h1>Empty</h1>
      }
      </div>
    </div>
  )
}
