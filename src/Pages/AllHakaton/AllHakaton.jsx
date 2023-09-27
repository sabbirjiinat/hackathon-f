import "./AllHakaton.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
Aos.init({
  offset: 200,
  easing: "ease-in-sine",
  duration: 600,
});

const AllHakaton = ({ place }) => {
  const { title, banner, end_time, _id } = place;

  const endTime = end_time.split("T")[1];
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="500"
      className="mt-12 text-white shadow-2xl bg-[#211438] rounded-md overflow-hidden"
    >
      <div className="image">
        <div id="zoom-In">
          <figure>
            <img className="w-full" src={banner} alt="" />
          </figure>
        </div>
      </div>

      <div className="text-center my-3">
        <h2 className="text-xl font-[600]">{title}</h2>

        <center>
          <div className="py-2 px-4 border rounded-md inline-block mt-4">
            <p className="flex items-center gap-2 ">
              <FaUserAlt />
              <span> 1250</span>
            </p>
          </div>
          <p className="text-xs text-gray-400 mt-3">ENDS IN</p>
          <div className="mb-3 text-md flex items-center justify-center">
            <span>
              {endTime ? endTime.split(":")[0] : ""} :
              <p className="text-xs text-gray-400 mt-1 mr-2">Hour</p>
            </span>

            <span>
              {endTime ? endTime.split(":")[1] : ""} :
              <p className="text-xs text-gray-400 mt-1 mr-2">Minute</p>
            </span>

            <span>
              {endTime ? endTime.split(":")[2] : ""}
              <p className="text-xs text-gray-400  mt-1">Seconds</p>
            </span>
          </div>

          <Link to={`/hackathon/${_id}`}>
            <button className="btn btn-warning text-white">Start Now</button>
          </Link>
        </center>
      </div>
    </div>
  );
};

export default AllHakaton;
