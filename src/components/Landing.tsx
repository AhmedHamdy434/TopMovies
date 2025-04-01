import Image from "next/image";
import LandingImage from "../../public/landing2.png";
const Landing = () => {
  return (
    <main className="py-[100px]">
      <div className="container flex justify-between items-center xl:gap-[100px] 2xl:gap-[300px]">
        <div className="landing-text">
          <h2 className="text-[44px] font-bold text-main mb-[48px]">
            Top Movies and TV Shows
          </h2>
          <p className="text-[20px] leading-[2] tracking-[2px]">
            This website provides access to a wide range of IMDb data, including
            movies and TV shows. It ensures high performance, reliability, and
            easy integration.
          </p>
        </div>
        <Image
          src={LandingImage}
          alt="Landing-Image"
          priority={true}
          className="hidden md:block w-[400px] xl:w-[550px]"
        ></Image>
      </div>
    </main>
  );
};

export default Landing;
