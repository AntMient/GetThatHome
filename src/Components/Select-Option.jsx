import Select from "react-select";
import { colors } from "../styles";
import Label from "./Label";

const SelectOption = ({
  placeholder,
  content,
  name,
  id,
  value,
  label,
  styleC,
  onChange,
}) => {
  // onst [selectedOption, setSelectedOption] = useState();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {label && <Label label={label} />}
      {/* <Tit>{selectedOption}</Tit> */}
      <Select
        //necesito quitarle el padding al select

        multiple
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "8px",
            boxShadow: "none",
            ...styleC,
            borderColor: state.isFocused
              ? `${colors.pink["solid"]}`
              : `${colors.pink["solid"]}`,
            "&:hover": {
              borderColor: state.isFocused
                ? `${colors.pink["solid"]}`
                : `${colors.pink["solid"]}`,
              cursor: "pointer",
            },
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused
              ? `${colors.pink["shallowPink"]}`
              : `transparent`,
            color: `${colors.gray["solid"]}`,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: `${colors.pink["shallowPink"]}`,
            },
          }),
        }}
        options={content}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectOption;
