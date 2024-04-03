import axios from 'axios';

async function sendDataToServer(data) {
  try {
    const response = await axios.post('/api/seller', data);
    console.log(response.data);
  } catch (error) {
    console.error('Hubo un error:', error.response.data);
  }
}

export default sendDataToServer;