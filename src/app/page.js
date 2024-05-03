import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />

      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />

        <p className="max-w-2xl mx-auto mt-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="text-center my-16" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />

        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +46 738 123 123
          </a>
        </div>
      </section>

      <footer className="border-t p-8 text-center mt-8 text-gray-500">
        &copy; 2024 All Right Reserved
      </footer>
    </>
  );
}
