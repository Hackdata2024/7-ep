import React from 'react'
import styled from 'styled-components'

const UserForm = () => {
  return (
    <BackGround>
        <form className="card">
        <div class="content">
            <p class="heading">Personalize Your AI learning
            </p><p class="para">
                Answer the given question to get your own personalized AI learning Platform
            </p>
            <div className="question">
            <p className='Question'>
                Q1. Tell us expertise level ?
            </p><br/>
            <input type="radio" name="1" id="" value={"Basics"}/>
            <label htmlFor=""> Basics </label><br/>
            <input type="radio" name="2" id="" value={"Intermediate"}/>
            <label htmlFor=""> Intermediate </label><br/>
            <input type="radio" name="3" id="" value={"Advance"}/>
            <label htmlFor=""> Advance </label>
            </div>
        <button class="btn">Read more</button>
        </div>
        </form>
    </BackGround>
  )
}

const BackGround = styled.div`
height: 100vh;
background-color: #fec6b8;
display: flex;
align-items: center;
justify-content: center;
.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  background: #fc896c;
  border: 2px solid #fd5d5d;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  color: #e8e8e8;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content .heading {
  font-weight: 700;
  font-size: 32px;
}

.content .para {
  line-height: 1.5;
}

.content .btn {
  color: #e8e8e8;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: #0974f1;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.card:hover {
  box-shadow: 0 0 20px #f8623d;
  border-color: #fec6b8;
}

.content .btn:hover {
  outline: 2px solid #e8e8e8;
  background: transparent;
  color: #e8e8e8;
}

.content .btn:active {
  box-shadow: none;
}

    
`

export default UserForm
