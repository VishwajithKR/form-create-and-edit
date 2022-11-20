import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';

function Editid() {
    let params = useParams()
    // console.log(params);
    // vishwajith  

    const formik = useFormik({
            initialValues: {
                Name: "",
                Position: "",
                Office: "",
                Age: "",
                Start_date: "",
                Salary: ""
            },
            onSubmit: async values => {
                try {
                    await fetch(`https://637398230bb6b698b610942d.mockapi.io/user/${params.id}`, {
                        method: "PUT",
                        body: JSON.stringify(values),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                    alert("vishwa is taked");
                } catch (error) {
                    console.log(error);
                }
            }
        })
    let name = async () => {
        try {
            let userdata = await fetch(`https://637398230bb6b698b610942d.mockapi.io/user/${params.id}`)
            let user = await userdata.json()
            // console.log(user);
            formik.setValues(user)
            // alert("vishwa is taked");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        name()
    }, [])
    

   
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Create User</h1>

            </div>

            <div>
            <div className="container">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">

                            <div className="col-lg-6">
                                <label>Name</label>
                                <input type="text" 
                                name="Name"
                                className="form-control"
                                    onChange={formik.handleChange}
                                    value={formik.values.Name} />
                            </div>
                            <div className="col-lg-6">
                                <label>Position</label>
                                <input type="text"
                                name="Position"
                                className="form-control" onChange={formik.handleChange}
                                    value={formik.values.Position} />
                            </div>
                            <div className="col-lg-5">
                                <label>Office</label>
                                <input type="text"
                                name="Office"
                                className="form-control"
                                    onChange={formik.handleChange}
                                    value={formik.values.Office} />
                            </div>
                            <div className="col-lg-3">
                                <label>Age</label>
                                <input type="number"
                                name="Age"
                                className="form-control"
                                    onChange={formik.handleChange}
                                    value={formik.values.Age} />
                            </div>
                            <div className="col-lg-4">
                                <label>Start_date</label>
                                <input type="date"
                                name="Start_date"
                                className="form-control" onChange={formik.handleChange}
                                    value={formik.values.Start_date} />
                            </div>
                            <div className="col-lg-12">
                                <label>Salary</label>
                                <input type="number" 
                                name="Salary"
                                className="form-control" onChange={formik.handleChange}
                                    value={formik.values.Salary} />
                            </div>
                            <div className="col-lg-3 mt-3">
                                <input type="submit" className="btn btn-primary" />
                            </div>

                        </div>
                    </form>
                </div>
            </div>



        </>
    )
}
export default Editid;