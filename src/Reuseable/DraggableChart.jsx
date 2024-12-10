

// import React, { useState, useEffect } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { SlArrowDown } from "react-icons/sl";
// import { LineChart } from "@mui/x-charts/LineChart";
// import CustomButton from "../Components/Button";
// import { PiSwapBold } from "react-icons/pi";
// import { IoIosExpand } from "react-icons/io";


// const DraggableChart = ({
//   id,
//   index,
//   moveCard,
//   chartData,
//   chartHeight,
//   chartWidth,
//   toggleWidth,
//   isExpanded,
//   swapCharts,
// }) => {
//   const [, ref] = useDrag({
//     type: "chart",
//     item: { id, index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const [, drop] = useDrop({
//     accept: "chart",
//     hover: (item) => {
//       if (item.index !== index) {
//         moveCard(item.index, index);
//         item.index = index;
//       }
//     },
//   });

//   return (
//     <div
//       ref={(node) => drop(ref(node))}
//       className="p-4 bg-white rounded-[14px] shadow-md mt-5 border hover:border-black transition-all duration-300 relative"
//       style={{
//         width: chartWidth,
//         height: chartHeight + 80,
//         marginBottom: isExpanded ? 0 : 20,
//       }}
//     >
//       <div className="w-full">
//         <div className="flex justify-between items-center">
//           <p className="text-base sm:text-lg">{chartData.title}</p>
//           <p className="ml-10 flex items-center whitespace-nowrap text-sm sm:text-base">
//             This Month{" "}
//             <span className="ml-1">
//               <SlArrowDown />
//             </span>
//           </p>
//         </div>

//         <div className="chart-graph w-full">
//           <LineChart
//             xAxis={chartData.xAxis}
//             yAxis={chartData.yAxis}
//             series={chartData.series}
//             height={chartHeight}
//             width={chartWidth}
//           />
//         </div>

//         <div
//           onClick={() => toggleWidth(index)}
//           className="absolute  right-2 cursor-pointer hover:text-blue-700"
//         >
//           <IoIosExpand size={25} />
//         </div>

//         <div
//           onClick={() => swapCharts(index)}
//           className=" text-right cursor-pointer  hover:text-green-700"
//         >
//           <PiSwapBold size={25} />
//         </div>
//       </div>
//     </div>
//   );
// };


// const DraggableCharts = () => {
//   const [charts, setCharts] = useState([
//     {
//       id: 1,
//       title: "Appointments Chart 1",
//       xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
//       yAxis: [
//         { showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } },
//       ],
//       series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#007bff" }],
//     },
//     {
//       id: 2,
//       title: "Appointments Chart 2",
//       xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
//       yAxis: [
//         { showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } },
//       ],
//       series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#82e0aa" }],
//     },
//     {
//       id: 3,
//       title: "Appointments Chart 3",
//       xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
//       yAxis: [
//         { showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } },
//       ],
//       series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#82e0aa" }],
//     },

//   ]);

//   const [chartHeights] = useState(250);
//   const [chartWidths, setChartWidths] = useState(
//     new Array(charts.length).fill(500)
//   );
//   const [expandedChart, setExpandedChart] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     setLoggedIn(true);
//   }, []);

//   const moveCard = (fromIndex, toIndex) => {
//     const updatedCharts = [...charts];
//     const [movedChart] = updatedCharts.splice(fromIndex, 1);
//     updatedCharts.splice(toIndex, 0, movedChart);
//     setCharts(updatedCharts);

//     const updatedWidths = [...chartWidths];
//     const [movedWidth] = updatedWidths.splice(fromIndex, 1);
//     updatedWidths.splice(toIndex, 0, movedWidth);
//     setChartWidths(updatedWidths);
//   };

//   const toggleWidth = (index) => {
//     setChartWidths((prevWidths) =>
//       prevWidths.map((width, i) =>
//         i === index ? (width > 490 ? 490 : 1000) : width
//       )
//     );
//     setExpandedChart((prev) => (prev === index ? null : index));
//   };

//   useEffect(() => {
//     if (loggedIn) {
//       setChartWidths(new Array(charts.length).fill(1000));
//     }
//   }, [loggedIn, charts.length]);

//   const swapCharts = (index) => {
//     if (index < charts.length + 1) {
//       const newCharts = [...charts];
//       const temp = newCharts[index];
//       newCharts[index] = newCharts[index + 1];
//       newCharts[index + 1] = temp;

