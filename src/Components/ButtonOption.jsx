import styled from "@emotion/styled";
import { colors, typography } from "../styles";

const Container = styled.div`
  margin: 0;
`;
const Radio = styled.div`
  display: inline-flex;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${colors.gray.solid};

  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 36px;
    padding: 8px 14px;
    ${typography.text.body1}
    color: ${colors.gray.solid};
    background: white;
    cursor: pointer;
    transition: background 0.1s;
  }
  label:hover {
    background: #eaeaea;
  }

  label:not(:last-of-type) {
    border-right: 1px solid ${colors.gray["lightGray"]};
  }
  input:checked + label {
    background: ${colors.pink.solid};
    color: white;
  }
`;

const ButtonOption = ({ options, name, onChange }) => {
  return (
    <Container>
      <Radio>
        {options.map((option) => (
          <div key={option.id}>
            <input
              type="radio"
              value={option.value}
              name={name}
              id={option.id}
              onChange={onChange}
              defaultChecked={option.defaultChecked}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </Radio>
    </Container>
  );
};

export default ButtonOption;
