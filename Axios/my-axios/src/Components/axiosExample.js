import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const axiosExample = async () => {
  try {
    const getResponse = await axios.get(BASE_URL);
    console.log('GET USERS: ', getResponse.data);

    const postResponse = await axios.post(BASE_URL, {
      name: 'John Doe',
      email: 'john@example.com',
    });
    console.log('POST USER: ', postResponse.data);

    const putResponse = await axios.put(`${BASE_URL}/1`, {
      name: 'Jane Doe',
      email: 'jane@example.com',
    });
    console.log('PUT USER: ', putResponse.data);

    const patchResponse = await axios.patch(`${BASE_URL}/1`, {
      email: 'patched@example.com',
    });
    console.log('PATCH USER: ', patchResponse.data);

    const deleteResponse = await axios.delete(`${BASE_URL}/1`);
    console.log('DELETE USER: ', deleteResponse.data);

  } catch (error) {
    console.error('Axios Error:', error);
  }
};

export default axiosExample;
