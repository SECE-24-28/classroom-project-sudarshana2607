import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const PostPage = () => {
  return (
    <div>
        <ol>
            <li><Link to="/postpage/1">POST1</Link></li>
             <li><Link to="/postpage/2">POST2</Link></li>
              <li><Link to="/postpage/3">POST3</Link></li>
              <li><Link to="/postpage/newpost">NEWPOST</Link></li>
        </ol>
      <Outlet/>
    </div>
  )
}

export default PostPage