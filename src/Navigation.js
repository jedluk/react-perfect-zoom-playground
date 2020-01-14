import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const { PUBLIC_URL = '' } = process.env;
const activeClass = (path, activePath) => (activePath === path ? 'nav-active' : undefined);

const Navigation = props => {
  const { pathname: activePath } = props.location;
  return (
    <ul className="navigation">
      <li className={activeClass(`${PUBLIC_URL}/`, activePath)}>
        <Link to={`${PUBLIC_URL}/`}>Controller</Link>
      </li>
      <li className={activeClass(`${PUBLIC_URL}/demo`, activePath)}>
        <Link to={`${PUBLIC_URL}/demo`}>Two sources</Link>
      </li>
    </ul>
  );
};

export default withRouter(Navigation);
