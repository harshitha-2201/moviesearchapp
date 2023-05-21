import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {

    const [search , setSearch] = useState('');
    const [data,setData] = useState([]);

    const submitHandler = e =>{
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?s=${search}&apikey=92478cd9`).then(
            response => response.json()
          ).then(value => {setData(value.Search);
          })
    }
  return (
    <div className='bg-black'>
      <center >
        <h1 className='text-3xl pt-16 font-bold text-white' >Search Your Favorite Movie</h1>
        <form onSubmit={submitHandler}>
        <div className='text-xl pt-14'>
            <input type = 'text' value = {search}  onChange = {(e) => setSearch(e.target.value)} placeholder='Search your fav movie' className='mr-8 rounded-lg p-1 bg-gray-300'/>
            <button  type="submit" value = 'search' className = 'p-1 bg-gray-800 text-xl text-white  rounded-lg'>Search</button>
        </div>
        </form>
        <div className="row pt-20 ">
          { data?.length ? 
          data.map(movie=>
          <div className="col-md-4  pb-6 ">
            <div className="card text-white" style={{"width": "20rem"}}>
              <img src={movie.Poster} className="card-img-top " alt={movie.Title} />
              <div className="card-body">
                <h4 className="card-title">Name : {movie.Title}</h4>
                <h5 className="card-title">Realsed : {movie.Year}</h5>
                <h5 className="card-title">Genres :{movie.Type}</h5>
             </div>
            </div>
        </div>
       ):<div className='text-green-800'>No Movie Search,Please search your movie</div>} 
     </div>
     
      </center>
    </div>
  )
}

export default Home
