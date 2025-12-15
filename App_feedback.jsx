import './App.css'
import Home from './Home'
import AddPost from './AddPost'
import { EditPost } from './EditPost'
import { DataProvider } from './context/DataContext'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newpost" element={<AddPost/>}/>
        <Route path="/editpost/:id" element={<EditPost/>}/>
      </Routes>
    </DataProvider>
  )
}

export default App