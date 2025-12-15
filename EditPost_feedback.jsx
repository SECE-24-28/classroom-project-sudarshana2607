import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import DataContext from './context/DataContext'
import Search from './Search'

export const EditPost = () => {
  const { posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit, handleDelete } = useContext(DataContext)
  const { id } = useParams()
  const post = posts.find((p) => p.id.toString() === id)
  
  useEffect(() => {
    if (post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  }, [post, setEditTitle, setEditBody])
  
  if (!post) {
    return (
      <>
        <div className="header-nav">
          <Search />
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/newpost">New Post</Link></li>
          </ol>
        </div>
        <h1>Post Not Found</h1>
        <p>The post you're looking for doesn't exist.</p>
        <Link to="/">Go back to Home</Link>
      </>
    )
  }

  return (
    <>
      <div className="header-nav">
        <Search />
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/newpost">New Post</Link></li>
        </ol>
      </div>
      
      <h1>Edit Post</h1>
      <hr />
      
      <form onSubmit={(e) => {
        e.preventDefault()
        handleEdit(post.id)
      }}>
        <label htmlFor="editTitle">Title:</label>
        <input 
          id="editTitle"
          type="text" 
          value={editTitle} 
          onChange={(e) => setEditTitle(e.target.value)}
          required
        />
        
        <label htmlFor="editBody">Content:</label>
        <textarea 
          id="editBody"
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
          required
        />
        
        <button type="submit">Save Edits</button>
        <button 
          type="button" 
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this post?')) {
              handleDelete(post.id)
            }
          }}
        >
          Delete
        </button>
      </form>
    </>
  )
}