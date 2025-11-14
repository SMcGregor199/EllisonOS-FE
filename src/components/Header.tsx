import {Layout, Flex, Image} from "antd";
import ellisonPortrait from "/imgs/ellison-portrait.jpg";
import DisplayHeading from "./DisplayHeading";

export default function Header(){
    return(
        <>
        <a className="skip-link" href="#main">Skip to main content</a>
        <Layout.Header style={{height:"auto"}}>
            <Flex>
                <DisplayHeading/>
                <Image src={ellisonPortrait} preview={false} style={{minHeight:"100%", minWidth:"100%"}}/>
            </Flex>
        </Layout.Header>
        </>
    )
}