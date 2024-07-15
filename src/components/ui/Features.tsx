import Tabs from "../Tabs";

const Features = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl text-center mb-4">Features</h2>
      <p className="text-center mb-5 text-grayish-blue lg:max-w-[450px] mx-auto">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    <Tabs />
    </section>
  );
};

export default Features;
