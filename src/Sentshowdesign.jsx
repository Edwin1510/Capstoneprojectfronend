
const Sentshowdesign = ({ to, subject, message }) => {
    return (
        <>
            {/* <h1>TO:{to}</h1>
            <h1>SUBJECT:{subject}</h1>
            <h1>MESSAGE:{message}</h1> */}

            <div className="card p-4">
                <div className="card-header"><b>TO:</b> {to}</div>
                <div className="card-footer"><b>SUBJECT:</b> {subject}</div>
                <div className="card-body"><b>MESSAGE:</b> {message}</div>
            </div>

        </>
    )
}

export default Sentshowdesign