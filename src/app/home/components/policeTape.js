import Marquee from "react-fast-marquee";

const HomeMarquee = ({title, direction = "right"}) => {
    return ( <div className="font-Montserrat font-medium">
        <div className="absolute -z-10 w-full py-4 border-none left-0 md:bottom-24 bottom-4 transform md:-rotate-6 bg-black">
    <Marquee autoFill={true} direction={direction}>
      <h1 className="text-sm text-white uppercase px-4">
        {title}
      </h1>
    </Marquee>
    </div>
    <div className="absolute hidden md:block -z-10 w-full border-none py-4 left-0 bottom-24 transform rotate-6 bg-black">
    <Marquee autoFill={true} direction={direction}>
      <h1 className="text-sm text-white uppercase px-4">
        {title}
      </h1>
    </Marquee>
    </div>
  </div> );
}
 
export default HomeMarquee;