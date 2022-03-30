import React, {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import authService from "../../Services/auth-service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col } from 'react-bootstrap';
import './login.css';

const Login = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");

    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await authService.login(userName, password).then(
                (response) => {
                    localStorage.setItem("token", response.token)                 
                    localStorage.setItem("userName",response.username)
                    navigate('/');
                    window.location.reload();
                },
                (error) => {
                    if (error?.response.status === 400) { setErrMessage("Username or password is incorrect. Please try again?") }
                }
            )
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="App">
            {localStorage.getItem("token") ?
                (<div>Login</div>) :
                (<Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div className="center_Form">
                            <Col sm={3}>
                                <lable>User</lable>
                                <Form.Control
                                    placeholder="Enter Username"
                                    type="text"
                                    name="username"
                                    value={userName}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required />
                            </Col>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <div className="center_Form">
                            <Col sm={3} >
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required />
                            </Col>
                        </div>
                    </Form.Group>
                    <label style={{ color: 'red', fontSize: '10px', fontWeight: 'bold' }}>{errMessage}</label>
                    <div>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>)}
        </div>
    )
}
export default Login;