import "react-tabs/style/react-tabs.css";
import AllHakaton from "../../AllHakaton/AllHakaton";
import { GoSearch, GoArrowRight, GoCodescan } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BsSliders2Vertical } from "react-icons/bs";
import UseHackathon from "../../../hooks/useHakaton";
import styles from "../../../component/style/style";
import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import EmptyState from "../../../component/EmptyState/EmptyState";
import { FaRegSadCry } from "react-icons/fa";
import {ImSpinner3} from 'react-icons/im'


const Hakaton = () => {
  const [hachathonCollection, refetch,loading] = UseHackathon();
  const { register, handleSubmit } = useForm();
  const { setCategory, setLocation, setTitle } = UseAuth();
  

  const onSubmit = ({ category, location, title }) => {
   
    setCategory(category);
    setLocation(location);
    setTitle(title);
    setTimeout(() => {
      refetch();
    }, 500);
   
  };

  return (
    <div className="my-40">
      <div className="w-full">
        <div
          className={`${styles.section} bg-[#fff] h-[100px]   border border-gray-300 rounded-md flex items-center justify-center`}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-[50px] w-[75vw] mx-auto  flex justify-between items-center px-2 gap-5"
          >
            <div className="relative w-[220px] border">
              <input
              
                {...register("title")}
                type="text"
                name="title"
                className="bg-white  border px-2 py-1 pl-10 focus:outline-none focus:ring-blue-300 focus:border-blue-300 focus:border-2 transition-colors duration-300 w-full cursor-pointer"
                placeholder="Search Hackathon"
              />
              <GoSearch
                size={20}
                className="absolute top-2 left-1 text-rose-600"
              />
            </div>

            <div className="relative w-[220px]">
              <select
                className="bg-white text-black border-none focus:outline-none px-2 py-1 pl-10 w-full cursor-pointer"
                id="location"
                {...register("location")}
              >
                 <option selected disabled value="">Location</option>
                <option value="online">Online</option>
                <option value="onsite">Onsite</option>
              </select>
              <CiLocationOn
                size={23}
                className="absolute top-2 left-1 text-rose-600"
              />
            </div>

            <div className="relative w-[220px]">
              <select
                className="bg-white text-black border-none focus:outline-none px-2 py-1 pl-10  w-full cursor-pointer"
                id="category"
                {...register("category")}
              >
                <option selected disabled value="">Category</option>
                <option value="upComing">Upcoming</option>
                <option value="open">Open</option>
                <option value="new">New</option>
              </select>
              <GoCodescan
                size={20}
                className="absolute top-2 left-1 text-rose-600"
              />
            </div>
            <div className="flex items-center justify-center gap-1">
              <div className="bg-[#00c1c1] h-8 w-10 rounded-sm flex items-center justify-center cursor-pointer">
                <BsSliders2Vertical
                  color="#fff"
                  className="hover:text-rose-700"
                />
              </div>
              <button type="submit">
                <div className="bg-[#00c1c1] h-16 w-16 rounded-full flex items-center justify-center cursor-pointer">
                  {loading ? (
                    <ImSpinner3
                    className="animate-spin"
                    color="#fff"
                    size={30}
                    />
                  ) : (
                    <GoArrowRight color="#fff" size={30} />
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={`${styles.section}`}>
        {hachathonCollection &&
        hachathonCollection.length > 0 &&
        Array.isArray(hachathonCollection) ? (
          <div className="grid grid-cols-1 gap-[10px] md:grid-cols-3 md:gap-[20px] lg:grid-cols-3 lg:gap-[30px]">
            {hachathonCollection?.map((place) => (
              <AllHakaton key={place._id} place={place}></AllHakaton>
            ))}
          </div>
        ) : (
          <EmptyState
            title={`Sorry no hackathon available in this search`}
            emoji={<FaRegSadCry size={30} color="red" />}
          />
        )}
      </div>
    </div>
  );
};

export default Hakaton;
