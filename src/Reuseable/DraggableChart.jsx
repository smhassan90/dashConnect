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
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css"; // Import styles for resizing
import { IoClose } from "react-icons/io5";
import { LineChart } from '@mui/x-charts/LineChart';

import { SlArrowDown } from "react-icons/sl";

const DraggableResizableChart = ({
  id,
  index,
  moveCard,
  chartData,
  onResize,
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
      className="mt-5"
      style={{
        width: `${chartData.size.width}px`,
        height: `${chartData.size.height}px`,
        transition: "all 0.3s",
      }}
    >
      <ResizableBox
        width={chartData.size.width}
        height={chartData.size.height}
        resizeHandles={["se"]}
        minConstraints={[200, 200]}
        maxConstraints={[600, 400]}
        onResizeStop={(e, data) => onResize(index, data.size)}
        className="bg-white shadow-md rounded-[14px] p-4 border hover:border-black transition-all duration-300"
      >
        <div className="w-full h-full">
          <div className="flex justify-between items-center">
            <p className="text-base sm:text-lg">{chartData.title}</p>
            <p className="ml-10 flex items-center whitespace-nowrap text-sm sm:text-base">
              This Month <span className="ml-1">
                <SlArrowDown />
              </span>
            </p>
          </div>
          <div className="w-full h-[80%]">
            <LineChart
              xAxis={chartData.xAxis}
              yAxis={chartData.yAxis}
              series={chartData.series}
              height={chartData.size.height - 100} // Dynamically adjust height
              width={chartData.size.width - 20} // Dynamically adjust width
            />
          </div>
        </div>
      </ResizableBox>
    </div>
  );
};

const DraggableResizableCharts = () => {
  const [charts, setCharts] = useState([
    {
      id: 1,
      title: "Appointments Chart 1",
      xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
      yAxis: [{ showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } }],
      series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#007bff" }],
      size: { width: 400, height: 300 }, // Initial size
    },
    {
      id: 2,
      title: "Appointments Chart 2",
      xAxis: [{ data: [1, 2, 3, 5, 8, 10] }],
      yAxis: [{ showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } }],
      series: [{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#82e0aa" }],
      size: { width: 400, height: 300 }, // Initial size
    },
  ]);

  const moveCard = (fromIndex, toIndex) => {
    const updatedCharts = [...charts];
    const [movedChart] = updatedCharts.splice(fromIndex, 1);
    updatedCharts.splice(toIndex, 0, movedChart);
    setCharts(updatedCharts);
  };

  const onResize = (index, newSize) => {
    const updatedCharts = [...charts];
    updatedCharts[index].size = newSize;
    setCharts(updatedCharts);
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
        {charts.map((chart, index) => (
          <DraggableResizableChart
            key={chart.id}
            id={chart.id}
            index={index}
            chartData={chart}
            moveCard={moveCard}
            onResize={onResize}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default DraggableResizableCharts;
