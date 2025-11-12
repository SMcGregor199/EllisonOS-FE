import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import Header  from "./components/Header";
import Footer  from "./components/Footer";
const { Content } = Layout;
export default function StaticLayout(){
    return(
        <Layout style={{paddingBlock: "2rem"}}>
            <Header />
            <Content style={{ padding: "24px" }} id="main">
                <Outlet />
            </Content>
            <Footer />
        </Layout>
    )
}