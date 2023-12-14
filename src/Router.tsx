import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";

export function Router() {
    return (
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/booking" element={<Booking />} />
      </Routes>
    );
  }