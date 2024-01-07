import { useState } from "react";
import styled from "@emotion/styled";
import { typography } from "../styles";
import Input from "../Components/Input";
import { createUser } from "../Services/login-service";
import { Button1 } from "./Buttom";
import Label from "./Label";
import { useUserContext } from "../context/UserContext";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.11);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 390px;
  height: 480px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const TitleH5 = styled.p`
  ${typography.head.head5}
`;

const LabelForm = styled.label`
  color: var(--DarkGray, #373737);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
`;

const Span = styled.span`
  color: var(--LightGray, #8e8e8e);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DataForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  width: 100%;
  max-width: 355px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 16px;
`;

const ButtonStyled = styled(Button1)`
  width: 177px;
  height: 40px;
  color: var(--White, #fff);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  text-align: center;
`;

const CreateAccountModal = ({ onClose, selectedRole }) => {
  const { updateAuthentication } = useUserContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role_id: selectedRole,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    try {
      const user = await createUser(formData);
      console.log("Usuario creado:", user);

      updateAuthentication(true, user.name, user.id);

      window.location.replace("/"); 
    } catch (error) {
      console.error("Error al crear usuario:", error.message);
      alert(
        "Hubo un error al crear el usuario. Por favor, inténtalo de nuevo."
      );
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={handleModalClick}>
        <TitleH5 style={{ textAlign: "center" }}>Create your Account</TitleH5>
        <DataForm onSubmit={handleSubmit}>
          <FormContainer>
            <LabelForm htmlFor="name">name</LabelForm>
            <Input
              id="name"
              name="name"
              placeholder="Jhon Doe"
              value={formData.name}
              onChange={handleInputChange}
            />
            <LabelForm htmlFor="email">email</LabelForm>
            <Input
              id="email"
              name="email"
              placeholder="user@mail.com"
              value={formData.email}
              onChange={handleInputChange}
            />
            <LabelForm htmlFor="phone">phone</LabelForm>
            <Input
              id="phone"
              name="phone"
              placeholder="999-999-999"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <LabelForm htmlFor="password">password</LabelForm>
            <Label hasValue={formData.password.length > 0}>password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="******"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Span>At least 6 characteres</Span>
            <LabelForm htmlFor="confirmPassword">Confirm Password</LabelForm>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="******"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </FormContainer>
          <ButtonContainer>
            <ButtonStyled type="submit">Create account</ButtonStyled>
          </ButtonContainer>
        </DataForm>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CreateAccountModal;
