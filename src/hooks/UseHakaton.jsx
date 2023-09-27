import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "./UseAuth";
import { useState } from "react";
const UseHackathon = () => {
  const { location, category, title } = UseAuth();
  const [loading,setLoading] = useState(false)
  const { data: hachathonCollection, refetch } = useQuery({
    queryKey: ["hachathon"],
    queryFn: async () => {
setLoading(true)
      const res = await axios.get(
        `http://localhost:5000/hackathon?title=${title}&location=${location}&category=${category}`
      );
     
      setLoading(false)
      return res.data;
    },
  });
  return [hachathonCollection, refetch,loading];
};

export default UseHackathon;
