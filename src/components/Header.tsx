import {Layout, Menu, Typography, Flex} from "antd";
import {Link} from "react-router-dom";
const navItems = [
    { key: "1", label: <Link to="/">Home</Link> },
    { key: "2", label: <Link to="/about">About</Link> },
    { key: "3", label: <Link to="/contact">Contact</Link> }
];
export default function Header(){
    return(
        <Layout.Header>
            <Flex justify="space-between" align="center">
            <Typography.Title level={1} style={{margin: 0}}>The Ellison AI Project</Typography.Title>
            <nav aria-label="Main navigation" style={{ flex: 1, minWidth: 0 }}>
                <Menu                 
                    mode="horizontal"
                    items={navItems}
                    style={{ borderBottom: "none", justifyContent: "flex-end" }}
                />
            </nav>
            </Flex>
        </Layout.Header>
    )
}