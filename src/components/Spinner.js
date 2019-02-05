import React from "react";
import styled from "styled-components";
const SpinnerStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SpinnerPage = () => {
  return (
    <SpinnerStyle>
      <div className="loader" />
    </SpinnerStyle>
  );
};

export default SpinnerPage;
