import {useState} from "react";

export default function Home(){
    const {trending, setTrending} = useState([]);
  async function getTrending(){
     
      let res = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
    let trendingData = await res.json();
    setTrending(trendingData);
    }
    getTrending();
    return (
        <>
        <h1>Home Page</h1>
        <p>{trending}</p>
        </>
    )
}