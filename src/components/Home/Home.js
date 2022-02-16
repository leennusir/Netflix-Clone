import {useState,useEffect} from "react";
import MovieList from "../MovieList/MovieList"
import axios from "axios";

export default function Home(){
    const {trending, setTrending} = useState([]);
    const fetchData = async () => {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}/trending`,{
            headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'} 
          }
          
        );
    console.log(response.data);
        setTrending(response.data);
      };
 
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <>
        <h1>Home Page</h1>
       {/* <MovieList movie={trending}/> */}
        </>
    )
}