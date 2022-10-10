import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Errorpage from './pages/Errorpage/Errorpage';
import Main from './Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Homepage />,
        },
        { path: '*', element: <Errorpage /> },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
