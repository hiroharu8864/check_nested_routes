import { Link, Outlet } from "react-router-dom";

/**
 * 親ルートである(<Company>）は、一致する子ルート<CompanyInfo>が
 * <Outlet />でレンダリングされる。
 * つまり、親ルートのコンポーネントで、<Outlet />を指定することで
 * <CompanyInfo />と記載した動きになる。
 */
export const Company = () => {
  return (
    <>
      <div>
        <h2>Company</h2>
        <nav>
          <Link to="info">to company info</Link> |{" "}
          <Link to="location">to company location</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
};
