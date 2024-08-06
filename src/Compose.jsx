import { useState } from "react"

const Compose = () => {

    const initialState = {
        to: "",
        subject: "",
        message: ""
    }


    const [formdata, setformdata] = useState(initialState)
    const [error, seterror] = useState("")
    const [success, setsuccess] = useState("")


    const handleChange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formdata.to && formdata.subject && formdata.message) {

            const response = await fetch("https://capstone-backendtask.onrender.com/api/composepost", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formdata)
            })
            const Data = await response.json()
            console.log(Data)
            setsuccess("EMAIL SENT SUCCESSFULLY")
            seterror("")
            setformdata(initialState)

        } else {
            seterror("FILL ALL DATA")
        }

    }


    return (
        <>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="d-none d-md-block col-md-3"></div>
                    <div className="col-sm-12 col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="to" placeholder="name@example.com" name="to" onChange={handleChange} value={formdata.to} />
                                <label htmlFor="email">TO</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="subject" placeholder="subject" name="subject" onChange={handleChange} value={formdata.subject} />
                                <label htmlFor="subject">Subject</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" rows="5" id="message" placeholder="message" name="message" onChange={handleChange} value={formdata.message} />
                                <label htmlFor="message">Message</label>
                            </div>
                            <div>
                                <h4 className="text-center text-danger">{error}</h4>
                            </div>
                            <div>
                                <h4 className="text-center text-success">{success}</h4>
                            </div>
                            <div className="d-flex justify-content-center mb-3" >
                                <button type="submit" className="btn btn-primary ">SEND</button>
                            </div>
                        </form>


                    </div>
                    <div className="d-none-d-md-block col-md-3"></div>


                </div>

            </div>
        </>
    )
}

export default Compose