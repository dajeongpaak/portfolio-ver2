// Built-in 
import { Routes, Route } from 'react-router-dom'

// Internal
import './App.scss'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Work from './pages/work/Work'
import WorkHome from './pages/work/WorkHome'
import Jade from './pages/work/projects/Jade-bookmark-manager-project'
import Header from './layouts/header/Header'
import Footer from './layouts/footer/Footer'


// Variable name is camelCase
// Component name is PascalCase
// Double Quote for JSX single quote for js 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />}>
          <Route index element={<Work />}/>
          <Route path='jade-bookmark-manager-project' element={<Jade />}/>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
