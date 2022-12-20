import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import GrowWithUs from "./components/GrowWithUs";
import Header from "./components/Header";
import Resources from "./components/Resources";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Header />

      <main className="lg:max-w-5xl lg:mx-auto mx-5 mt-28">
        <Resources />
        <GrowWithUs />
        <Reviews />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
}

export default App;
