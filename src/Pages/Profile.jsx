import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { PiWifiXThin } from "react-icons/pi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 97vw;
  height: 88vh;
  align-items: center;
  justify-content: center;
  color: #131313;
  font-size: 40px;
  font-family: "Fira Mono", monospace;
  gap: 50px;
`;

const glitch = keyframes`
  2%, 64% {
    transform: translate(2px, 0) skew(0deg);
  }
  4%, 60% {
    transform: translate(-2px, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg);
  }
`;

const glitchTop = keyframes`
  2%, 64% {
    transform: translate(2px, -2px);
  }
  4%, 60% {
    transform: translate(-2px, 2px);
  }
  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
`;

const glitchBottom = keyframes`
  2%, 64% {
    transform: translate(-2px, 0);
  }
  4%, 60% {
    transform: translate(-2px, 0);
  }
  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
`;

const GlitchText = styled.div`
  animation: ${glitch} 1s linear infinite;
  position: relative;

  &:before,
  &:after {
    content: attr(title);
    position: absolute;
    left: 0;
  }

  &:before {
    animation: ${glitchTop} 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  &:after {
    animation: ${glitchBottom} 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }
`;

const ProfilePage = () => {
  return (
    <Container>
      <PiWifiXThin />
      <GlitchText title="This page is under maintenance. Please come back later.">
        This page is under maintenance. Please come back later.
      </GlitchText>
    </Container>
  );
};

export default ProfilePage;
