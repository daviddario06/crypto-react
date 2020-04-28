import React from 'react';

const OptionSelect = (props) => {
    const {id,name} = props.moneda
    return (
        <option value = {id}>
            {name}
        </option>
    );
};

export default OptionSelect;