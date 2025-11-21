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
        colorText: '#fff',
        fontFamily: "var(--app-body)",
          screenXL: 1250,     
          screenXLMin: 1250,
          screenXLMax: 1599,

      },
      components:{
        Layout:{
          bodyBg:"var(--ant-layout-header-bg)",
          footerBg:"var(--ant-layout-header-bg)"
        }
      }
  }}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </StrictMode>,
)
