import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import StickyCta from './components/StickyCta.jsx'
import Home from './pages/Home.jsx'
import Fertility from './pages/Fertility.jsx'
import Menopause from './pages/Menopause.jsx'
import Physician from './pages/Physician.jsx'
import StaffPractice from './pages/StaffPractice.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'
import PortalForms from './pages/PortalForms.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fertility" element={<Fertility />} />
        <Route path="/menopause" element={<Menopause />} />
        <Route path="/physician" element={<Physician />} />
        <Route path="/staff-practice" element={<StaffPractice />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal-forms" element={<PortalForms />} />
      </Routes>
      <Footer />
      <StickyCta />
    </>
  )
}