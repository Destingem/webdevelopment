import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
export default function UIWrapper({ children }) {
  return (
    <>
    <Navbar motion={motion} />
      <div className="ui-wrapper__content">{children}</div>
        <Footer />
    </>
  );
}