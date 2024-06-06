import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './FormLogin.css'
import routes from '/src/routes/routes.js';

const FormLogin = () => {

    // Estado para el error del login
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    // Función para mostrar los errores en el formulario
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // Función para validar el usuario y contraseña
    const onFinish = (values) => {
        const { username, password } = values;
        if (username === user.username && password === user.password) {
            navigate('/')
        } else {
            setLoginError(true);
            const errorInfo = "Credenciales incorrectas. Inténtalo de nuevo."
            onFinishFailed(errorInfo)
        }
    }

    const user = {
        username: 'admin',
        password: 'admin'
    }

    return(
        <Card
            tittle="Bienvenido de nuevo"
            bordered={false}
            className="responsive-card"
        >
            {loginError && <p style={{ color: 'red' }}>Credenciales incorrectas. Inténtalo de nuevo.</p>}
            <Form
                name={"normal_login"}
                className={"login_form"}
                initialValues={{
                    remember: true
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name={"username"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su usuario."
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className={"site-form-item-icon"} />} placeholder="Usuario" />
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
                    <Button type="primary" htmlType="submit" className={"login-form-button"}>
                        Iniciar Sesión
                    </Button>
                </Form.Item>
                ¿Aún no tienes cuenta? <a href={routes.registerRoute}>Registrate</a>

            </Form>
        </Card>
    )
}
export default FormLogin