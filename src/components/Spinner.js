import React from "react";
import styled from "styled-components";
const SpinnerStyle = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const SpinnerPage = () => {
  return (
    <SpinnerStyle>
      <div className="loader" />
    </SpinnerStyle>
  );
};

export default SpinnerPage;