//       setCharts(newCharts);
//     }
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="ml-7 h-auto p-5 bg-white rounded-[12px] mt-5 border hover:border-black transition-all duration-300">
//         <div className="flex justify-between items-center">
//           <p className="text-base">View all the answers to the questions you have asked.</p>
//           <CustomButton text="× Close" />
//         </div>

//         <div className="charts-container flex flex-wrap gap-4 justify-start">
//           {charts.map((chart, index) => (
//             <DraggableChart
//               key={chart.id}
//               id={chart.id}
//               index={index}
//               chartData={chart}
//               moveCard={moveCard}
//               chartHeight={chartHeights}
//               chartWidth={chartWidths[index]}
//               toggleWidth={toggleWidth}
//               isExpanded={expandedChart === index}
//               swapCharts={swapCharts} // Pass swapCharts function to DraggableChart
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default DraggableCharts;
import React, { useState, useEffect, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SlArrowDown } from "react-icons/sl";
import { LineChart } from "@mui/x-charts/LineChart";
import CustomButton from "../Components/Button";
import { PiSwapBold } from "react-icons/pi";
import { IoIosExpand } from "react-icons/io";

const DraggableChart = ({
  id,
  index,
  moveCard,
  chartData,
  chartHeight,
  chartWidth,
  toggleWidth,
  isExpanded,
  swapCharts,
  refCallback,
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
      ref={(node) => {
        drop(ref(node));
        if (refCallback) refCallback(node, index);
      }}
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
          className="absolute  right-2 cursor-pointer hover:text-blue-700"
        >
          <IoIosExpand size={25} />
        </div>

        <div
          onClick={() => swapCharts(index)}
          className=" text-right cursor-pointer  hover:text-green-700"
        >
          <PiSwapBold size={25} />
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
    {
      id: 3,
      title: "Appointments Chart 3",
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
  const chartRefs = useRef([]);

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

  const swapCharts = (index) => {
    if (index < charts.length - 1) {
      const newCharts = [...charts];
      const temp = newCharts[index];
      newCharts[index] = newCharts[index + 1];
      newCharts[index + 1] = temp;

      setCharts(newCharts);
    }
  };

  const logChartPositions = () => {
    chartRefs.current.forEach((chart, index) => {
      if (chart) {
        const { offsetLeft, offsetWidth } = chart;
        const position =
          offsetLeft < window.innerWidth / 2
            ? "Left"
            : offsetLeft > window.innerWidth / 2
            ? "Right"
            : "Center";

        console.log(
          `Chart ${index + 1}: Position = ${position}, Width = ${offsetWidth}px`
        );
      }
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="ml-7 h-auto p-5 bg-white rounded-[12px] mt-5 border hover:border-black transition-all duration-300">
        <div className="flex justify-between items-center">
          <p className="text-base">
            View all the answers to the questions you have asked.
          </p>
          <CustomButton text="× Close" />
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
              swapCharts={swapCharts}
              refCallback={(node) => (chartRefs.current[index] = node)}
            />
          ))}
        </div>

        <button
          onClick={logChartPositions}
          className="mt-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Log Chart Positions
        </button>
      </div>
    </DndProvider>
  );
};

export default DraggableCharts;



// import React, { useState, useEffect, useRef } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { SlArrowDown } from "react-icons/sl";
// import { LineChart } from "@mui/x-charts/LineChart";
// import CustomButton from "../Components/Button";
// import { PiSwapBold } from "react-icons/pi";
// import { IoIosExpand } from "react-icons/io";

// const DraggableChart = ({
//   id,
//   index,
//   moveCard,
//   chartData,
//   chartHeight,
//   chartWidth,
//   toggleWidth,
//   isExpanded,
//   swapCharts,
// }) => {
//   const chartRef = useRef(null);
//   const [position, setPosition] = useState({ left: 0, top: 0 });

//   const [, ref] = useDrag({
//     type: "chart",
//     item: { id, index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   const [, drop] = useDrop({
//     accept: "chart",
//     hover: (item) => {
//       if (item.index !== index) {
//         moveCard(item.index, index);
//         item.index = index;
//       }
//     },
//   });

//   // Track position of the chart element
//   useEffect(() => {
//     if (chartRef.current) {
//       const rect = chartRef.current.getBoundingClientRect();
//       setPosition({ left: rect.left, top: rect.top });
//     }
//   }, [chartRef.current]);

//   return (
//     <div
//       ref={(node) => {
//         chartRef.current = node;
//         drop(ref(node));
//       }}
//       className="p-4 bg-white rounded-[14px] shadow-md mt-5 border hover:border-black transition-all duration-300 relative"
//       style={{
//         width: chartWidth,
//         height: chartHeight + 80,
//         marginBottom: isExpanded ? 0 : 20,
//       }}
//     >
//       <div className="w-full">
//         <div className="flex justify-between items-center">
//           <p className="text-base sm:text-lg">{chartData.title}</p>
//           <p className="ml-10 flex items-center whitespace-nowrap text-sm sm:text-base">
//             This Month{" "}
//             <span className="ml-1">
//               <SlArrowDown />
//             </span>
//           </p>
//         </div>

//         <div className="chart-graph w-full">
//           <LineChart
//             xAxis={chartData.xAxis}
//             yAxis={chartData.yAxis}
//             series={chartData.series}
//             height={chartHeight}
//             width={chartWidth}
//           />
//         </div>

//         <div
//           onClick={() => toggleWidth(index)}
//           className="absolute right-2 cursor-pointer hover:text-blue-700"
//         >
//           <IoIosExpand size={25} />
//         </div>

//         <div
//           onClick={() => swapCharts(index)}
//           className="text-right cursor-pointer hover:text-green-700"
//         >
//           <PiSwapBold size={25} />
//         </div>
//       </div>
//       {/* Display position of the chart */}
//       <div className="absolute top-0 right-0 p-2 bg-gray-800 text-white">
//         Position: Left: {position.left}px, Top: {position.top}px
//       </div>
//     </div>
//   );
// };

// const DraggableCharts = () => {
//   const [charts, setCharts] = useState([
//     {
//       id: 1,
//       title: "Appointments Chart 1",
//       xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
//       yAxis: [
//         { showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } },
//       ],
//       series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#007bff" }],
//     },
//     {
//       id: 2,
//       title: "Appointments Chart 2",
//       xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
//       yAxis: [
//         { showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } },
//       ],
//       series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#82e0aa" }],
//     },
//     {
//       id: 3,
//       title: "Appointments Chart 3",
//       xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
//       yAxis: [
//         { showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } },
//       ],
//       series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#82e0aa" }],
//     },
//   ]);

//   const [chartHeights] = useState(250);
//   const [chartWidths, setChartWidths] = useState(
//     new Array(charts.length).fill(500)
//   );
//   const [expandedChart, setExpandedChart] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);

//   useEffect(() => {
//     setLoggedIn(true);
//   }, []);

//   const moveCard = (fromIndex, toIndex) => {
//     const updatedCharts = [...charts];
//     const [movedChart] = updatedCharts.splice(fromIndex, 1);
//     updatedCharts.splice(toIndex, 0, movedChart);
//     setCharts(updatedCharts);

//     const updatedWidths = [...chartWidths];
//     const [movedWidth] = updatedWidths.splice(fromIndex, 1);
//     updatedWidths.splice(toIndex, 0, movedWidth);
//     setChartWidths(updatedWidths);
//   };

//   const toggleWidth = (index) => {
//     setChartWidths((prevWidths) =>
//       prevWidths.map((width, i) =>
//         i === index ? (width > 490 ? 490 : 1000) : width
//       )
//     );
//     setExpandedChart((prev) => (prev === index ? null : index));
//   };

//   useEffect(() => {
//     if (loggedIn) {
//       setChartWidths(new Array(charts.length).fill(1000));
//     }
//   }, [loggedIn, charts.length]);

//   const swapCharts = (index) => {
//     if (index < charts.length + 1) {
//       const newCharts = [...charts];
//       const temp = newCharts[index];
//       newCharts[index] = newCharts[index + 1];
//       newCharts[index + 1] = temp;

//       setCharts(newCharts);
//     }
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="ml-7 h-auto p-5 bg-white rounded-[12px] mt-5 border hover:border-black transition-all duration-300">
//         <div className="flex justify-between items-center">
//           <p className="text-base">
//             View all the answers to the questions you have asked.
//           </p>
//           <CustomButton text="× Close" />
//         </div>

//         <div className="charts-container flex flex-wrap gap-4 justify-start">
//           {charts.map((chart, index) => (
//             <DraggableChart
//               key={chart.id}
//               id={chart.id}
//               index={index}
//               chartData={chart}
//               moveCard={moveCard}
//               chartHeight={chartHeights}
//               chartWidth={chartWidths[index]}
//               toggleWidth={toggleWidth}
//               isExpanded={expandedChart === index}
//               swapCharts={swapCharts}
//             />
//           ))}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// export default DraggableCharts;
