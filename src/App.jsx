import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Stu_api'

function App() {
  const [SList,setSList]=useState([])

  useEffect(()=>
  {
    const fetData=async()=>
    {
      try{
        const res=await api.get("/Student")
        setSList(res.data)
        //console.log(res.data)
      }
      catch(err){
        //console.error(err)
      }
    }
    fetData()
  },[])

  return (
    <>
      {
        SList.map((Stu)=>
        {
          <p>{Stu.sid} - {Stu.sname} - {Stu.smark}</p>
        }
        )
      }
    </>
  )
}

export default App