import styled from "@emotion/styled"
import {Typography} from "antd";

const H1 = styled(Typography.Title)`
    &&{
        margin: 0;
        font-size:5rem;
    }
`
const Span = styled.span`
    display: block;
`   
export default function DisplayHeading(){
    return(
        
        <H1 level={1}>
            <Span>The</Span> 
            <Span>Ellison</Span> 
            <Span>AI</Span> 
            <Span>Project</Span>
        </H1>    
    )
}