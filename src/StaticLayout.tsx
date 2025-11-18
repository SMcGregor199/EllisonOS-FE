import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import Header  from "./components/Header";
import Footer from "./components/Footer";
const { Content } = Layout;
export default function StaticLayout(){
    return(
        <Layout style={{paddingBlock: "2rem", minHeight:"100vh"}}>
            <Header />
            <Content style={{paddingInline: 50, paddingBlock: 50, flexGrow: 1}} id="main">
                <Outlet />
            </Content>
            <Footer />
        </Layout>
    )
}