import React, { useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Container, Content, FormContainer } from "./styles";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <Container>
      <Content>
        <h1>Login</h1>
        <FormContainer>
            <fieldset>
                <div className="input-container">
                    <label htmlFor="email">E-mail</label>
                    <Input value={email} pleceholder='Seu email' onChangeText={(event) => setEmail(event.target.value)} type='email' name="email" id="email" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <Input value={password} pleceholder='Sua senha' onChangeText={(event) => setPassword(event.target.value)} type='password' name="password" id="password" />
                </div>
                <Button title="Login" onCLick={(event) => console.log(event)}/>
            </fieldset>
            <span><p>Não tem uma conta? <a href="#">Cadastre-se</a></p></span>
        </FormContainer>
      </Content>
    </Container>
  );
};
