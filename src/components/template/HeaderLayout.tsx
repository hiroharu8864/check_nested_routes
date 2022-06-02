import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";

export const HeaderLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
