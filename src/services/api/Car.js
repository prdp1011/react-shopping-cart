import axios from 'axios';
// D:\myOwnProjects\react-shopping-cart\src\services\api\data
const path = "http://localhost:8001/api/";
export function CarService () {
   return {
    getCarsSmall: () => {
        return axios.get(path + 'cars-small')
                .then(res => res.data.data);
    },

    getCarsMedium: () =>{
        return axios.get(path + 'cars-medium')
                .then(res => res.data.data);
    },

    getCarsLarge: () =>{
        return axios.get(path + 'cars-large')
                .then(res => res.data.data);
    }
  }
}
