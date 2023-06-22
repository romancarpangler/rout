import { Routes, Route, Link } from 'react-router-dom';
import { ProductDetails } from './auth';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/welcome"
        element={
          <div>
            welcome page <Link to="/auth/login"> login</Link>
            <Link to="/auth/register"> register</Link>
          </div>
        }
      />
      <Route path="/auth/:id" element={<ProductDetails></ProductDetails>} />

      <Route path="/home" element={<div>home</div>} />
      <Route path="/home/:boardName" element={<div>home:id</div>} />
      <Route
        path="*"
        element={
          <div>
            welcome page <Link to="/auth/login"> login</Link>
            <Link to="/auth/register"> register</Link>
          </div>
        }
      />
    </Routes>
  );
};
