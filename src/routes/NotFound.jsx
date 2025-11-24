import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-shell not-found">
      <h1>That page got lost in the gradient.</h1>
      <p>Try heading back to the homepage or explore the selected projects.</p>
      <Link to="/" className="pill pill--solid">
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
