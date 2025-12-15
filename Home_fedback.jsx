import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'
import Search from './Search'

const Home = () => {
  const { searchResult } = useContext(DataContext)
  
  return (
    <>
      <div className="header-nav">
        <Search />
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/newpost">New Post</Link></li>
        </ol>
      </div>
      
      {searchResult.length ? (
        searchResult.map(post => (
          <div key={post.id}>
            <Link to={`/editpost/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <h1>There is no data...</h1>
      )}
    </>
  )
}

export default Home