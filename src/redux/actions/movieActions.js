import axios from 'axios'
import ActionTypes from '../ActionTypes';
const options = {

    headers: {
      accept: 'application/json',
      Authorization: ''
    }
  };

  //axios her verinin başına otomatik yazar
  axios.defaults.baseURL="https://api.themoviedb.org/3"
  

//asenkron aksiyon
export const getMovies = ()=> (dispatch) =>{

    axios.get("/movie/popular",options)
    .then((res)=>dispatch({
        type:ActionTypes.SET_MOVİES,
        payload:res.data.results
    }));
}
//category
export const getGenres =()=>(dispatch)=>{
    axios.get("/genre/movie/list",options)
    .then((res)=>dispatch({
        type:ActionTypes.SET_GENRES,
        payload:res.data.genres
    }))

}

//custom hook
export const fetchByUrl = async(url)=>{
    const res = await axios.get(url,options)
    return res.data
}
