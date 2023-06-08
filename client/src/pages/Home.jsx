import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const fetchRequests = async () => {
    const response = await axios.get("/api");
    return response.data;
  };

  const { isLoading, data } = useQuery(["index"], fetchRequests);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <div className="text-3xl text-red-500 font-bold">{data.message}</div>;
};
export default Home;
