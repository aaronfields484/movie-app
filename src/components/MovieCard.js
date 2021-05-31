import "../style/MovieCard.css";
import Button from '@material-ui/core/Button';


function MovieCard(props){


    return(
      <div className="movie-card">
        <img src={props.posterUrl} alt={props.title} />
        <h2>{props.title}</h2>
        <Button variant="contained" color="primary">{props.type}</Button>
      </div>  
    );
}

export default MovieCard;