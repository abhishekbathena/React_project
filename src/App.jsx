import { Hero,CustomerReviews,Footer,PopularProducts,Services,SpecialOffer,
Subscribe,SuperQuality } from "./sections";
import Nav from "./Components/Nav";
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding max-sm:px-16 max-sm:py-20">
      <PopularProducts />
    </section>
    <section className="padding max-sm:px-16 max-sm:py-20">
      <SuperQuality />
    </section>
    <section className="padding max-sm:px-16 max-sm:py-20">
      <Services />
    </section>
    <section className="padding max-sm:px-16 max-sm:py-20">
      <SpecialOffer />
    </section>
    <section className="padding max-sm:px-16 max-sm:py-20 bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding max-sm:px-16 max-sm:py-20 w-full">
      <Subscribe />
      </section>
    <section className="padding max-sm:px-16 text-white bg-black">
      <Footer />
    </section>
  </main>
);

export default App;
