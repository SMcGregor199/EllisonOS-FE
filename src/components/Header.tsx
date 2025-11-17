import {Layout, Flex} from "antd";
import styled from "@emotion/styled";
import ellisonPortrait from "/imgs/ellison-portrait.jpg";
import DisplayHeading from "./DisplayHeading";

const SiteHeader = styled(Layout.Header)`
    height:70vh;
    overflow:hidden;
    background-image:url(${ellisonPortrait});
    background-blend-mode:luminosity;
    background-position:75%;
    background-size:contain;
    background-repeat:no-repeat;
`
export default function Header(){
    return(
        <>
            <a className="skip-link" href="#main">Skip to main content</a>
            <SiteHeader>
                <Flex style={{height:"inherit"}}>
                    <DisplayHeading/>
                    {/* <Image src={ellisonPortrait} preview={false} style={{minHeight:"100%", minWidth:"100%"}}/> */}
                </Flex>
            </SiteHeader>
        </>
    )
}