import {Typography, Flex} from "antd";
export default function DisplayHeading(){
    return(
        
        <Flex vertical style={{justifyContent:"center"}}>
            <Typography.Title level={1} style={{fontSize:"clamp(2.5rem, 8vw, 4rem)", wordBreak:"initial"}}>
                The Ellison AI Project
            </Typography.Title>    
            <Typography.Paragraph style={{maxWidth:"32ch", fontSize:"clamp(1.2rem, 2vw, 1.5rem)"}}>
                The Ellison AI Project is an experiment in whether we can teach a machine to be
                an interlocutor to a human on the life and work of the late American novelist, Ralph Ellison.
            </Typography.Paragraph>
        </Flex>
    )
}