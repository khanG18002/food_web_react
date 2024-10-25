import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Footer from './components/Footer'
import Head from './components/Head'
import PopularRecipes from './components/PopularRecipes'
import TopContributor from './components/TopContributor'
import Navbar from './components/Navbar'


function App() {

  return (
    // Helo Awais
    // in react router dom : you are supposed to call elements from /routes page. 
    // browser router: just a container div. any thing put in browser router will be showed on every page. 
    <BrowserRouter>
      <Navbar />
      {/* consider Routes div as a switch in js. */}
      <Routes>
        {/* valid cases: */}
        {/* only one route is shown at a time. from the list below:  */}
        <Route path="/" element={<Head />} />
        <Route path="/topcontributer" element={<TopContributor />} />
        <Route path="/head" element={<PopularRecipes />} />

        {/* default case:  */}
        <Route path="*" element={"page not found"} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
