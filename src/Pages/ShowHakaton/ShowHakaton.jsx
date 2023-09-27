import { Link, useLoaderData } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaStar, FaUser } from "react-icons/fa";
import { AiOutlineDesktop } from "react-icons/ai";
import styles from "../../component/style/style";
Aos.init({
  offset: 200,
  easing: "ease-in-sine",
  duration: 600,
});
const ShowHakaton = () => {
  // Assuming that useLoaderData returns an object with a 'title' property
  const singleProduct = useLoaderData();
  const {
    title,
    description,
    banner,
    publisher,
    start_time,
    end_time,
    first_prize,
    second_prize,
    third_prize,
  } = singleProduct;
  console.log(singleProduct);

  const prizeImg =
    "https://static.vecteezy.com/system/resources/thumbnails/023/234/869/small_2x/transparent-golden-cup-trophy-for-victory-win-at-contest-as-an-award-and-prize-for-achievement-png.png";
  return (
  
    <div className={`${styles.section} text-white`}>
      <div className="relative">
        <img
          className="mb-10 md:h-[420px] w-full box-content"
          src={banner}
          alt=""
        />

        <div>
          <div className="absolute left-[10%] bottom-[-12%] w-full">
            <div className="flex items-center gap-4">
              <div className="w-[120px] h-[120px] bg-white flex items-center justify-center p-5">
                <img className="w-8" src={publisher?.logo} alt="" />
              </div>
              <h3 className="mb-8 text-3xl font-[600]">{publisher?.name}</h3>
            </div>
            <div className="absolute left-[7%] bottom-2">
              <p className="flex items-center gap-6 text-[12px] text-gray-400">
                <span className="flex items-center">
                  <FaUser /> <span className="ms-2">1500 Registered</span>
                </span>
                <span>ALLOWED TEAM SIZE: 1 - 5 935</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#060E26] py-12 border border-[#84823A]  border-x-0 mt-24">
        <div className="containers">
          <div className="flex items-center justify-between text-center">
            <div>
              <p className="text-xs text-gray-400  mt-1">START ON:</p>
              <h3 className=" text-lg font-[400]">
                {start_time.split("T")[0]}
              </h3>
            </div>
            <div className="">
              <span className="flex items-center gap-2 ">
                <AiOutlineDesktop />
                <span className="text-xs text-gray-400">HACKATHON</span>
              </span>
              <p>Online</p>
            </div>
            <div>
              <p className="text-xs text-gray-400  mt-1">ENDS ON:</p>
              <h3 className=" text-lg font-[400]">{end_time.split("T")[0]}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="containers">
        <div className="flex items-center gap-2 mt-8">
          <p>OVERVIEW</p>
          <p className="w-full h-[2px] bg-white"></p>
        </div>
        <h1 className=" mt-10 text-4xl">{title}</h1>
        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="2000">
          <p className="text-xs mt-2">{description}</p>

          <div className="flex items-center  gap-2 mt-8 text-xs">
            <p>PRIZES</p>
            <p className="w-full h-[2px] bg-white"></p>
            <p className="flex items-center  gap-2">
              <FaStar /> <span>USD 10000 IN PRIZES</span>
            </p>
          </div>
          <h4 className="mt-4 text-xl font-[500]">Main Prize</h4>

          <div className="flex flex-col gap-5 mt-6">
            <div className="flex items-center gap-2">
              <img src={prizeImg} className="w-[40px] h-[40px]" alt="" />
              <div>
                <h3 className="mb-1">First Prize</h3>
                <p>USD {first_prize}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img src={prizeImg} className="w-[40px] h-[40px]" alt="" />
              <div>
                <h3 className="mb-1">Second Prize</h3>
                <p>USD {second_prize}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img src={prizeImg} className="w-[40px] h-[40px]" alt="" />
              <div>
                <h3 className="mb-1">Second Prize</h3>
                <p>USD {third_prize}</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/">
          <button className="btn btn-warnings my-10 text-white">Back</button>
        </Link>
      </div>
    </div>

  );
};

export default ShowHakaton;
