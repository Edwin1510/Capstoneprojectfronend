
import "./App.css"
import { Link, Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <>
            <div className="container-fluid bg-clr text-center  pos head">
                <h3 className="text-primary">Gmail</h3>
            </div>
            <div className="row ">
                <div className="col-sm-2 text-center text-decoration-none bg-clr">
                    <div>
                        <button type="button" className="btn btn-primary mt-5">
                            <Link className="text-decoration-none text-white" to="/layout/send">Sentitem</Link>
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-5">
                            <Link className="text-decoration-none text-white" to="/layout/compose">Compose</Link>
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-5">
                            <Link className="text-decoration-none text-white" to="/layout/inbox">INBOX</Link>
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-5">
                            <Link className="text-decoration-none text-white" to="/layout/files">FILES</Link>
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-5">
                            <Link className="text-decoration-none text-white" to="/layout/trash">TRASH</Link>
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary mt-5">
                            <Link className="text-decoration-none text-white" to="/layout/setting">SETTING</Link>
                        </button>
                    </div>

                </div>
                <div className="col-sm-10 ">
                    <Outlet />
                </div>
            </div>


        </>
    )
}

export default Layout