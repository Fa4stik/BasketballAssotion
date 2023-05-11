import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { playersApi } from "../api/playersApi";
import TabPanel from "./TabPanel";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { chartsConfig } from "../chartsConfig";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartTitles = ["Points", "Rebounds", "Assists", "Steals", "Blocks"];

const tabStyles = {
  "&.Mui-selected": {
    color: "#717171",
    backgroundColor: "#5A9BD6",
  },
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const PlayerDetailCharts = ({ playerId, dateStart, dateEnd }) => {
  const [chartData, setChartData] = useState([]);
  const [value, setValue] = useState(0);
  const [averages, setAverages] = useState([]);

  useEffect(() => {
    playersApi
      .getPlayerStatistics(playerId, dateStart, dateEnd)
      .then((response) => {
        setChartData(response.data);
        const data = response.data;
        //насрал, сори ))))))))))))
        const [sumPoints, sumRebounds, sumSteals, sumBlocks, sumAssists] =
          data.reduce(
            (totals, item) => [
              totals[0] + item.point,
              totals[1] + item.rebound,
              totals[2] + item.steal,
              totals[3] + item.block,
              totals[4] + item.assist,
            ],
            [0, 0, 0, 0, 0]
          );

        const count = data.length;
        const avgPoints = sumPoints / count;
        const avgRebounds = sumRebounds / count;
        const avgSteals = sumSteals / count;
        const avgBlocks = sumBlocks / count;
        const avgAssists = sumAssists / count;

        setAverages([avgPoints, avgRebounds, avgSteals, avgBlocks, avgAssists]);
      })
      .catch((error) => {
        console.error("Error fetching player statistics:", error);
      });
  }, [playerId, dateStart, dateEnd]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabPanels = chartTitles.map((title, index) => (
    <TabPanel key={index} value={value} index={index}>
      <Typography align="center">
        The average of {title.toLowerCase()}: {averages[index].toFixed(2)}
      </Typography>
      <div>
        <Line
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: title,
              },
            },
          }}
          data={chartsConfig.getData(chartData, index)}
        />
      </div>
    </TabPanel>
  ));

  const tabProps = chartTitles.map((title, index) => ({
    key: index,
    label: title,
    ...a11yProps(index),
    className: "font-bold px-12",
    sx: tabStyles,
  }));

  return (
    <Box sx={{ borderBottom: 1, borderTop: 1, borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className="h-100"
        centered
      >
        {tabProps.map((props) => (
          <Tab {...props} />
        ))}
      </Tabs>
      {tabPanels}
    </Box>
  );
};

export default PlayerDetailCharts;
