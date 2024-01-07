import styled from "@emotion/styled";
import Draggable from "react-draggable";

const Overlay = styled.div`
  position: absolute;
  display: flex;
`;

const ContenedorModal = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--White, #fff);
  padding: ${(props) => (props.padding ? props.padding : "20px")};
  border-radius: 8px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
  cursor: pointer;

`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const Title = styled.p`
  color: var(--Gray, #616161);
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const BotonCerrar = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #f48fb1;
  &:hover {
    background: #ffecf382;
  }
`;

const Modal = ({
  children,
  estado,
  cambiarEstado,
  titulo,
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  padding,
}) => {
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <Draggable defaultPosition={{x: 80, y: 30}}>
            <ContenedorModal padding={padding}>
              {mostrarHeader && (
                <EncabezadoModal>
                  <Title>{titulo}</Title>
                  <BotonCerrar onClick={() => cambiarEstado(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </BotonCerrar>
                </EncabezadoModal>
              )}
              {children}
            </ContenedorModal>
          </Draggable>
        </Overlay>
      )}
    </>
  );
};
export default Modal;
