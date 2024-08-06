

const Getcompose = async () => {
    const response = await fetch("https://capstone-backendtask.onrender.com/api/composeget")
    const data = response.json()

    return data

}


const Signupget = async () => {
    const response = await fetch("https://capstone-backendtask.onrender.com/api/signupget")
    const data = await response.json()
    return data
}

export { Getcompose, Signupget }





