import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestAPI = () => {
  const [resp, setresp] = useState('');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const respFromAPI = await axios.get('http://localhost:8000/testapi');
    setresp(respFromAPI);
  }, []);

  return <div>{resp.data}</div>;
  //   return <div>TestAPI div</div>;
};

export default TestAPI;
