import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface BarChartData {
  crop: string;
  avgYield: number;
}

export const AverageTable = ({ data }: { data: BarChartData[] }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  console.log("data...............", data);
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option = {
        title: {
          text: "Average Yield by Crop",
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: data.map((item) => item.crop),
          axisLabel: {
            interval: 0, // Show all labels
            rotate: 45, // Rotate labels 45 degrees
            formatter: (value: string) =>
              value.length > 10 ? `${value.substring(0, 10)}...` : value, // Truncate long names
          },
        },
        yAxis: {
          type: "value",
          name: "Average Yield (Kg/Ha)",
        },
        series: [
          {
            data: data.map((item) => item.avgYield),
            type: "bar",
          },
        ],
      };

      chart.setOption(option);

      return () => {
        chart.dispose();
      };
    }
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};
