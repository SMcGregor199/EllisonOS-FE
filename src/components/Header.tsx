import {Layout} from "antd";
import DisplayHeading from "./DisplayHeading";

export default function Header(){
    return(
        <>
        <a className="skip-link" href="#main">Skip to main content</a>
        <Layout.Header style={{height:"auto"}}>
            <DisplayHeading/>
        </Layout.Header>
        </>
    )
}