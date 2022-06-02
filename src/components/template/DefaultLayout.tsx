import { Footer } from "../layout/Footer";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
