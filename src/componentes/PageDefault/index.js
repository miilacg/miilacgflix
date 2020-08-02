import React from 'react';
import Menu from '../menu';
import Footer from '../Footer';
import styled from 'styled-components';
import '../../../src/index.css';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 50px 5% 0 5%;
`;

function PageDefault({children}){
    return (
        /*todo componente precisa ter uma estrutura em volta*/
        /*no react <> chama fragment (similar ao React.Fragment*/
        <>
            <Menu />
            
            <Main>
                {children}
            </Main>
                 
            <Footer />
        </>        
    )
}

export default PageDefault;