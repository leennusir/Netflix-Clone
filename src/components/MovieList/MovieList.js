import Movie from '../Movie/Movie'

function MovieList(props) {

    return (
      <>
       {
           props.movie.map(val =>{
                return (
          <>
   <Movie movies={val}/>  
             </>
                    
                )
      })
      }
                          
      </>
    );}
  
  export default MovieList;