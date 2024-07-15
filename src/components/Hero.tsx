import heroImg from "../assets/images/illustration-hero.svg";
import Button from "./ui/Button";
const Hero = () => {
  return (
    <section className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
      <img src={heroImg} alt="bookmark manager illustration image" className="lg:basis-5/12" />
      <div className="lg:basis-5/12">
        <h1 className="text-3xl text-center font-medium text-very-dark-blue mb-4 lg:text-left lg:text-[42px] lg:w-[400px]">A Simple Bookmark Manager</h1>
        <p aria-description="description of simple bookmark manager" className="text-center text-grayish-blue lg:text-left lg:max-w-[450px]">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex gap-2 mt-4">
            <Button variant="primary">Get it on Chrome</Button>
            <Button variant="shadow">Get it on Firefox</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
