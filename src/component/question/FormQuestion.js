import React, { useId, useState } from 'react';
import { Box } from '@mui/system';
import TextFields from '../TextFields';
import { useDispatch } from 'react-redux';
import { addData } from '../../redux/features/slice/getDataSlice';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const initialDataQuestion = {
  question: '',
  answer: '',
};
export default function FormQuestion() {
  const counter = [0, 1, 2, 3, 4, 5];
  const [data, setData] = useState(initialDataQuestion);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  // use id
  const id = useId();
  // add data in store
  dispatch(addData(data));
  return (
    <Box sx={{ margin: 5, width: { lg: '60vw', xs: '40vw', md: '70vw' } }}>
      <TextFields
        idInput={id}
        labelInput="سوال"
        nameInput="question"
        onChangeInput={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        required
        typeInput="text"
        styleInput={{ width: '40vw', padding: 1 }}
        variantStyle="filled"
      />
      <TextareaAutosize
        id={id}
        aria-label="جواب"
        name="answer"
        onChange={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        minRows={3}
        placeholder="answer ..."
        style={{
          width: '40vw',
          padding: 1,
          marginTop: 5,
          background: '#F0F0F0',
          height: '40vh',
        }}
      />
      {/* <TextFields
        idInput={id}
        labelInput=""
        nameInput="answer"
        onChangeInput={(e) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        }}
        required
        typeInput="textarea"
        styleInput={{ width: '40vw', padding: 1 }}
        variantStyle="filled"
        multiline
        rowsInput={12}
      /> */}
    </Box>
  );
}
