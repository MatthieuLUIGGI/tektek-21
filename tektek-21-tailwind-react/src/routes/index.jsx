import Navigation from '../components/layout/Navigation';
import Home from '../pages/Home';
import Presentation from '../pages/Presentation';
import Collaborateurs from '../pages/Collaborateurs';
import Donner from '../pages/Donner';
import TousLesDons from '../pages/TousLesDons';
import Contact from '../pages/Contact';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

export const routes = [
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'presentation',
        element: <Presentation />
      },
      {
        path: 'collaborateurs',
        element: <Collaborateurs />
      },
      {
        path: 'donner',
        element: <Donner />
      },
      {
        path: 'tous-les-dons',
        element: <TousLesDons />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
];
