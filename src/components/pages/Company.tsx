import { Link, Outlet } from "react-router-dom";

export const Company = () => {
  return (
    <>
      <div>
        <h2>Company</h2>
        <nav>
          <Link to="/">to top</Link> | <Link to="/company">to company</Link> |{" "}
          <Link to="/contact">to contact</Link> |{" "}
        </nav>
        <br />
        <br />
        <nav>
          <Link to="info">to company info</Link> |{" "}
          <Link to="location">to company location</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
};
