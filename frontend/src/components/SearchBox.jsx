import React, { useState } from 'react';
import { Form, Button , InputGroup} from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { BsDiscord, BsInstagram, BsLinkedin, BsSearch } from 'react-icons/bs'

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'  
        className='mr-sm-2 ml-sm-5 rounded-pill'
      ></Form.Control>
      <Button type='submit'  className=' mx-2 rounded '>
      <i ><BsSearch></BsSearch></i>
        
      </Button>

{/* <InputGroup className='ml-sm-5'>
  <Form.Control
    type='text'
    name='q'
    onChange={(e) => setKeyword(e.target.value)}
    value={keyword}
    placeholder='Search Products...'
    className='rounded-pill'
  />
  <InputGroup.Append>
    <Button type='submit' className='rounded-pill'>
      <i><BsSearch /></i>
    </Button>
  </InputGroup.Append>
</InputGroup> */}


      
      
    </Form>
  );
};

export default SearchBox;
