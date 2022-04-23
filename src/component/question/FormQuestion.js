import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from '../TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/features/slice/getDataSlice';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function FormQuestion({ initialDataQuestion }) {
  const [data, setData] = useState(initialDataQuestion);
  const dispatch = useDispatch();
  // use id
  const id = useId();
  // add data in store
  dispatch(addData(data));
  const updateData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <Box
      sx={{
        width: { lg: '50vw', xs: '40vw', md: '70vw' },
        display: 'flex',
        flexDirection: 'column',
        margin: '30px auto',
      }}
    >
      <TextFields
        // valueInput={data.question}
        value={data.question}
        dir="rtl"
        idInput={id}
        labelInput="سوال"
        nameInput="question"
        onChangeInput={updateData}
        required
        typeInput="text"
        styleInput={{ width: '40vw', padding: 1 }}
        variantStyle="filled"
      />
      <TextareaAutosize
        id={id}
        value={data.answer}
        aria-label="جواب"
        name="answer"
        onChangeInput={updateData}
        minRows={3}
        placeholder="answer ..."
        style={{
          width: '40vw',
          padding: 1,
          marginTop: 5,
          background: '#F0F0F0',
          height: '30vh',
        }}
      />
    </Box>
  );
}
