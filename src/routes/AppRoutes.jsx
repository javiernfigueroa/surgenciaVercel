import { Routes, Route } from 'react-router'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Blog from '../pages/Blog/Blog'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default AppRoutes
