//import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import Header  from "./components/Header";
//const { Content } = Layout;
export default function StaticLayout(){
    return(
        <Layout style={{paddingBlock: "1rem"}}>
            <Header />
            {/* <Content style={{ padding: "24px" }} id="main">
                <Outlet />
            </Content> */}
        </Layout>
    )
}