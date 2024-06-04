import {ConfigProvider} from 'antd';
import './App.css'
import AppRoutes from "./routes/Index.jsx";
import {BrowserRouter} from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext.jsx";

function App() {

    return (
        <AuthProvider>
            <ConfigProvider
                theme = {{
                    token: {
                        colorPrimary: '#7A83E1'
                    }
                }}
            >
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ConfigProvider>
        </AuthProvider>
    )
}

export default App
