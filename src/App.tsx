import { Outlet } from "react-router-dom"
import Footer from "./components/footer"
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Router />
        <Outlet />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
