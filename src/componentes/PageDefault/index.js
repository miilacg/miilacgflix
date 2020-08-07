import React from 'react';
import Menu from '../menu';
import Footer from '../Footer';
import styled, { css } from 'styled-components';
import '../../../src/index.css';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

function PageDefault({children, paddingAll}){
    return (
        /*todo componente precisa ter uma estrutura em volta*/
        /*no react <> chama fragment (similar ao React.Fragment*/
        <>
            <Menu />
            
            <Main paddingAll={paddingAll}>
                {children}
            </Main>
                 
            <Footer />
        </>        
    )
}

export default PageDefault;