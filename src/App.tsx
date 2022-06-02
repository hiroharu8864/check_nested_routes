import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Top } from "../src/components/pages/Top";
import { Company } from "../src/components/pages/Company";
import { Contact } from "../src/components/pages/Contact";
import { CompanyInfo } from "../src/components/pages/CompanyInfo";
import { CompanyLocation } from "../src/components/pages/CompanyLocation";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">to top</Link>
          <br />
          <Link to="/company">to company</Link>
          <br />
          <Link to="/contact">to contact</Link>

          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="company" element={<Company />}>
              <Route path="info" element={<CompanyInfo />} />
              <Route path="location" element={<CompanyLocation />} />
            </Route>
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
