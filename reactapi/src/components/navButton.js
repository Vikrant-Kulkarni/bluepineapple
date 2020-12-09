import React from 'react'
import './navButton.css'
 import { Button } from 'react-bootstrap';




let NavButton=()=>{
    return(
        <nav>

               <Button className='nav-link' href='/adduser' variant="outline-primary" id='btn'>Add User</Button>{''}
               
        </nav>
    )
}

export default NavButton ;