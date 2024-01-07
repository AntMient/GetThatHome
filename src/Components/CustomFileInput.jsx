import styled from "@emotion/styled";
import { AiFillDelete, AiOutlineUpload } from "react-icons/ai";
import { RiUploadLine } from "react-icons/ri";
import { colors, typography } from "../styles";
import { useState } from "react";

const InputFile = styled.input`
  display: none;
`;

const InputLabel = styled.label`
  display: flex;
  max-width: 80%;
  background-color: ${colors.pink.solid};
  ${typography.button.button1}
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: white;
  cursor: pointer;
  width: 134px;
  height: 36px;
  padding: 8px;
  border-radius: 8px;
  gap: 8px;

  &:hover {
    background-color: ${colors.pink.darkPink};
  }
`;
const Nophotos = styled.div`
  background-color: ${colors.background.solid};
  width: 100%;
  padding: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const NophotosItem = styled.div`
  background-color: ${colors.shadow.short};
  width: 120px;
  height: 120px;
  padding: 0px 11px 0px 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-align: center;
  justify-content: center;
  color: ${colors.gray.standard};
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const ImagePreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const DeleteIcon = styled.div`
  cursor: pointer;
  color: ${colors.gray.standard};
  margin-top: 5px;
  align-items: end;
`;
const OnlyImg = styled.p`
  color: ${colors.gray.lightGray};
  ${typography.overline.overline1}
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  text-align: left;
`;
const CustomFileInput = ({ onImagenesChange }) => {
  const [fileList, setFileList] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagesConv, setImagesConv] = useState([]);
  const [imagesBase64, setImagesBase64] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const files64 = event.target.files;
    const imagePreviews = [];

    const names = Array.from(files).map((file) => file.name);

    setFileNames(names);
    console.log(names);
    console.log(selectedImages);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      imagePreviews.push({ url: URL.createObjectURL(file), name: file.name });
    }

    Array.from(files).forEach((image) => {
      var reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = function () {
        var arrayAuxiliar = [];
        var base64 = reader.result;
        arrayAuxiliar = base64.split(",");
        // imagesBase64.push(arrayAuxiliar[1]);
        setImagesBase64((prevImages) => [prevImages.push(arrayAuxiliar[1])]);
      };
    });
    // onImagenesChange(imagesConv);
    onImagenesChange(imagesBase64);
    setSelectedImages(imagePreviews);
    setFileList(files);
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...selectedImages];
    // const updatedImages64 = [...imagesBase64];
    updatedImages.splice(index, 1);
    // updatedImages64.splice(index, 1);
    setImagesBase64((prevImages) => [prevImages.splice(index, 1)]);
    onImagenesChange(imagesBase64);
    setSelectedImages(updatedImages);
  };

  return (
    <div>
      <InputFile
        type="file"
        name="file"
        id="file"
        className="inputfile inputfile"
        multiple
        onChange={handleImageChange}
      />
      <InputLabel htmlFor="file">
        <RiUploadLine
          icon="search"
          style={{ marginRight: "8px", fontSize: "20px" }}
        />
        <span className="iborrainputfile">Choose files</span>
      </InputLabel>
      <OnlyImg>Only images, max 5MB</OnlyImg>
      {/* {fileNames.length > 0 && <p>Selected files: {fileNames.join(", ")}</p>} */}
      {selectedImages.length > 0 ? (
        <ImagePreviewContainer>
          {selectedImages.map((image, index) => (
            <ImagePreview key={index}>
              <DeleteIcon onClick={() => handleImageDelete(index)}>
                <AiFillDelete icon="trash" />{" "}
                {/* Agrega el icono de eliminación */}
              </DeleteIcon>
              <img width={185} height={100} src={image.url} alt={image.name} />
            </ImagePreview>
          ))}
        </ImagePreviewContainer>
      ) : (
        <Nophotos>
          <NophotosItem>No photos yet</NophotosItem>
        </Nophotos>
      )}
    </div>
  );
};

export default CustomFileInput;
