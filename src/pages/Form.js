import TextFields from '../component/TextFields';
import React from 'react';
import SelectFields from '../component/SelectFields';

export default function Form() {
  return (
    <>
      <TextFields
        nameInput="name"
        typeInput="number"
        labelInput="number"
        //   valueInput="value"
        required
        onChangeInput={(e) => console.log(e.target.value)}
      />
      <SelectFields
        labelInput="input"
        onChangeInput={(e) => console.log(e.target.value)}
      />
    </>
  );
}
