import {
  BrowserRouter as Router,
  Route,
  Routes
  
} from 'react-router-dom';

import { AdminRoutes } from './routes';

export const Navigation = () => { 
  return (
    <Router>
      <Routes>
        {
          AdminRoutes.map(({ path, Component, to }) => (
            <Route
              key={to}
              path={path}
              element={<Component />}
            />
          ))
        }
      </Routes>
      
    </Router>
  )
}