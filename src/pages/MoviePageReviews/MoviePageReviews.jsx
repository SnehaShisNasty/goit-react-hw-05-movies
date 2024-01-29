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
        setComments(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [id]);

  const isComments = Boolean(comments.length);

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isComments ? (
        <ul>
          {comments.map(({ id, author, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, but we did not find any reviews</p>
      )}
    </>
  );
};

export default MoviePageReviews;
