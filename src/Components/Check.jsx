import styled from "@emotion/styled";
import { colors } from "../styles";
// import styled from "styled-components";

const ContainerCR = styled.div`
  label {
    display: flex;
    align-items: center;

    & {
      display: grid;
      grid-template-columns: 1em auto;
      gap: 0.5em;

      input[type="radio"],
      input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        margin: 0;
        font: inherit;
        /* color: currentColor; */
        width: 1.15em;
        height: 1.15em;
        border: 1px solid ${colors.pink["solid"]};
        display: grid;
        place-content: center;
      }

      /* input[type="radio"] {
        border-radius: 50%;
      } */

      input[type="radio"]::before,
      input[type="checkbox"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        /* box-shadow: inset 1em 1em ${colors}; */
        /* box-shadow: inset 1em 1em ${colors.pink["solid"]}; */
      }

      /* input[type="radio"]::before {
        border-radius: 50%;
      } */
      input[type="radio"]::before,
      input[type="checkbox"]::before {
        transform-origin: bottom left;
        background-color: ${colors.pink["solid"]};
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      }

      input[type="radio"]:checked,
      input[type="checkbox"]:checked {
        background-color: ${colors.pink["solid"]};
      }

      input[type="radio"]:checked::before,
      input[type="checkbox"]:checked::before {
        transform: scale(1);
        background-color: #fff;
      }
    }
  }
`;

const Checksito = ({
  type = "checkbox",
  id,
  label,
  value,
  name,
  onChange,
  checked,
  children,
}) => {
  return (
    <ContainerCR>
      <label>
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {label}
        {children}
      </label>
    </ContainerCR>
  );
};

export default Checksito;
