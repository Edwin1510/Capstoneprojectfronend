import { useEffect, useState } from "react"
import { Signupget } from "./Getrouter"
import { Link, useNavigate } from "react-router-dom"


const Signin = () => {

    const initialState = {
        email: "",
        password: "",
    }

    const [formdata, seformdata] = useState(initialState)
    const [postdata, setpostdata] = useState([])
    const [error, seterror] = useState("")
    const [success, setsuccess] = useState("")
    const Datas = postdata.datas
    const navigate = useNavigate()

    const Getapi = async () => {
        const data = await Signupget()
        setpostdata(data)
    }

    useEffect(() => {
        Getapi()
    }, [])

    const handleChange = (e) => {
        seformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = Datas.find((user) => user.email === formdata.email)
        if (user) {
            if (user.password === formdata.password) {
                const response = await fetch("https://capstone-backendtask.onrender.com/api/signinpost", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formdata)
                })
                const Data = await response.json()
                console.log(Data)
                setsuccess("SIGNIN SUCCESSFULLY")
                seterror("")
                navigate("/layout")

            } else {
                seterror("PASSWORD MISMATCH")
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
                        <h2 className="text-center text-primary">SIGNIN PAGE</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" onChange={handleChange} value={formdata.email} />
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={handleChange} value={formdata.password} />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div >
                                <h4 className="text-center text-danger">{error}</h4>
                            </div>
                            <div >
                                <h4 className="text-center text-success">{success}</h4>
                            </div>
                            <div className="d-flex justify-content-center mb-3" >
                                <button type="submit" className="btn btn-primary ">SIGNIN</button>
                            </div>
                            <div className="d-flex justify-content-center mt-2" >
                                <button type="button" className="btn btn-primary">
                                    <Link className="text-decoration-none text-white" to="/signup">SIGNUP</Link>
                                </button>
                            </div>
                            <div className="d-flex justify-content-center mt-2" >
                                <button type="button" className="btn btn-primary">
                                    <Link className="text-decoration-none text-white" to="/reset">FORGOTPASSWORD</Link>
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

export default Signin