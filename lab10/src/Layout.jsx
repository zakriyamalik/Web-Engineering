import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  const activeStyle = {
    textDecoration: 'underline',
    color: 'blue'
  };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Home
          </NavLink>
          {' | '}
          <NavLink to="/concepts" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Concepts
          </NavLink>
          {' | '}
          <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            About
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}