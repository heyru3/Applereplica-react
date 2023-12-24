import React from 'react'
import {Link} from 'react-router-dom'

function Headerlink({link,linkname}) {
  return (
    <>
     <li className="">
            <Link className="nav-link" to={link}>{linkname}</Link>
     </li>
      
    </>
  )
}

export default Headerlink
