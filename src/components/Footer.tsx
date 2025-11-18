import { Layout, Button, Flex, Typography} from "antd";
import {GithubOutlined, LinkedinOutlined} from "@ant-design/icons";
export default function Footer(){
    return(
        <Layout.Footer>
            <Flex style={{justifyContent:"center", alignItems:"center"}} gap={"1rem"}>
                <Button
                type="default"
                icon={<LinkedinOutlined />}
                href="https://linkedin.com/in/shayne-mcgregor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open my LinkedIn profile in a new tab"
                style={{backgroundColor:"transparent"}}
            >
            </Button>
            <Button
                type="default"
                icon={<GithubOutlined />}
                href="https://github.com/SMcGregor199"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open my GitHub profile in a new tab"
                style={{backgroundColor:"transparent"}}
                >
                </Button>
                <Typography.Text style={{ display: "block" }}>
                    © {new Date().getFullYear()} Shayne McGregor
                </Typography.Text>
            </Flex>

        </Layout.Footer>
    )
}