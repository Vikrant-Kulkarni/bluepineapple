import React,{Component} from 'react'
import './navSide.css'
import {Nav} from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom';



    class NavSide extends Component{
  
        constructor(props){
        super (props)   
        this.state={show:false}

        this.toggleDiv = this.toggleDiv.bind(this)
    }

   
    toggleDiv =()=>{
        const {show} = this.state
        this.setState( { show: !show } )
    }


    

render(){

    return(
        <nav>
               <div className='sidebar'>
                    <header><h4>Employee Data</h4></header>
                    <div className='ButtonClass'>
                    <Nav.Link variant="outline-primary" onClick={this.toggleDiv} >View Data</Nav.Link>{' '}
                    <br/>

                        {this.state.show && <DataDisplay/>} 

                    </div> 

               </div>
               
        </nav>
    )}
}


const deletefunc = async (id) => {
    await axios.delete(`http://localhost:5001/${id}`)
    
 }   


class DataDisplay extends Component{

    
    state = {
        persons: []
      }


    componentDidMount() {
        axios.get(`http://localhost:5001/getusers`)
          .then(res => {
            const persons = res.data.data;
            this.setState({ persons });
          })
      }
  
     


      
    render(){
        return(

        <div id='TableClass'>

        <table className='table-hover'>


        <thead>
                         <tr>
                             <th>Employee ID</th>
                              <th colSpan = "2">Name</th>
                             <th>email</th>
                             <th colspan="2">Actions</th>
                         </tr>
                       </thead>
      

                      <tbody>
                        {
                          this.state.persons.map(person =>
                            <tr>
                                <td>{person.ID}</td>
                                <td>{person.FirstName}</td>
                                <td>{person.LastName}</td>
                                <td>{person.email}</td>
                                <td><Link to={`/EditUser/${person.ID}`}>Edit</Link></td>
                                <td><Link onClick={() => deletefunc(person.ID)}>Delete</Link></td>
                               {/*  */}
                            </tr>
                        )

                        }
                       </tbody>
             </table> 
     </div>
        )
    }
}
export default NavSide;