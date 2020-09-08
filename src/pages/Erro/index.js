import React from 'react';
import PageDefault from '../../componentes/PageDefault'
import styled from 'styled-components';
import '../../../src/index.css'

const Title = styled.h1`
    color: var(--erro);
    margin: 40px auto auto 50px;
    font-size: 50px;
`;

function PaginaErro(){
    return (
        <PageDefault>
            <Title>Essa não página existe</Title>
        </PageDefault>
    )
}

export default PaginaErro;