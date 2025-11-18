import {Layout, Flex, Typography} from "antd";
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
const HeaderNav = styled.nav`
    display:flex;
    flex-wrap:wrap;
    gap:1rem;
    a{
        color:#fff;
        font-size:1rem;
    }
`
export default function Header(){
    const screens = Grid.useBreakpoint();
    const backgroundSize = screens.xl ? "contain" : "45%";
    const backgroundImage = screens.md ? `url(${ellisonPortrait})` : "none";
    return(
        <>
            <a className="skip-link" href="#main">Skip to main content</a>
            <SiteHeader style={{backgroundImage:backgroundImage, backgroundSize:backgroundSize}}>
                <HeaderNav>
                    <Typography.Link href="#about">About</Typography.Link>
                    <Typography.Link href="#case-study">Case Study</Typography.Link>
                    <Typography.Link href="#contact">Contact</Typography.Link>
                    <Typography.Link href="#blog-posts">Blog Posts</Typography.Link>
                </HeaderNav>
                <Flex style={{height:"inherit"}}>
                    <DisplayHeading/>
                </Flex>
            </SiteHeader>
        </>
    )
}