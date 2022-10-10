import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Errorpage from './pages/Errorpage/Errorpage';
import Main from './Main';
import QuizScreen from './pages/QuizScreen/QuizScreen';

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
        {
          path: '/quiz/:quizId',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizScreen />,
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
