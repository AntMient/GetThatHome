import styled from "@emotion/styled";
import { RiUserReceived2Line } from "react-icons/ri";
import Input from "./Input";
import { typography } from "../styles";
import { onLogin } from "../Services/auth-service";
import { useState } from "react";
import { css } from "@emotion/react";
import { useUserContext } from "../context/UserContext";
import { Button1 } from "./Buttom";

const kenburnT = css`
  @-webkit-keyframes kenburns-top {
    0% {
      -webkit-transform: scale(1) translateY(0);
      transform: scale(1) translateY(0);
      -webkit-transform-origin: 50% 16%;
      transform-origin: 50% 16%;
    }
    80% {
      -webkit-transform: scale(1.25) translateY(-15px);
      transform: scale(1.25) translateY(-15px);
      -webkit-transform-origin: top;
      transform-origin: top;
    }
  }

  @keyframes kenburns-top {
    0% {
      -webkit-transform: scale(1) translateY(0);
      transform: scale(1) translateY(0);
      -webkit-transform-origin: 50% 16%;
      transform-origin: 50% 16%;
    }
    80% {
      -webkit-transform: scale(1.25) translateY(-15px);
      transform: scale(1.25) translateY(-15px);
      -webkit-transform-origin: top;
      transform-origin: top;
    }
  }

  -webkit-animation: kenburns-top 0.5s ease-out both;
  animation: kenburns-top 0.35s ease-out both;
`;

const LoginContainer = styled.div`
  min-width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  z-index: 1000;
  ${kenburnT};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LoginText = styled.p`
  text-align: center;
  color: #000;
  ${typography.head.head5}
  font-weight: 400;
  line-height: 32px;
`;

const LoginCard = styled.div`
  width: 388px;
  height: 280px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const Label = styled.label`
  ${typography.overline.overline1}
  color: var(--DarkGray, #373737);
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Login({ onClose, closeLoginModal }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { setUserRole, updateAuthentication } = useUserContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await onLogin(formData);
      console.log("Login exitoso:", user);

      setUserRole(user.role);
      updateAuthentication(true, user.name, user.id);

      closeLoginModal();
    } catch (error) {
      console.error("Inicio de sesión fallido:", error);
      if (error.status === 401) {
        setError("Las credenciales proporcionadas no son válidas.");
      } else {
        setError(
          "Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo."
        );
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <LoginContainer onClick={closeLoginModal}>
      <LoginCard onClick={(e) => e.stopPropagation()}>
        <LoginText>Login</LoginText>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>email</Label>
            <Input
              id="email"
              name="email"
              placeholder="user@mail.com"
              value={formData.email}
              onChange={handleChange}
            />
            <Label hasValue={formData.password.length > 0}>password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
            />
            {error && <p>{error}</p>}
          </InputContainer>
          <ButtonContainer>
            <Button1 type="submit" onClick={handleSubmit}>
              <RiUserReceived2Line style={{ size: 24 }} />
              {"LOGIN"}
            </Button1>
          </ButtonContainer>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;
