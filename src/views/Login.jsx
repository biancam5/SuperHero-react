import React, {useState } from 'react'
import { login } from  '../axios/heroAxios'
import { Redirect } from 'react-router-dom'

const Login = ({history}) => {

    const [loginError, setLoginError] = useState(null)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        let log = await login(email, password)
        if (log.status !== 200) {
            setLoginError(log.message.error)
        }
        else {
            localStorage.setItem("token", log.message.token)
            history.push('/')
        }

    }

    return (
        <>
        {localStorage.token ? <Redirect to="/" />
        :
            <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Email </label>
                    <input  className="form-control" type="email" placeholder="Enter  email" onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input  className="form-control" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>

            {loginError ? <div class="alert alert-danger mt-2" role="alert"> Error: {loginError} </div> : "" }
            </>
        }
        

        </>
    )
}

export default Login
