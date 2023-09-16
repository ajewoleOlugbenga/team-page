import Team from "./components/team";

const Page = () => {
  return (
    <>
      <main>
        <section className="md:flex md:justify-evenly mt-10">
          <h1 className="my-10 ml-2 font-extrabold text-3xl font-serif h-[47px] w-[278px]">The creative crew</h1>
          <div className="ml-2 md:mt-9">
            <h3 className="font-bold text-2xl uppercase">Who we are</h3>
            <p className="w-[333px] text-lg mt-2 mb-10 ">
              We are team of creatively diverse. driven. innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </section>
        <Team/>
      </main>
    </>
  );
};

export default Page;
