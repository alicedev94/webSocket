import axios from 'axios'

export const getNoti = async () => {
    const res = await axios.get('http://localhost:3000/api/ts/v1/find/notification');
    return res;
}
