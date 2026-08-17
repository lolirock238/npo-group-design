import AppRouter from './router/AppRouter.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}

export default App
