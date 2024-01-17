import React from "react";
import { Container } from "react-bootstrap";

import Userdata from './userdata.json';



function Fetchjsondata()
{
return(
    <React.Fragment>
        <Container className="content">
        <div className="row">
          <div className="col-sm-8">
         <h3 className='mt-3'>Fetch Data from JSON File</h3>
         <table className="table text-white table-bordered mt-2">
              <thead>
                <tr>              
                  <th scope="col">userId</th>
                  <th scope="col">id</th>
                  <th scope="col">title</th>
                  <th scope="col">body</th>       
                </tr>
              </thead>
              <tbody> 
                {
                    Userdata.map( (users, index)=>(
                    <tr key={index}>                 
                  <th>{ index+1}</th>
                  <td>{ users.userId} </td>
                  <td>{ users.id} </td>
                  <td>{ users.title} </td>  
                  <td>{users.body}</td>               
                </tr>
                    ))



                }             
                
              
              </tbody>
            </table>
        </div>
        </div>
     </Container>
    </React.Fragment>
);
}

export default Fetchjsondata;
