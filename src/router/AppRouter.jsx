import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import FocusAreas from '../pages/FocusAreas.jsx'
import TalkToYourRegulator from '../pages/TalkToYourRegulator.jsx'
import ResourcesPage from '../pages/ResourcesPage.jsx'
import Media from '../pages/Media.jsx'
import ContactPage from '../pages/ContactPage.jsx'

// Routes follow Section 1 (Navigation & site map) of the content guide
// exactly. The Knowledge Hub nav tab is an external link (Section 6),
// not an in-app route, so it is not registered here.
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/focus" element={<FocusAreas />} />
      <Route path="/talk-to-your-regulator" element={<TalkToYourRegulator />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/media" element={<Media />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default AppRouter
