import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Userlist() {
    const [users, setUsers] = useState([])

    let loadFunction = async ()=>{
        try {
            let step = await fetch("https://637398230bb6b698b610942d.mockapi.io/user");
            let userData =await step.json()
            console.log(userData);
            setUsers(userData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        loadFunction()

    }, []);
    return ( 
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">UserList</h1>
                <Link to="/Create user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    classNmae="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 classNamae="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>    
                                {
                                   users.length>0 && users.map((user,index) => {
                                        return (<tr key={index}>
                                            <td>{user.Name}</td>
                                            <td>{user.Position}</td>
                                            <td>{user.Office}</td>
                                            <td>{user.Age}</td>
                                            <td>{user.Start_date}</td>
                                            <td>{user.Salary}</td>
                                            <td> <Link to={`/user-edit/${user.id}`}><button className="btn btn-primary">
                                                Edit</button></Link>
                                                <button className="btn btn-secondary">
                                                    Delete</button></td>
                                        </tr>)
                                    })
                                }


 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userlist;