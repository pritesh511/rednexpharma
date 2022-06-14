import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Announcebar from "./announcebar/announcebar";

const Layout = ({ children }) => {
  return (
    <>
      <Announcebar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
