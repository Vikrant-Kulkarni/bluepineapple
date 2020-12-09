import React, { Component } from 'react';
import './App.css';

import Navv from './components/navHead'
import NavSide from './components/navSide'
import NavButton from './components/navButton'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { Button } from 'react-bootstrap';
import editUsers from './components/editUsers';

import AddUser from './components/AddUser'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'


/* <Router>
 
<div >

   <Navv/> 
       <NavSide/>
       <NavButton/>

  <Switch>
    <Route exact path="/adduser" component={AddUser}></Route>
  
  </Switch>
            
</div>
</Router>

 */

 
    class App extends Component{

        render(){
            return(
                <Router>
 
                <div >
          
                   <Navv/> 
                       <NavSide/>
                       <NavButton/>
          
                  <Switch>
                    <Route exact path="/AddUser" component={AddUser}></Route>
                    <Route exact path="/EditUser/:id" component={editUsers}></Route>
                  </Switch>
                            
                </div>
                </Router>

            );
        }
 }



export default App ;









// import React from 'react';
// import './App.css';
// import * as ReactBootStrap from 'react-bootstrap' 


//     const App = ()=>{

//         const Emp_data=[
//             {empID:1,fname:'Vikrant',lname:'Kulkarni'},
//             {empID:2,fname:'Shubham',lname:'Ner'},
//             {empID:1,fname:'Sreyas',lname:'Pillai'},
//             {empID:1,fname:'Karan',lname:'Sadhwani'}
//         ]

//         const renderEmp = (Emp_data,index) =>{
//             return(
//                 <tr key={index}>
//                     <td>{Emp_data.empID}</td>
//                     <td>{Emp_data.fname}</td>
//                     <td>{Emp_data.lname}</td>
//                 </tr>    
//             )
//         }

//     return(
//         <div className="App">
//             <ReactBootStrap.Table striped bordered hover>

//                 <thead>
//                     <tr>
//                         <th>Emp ID</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {Emp_data.map(renderEmp)}
//                 </tbody>


//             </ReactBootStrap.Table>


//         </div>
//     );
// } 
// export default App;