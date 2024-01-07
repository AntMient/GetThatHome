/** @jsxImportSource @emotion/react */
import { IoAirplane } from "react-icons/io5";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";

const planeMove = keyframes`
  0% {
    left: 30%;
  }
  100% {
    left: 100%;
  }
`;

const trace = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: 100%;
    width: 0;
  }
`;

const PaperPlaneContainer = styled.div`
  position: absolute;
  top: 67%;
  left: 10%;
  animation: ${planeMove} 10s linear forwards;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const PaperPlaneIcon = styled(IoAirplane)`
  animation: ${trace} 10s linear;
  color: #898888; 
`;

function AnimatedPaperPlane() {
  const [showPlane, setShowPlane] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPlane(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <PaperPlaneContainer show={showPlane}>
      <PaperPlaneIcon />
    </PaperPlaneContainer>
  );
}

export default AnimatedPaperPlane;
