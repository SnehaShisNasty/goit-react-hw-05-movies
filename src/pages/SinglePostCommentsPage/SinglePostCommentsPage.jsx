import { getMovieByCast } from 'api/movie';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SinglePostCommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        console.log(id);
        const { data } = await getMovieByCast(id);
        console.log(data);
        setComments(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [id]);

  const url = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg = 'https://via.placeholder.com/250x350';

  const isComments = Boolean(comments.length);
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
              {console.log(profile_path)}
              <img
                src={profile_path ? url + profile_path : defaultImg}
                width={250}
                height={350}
                alt="poster"
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SinglePostCommentsPage;
