import { Outlet } from "react-router-dom"
import Footer from "./components/footer"
       
function App() {
  
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
