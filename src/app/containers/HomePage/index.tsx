import React from "react";

// styling tools
import styled from "styled-components";
import tw from "twin.macro";

// components
import { Navbar } from "../../components/Navbar";

const PageContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  h-full
  items-center
  overflow-x-hidden
    `}
`;

const Homepage = () => {
  return (
    <PageContainer>
      <Navbar />
    </PageContainer>
  );
};

export default Homepage;
