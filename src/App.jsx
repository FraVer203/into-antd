import {ConfigProvider} from 'antd';
import './App.css'
import AppRoutes from "./routes/Index.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
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
    )
}

export default App
