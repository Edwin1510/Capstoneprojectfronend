import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signin from "./Signin"
import Signup from "./Signup"
import Forgotpassword from "./Forgotpassword"
import Layout from "./Layou"
import Sentdatas from "./Sentdatas"
import Compose from "./Compose"
import Firstpage from "./Firstpage"
import Inbox from "./Inbox"
import Files from "./Files"
import Trash from "./Trash"
import Setting from "./Setting"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Firstpage />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset" element={<Forgotpassword />} />

                <Route path="/layout" element={<Layout />}>

                    <Route path="/layout/send" element={<Sentdatas />} />
                    <Route path="/layout/compose" element={<Compose />} />
                    <Route path="/layout/inbox" element={<Inbox />} />
                    <Route path="/layout/files" element={<Files />} />
                    <Route path="/layout/trash" element={<Trash />} />
                    <Route path="/layout/setting" element={<Setting />} />


                </Route>

            </Routes>


        </BrowserRouter>
    )
}

export default App