import { Input } from "../../../components/Input";
import { Container, Content, FormContainer } from "./styles";

export const LoginPage = () => {
  return (
    <Container>
      <Content>
        <h1>Login</h1>
        <FormContainer>
            <fieldset>
                <div className="form-container">
                    <label htmlFor="email">E-mail</label>
                    <input type='email' name="email" id="email" />
                </div>
                <div className="form-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="Login" />
            </fieldset>
            <span>Não tem uma conta? <a href="#">Cadastre-se</a></span>
        </FormContainer>
      </Content>
    </Container>
  );
};
