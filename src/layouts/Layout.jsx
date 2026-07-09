import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--text))] transition-colors duration-300">
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;