import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './FormLogin.css'
import routes from '/src/routes/routes.js';
<<<<<<< HEAD
import axios from "axios";
=======
import authService from '/src/services/auth.js'
import {useAuth} from "../../hooks/useAuth.js";
>>>>>>> context-auth

const FormLogin = () => {

    // Estado para el error del login
<<<<<<< HEAD
    const [loginError, setLoginError] = useState(false)
    // Estado de carga
    const [loading, setLoading] = useState(false);
    const [messageError, setMessageError] = useState('')
    const navigate = useNavigate()

    // Función para mostrar los errores en el formulario
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setLoginError(true)
    };

    // // Función para validar el usuario y contraseña
    // const onFinish = (values) => {
    //     const { username, password } = values;
    //     if (username === user.username && password === user.password) {
    //         navigate('/')
    //     } else {
    //         setLoginError(true);
    //         const errorInfo = "Credenciales incorrectas. Inténtalo de nuevo."
    //         onFinishFailed(errorInfo)
    //     }
    // }

    // Función para validar el usuario y contraseña
    const onFinish = async (values) => {
        //console.log('Success: ', values);
        setLoading(true) // Establecer el estado de carga a true al enviar el formulario
        try {
            const response = await axios.post(`${routes.registerBack}auth/signin/`, {
                email: values.email,
                password: values.password,
            })
            console.log('Registro exitoso', response.data)
            navigate('/')
        } catch (e) {
            console.error('Error en el inicio: ', e.response.data)
            setLoginError(true)
            setMessageError(e.response.data.message)
        } finally {
            setLoading(false)
        }
    }

=======
    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    // Manejo de estado de autenticación
    const useAuthData = useAuth()
    console.log(useAuthData)

    // Función para mostrar los errores en el formulario
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    // Función para validar el usuario y contraseña
    const onFinish = async (values) => {
        setLoading(true)
        setLoginError(false)
        try {
            const response = await authService.loginF(values.email, values.password)
            if (response && response.data) {
                localStorage.setItem('TOKEN: ', response.data.token)
                console.log(response.data.token)
            } else {
                console.error("Error en el inicio de sesión: Respuesta inesperada")
                setLoginError(true)
            }
        } catch (e) {
            console.error("Error en el inicio de sesión: " + e.response ? e.response.data : e.message)
            setLoginError(true)
        } finally {
            setLoading(false)
        }
    }

>>>>>>> context-auth
    return(
        <Card
            tittle="Bienvenido de nuevo"
            bordered={false}
            className="responsive-card"
        >
            {loginError && <p style={{ color: 'red' }}>Error: {messageError} </p>}
            <Form
                name={"normal_login"}
                className={"login_form"}
                initialValues={{
                    remember: true
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name={"email"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su correo."
                        }
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className={"site-form-item-icon"} />} placeholder="Correo electrónico"
                    />
                </Form.Item>

                <Form.Item
                    name={"password"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su contraseña."
                        }
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className={"site-form-item-icon"} />}
                        type="password"
                        placeholder="Contraseña"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={"login-form-button"} loading={loading}>
                        Iniciar Sesión
                    </Button>
                </Form.Item>
                ¿Aún no tienes cuenta? <a href={routes.registerRoute}>Registrate</a>

            </Form>
        </Card>
    )
}
export default FormLogin