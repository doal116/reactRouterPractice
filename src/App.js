import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route
} from 'react-router-dom'
import CareerLayout from './layouts/careersLayout';
import HelpLayout from './layouts/helpLayout';
import RootLayout from './layouts/rootLayout';
import AboutUs from './pages/about';
import Career, { careerLoader } from './pages/career/career';
import Careers, { careersLoader } from './pages/career/careers';
import Contatct from './pages/contact';
import ErrorCareers from './pages/career/errorCareers';
import Faq from './pages/faq';
import Home from './pages/home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="help" element={<HelpLayout />} >
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contatct />} />
      </Route>
      <Route path='careers' element={<CareerLayout />} errorElement={<ErrorCareers />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route
          path=':id'
          element={<Career />}
          loader={careerLoader}
        />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
