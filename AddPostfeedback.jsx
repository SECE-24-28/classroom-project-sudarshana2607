import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'
import Search from './Search'

const AddPost = () => {
  const { title, setTitle, body, setBody, handleSubmit } = useContext(DataContext)
  
  return (
    <>
      <div className="header-nav">
        <Search />
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/newpost">New Post</Link></li>
        </ol>
      </div>
      
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br />
        <textarea 
          placeholder="Post content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddPost