import {Layout, Typography, Image, Flex} from "antd";
import styled from "@emotion/styled";
import ellisonPortrait from "/imgs/ellison-portrait.jpg";
import DisplayHeading from "./DisplayHeading";
import LaunchApp from "./LaunchApp";

const SiteHeader = styled(Layout.Header)`
    height:100vh;
    display:flex;
    gap:2rem;
    position:relative;
    overflow:hidden;
    padding-top:50px;
`
const HeaderImage = styled(Image)`
    &&{
    width: 100%;
    height:inherit;
    object-fit: cover;
    object-position: 80% 15%;
    }
`
const HeaderNav = styled.nav`
    display:flex;
    flex-wrap:wrap;
    gap:2rem;
    a{
        color:#fff;
        font-size:1rem;
    }
`
export default function Header(){
    return(
        <>
            <a className="skip-link" href="#main">Skip to main content</a>
            <SiteHeader>
                <Flex vertical className="header-text">
                    <HeaderNav>
                        <Typography.Link href="#about">About</Typography.Link>
                        <Typography.Link href="#case-study">Case Study</Typography.Link>
                        <Typography.Link href="#contact">Contact</Typography.Link>
                        <Typography.Link href="#blog-posts">Blog Posts</Typography.Link>
                    </HeaderNav>
                    <DisplayHeading/>
                    <LaunchApp/>
                </Flex>
                <HeaderImage src={ellisonPortrait} preview={false} className="header-image"/>
            </SiteHeader>
        </>
    )
}