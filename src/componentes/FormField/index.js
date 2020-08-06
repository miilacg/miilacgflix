import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type='color']) + span { 
    transform: scale(.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
      &:not([type='color']) + span {
        transform: scale(.6) translateY(-10px);
      }
    `;}
  }
`;
//para usar o + o Label.Text tem que vir exatamente depois
//:not([type = 'color']) significa o foco no que não tiver o type igual a color

function FormField({label, type, value, name, onChange}) {
  const fildId = `id_${name}`;
  //se o type for exatamente iguala o textarea, text area. se não, input
  //const tag = type === 'textarea' ? 'textarea' : 'input'; // : significa OU
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';
  //const Tag = as;

  return (
    <FormFieldWrapper>
        <Label htmlFor={fildId}>
          <Input //Tag
              //as = "textarea"
              as={tag}
              id={fildId}
              type={type}
              value={value}
              name={name}
              onChange={onChange}
          />
          <Label.text>
            {label}:
          </Label.text>
        </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {//definição automatica caso não seja preenchido
  type: 'text',
  value: '', //é comum o value não ter nada
  onChange: () => {},
};

//tipar sem tipar. é important em react pq as componentes
//precisam receber exatamente o que esperam receber
FormField.protoType = {//olhar outros tipos na documentação
  label: PropTypes.string.isRequired,
  type: PropTypes.string, //não eh obrigatorio
  valor: PropTypes.string, 
  name: PropTypes.string.isRequired, 
  onChange: PropTypes.func,
};

export default FormField;