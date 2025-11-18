import {Typography, Flex} from "antd";
import { Grid } from "antd";

export default function DisplayHeading(){
    const screens = Grid.useBreakpoint();
    const isMd = screens.md ?? false;

    const headingFontSize = isMd ? "3rem" : "4rem";
    const paragraphFontSize = isMd ? "1.2rem" : "1.5rem";
    const flexSize = isMd ? "0 0 35%" : "0 0 100%";
    return(
        
        <Flex vertical style={{flex:flexSize, justifyContent:"center"}}>
            <Typography.Title level={1} style={{fontSize:headingFontSize, wordBreak:"initial"}}>
                The Ellison AI Project
            </Typography.Title>    
            <Typography.Paragraph style={{maxWidth:"32ch", fontSize:paragraphFontSize}}>
                The Ellison AI Project is an experiment in whether we can teach a machine to be
                an interlocutor to a human on the life and work of the late American novelist, Ralph Ellison.
            </Typography.Paragraph>
        </Flex>
    )
}