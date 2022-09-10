import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"
import { Container, Content, FormContainer } from "./styles"

export const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleDIrectToRegisterPage = () => navigate('/auth/login')

    return (
        <Container>
      <Content>
        <h1>Registro</h1>
        <FormContainer>
            <fieldset>
            <div className="input-container">
                    <label htmlFor="name">E-mail</label>
                    <Input value={name} pleceholder='Seu email' onChangeText={(event) => setName(event.target.value)} type='name' name="name" id="name" />
                </div>
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
            <span><p>Já tem uma conta? <a onClick={handleDIrectToRegisterPage}>Entre!</a></p></span>
        </FormContainer>
      </Content>
    </Container>
    )
}