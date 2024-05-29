import {ConfigProvider, DatePicker} from 'antd';
import './App.css'

function App() {

    return (
        <ConfigProvider
            theme = {{
                token: {
                    colorPrimary: '#7A83E1'
                }
            }}
        >
            <DatePicker />
        </ConfigProvider>
    )
}

export default App
