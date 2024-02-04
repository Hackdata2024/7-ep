import React from 'react'
import styled from 'styled-components'

const Info = () => {
    return (
        <Container>
            <GPTtext>
                <div className="heading">Easy-Peasy</div>
                <div className="GPT">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eveniet, accusamus reiciendis illo laudantium vel culpa voluptate laboriosam dolorum doloribus! </div>
            </GPTtext>
        </Container>
      )
    }
    
    const GPTtext = styled.div`
        width:65vw;
        height: 87vh;
        margin: 0 0rem 0 0;
        border-radius: 50px;
        background: #ffb19e;
        box-shadow:  20px -20px 60px #d99686,-20px 20px 60px #ffccb6;
        .heading{
            width: 65vw;
            height: auto;
            padding: 1rem;
            background-color: #b04a31;
            border-radius: 50px 50px 0 0;
            text-align: center;
            font-size: 25px;
            font-weight: 600;
            color: black;
        }
        .GPT{
            margin: 1rem;
        }
    `
    
    const Container = styled.div`
    display: flex;
    `
    
export default Info
