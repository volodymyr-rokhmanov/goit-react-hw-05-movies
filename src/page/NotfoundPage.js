import { Link } from 'react-router-dom';

export const NotfoundPage = () => {
  return (
    <p>
      Page is not found. Go <Link to="/">Home</Link>
    </p>
  );
};