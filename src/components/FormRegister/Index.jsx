import React, {useState} from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import './FormRegister.css'
import routes from '/src/routes/routes.js';
import authService from "../../services/auth.js"
import {validatePassword} from "../../utils/validation.js";

const FormRegister = () => {

    // Estado de error de registro
    const [registerError, setRegisterError] = useState(false)
    // Estado de carga
    const [loading, setLoading] = useState(false);
    const [messageError, setMessageError] = useState('')
    const navigate = useNavigate();

    // Función para mostrar los errores en el formulario
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setRegisterError(true)
    };

    // Función para validar el usuario y contraseña
    const onFinish = async (values) => {
        //console.log('Success: ', values);
        setLoading(true) // Establecer el estado de carga a true al enviar el formulario
        try {
            await authService.register(values.name, values.lastname, values.email, values.password)
            console.log("Registro exitoso")
            navigate("/")
        } catch (e) {
            console.error('Error en el registro: ', e.response.data)
            setRegisterError(true)
            setMessageError(e.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return(
        <Card
            tittle="Registrate para iniciar sesión"
            bordered={false}
            className="responsive-card"
        >
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
                    name={"name"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su nombre."
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className={"site-form-item-icon"} />} placeholder="Nombre" />
                </Form.Item>

                <Form.Item
                    name={"lastname"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su apellido."
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className={"site-form-item-icon"} />} placeholder="Apellido" />
                </Form.Item>


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

                <Form.Item
                    name={"password-repet"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor repita su contraseña."
                        },
                        ({ getFieldValue }) => validatePassword({ getFieldValue })
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className={"site-form-item-icon"} />}
                        type="password"
                        placeholder="Repetir Contraseña"
                    />
                </Form.Item>

                <Form.Item>
                    {registerError && <p style={{ color: 'red' }}>Falló el registro: {messageError} </p>}
                    <Button type="primary" htmlType="submit" className={"login-form-button"} loading={loading}>
                        Registrar
                    </Button>
                </Form.Item>

                Ya tienes tu cuenta <a href={routes.loginRoute}>Inicia sesión</a>
            </Form>
        </Card>
    )
}
export default FormRegister