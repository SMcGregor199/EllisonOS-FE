import { Layout, Anchor} from "antd";
export default function Footer(){
    return(
        <Layout.Footer>
            <Anchor direction="horizontal" style={{fontSize:"1rem"}} items={[
                {key:"about", href:"#about", title:"About"},
                {key:"case-study", href:"#case-study", title:"Case Study"},
                {key:"contact", href:"#contact", title:"Contact"},
                {key:"blog-posts", href:"#blog-posts", title:"Blog Posts"},
            ]}>
   
            </Anchor>
        </Layout.Footer>
    )
}