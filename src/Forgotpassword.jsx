import { useEffect, useState } from "react"
import { Signupget } from "./Getrouter"
import { Link } from "react-router-dom"

const Forgotpassword = () => {

    const initialState = {
        email: "",
        password: "",
        newpassword: "",
        confirmpassword: ""
    }

    const [formdata, setformdata] = useState(initialState)
    const [postdata, setpostdata] = useState([])
    const [error, seterror] = useState("")
    const [success, setsuccess] = useState("")
    const Datas = postdata.datas

    const Getapi = async () => {
        const data = await Signupget()
        setpostdata(data)
    }

    useEffect(() => {
        Getapi()
    }, [])


    const handleChange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = async (e) => {
        e.preventDefault()
        const user = Datas.find((user) => user.email === formdata.email)

        if (user) {
            if (user.password === formdata.password) {
                if (formdata.newpassword === formdata.confirmpassword) {

                    const response = await fetch("https://capstone-backendtask.onrender.com/api/passwordreset", {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(formdata)
                    })
                    const Data = await response.json()
                    console.log(Data)
                    setsuccess("PASSWORD CHANGED SUCCESSFULLY")
                    seterror("")
                } else {
                    seterror("PASSWORD MISMATCH")
                }
            } else {
                seterror("OLD PASSWORD NOT CORRECT")
            }
        } else {
            seterror("EMAIL NOT MATCH")
        }


    }

    return (
        <>
            {console.log(Datas)}
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="d-none d-md-block col-md-3"></div>
                    <div className="col-sm-12 col-md-6">
                        <h2 className="text-center text-primary">FORGOTPASSWORD PAGE</h2>
                        <form onSubmit={HandleSubmit} >
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" onChange={handleChange} value={formdata.email} />
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={handleChange} value={formdata.password} />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="newpassword" placeholder="newpassword" name="newpassword" onChange={handleChange} value={formdata.newPassword} />
                                <label htmlFor="newpassword">NewPassword</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="confirmpassword" placeholder="confirmpassword" name="confirmpassword" onChange={handleChange} value={formdata.confirmpassword} />
                                <label htmlFor="confirmpassword">ConfirmPassword</label>
                            </div>
                            <div>
                                <h4 className="text-center text-danger">{error}</h4>
                            </div>
                            <div>
                                <h4 className="text-center text-success">{success}</h4>
                            </div>
                            <div className="d-flex justify-content-center mb-3" >
                                <button type="submit" className="btn btn-primary ">FORGOT PASSWORD</button>
                            </div>
                            <div className="d-flex justify-content-center mt-2" >
                                <button type="button" className="btn btn-primary">
                                    <Link className="text-decoration-none text-white" to="/signup">SIGNUP</Link>
                                </button>
                            </div>

                            <div className="d-flex justify-content-center mt-2" >
                                <button type="button" className="btn btn-primary">
                                    <Link className="text-decoration-none text-white" to="/signin">SIGNIN</Link>
                                </button>
                            </div>

                        </form>


                    </div>
                    <div className="d-none-d-md-block col-md-3"></div>


                </div>

            </div>


        </>
    )
}

export default Forgotpassword