import React from "react";
import styled from "styled-components";
const SpinnerStyle = styled.div`
  position: absolute;
  top: 110px;
  left: 0;
  right: 0;
  z-index: 999999;
  display: flex;
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
