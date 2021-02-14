import React, { useState } from "react";
import styled from "styled-components"

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, company, email, platform, message } = e.target.elements;
    let details = {
      name: name.value,
      company: company.value,
      email: email.value,
      platform: platform.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <Wrapper>
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="name" className="text">Name:</label>
        <input type="text" id="name" required className="textInput"/>
      </div>
      <div>
        <label htmlFor="company" className="text">Company:</label>
        <input type="text" id="company" required className="textInput"/>
      </div>
      <div>
        <label htmlFor="email" className="text">Email:</label>
        <input type="email" id="email" required className="textInput"/>
      </div>
      <div>
        <label htmlFor="platform" className="text">Platform:</label>
        <input type="platform" id="platform" required className="textInput"/>
      </div>
      <div>
        <label htmlFor="message" className="text">Message:</label>
        <textarea id="message" required className="messageInput"/>
      </div>
      <button type="submit" className="submit">{status}</button>
    </form>
    </Wrapper>
  );
};

export default ContactForm;

const Wrapper = styled.div`
.form {
  padding: 20px 0px;
  display: grid;
  justify-content: center;
  margin: auto;
  background: rgba(255,255,255,.15);
  width: 50vw;
  border-radius: 1.5vw;
}

.text {
  display: grid;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
}

.textInput {
  width: 45vw;
  height: 18px;
  margin-bottom: 20px;
  font-size: 20px;
  border-radius: 1.5vw;
}

.messageInput {
  width: 45vw;
  height: 5vw;
  font-size: 20px;
  margin-bottom: 20px;
  border-radius: 1.5vw;
}

.submit {
  width: 6vw;
  height: 50px;
  margin: auto;
  font-weight: bold;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  background: #4f1ec0;
  color: white;
}

.submit:hover {
  transform: scale(1.2);
  transition: .2s ease-out;
  background: #f51d7e;
  box-shadow: 0px 5px 15px #4f1ec0;
}

`