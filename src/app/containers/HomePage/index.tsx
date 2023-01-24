import React from 'react'

import tw from 'twin.macro';
import styled from 'styled-components';

const PageContainer = styled .div`
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
    <PageContainer>Hello home page</PageContainer>
  )
}

export default Homepage