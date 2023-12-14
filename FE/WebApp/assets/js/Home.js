import api  from "../../../Config/api.js";

const data = api.GET_ALL_SAN_PHAM;
const fetchData = () => {
    fetch(data,{
        method:'GET',
          
    })
        .then(res => console.log(res.json()))
        .catch(err=> console.log(err))
}
fetchData();