import { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGetCurrentSiteParameterDataQuery } from "../../../Store/Slices/siteSummarySlice";


const UserSideDataGraph = ({ userSiteId }) => {
  const data = useGetCurrentSiteParameterDataQuery(userSiteId);
  useEffect(() => {
    const intervalId = setInterval(() => {
      data.refetch();
    }, 10000); //   refetch every 10 seconds
    return () => clearInterval(intervalId); // clear interval on component unmount
  }, [data]);

  // Extract only the last_value data from the original data array
  const lastValues = data?.data?.map((item) => ({
    parameter: item.parameter,
    last_value: item.last_value,
  }));

  if (data.isLoading) return <div>Loading...</div>;
  if (data.isError) return <div>Sorry No Data Avaiable</div>;

  return (
    <div className="userdata__graph">
      <h1>Real time Parameters Value</h1>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart width={600} height={300} data={lastValues}>
          <XAxis dataKey="parameter" />
          {/*  Make MoonShine this is carzy adbd   */}
          <CartesianGrid stroke="#a9a9a938" />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="last_value"
            stroke="#0088FE"
            fill="#0087fe3f"
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserSideDataGraph;
