import { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Button } from "../../../components/Button"
import { Input } from "../../../components/Input"
import { AuthContext, IAuthContext } from "../../../contexts/Auth/AuthContext";
import { IUser } from "../../../interfaces/models/IUser";
import { api, CommomHeaderProperties } from "../../../service/api";
import { Container, Content, FormContainer } from "./styles"

export const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(AuthContext) as IAuthContext
    const navigate = useNavigate()

    const handleRegisterUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        try {
            const {data: {user, token}} = await api.post<{user: IUser, token: string}>('/auth/register', {
                name,
                email,
                password
            })

            setUser(user)
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            api.defaults.headers = {authorization: `Bearer ${token}`} as CommomHeaderProperties

            navigate('/main/tasks')
            
        } catch (error) {
            console.error(error)
        }
    }

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
                <Button title="Login" onCLick={(event) => handleRegisterUser(event)}/>
            </fieldset>
            <span><p>Já tem uma conta? <a onClick={handleDIrectToRegisterPage}>Entre!</a></p></span>
        </FormContainer>
      </Content>
    </Container>
    )
}