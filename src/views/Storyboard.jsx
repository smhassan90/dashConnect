import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5"; // Import the close icon
import { IoSearch } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { LineChart } from "@mui/x-charts/LineChart";
import Bar from "../Reuseable/Bar";
import { ResizableBox } from "react-resizable";
import Draggable from "react-draggable";
import "react-resizable/css/styles.css";
import HashLoader from "react-spinners/HashLoader";
import { Line } from "react-chartjs-2"; // Chart.js
import "chart.js/auto";
import { FaMicrophone } from "react-icons/fa"; // Mic Icon

import CustomButton from "../Components/Button";

import DraggableCharts from "../Reuseable/DraggableChart";

function Storyboard() {
  const [activeTab, setActiveTab] = useState("graph"); // Default tab
  const [graphData, setGraphData] = useState(null);
  
  const [isListening, setIsListening] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [suggestion, setSuggestion] = useState("");
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

  // sahi
  const handleSearch = async () => {
    if (!searchText.trim()) return; // Empty input check

    setLoading(true);
    setError(null);

    const token = localStorage.getItem("your_access_token");
    console.log("Query : " + searchText.trim());

    try {
      const response = await fetch(
        `${baseUrl}/api/integration/v1/generateGraphQuery`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            requiredGraph: activeTab, // Dynamically select graph or report
            customText: searchText.trim(),
          }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data); // Debugging ke liye

      if (activeTab === "graph") {
        if (data && data.labels && data.datasets) {
          setGraphData({
            labels: data.labels,
            datasets: data.datasets.map((dataset) => ({
              label: dataset.label,
              data: dataset.data,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 2,
              fill: false,
              tension: 0.3, // Smooth line curve
            })),
          });
          console.log("Graph Data Set Successfully:", data);
        } else {
          console.error("Graph data format is incorrect:", data);
          setGraphData(null); // Agar response format sahi na ho, to graph remove karein
        }
      } else if (activeTab === "report") {
        setReportData(JSON.parse(data.output));
        console.log(reportData, "hhh"); // Convert JSON string to Object
        setGraphData(null); // Clear graph
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleVoiceSearch = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
  
    recognition.lang = "en-US";
    recognition.interimResults = false;
  
    recognition.onstart = () => {
      setIsListening(true); // Mic ON => Blue color
      console.log("Voice recognition started...");
    };
  
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchText((prevText) => (prevText ? prevText + " " + transcript : transcript));
    };
  
    recognition.onerror = (event) => {
      console.error("Error occurred in speech recognition: ", event.error);
    };
  
    recognition.onend = () => {
      setIsListening(false); // Mic OFF => Default color
      console.log("Voice recognition stopped.");
    };
  
    recognition.start();
  };

  const fetchSuggestion = async () => {
    setLoading(true); // Loader start hoga
    try {
      const token = localStorage.getItem("your_access_token");
      console.log("tokan", token);

      const response = await fetch(
        `${baseUrl}/api/integration/v1/sugestionOfGraph`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
          body: JSON.stringify({
            requiredGraph: "Sample Graph Name", // Example value for the graph name (you can replace this dynamically)
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSuggestion(replaceBoldText(data.ai_response)); // Assuming the response has ai_response field
      } else {
        console.error("Failed to fetch suggestion");
      }
    } catch (error) {
      console.error("Error fetching suggestion:", error);
    }
    finally {
      setLoading(false); // Loader stop hoga
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
    formattedText = formattedText.replace(/\n/g, "<br>");

    // Convert list items (1. 2. 3.) into <ol> (ordered list) HTML
    formattedText = formattedText.replace(/^(\d+\.)/gm, "<ol><li>$1</li>");
    formattedText = formattedText.replace(/<\/ol><li>/gm, "<li>"); // Close the <ol> after the list items are added
    formattedText = formattedText.replace(/<\/li><br>/gm, "</li><br></ol>"); // Fix <br> after list items

    // Convert '-' into <ul> (unordered list) for bullet points
    formattedText = formattedText.replace(/^\- (.*)/gm, "<ul><li>$1</li>");
    formattedText = formattedText.replace(/<\/ul><li>/gm, "<li>"); // Close <ul> after the list items
    formattedText = formattedText.replace(/<\/li><br>/gm, "</li><br></ul>"); // Fix <br> after bullet points

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
    <div className="w-full ">
      <div className="w-full">
        {/* Content */}
        <div className="">
          <Bar title="Story Board" buttonText="+ Add Story" />
        </div>
        <p className="text-center  text-black mt-5 mobile:w-64 mobile:ml-24 mobile:text-center">
          Ask a data question, check the SQL, add it to your model
          <a
            onClick={() => setIsModalOpen(true)}
            className="text-blue-500"
            href="#"
          >
            {" "}
            More Suggestion
          </a>
        </p>

        <div className="w-full ml-2 mobile:ml-12 mt-5 px-2  mobile:px-5">
          {/* Tabs */}
          <div className=" ml-2 flex space-x-4 mb-3 border-b border-gray-300">
            <button
              className={`py-2 px-2 text-gray-700 font-semibold ${
                activeTab === "graph"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : ""
              }`}
              onClick={() => setActiveTab("graph")}
            >
              Graphs
            </button>
            <button
              className={`py-2 px-2 text-gray-700 ml-2 font-semibold ${
                activeTab === "report"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : ""
              }`}
              onClick={() => setActiveTab("report")}
            >
              Report
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex ml-2 flex-col items-center w-full">
  {/* Search Bar */}
  
<div className="w-full max-w-[1400px] mt-3 relative flex">
  <textarea
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    className="w-full bg-white text-gray-700 border border-gray-300 rounded-[5px] p-3 pl-12 resize-none overflow-hidden min-h-[60px] max-h-[200px] leading-[30px]"
    placeholder="Search Integration..."
    rows={1}
    onInput={(e) => {
      e.target.style.height = "10px"; // Start from a smaller height
      e.target.style.height = e.target.scrollHeight + "px"; // Expand dynamically
    }}
  />
  <span
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
    onClick={handleSearch}
  >
    <IoSearch className="text-2xl" />
  </span>
  <span
      className={`absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${
        isListening ? "text-blue-500" : "text-gray-500"
      }`}
      onClick={handleVoiceSearch}
    >
      <FaMicrophone className="text-2xl" />
    </span>
</div>


  {/* Report Data Table */}
  {reportData && (
    <div className="w-full max-w-[1250px] mt-5 bg-white text-gray-700 border border-gray-300 rounded-[5px] p-5">
      <h3 className="text-lg font-semibold mb-4">Generated Report</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Total Income
            </th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{row.ID}</td>
              <td className="border border-gray-300 px-4 py-2">{row.NAME}</td>
              <td className="border border-gray-300 px-4 py-2">
                {row.total_income}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
  {/* Loader Show Karna */}
  {/* {loading && (
  <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-70 z-70">
    <HashLoader color="black" size={55} />
  </div>
)} */}

{loading && (
  <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-[9999]">
    <HashLoader color="black" size={60} />
  </div>
)}

  {/* Graph Section */}
  {graphData && (
    <div className="w-full max-w-[1280px] mt-5 bg-white border border-gray-300 rounded-[5px] shadow-md p-5">
      <div className="flex justify-between items-center">
        <p className="text-lg">Line Graph</p>
        <p className="mr-10 flex items-center whitespace-nowrap text-sm">
          This Month{" "}
          <span className="">
            <SlArrowDown />
          </span>
        </p>
      </div>
      <div className="w-full">
        <LineChart
          xAxis={[
            {
              id: "appointments",
              scaleType: "band",
              data: graphData.labels || [],
              tickLabelAngle: -45,
            },
          ]}
          yAxis={[
            {
              label: "Number of Appointments",
              min: 0,
            },
          ]}
          series={[
            {
              data: graphData.datasets[0]?.data || [],
              area: true,
              color: "#007bff",
            },
          ]}
          height={300}
          sx={{
            "& .MuiAxis-root": { stroke: "#ddd" },
          }}
        />
      </div>
    </div>
  )}
</div>


          {/* <div className="ml mb-12 h-[330px] p-4 bg-white rounded-[14px] shadow-md border hover:border-black transition-all duration-300 ">
            <div className="flex justify-between items-center">
              <p className="h-10 flex items-center whitespace-nowrap text-sm sm:text-base">
                SQL Statement{" "}
                <span className="ml-1">
                  <SlArrowDown />
                </span>
              </p>
              <button className="w-20 h-9 bg-slate-400 rounded-[16px]">
                Re-run
              </button>
            </div>
            <hr className="border-t border-gray-300 mt-2" />
            <p className="mt-4 text-sm sm:text-base">
              CREATE TABLE IF NOT EXISTS Customer (<br />
              CustID int NOT NULL,
              <br />
              Name varchar,
              <br />
              Email varchar,
              <br />
              DOB date,
              <br />
              CONSTRAINT customer PRIMARY KEY (CustID)
              <br />)
            </p>
          </div> */}
        </div>

        <div>
          <DraggableCharts />
          {/* Suggestion Modal */}
          {isModalOpen && (
            <div className=" mobile:w-full mobile:h-full fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
              <div className="bg-white mobile:w-[400px] p-6 rounded-md w-1/3">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Suggestion</h2>
                  <button
                    onClick={closeModal}
                    className="text-xl font-bold text-red-500"
                  >
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
