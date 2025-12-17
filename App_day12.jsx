import { useState,useEffect  } from 'react'
import './App.css'
import { getCourses, addCourses, updateCourses, deleteCourses } from './api/CourseApi'

function App() {
  const [courses, setCourses] = useState([])
  const [duration,setDuration]=useState("")
  const [title,setTitle]=useState("")
  const [editId,setEditId] = useState("")

const fetchCourse = async () => {
  const res = await getCourses();
  setCourses(res.data);
}

  useEffect(()=>{
    fetchCourse()
  },[])

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await addCourses({title,duration})
    fetchCourse();
    setTitle('')
    setDuration('')
  }
  const handleDelete=async(id)=>{
    await deleteCourses(id);
    fetchCourse();
    alert("deletion success")
  }
   const handleEdit=(course)=>{
    setTitle(course.title)
    setDuration(course.duration)
    setEditId(course._id)
   }
   const update=async()=>{
    await updateCourses(editId,{title,duration})
    setTitle("")
    setDuration("")
    setEditId("")
    fetchCourse()
   }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" value={duration} onChange={(e)=>setDuration(e.target.value)}/>
        <button type="submit">Add Course</button>
        <button onClick={update} type="button">Update Course</button>
      </form>

<ul>
  {
    courses.map(course => (
      <li key={course._id}>{course.title} - {course.duration}
      <button onClick={()=>handleEdit(course)}>CLICK ME</button>
      <button onClick={()=>handleDelete(course._id)}>DELETE</button>
      </li>
    ))
  }
</ul>
    </>
  )
}

export default App