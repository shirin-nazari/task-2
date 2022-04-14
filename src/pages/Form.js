import TextFields from '../component/TextFields';
import React, { useId } from 'react';
import SelectFields from '../component/SelectFields';

export default function Form() {
  const id = useId();
  return (
    <>
      {/* <TextFields
        nameInput="name"
        typeInput="number"
        labelInput="number"
        //   valueInput="value"
        idInput={id}
        required
        onChangeInput={(e) => console.log(e.target.value)}
      /> */}
      <SelectFields
        // labelInput="Apjfkkjfdkjdjksalkljk"
        idInput={id}
        // inputLabelId={id}
        textLabel="age"
        // styleSx={{ display: 'block', margin: 1 }}
        onChangeInput={(e) => console.log(e.target.value)}
      ></SelectFields>
    </>
  );
}
