import { useEffect, useState } from "react"
import { Signupget } from "./Getrouter"
import { Link } from "react-router-dom"

const Signup = () => {

    const initialState = {
        name: "",
        email: "",
        password: "",
        confirmpassword: ""

    }

    const [formdata, setformdata] = useState(initialState)
    const [postdata, setpostdata] = useState([])
    const [error, seterror] = useState("")
    const [success, setsuccess] = useState("")
    const Signupdata = postdata.datas

    const GetApi = async () => {
        const datas = await Signupget()
        setpostdata(datas)
    }

    useEffect(() => {
        GetApi()
    }, [])

    const handleChange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const username = Signupdata.some((user) => user.name === formdata.name)
        const userEmail = Signupdata.some((user) => user.email === formdata.email)


        if (username) {
            seterror("USERNAME ALREADY USE")
        } else if (userEmail) {
            seterror("EMAIL ALREADY USE GO TO SIGNIN  PAGE")
        } else if (formdata.password !== formdata.confirmpassword) {
            seterror("PASSWORD MISMATCH")
        } else {
            const response = await fetch("https://capstone-backendtask.onrender.com/api/signuppost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formdata)
            })
            const Data = await response.json()
            console.log(Data)
            setsuccess("SIGNUP SUCCESSFULLY GO TO SIGNIN PAGE")
            seterror("")
        }


    }

    return (
        <>
            {console.log(Signupdata)}
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="d-none d-md-block col-md-4"></div>
                    <div className="col-sm-12 col-md-4">
                        <h2 className="text-center text-primary">SIGNUP PAGE</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Ex:Edwin" name="name" onChange={handleChange} value={formdata.name} />
                                <label htmlFor="name">NAME</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" onChange={handleChange} value={formdata.email} />
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={handleChange} value={formdata.password} />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="confirmpassword" placeholder="ConfirmPassword" name="confirmpassword" onChange={handleChange} value={formdata.confirmpassword} />
                                <label htmlFor="confirmpasswod">ConfirmPassword</label>
                            </div>
                            <div>
                                <h4 className="text-center text-danger">{error}</h4>
                            </div>
                            <div>
                                <h4 className="text-center text-success">{success}</h4>
                            </div>
                            <div className="d-flex justify-content-center" >
                                <button type="submit" className="btn btn-primary">SIGNUP</button>
                            </div>
                            <div className="d-flex justify-content-center mt-2" >
                                <button type="button" className="btn btn-primary">
                                    <Link className="text-decoration-none text-white" to="/signin">SIGNIN</Link>
                                </button>
                            </div>
                            <div className="d-flex justify-content-center mt-2" >
                                <button type="button" className="btn btn-primary">
                                    <Link className="text-decoration-none text-white" to="/reset">FORGOTPASSWORD</Link>
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className="d-none-d-md-block col-md-4"></div>


                </div>

            </div>



        </>
    )
}


export default Signup


