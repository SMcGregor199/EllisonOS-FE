import { Layout, Typography } from "antd";
import {Link} from "react-router-dom";

export default function Footer(){
    return(
        <Layout.Footer>
           <Link to="/">About</Link>
           <Link to="/">Case Study</Link>
           <Link to="/">Contact</Link>
           <Link to="/">Blog Posts</Link>
        </Layout.Footer>
    )
}