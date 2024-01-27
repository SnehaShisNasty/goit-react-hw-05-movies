import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieByReviews } from 'api/movie';
const MoviePageReviews = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const { data } = await getMovieByReviews(id);
        console.oog(data);
        setComments(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const url = 'https://image.tmdb.org/t/p/w500/';

  // const isComments = Boolean(comments.length);
  const isComments = true;
  console.log(comments);
  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isComments && (
        <ul>
          {comments.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <h4>{name}</h4>
              <h5>{character}</h5>
              <img src={url + profile_path} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { MoviePageReviews };
