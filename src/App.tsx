import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Top } from "../src/components/pages/Top";
import { Company } from "../src/components/pages/Company";
import { Contact } from "../src/components/pages/Contact";
import { CompanyInfo } from "../src/components/pages/CompanyInfo";
import { CompanyLocation } from "../src/components/pages/CompanyLocation";
import { DefaultLayout } from "../src/components/template/DefaultLayout";
import { HeaderLayout } from "../src/components/template/HeaderLayout";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <HeaderLayout>
                  <Top />
                </HeaderLayout>
              }
            />
            <Route
              path="company"
              element={
                <DefaultLayout>
                  <Company />
                </DefaultLayout>
              }
            >
              <Route path="info" element={<CompanyInfo />} />
              <Route path="location" element={<CompanyLocation />} />
            </Route>
            <Route
              path="contact"
              element={
                <HeaderLayout>
                  <Contact />
                </HeaderLayout>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
