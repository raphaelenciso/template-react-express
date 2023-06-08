import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Dashboard = () => {
  const fetchDashboard = async () => {
    const response = await axios.get("/api/dashboard");
    return response.data;
  };

  const { isLoading, data } = useQuery(["dashboard"], fetchDashboard);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <div>{data.message}</div>;
};

export default Dashboard;
