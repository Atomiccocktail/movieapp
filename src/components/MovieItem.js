import React from 'react';

function MovieItem( {item}) {
    const baseurl = "https://image.tmdb.org/t/p/w500";
    let name = item.name;
    if(name === ''){
      name = item.title;
    }
  return (
    <div className="card col-lg-3 moviecard">
        <img src = {`${baseurl}${item.poster_path}`} className="img-fluid" alt="img" />
        <div className="card-body">
            <h5>Name : {name}</h5>
            <h5>Title : {item.title}</h5>
            <h5>Rating : {item.vote_average}</h5>
        </div>
      
    </div>
  )
}

export default MovieItem

