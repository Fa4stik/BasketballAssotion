const getData = (data, id) => {
  const labels = data.map((item) => item.date);
  let chartData = [];
  switch (id) {
    case 0: {
      chartData = data.map((item) => item.point);
      break;
    }
    case 1: {
      chartData = data.map((item) => item.rebound);

      break;
    }
    case 2: {
      chartData = data.map((item) => item.assist);

      break;
    }
    case 3: {
      chartData = data.map((item) => item.steal);

      break;
    }
    case 4: {
      chartData = data.map((item) => item.block);

      break;
    }
    default: {
      break;
    }
  }
  return {
    labels,
    datasets: [
      {
        data: chartData,
        borderColor: "#5A9BD6",
      },
    ],
  };
};

export const chartsConfig = {
  getData,
};
