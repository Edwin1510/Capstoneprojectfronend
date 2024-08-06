import { useEffect, useState } from "react"

import Sentshowdesign from "./Sentshowdesign"
import { Getcompose } from "./Getrouter"


const Sentdatas = () => {

    const [postdata, setpostdata] = useState([])
    const Datas = postdata.datas

    const Getapi = async () => {
        const Data = await Getcompose()
        setpostdata(Data)
    }

    useEffect(() => {
        Getapi()
    }, [])

    return (
        <>
            {Datas?.length > 0 ? (

                Datas.map((p) => {
                    return (
                        <Sentshowdesign {...p} key={p._id} />
                    )
                })

            ) : (
                <p>NO DISPLAY DATA</p>
            )
            }


        </>
    )
}


export default Sentdatas