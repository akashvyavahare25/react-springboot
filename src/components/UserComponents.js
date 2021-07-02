import React from 'react'
import UserService from '../UserServie/UserService'

class UserComponents extends React.Component{

    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUser().then((response)  =>{
            this.setState({users: response.data})
        });
    }

    render(){
        return(
            <div>
                   <h1 className="text-center">User List</h1>

                   <table className="table table-striped">
                       <thead>
                         <tr>
                            <td>User Id</td>
                           <td>User first name</td>
                           <td>User last name</td>
                           <td>User email id</td>
                         </tr>

                       </thead>
                       <tbody> 
                           {
                               this.state.users.map(
                                   user =>
                                   <tr key={user.id}>
                                       <td>{user.id}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>

                                </tr>
                               )
                           }
                       </tbody>

                   </table>
            </div>
        )
    }
}
     
  

export default UserComponents;