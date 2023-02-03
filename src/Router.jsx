import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage/Homepage";
import { Works } from "./components/Works/Works";
import { Aboutme } from "./components/Aboutme/Aboutme";
import { Contact } from "./components/Contact/Contact";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
