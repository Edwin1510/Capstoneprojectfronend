import { Link } from "react-router-dom"


const Firstpage = () => {
    return (
        <>
            <div className="container-fluid">

                <div className="row">
                    <div className="d-none d-md-block col-md-4"></div>
                    <div className="col-sm-12 col-md-4 mt-5 ">
                        <div className="d-flex justify-content-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBSkh5o3XlJ_NKpbIZV1HwmLo0mGWtUyEXp0IJChj-w&s" className="img-rounded" alt="GMAILIMAGE" />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-primary ">
                                <Link className="text-decoration-none text-white " to="/signin">SIGNIN</Link>
                            </button>
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-4"></div>



                </div>

            </div>
        </>
    )
}

export default Firstpage