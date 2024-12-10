

import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SlArrowDown } from "react-icons/sl";
import { FaExpandAlt } from "react-icons/fa";
import { LineChart } from "@mui/x-charts/LineChart";
import CustomButton from "../Components/Button";

const DraggableChart = ({
  id,
  index,
  moveCard,
  chartData,
  chartHeight,
  chartWidth,
  toggleWidth,
  isExpanded,
}) => {
  const [, ref] = useDrag({
    type: "chart",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "chart",
    hover: (item) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drop(ref(node))}
      className="p-4 bg-white rounded-[14px] shadow-md mt-5 border hover:border-black transition-all duration-300 relative"
      style={{
        width: chartWidth,
        height: chartHeight + 80,
        marginBottom: isExpanded ? 0 : 20,
      }}
    >
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p className="text-base sm:text-lg">{chartData.title}</p>
          <p className="ml-10 flex items-center whitespace-nowrap text-sm sm:text-base">
            This Month{" "}
            <span className="ml-1">
              <SlArrowDown />
            </span>
          </p>
        </div>

        <div className="chart-graph w-full">
          <LineChart
            xAxis={chartData.xAxis}
            yAxis={chartData.yAxis}
            series={chartData.series}
            height={chartHeight}
            width={chartWidth}
          />
        </div>

        <div
          onClick={() => toggleWidth(index)}
          className="absolute top-2 right-2 cursor-pointer text-blue-500 hover:text-blue-700"
        >
          <FaExpandAlt size={20} />
        </div>
      </div>
    </div>
  );
};

const DraggableCharts = () => {
  const [charts, setCharts] = useState([
    {
      id: 1,
      title: "Appointments Chart 1",
      xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
      yAxis: [
        { showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } },
      ],
      series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#007bff" }],
    },
    {
      id: 2,
      title: "Appointments Chart 2",
      xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
      yAxis: [
        { showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } },
      ],
      series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#82e0aa" }],
    },
  ]);

  const [chartHeights] = useState(250);
  const [chartWidths, setChartWidths] = useState(
    new Array(charts.length).fill(500)
  );
  const [expandedChart, setExpandedChart] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  }, []);

  const moveCard = (fromIndex, toIndex) => {
    const updatedCharts = [...charts];
    const [movedChart] = updatedCharts.splice(fromIndex, 1);
    updatedCharts.splice(toIndex, 0, movedChart);
    setCharts(updatedCharts);

    const updatedWidths = [...chartWidths];
    const [movedWidth] = updatedWidths.splice(fromIndex, 1);
    updatedWidths.splice(toIndex, 0, movedWidth);
    setChartWidths(updatedWidths);
  };

  const toggleWidth = (index) => {
    setChartWidths((prevWidths) =>
      prevWidths.map((width, i) =>
        i === index ? (width > 490 ? 490 : 1000) : width
      )
    );
    setExpandedChart((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (loggedIn) {
      setChartWidths(new Array(charts.length).fill(1000));
    }
  }, [loggedIn, charts.length]);

  const swapCharts = () => {
    if (charts.length > 1) {
      const newCharts = [...charts];
      const temp = newCharts[0];
      newCharts[0] = newCharts[1];
      newCharts[1] = temp;

      setCharts(newCharts);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="ml-7 h-auto p-5 bg-white rounded-[12px] mt-5 border hover:border-black transition-all duration-300">
        <div className="flex justify-between items-center">
          <p className="text-base">
            View all the answers to the questions you have asked.
          </p>
          <div className="flex space-x-3">
            <CustomButton text="Swap Charts" onClick={swapCharts} />
            <CustomButton text="× Close" />
          </div>
        </div>
        <div className="charts-container flex flex-wrap gap-4 justify-start">
          {charts.map((chart, index) => (
            <DraggableChart
              key={chart.id}
              id={chart.id}
              index={index}
              chartData={chart}
              moveCard={moveCard}
              chartHeight={chartHeights}
              chartWidth={chartWidths[index]}
              toggleWidth={toggleWidth}
              isExpanded={expandedChart === index}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default DraggableCharts;
