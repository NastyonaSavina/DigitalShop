import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";


export const Layout = ({ children }) => {
  return (
    <>
      <div className="container" >
        <Header />
        <main
          className=""
          style={{ minHeight: '100vh' }}>
          <div className="tab-pane fade show active">{children}</div>
        </main>
        <Footer />

      </div>

     </>
  );
};