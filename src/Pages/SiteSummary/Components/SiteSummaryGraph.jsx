import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Loader from "../../../global/Loader/Loader";
import Error from "../../../global/Error/Error";
import { useGetCurrentSiteParameterDataQuery } from "../../../Store/Slices/siteSummarySlice";
import Joyride, { STATUS } from "react-joyride";

const SiteSummaryGraph = ({ siteId }) => {
  const res = useGetCurrentSiteParameterDataQuery(siteId);
  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h2>Lets take a look at how you can Generate Report</h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
    ],
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      res.refetch();
    }, 10000); // refetch data every 10 seconds
    return () => clearInterval(intervalId); // clear interval on component unmount
  }, [res]);

  // Extract only the last_value data from the original data array
  const lastValues = res?.data?.map((item) => ({
    parameter: item.parameter,
    last_value: item.last_value,
  }));

  if (res.isLoading) return <Loader />;
  if (res.isError) return <Error />;

  return (
      <ResponsiveContainer width="100%" height={500} >
        <AreaChart
          width={600}
          height={300}
          data={lastValues}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="parameter" />
          <YAxis />
          <CartesianGrid stroke="#a9a9a938" />
          <Tooltip />
          <Legend />
          <Area
            type="linear"
            dataKey="last_value"
            stroke="#0088FE"
            fill="#0087fe3f"
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
  );
};

export default SiteSummaryGraph;
