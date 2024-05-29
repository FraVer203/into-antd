import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './FormRegister.css'
import routes from '/src/components/routes.js';

const FormRegister = () => {

    // Función para mostrar los errores en el formulario
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // Función para validar el usuario y contraseña
    const onFinish = (values) => {
       console.log('Success: ', values);
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
                        Registrarse
                    </Button>
                </Form.Item>

                Ya tienes tu cuenta <a href={routes.loginRoute}>Inicia sesión</a>
            </Form>
        </Card>
    )
}
export default FormRegister