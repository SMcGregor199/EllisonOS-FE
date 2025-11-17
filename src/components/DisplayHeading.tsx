import styled from "@emotion/styled"
import {Typography, Flex} from "antd";

const H1 = styled(Typography.Title)`
    &&{
        font-size:3rem;
        word-break: initial;
    }
`
export default function DisplayHeading(){
    return(
        <Flex vertical style={{flex: "0 0 25%", justifyContent:"center"}}>
            <H1 level={1}>
                The Ellison AI Project
            </H1>    
            <Typography.Paragraph style={{maxWidth:"32ch", fontSize:"1.2rem"}}>
                The Ellison AI Project is an experiment in whether we can teach a machine to be
                an interlocutor to a human on the life and work of the late American novelist, Ralph Ellison.
            </Typography.Paragraph>
        </Flex>
    )
}