import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ConfigProvider} from "antd";  
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App.tsx'
import "antd/dist/reset.css";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider 
    theme={{
      cssVar: true,
      token:{
        colorBgLayout: "#111729",
        colorText: '#fff',
        fontFamily: "var(--app-body)"

      },
      components:{
        Menu:{
          itemBg:'transparent',
          colorText: '#fff'
        }
      }
  }}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </StrictMode>,
)
