import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import { Cast } from '../components/cast/Cast';
// import { Reviews } from 'components/reviews/Reviews';
import { useState, useEffect, Suspense } from 'react';
import Image from '../components/image/NoFoto.jpg';
import BackLink from 'components/backlink/BackLink';
import css from './MovieDetails.module.css';
import { nanoid } from 'nanoid';
import { baseImageUrl } from '../components/constants/Constants'
import { searchFilmById } from 'components/fetch/Fetch';


const MovieDetails = () => {
  const params = useParams();
  const paramsId = Number(params.moviesId);
  const [filmDetail, setFilmDetail] = useState();
  const location = useLocation();
 
  useEffect(() => {
      searchFilmById(paramsId).then(({data}) => setFilmDetail(data)).catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <BackLink />
      {filmDetail && (
        <div className={css.section}>
          {filmDetail.poster_path ? <img className={css.image}
            src={`${baseImageUrl}${filmDetail.poster_path}`}
            alt={filmDetail.title}
          /> :  <img className={css.image} src={Image} alt="No foto"/>}
          <div>
           <p className={css.main_title} key={nanoid()}>
            {filmDetail.title}
            {filmDetail.release_date ? (
              <span> ({filmDetail.release_date.slice(0, 4)})</span>
            ) : (
              <span> (----)</span>
            )}
          </p>
          <p className={css.title} key={nanoid()}>
            User score: <span className={css.line}>{Number.parseInt(filmDetail.vote_average * 10)} &#37;</span>
          </p>
          <p className={css.title} key={nanoid()}>
            Overview: <br/><span className={css.line}>{filmDetail.overview}</span>
          </p>
          <p className={css.title} key={nanoid()}>
            Genres:<br/>
            {filmDetail.genres.map(genre => (
              <span className={css.line}> {genre.name} </span>
            ))}
          </p>
        </div>
                  </div>
      )}
      <ul className={css.link_list}>
        <li key={nanoid()}><Link to="cast" state={{from: location.state?.from ?? "/"}}>Cast</Link></li>
        <li key={nanoid()}><Link to="reviews" state={{from: location.state?.from ?? "/"}}>Reviews</Link></li>
      </ul>

      {/* <Cast />
        <Reviews /> */}
        <Suspense fallback={<p>Loading...</p>}>
            <Outlet />
        </Suspense>
    
      
    </section>
  );
};

export default MovieDetails;

