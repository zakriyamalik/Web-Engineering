import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const activeStyle = {
  textDecoration: 'underline',
  color: 'teal',
};

export default function Layout() {
  return (
    <div>
      <header style={{ padding: '1rem', background: '#f4f4f4' }}>
        <nav>
          <NavLink to="/" end style={({ isActive }) => isActive ? activeStyle : undefined}>
            Home
          </NavLink>{' | '}
          <NavLink to="/concepts" style={({ isActive }) => isActive ? activeStyle : undefined}>
            Concepts
          </NavLink>{' | '}
          <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>
            About
          </NavLink>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}
