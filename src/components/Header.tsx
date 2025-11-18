import {Layout, Flex, Anchor} from "antd";
import styled from "@emotion/styled";
import ellisonPortrait from "/imgs/ellison-portrait.jpg";
import DisplayHeading from "./DisplayHeading";
import { Grid } from "antd";

const SiteHeader = styled(Layout.Header)`
    height:70vh;
    overflow:hidden;
    background-blend-mode:luminosity;
    background-position:75%;
    background-repeat:no-repeat;
`
export default function Header(){
    const screens = Grid.useBreakpoint();
    const backgroundSize = screens.xl ? "contain" : "45%";
    const backgroundImage = screens.md ? `url(${ellisonPortrait})` : "none";
    return(
        <>
            <a className="skip-link" href="#main">Skip to main content</a>
            <SiteHeader style={{backgroundImage:backgroundImage, backgroundSize:backgroundSize}}>
                <Anchor direction="horizontal" style={{fontSize:"1rem"}} items={[
                    {key:"about", href:"#about", title:"About"},
                    {key:"case-study", href:"#case-study", title:"Case Study"},
                    {key:"contact", href:"#contact", title:"Contact"},
                    {key:"blog-posts", href:"#blog-posts", title:"Blog Posts"},
                    ]}>
                </Anchor>
                <Flex style={{height:"inherit"}}>
                    <DisplayHeading screenSize={screens}/>
                </Flex>
            </SiteHeader>
        </>
    )
}