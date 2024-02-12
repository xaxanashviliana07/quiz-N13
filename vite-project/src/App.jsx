import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from "./pages/Home.jsx";
import {AboutPage} from "./pages/AboutPage.jsx";
import {Profile} from "./pages/Profile.jsx";


function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home />}  />
                <Route path='/about' element={<AboutPage />}  />
                <Route path='/profile' element={<Profile />}  />
            </Routes>
        </Router>
    </>
  )
}

export default App