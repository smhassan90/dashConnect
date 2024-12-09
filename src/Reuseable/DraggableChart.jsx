// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { IoClose } from "react-icons/io5";
// import { SlArrowDown } from "react-icons/sl";
// import { LineChart } from '@mui/x-charts/LineChart';


// const DraggableChart = ({ id, index, moveCard, chartData }) => {
//   const [, ref] = useDrag({
//     type: "chart",
//     item: { id, index },
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
//       className="p-4 bg-white rounded-[14px] shadow-md mt-5 border hover:border-black transition-all duration-300"
//     >
//       <div className="flex justify-between items-center">
//         <p className="text-base sm:text-lg">{chartData.title}</p>
//         <p className="ml-10 flex items-center whitespace-nowrap text-sm sm:text-base">
//           This Month <span className="ml-1">
//             <SlArrowDown />
//           </span>
//         </p>
//       </div>
//       <div className="w-full">
//         <LineChart
//           xAxis={chartData.xAxis}
//           yAxis={chartData.yAxis}
//           series={chartData.series}
//           height={250}
//         />
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
//       yAxis: [{ showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } }],
//       series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#007bff" }],
//     },
//     {
//       id: 2,
//       title: "Appointments Chart 2",
//       xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
//       yAxis: [{ showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } }],
//       series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#82e0aa" }],
//     },
   
//   ]);

//   const moveCard = (fromIndex, toIndex) => {
//     const updatedCharts = [...charts];
//     const [movedChart] = updatedCharts.splice(fromIndex, 1);
//     updatedCharts.splice(toIndex, 0, movedChart);
//     setCharts(updatedCharts);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="ml-7 h-[800px] p-5 bg-white rounded-[12px] mt-5 border hover:border-black transition-all duration-300">
//         <div className="flex justify-between items-center">
//           <p className="text-base">View all the answers to the questions you have asked.</p>
//           <button className="text-red-500">
//             <IoClose size={20} />
//           </button>
//         </div>
//         {charts.map((chart, index) => (
//           <DraggableChart
//             key={chart.id}
//             id={chart.id}
//             index={index}
//             chartData={chart}
//             moveCard={moveCard}
//           />
//         ))}
//       </div>
//     </DndProvider>
//   );
// };

// export default DraggableCharts;

// import React, { useState } from "react";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { IoClose } from "react-icons/io5";
// import { SlArrowDown } from "react-icons/sl";
// import { LineChart } from "@mui/x-charts/LineChart";

// const DraggableChart = ({
//   id,
//   index,
//   moveCard,
//   chartData,
//   chartHeight,
//   chartWidth,
//   toggleWidth,
// }) => {
//   const [, ref] = useDrag({
//     type: "chart",
//     item: { id, index },
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
//       className="p-4 bg-white rounded-[14px] shadow-md mt-5 border hover:border-black transition-all duration-300"
//       style={{ width: chartWidth, height: chartHeight + 80 }}
//     >
//       <div className="flex justify-between items-center">
//         <p className="text-base sm:text-lg">{chartData.title}</p>
//         <p className="ml-10 flex items-center whitespace-nowrap text-sm sm:text-base">
//           This Month <span className="ml-1">
//             <SlArrowDown />
//           </span>
//         </p>
//       </div>
//       <div className="w-full">
//         <LineChart
//           xAxis={chartData.xAxis}
//           yAxis={chartData.yAxis}
//           series={chartData.series}
//           height={chartHeight}
//           width={chartWidth}
//         />
//       </div>
//       <button
//         onClick={() => toggleWidth(index)}
//         className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md"
//       >
//         Toggle Width
//       </button>
//     </div>
//   );
// };

// const DraggableCharts = () => {
//   const [charts, setCharts] = useState([
//     {
//       id: 1,
//       title: "Appointments Chart 1",
//       xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
//       yAxis: [{ showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } }],
//       series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#007bff" }],
//     },
//     {
//       id: 2,
//       title: "Appointments Chart 2",
//       xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
//       yAxis: [{ showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } }],
//       series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#82e0aa" }],
//     },
//   ]);

//   const [chartHeights] = useState(250); // Default height
//   const [chartWidths, setChartWidths] = useState(
//     new Array(charts.length).fill(500) // Default width for each chart
//   );

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
//       prevWidths.map((width, i) => (i === index ? (width > 600 ? 600 : 1000) : width))
//     );
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="ml-7 h-auto p-5 bg-white rounded-[12px] mt-5 border hover:border-black transition-all duration-300">
//         <div className="flex justify-between items-center">
//           <p className="text-base">View all the answers to the questions you have asked.</p>
//           <button className="text-red-500">
//             <IoClose size={20} />
//           </button>
//         </div>

//         {/* Draggable Charts */}
//         {charts.map((chart, index) => (
//           <DraggableChart
//             key={chart.id}
//             id={chart.id}
//             index={index}
//             chartData={chart}
//             moveCard={moveCard}
//             chartHeight={chartHeights}
//             chartWidth={chartWidths[index]}
//             toggleWidth={toggleWidth}
//           />
//         ))}
//       </div>
//     </DndProvider>
//   );
// };

// export default DraggableCharts;

import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { IoClose } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { FaExpandAlt } from "react-icons/fa"; // Import the expand icon
import { LineChart } from "@mui/x-charts/LineChart";

const DraggableChart = ({
  id,
  index,
  moveCard,
  chartData,
  chartHeight,
  chartWidth,
  toggleWidth,
}) => {
  const [, ref] = useDrag({
    type: "chart",
    item: { id, index },
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
      style={{ width: chartWidth, height: chartHeight + 80 }}
    >
      <div className="flex justify-between items-center">
        <p className="text-base sm:text-lg">{chartData.title}</p>
        <p className="ml-10 flex items-center whitespace-nowrap text-sm sm:text-base">
          This Month <span className="ml-1">
            <SlArrowDown />
          </span>
        </p>
      </div>
      <div className="w-full">
        <LineChart
          xAxis={chartData.xAxis}
          yAxis={chartData.yAxis}
          series={chartData.series}
          height={chartHeight}
          width={chartWidth}
        />
      </div>
      {/* Expand Icon */}
      <div
        onClick={() => toggleWidth(index)}
        className="absolute top-2 right-2 cursor-pointer text-blue-500 hover:text-blue-700"
      >
        <FaExpandAlt size={20} />
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
      yAxis: [{ showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } }],
      series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#007bff" }],
    },
    {
      id: 2,
      title: "Appointments Chart 2",
      xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
      yAxis: [{ showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } }],
      series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#82e0aa" }],
    },
  ]);

  const [chartHeights] = useState(250); // Default height
  const [chartWidths, setChartWidths] = useState(
    new Array(charts.length).fill(500) // Default width for each chart
  );

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
      prevWidths.map((width, i) => (i === index ? (width > 600 ? 600 : 1000) : width))
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="ml-7 h-auto p-5 bg-white rounded-[12px] mt-5 border hover:border-black transition-all duration-300">
        <div className="flex justify-between items-center">
          <p className="text-base">View all the answers to the questions you have asked.</p>
          <button className="text-red-500">
            <IoClose size={20} />
          </button>
        </div>

        {/* Draggable Charts */}
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
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default DraggableCharts;
