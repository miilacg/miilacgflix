import React from 'react';
import PropTypes from 'prop-types';

function FormField({label, type, valor, name, onChange}) {
  const fildId = `id_${name}`;

  return (
    <div>
        <label htmlFor={fildId}>
            {label}:
            <input
                id={fildId}
                type={type}
                value={valor}
                name={name}
                onChange={onChange}
            />
        </label>
    </div>
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