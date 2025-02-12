
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import { IoSearch } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { LineChart } from "@mui/x-charts/LineChart";
import Bar from "../Reuseable/Bar";
import { ResizableBox } from "react-resizable";
import Draggable from "react-draggable";
import "react-resizable/css/styles.css";
import { Line } from "react-chartjs-2"; // Chart.js
import "chart.js/auto";
import CustomButton from "../Components/Button";

import DraggableCharts from "../Reuseable/DraggableChart";

function Storyboard() {
  const [activeTab, setActiveTab] = useState("graph"); // Default tab
  const [graphData, setGraphData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [searchText, setSearchText] = useState("");
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  // Fetch suggestion data when the modal is opened
  useEffect(() => {
    if (isModalOpen) {
      fetchSuggestion();
    }
  }, [isModalOpen]);

  
  const baseUrl = process.env.REACT_APP_BASE_URL;

//   const handleSearch = async () => {
//     if (!searchText.trim()) return; // Empty input check

//     setLoading(true);
//     setError(null);

//     const token = localStorage.getItem("your_access_token");
// console.log("Query : " + searchText.trim());
//     try {
      
//       const response = await fetch("http://localhost:3000/api/integration/v1/generateGraphQuery", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Token add kiya
//         },
//         body: JSON.stringify({
//           "requiredGraph":"graph",
//           "customText" : searchText.trim()
//       }),
//       });
//       /*
  //     const response = {
  //       "labels": [
  //           "Christopher Wilson",
  //           "Dr. Furqan Ahmed",
  //           "Emily Davis",
  //           "Jane Doe",
  //           "Michelle Johnson",
  //           "Syed Faheem Ahmed"
  //       ],
  //       "datasets": [
  //           {
  //               "label": "ID",
  //               "data": [
  //                   7,
  //                   1,
  //                   6,
  //                   3,
  //                   5,
  //                   2
  //               ]
  //           }
  //       ]
  //   };
  //   */
  //     const data = await response.json();
  //     console.log("API Response:", data); // Debugging ke liye

  //     if (data.requiredGraph === "graph") {
  //       setGraphData();
  //       setReportData(null); // Clear report if graph is selected
  //     } else if (data.requiredGraph === "report") {
  //       setReportData(JSON.parse(data.output)); // Convert JSON string to Object
  //       setGraphData(null); // Clear graph if report is selected
  //     }
  //   } catch (err) {
  //     setError("Failed to fetch data. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


//   const handleSearch = async () => {
//     if (!searchText.trim()) return; // Empty input check

//     setLoading(true);
//     setError(null);

//     const token = localStorage.getItem("your_access_token");
//     console.log("Query : " + searchText.trim());

//     try {
//         const response = await fetch("http://localhost:3000/api/integration/v1/generateGraphQuery", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({
//                 "requiredGraph": activeTab, // Dynamically select graph or report
//                 "customText": searchText.trim()
//             }),
//         });

//         const data = await response.json();
//         console.log("API Response:", data); // Debugging ke liye

//         if (activeTab === "graph") {
//           const parsedGraphData = JSON.parse(data.output);
//           console.log("Parsed Graph Data:", parsedGraphData);
      
//           if (parsedGraphData && parsedGraphData.labels && parsedGraphData.datasets) {
//               setGraphData({
//                   labels: parsedGraphData.labels, 
//                   datasets: parsedGraphData.datasets.map(dataset => ({
//                       ...dataset,
//                       fill: false, // Line chart ke liye smooth curve
//                       borderColor: "blue", // Graph color
//                       tension: 0.3 // Smooth line curve
//                   }))
//               });
//           } else {
//               console.error("Graph data format is incorrect:", parsedGraphData);
//           }
//       }
//        else if (activeTab === "report") {
//             setReportData(JSON.parse(data.output)); // Convert JSON string to Object
//             setGraphData(null); // Clear graph
//         }
//     } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//     } finally {
//         setLoading(false);
//     }
// };

// const handleSearch = async () => {
//   if (!searchText.trim()) return; // Empty input check

//   setLoading(true);
//   setError(null);

//   const token = localStorage.getItem("your_access_token");
//   console.log("Query : " + searchText.trim());

//   try {
//       const response = await fetch("http://localhost:3000/api/integration/v1/generateGraphQuery", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({
//               "requiredGraph": activeTab, // Dynamically select graph or report
//               "customText": searchText.trim()
//           }),
//       });

//       const data = await response.json();
//       console.log("API Response:", data); // Debugging ke liye

//       if (activeTab === "graph") {
//           const parsedGraphData = JSON.parse(data.output);
//           console.log("Parsed Graph Data:", parsedGraphData);

//           if (parsedGraphData && parsedGraphData.labels && parsedGraphData.datasets) {
//               setGraphData({
//                   labels: parsedGraphData.labels,
//                   datasets: parsedGraphData.datasets.map(dataset => ({
//                       ...dataset,
//                       fill: false, // Line chart ke liye smooth curve
//                       borderColor: "blue", // Graph color
//                       tension: 0.3 // Smooth line curve
//                   }))
//               });
//           } else {
//               console.error("Graph data format is incorrect:", parsedGraphData);
//           }
//       } 
//       else if (activeTab === "report") {
//           setReportData(JSON.parse(data.output)); // Convert JSON string to Object
//           setGraphData(null); // Clear graph
//       }
//   } catch (err) {
//       setError("Failed to fetch data. Please try again.");
//   } finally {
//       setLoading(false);
//   }
// };

const handleSearch = async () => {
  if (!searchText.trim()) return; // Empty input check

  setLoading(true);
  setError(null);

  const token = localStorage.getItem("your_access_token");
  console.log("Query : " + searchText.trim());

  try {
      const response = await fetch("http://localhost:3000/api/integration/v1/generateGraphQuery", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
              "requiredGraph": activeTab, // Dynamically select graph or report
              "customText": searchText.trim()
          }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debugging ke liye

      if (activeTab === "graph") {
          const parsedGraphData = JSON.parse(data.output);
          console.log("Parsed Graph Data:", parsedGraphData);

          if (parsedGraphData && parsedGraphData.labels && parsedGraphData.datasets) {
              setGraphData({
                  labels: parsedGraphData.labels,
                  datasets: parsedGraphData.datasets.map(dataset => ({
                      label: dataset.label,
                      data: dataset.data,
                      backgroundColor: "rgba(54, 162, 235, 0.2)",
                      borderColor: "rgba(54, 162, 235, 1)",
                      borderWidth: 2,
                      fill: false,
                      tension: 0.3 // Smooth line curve
                  }))
              });
          } else {
              console.error("Graph data format is incorrect:", parsedGraphData);
              setGraphData(null); // Agar response format sahi na ho, to graph remove karein
          }
      } 
      else if (activeTab === "report") {
          setReportData(JSON.parse(data.output)); // Convert JSON string to Object
          setGraphData(null); // Clear graph
      }
  } catch (err) {
      setError("Failed to fetch data. Please try again.");
  } finally {
      setLoading(false);
  }
};


  const fetchSuggestion = async () => {
    try {
      const token = localStorage.getItem('your_access_token'); 
      console.log( "tokan",token)
  
      const response = await fetch(`${baseUrl}/api/integration/v1/sugestionOfGraph`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
        },
        body: JSON.stringify({
          requiredGraph: 'Sample Graph Name', // Example value for the graph name (you can replace this dynamically)
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setSuggestion(replaceBoldText(data.ai_response)); // Assuming the response has ai_response field
      } else {
        console.error('Failed to fetch suggestion');
      }
    } catch (error) {
      console.error('Error fetching suggestion:', error);
    }
  };
  
  const replaceBoldText = (text) => {
    // Regular expression to find text wrapped in double asterisks
    const regex = /\*\*(.*?)\*\*/g;
  
    // Replace the double asterisk wrapped text with <strong> tags
    return text.replace(regex, (match, p1) => `<strong>${p1}</strong>`);
  };

  const formatText = (text) => {
    // Replace **bold** text with <strong> tags
    let formattedText = replaceBoldText(text);
  
    // Replace new lines with <br> for line breaks
    formattedText = formattedText.replace(/\n/g, '<br>');
  
    // Convert list items (1. 2. 3.) into <ol> (ordered list) HTML
    formattedText = formattedText.replace(/^(\d+\.)/gm, '<ol><li>$1</li>');
    formattedText = formattedText.replace(/<\/ol><li>/gm, '<li>'); // Close the <ol> after the list items are added
    formattedText = formattedText.replace(/<\/li><br>/gm, '</li><br></ol>'); // Fix <br> after list items
    
    // Convert '-' into <ul> (unordered list) for bullet points
    formattedText = formattedText.replace(/^\- (.*)/gm, '<ul><li>$1</li>');
    formattedText = formattedText.replace(/<\/ul><li>/gm, '<li>'); // Close <ul> after the list items
    formattedText = formattedText.replace(/<\/li><br>/gm, '</li><br></ul>'); // Fix <br> after bullet points
  
    return formattedText;
  };
  

  const TextWithBold = ({ text }) => {
    const processedText = formatText(text);
  
    // Render the processed text as HTML using dangerouslySetInnerHTML
    return <div dangerouslySetInnerHTML={{ __html: processedText }} />;
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <div className="flex-1 ">
        {/* Content */}
        <Bar title="Story Board" buttonText="+ Add Story" />
        <p className="text-center text-black mt-5 mobile:w-64 mobile:ml-5 mobile:text-center">
          Ask a data question, check the SQL, add it to your model  
          <a onClick={() => setIsModalOpen(true)}  className="text-blue-500" href="#"> More Suggestion</a>
        </p>
        
        <div className="w-full mt-5 px-7 mobile:px-5">
      {/* Tabs */}
      <div className="flex space-x-4 mb-3 border-b border-gray-300">
        <button
          className={`py-2 px-4 text-gray-700 font-semibold ${
            activeTab === "graph" ? "border-b-2 border-blue-500 text-blue-500" : ""
          }`}
          onClick={() => setActiveTab("graph")}
        >
          Line of Graphs
        </button>
        <button
          className={`py-2 px-4 text-gray-700 font-semibold ${
            activeTab === "report" ? "border-b-2 border-blue-500 text-blue-500" : ""
          }`}
          onClick={() => setActiveTab("report")}
        >
          Report
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-3 rounded-[10px] relative flex justify-center">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="bg-white text-gray-700 border rounded-[10px] border-gray-300 w-full p-3 pl-10 mobile:w-full"
          placeholder="Search Integration..."
        />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          onClick={handleSearch}
        >
          <IoSearch className="text-2xl" />
        </span>
      </div>
    </div>
           {reportData && (
  <div className="bg-white p-4 rounded-[14px] shadow-md border hover:border-black transition-all duration-300">
    <h3 className="text-lg font-semibold mb-4">Generated Report</h3>
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Total Income</th>
        </tr>
      </thead>
      <tbody>
        {reportData.map((row, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">{row.ID}</td>
            <td className="border border-gray-300 px-4 py-2">{row.NAME}</td>
            <td className="border border-gray-300 px-4 py-2">{row.total_income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


{graphData && (
  <div className="bg-white p-4 rounded-[14px] shadow-md border hover:border-black transition-all duration-300">
    <h3 className="text-lg font-semibold mb-4">Graph Representation</h3>
    <LineChart
      xAxis={[
        {
          scaleType: "point", // Ensure proper x-axis scaling
          data: graphData.labels,
          showGrid: true,
          grid: { stroke: "#ccc", strokeDasharray: "5 5" },
        }
      ]}
      yAxis={[
        {
          showGrid: true,
          grid: { stroke: "#ccc", strokeDasharray: "5 5" }
        }
      ]}
      series={graphData.datasets.map(dataset => ({
        data: dataset.data,
        label: dataset.label,
        color: "blue",
        area: false, // Keep it as a line chart
      }))} 
      height={300}
    />
  </div>
)}

        
       
        
        {/* Additional Content Section */}
        <div className="flex flex-col ml-7 sm:flex-row justify-between items-start mt-10 gap-8 mobile:ml-5">
          {/* <div className="w-full p-4 h-[330px] bg-white rounded-[14px] shadow-md mb-5 border hover:border-black transition-all duration-300 gap-6">
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg">Appointments</p>
              <p className="mr-10 flex items-center whitespace-nowrap text-sm sm:text-base">
                This Month{" "}
                <span className="ml-1">
                  <SlArrowDown />
                </span>
              </p>
            </div>
            <div className="w-full">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10], showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" }, show: false }]}
                yAxis={[{ showGrid: true, grid: { stroke: "#ccc", strokeDasharray: "5 5" } }]}
                series={[{ data: [2, 6, 2, 8.5, 1.5, 5], area: true, color: "#007bff" }]}
                height={300}
                sx={{ "& .MuiAxis-root": { display: "none" } }}
              />
            </div>
          </div> */}
          {/* {graphData && (
  <div className="w-full p-4 h-[330px] bg-white rounded-[14px] shadow-md mb-5 border hover:border-black transition-all duration-300 gap-6">
    <div className="flex justify-between items-center">
      <p className="text-base sm:text-lg">Appointments</p>
      <p className="mr-10 flex items-center whitespace-nowrap text-sm sm:text-base">
        This Month{" "}
        <span className="ml-1">
          <SlArrowDown />
        </span>
      </p>
    </div>
    <div className="w-full">
      <LineChart
        xAxis={[{
          data: graphData.labels || [], // ✅ Ensure labels are present
          showGrid: true, 
          grid: { stroke: "#ccc", strokeDasharray: "5 5" }, 
        }]}
        yAxis={[{ 
          showGrid: true, 
          grid: { stroke: "#ccc", strokeDasharray: "5 5" } 
        }]}
        series={[{ 
          data: graphData.datasets[0].data, // ✅ API se IDs dynamically inject ho gaye
          area: true, 
          color: "#007bff" 
        }]}
        height={300}
        sx={{ "& .MuiAxis-root": { display: "none" } }}
      />
    </div>
  </div>
)} */}





          <div className="ml-7 mb-12 h-[330px] p-4 bg-white rounded-[14px] shadow-md border hover:border-black transition-all duration-300 ">
            <div className="flex justify-between items-center">
              <p className="h-10 flex items-center whitespace-nowrap text-sm sm:text-base">
                SQL Statement{" "}
                <span className="ml-1">
                  <SlArrowDown />
                </span>
              </p>
              <button className="w-20 h-9 bg-slate-400 rounded-[16px]">Re-run</button>
            </div>
            <hr className="border-t border-gray-300 mt-2" />
            <p className="mt-4 text-sm sm:text-base">
              CREATE TABLE IF NOT EXISTS Customer (<br />
              CustID int NOT NULL,<br />
              Name varchar,<br />
              Email varchar,<br />
              DOB date,<br />
              CONSTRAINT customer PRIMARY KEY (CustID)<br />
              )
            </p>
          </div>
        </div>
        
        <div>
          <DraggableCharts />
           {/* Suggestion Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md w-1/3">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Suggestion</h2>
                <button onClick={closeModal} className="text-xl font-bold text-red-500">
                  <IoClose />
                </button>
              </div>
            
              <div className="mt-4 max-h-96 overflow-y-auto">
              <TextWithBold text={suggestion} />
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Storyboard;
