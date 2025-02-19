
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import imag5 from "../assests/image5.png";
import Bar from "../Reuseable/Bar";
import { ToastContainer, toast } from "react-toastify";
import image from "../assests/dolori-smart-working-blog-copertina-400x250-removebg-preview.png";
import CustomButton from "../Components/Button";
import axios from "axios";

const integrations = [
  {
    name: "Acuity",
    icon: imag5,    description: "You can setup your acuity account as source of data here",
    type: "acuity",
  },
  {
    name: "My SQL",
    icon: imag5,
    description: "You can set up your Xero account as a source of data here.",
    type: "mySQL",
  },
  {
    name: "MYOB",
    icon: imag5,    description:
      "You can set up your QuickBooks account as a source of data here.",
      type: "myob",
  },
  {
    name: "MYOB",
    icon: imag5,
        description: "You can set up your Square account as a source of data here.",
    type: "myob",
  },
];

function Integration() {
  const [selectedTables, setSelectedTables] = useState([]);
  const [waiting, setWaiting ] = useState(false)
  const [tables, setTables] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [integeration, Setintegeration] = useState(false);
  const [isConnectEnabled, setIsConnectEnabled] = useState(false); //
  const [apiKey, setApiKey] = useState(""); // To store API Key input
  const [userId, setUserId] = useState(""); // To store UserId input
  const [url, setUrl] = useState(""); 
  const [type,setType] = useState("")
  const [responseMessage, setResponseMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [discooneted, Setdisconneted] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [testResult ,setTestResult]=useState()
  const [formData, setFormData] = useState({
    platformName: "",
    integrationName: "",
    url: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log("url--->",baseUrl);
  

  const handleTestClick = async () => {
    const yourAuthToken = localStorage.getItem("authToken");
   console.log("type-->,,,",type);
   console.log("username-->,,,",userId);
   console.log("password-->,,,",apiKey);
   console.log("url-->,,,",url);
  //  console.log("base-->,,,",baseUrl);

    if (!yourAuthToken) {
      console.error("No auth token found");
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrl}/api/integration/v1/testConnectionIntegration`,
        { username:userId, password:apiKey, url:url, type:type },
        
        {
          headers: {
            Authorization: `Bearer ${yourAuthToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Data fetched:",response.data); // Logs the fetched data
        setIsConnectEnabled(true);
        toast.success("Test connection successful!");
      }
      
    } catch (error) {
      console.error("Error in API connection test:", error);
      setIsConnectEnabled(false);
    }
  };


  const handleTestConnection = async () => {
    setWaiting(true);
    try {
      const token = localStorage.getItem("your_access_token");
      console.log("Token: ", token);
  
      const response = await fetch(`${baseUrl}/api/integration/v1/testConnectionIntegration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          platform: formData.platformName.toLowerCase(),
          url: formData.url,
          username: formData.username,
          password: formData.password,
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setTestResult({ success: true, message: "Connection successful!" });
        toast.success("Connection successful!");

      } else {
        toast.error(data.message || "Connection failed!");
        setTestResult({ success: false, message: data.message || "Connection failed!" });
      }
    } catch (error) {
      setWaiting(false); // Loader stop karein
      toast.error("Error: " + error.message);

      setTestResult({ success: false, message: "Error: " + error.message });
    }
  };
  
   

// const handleTestConnection = async () => {
//   setWaiting(true); // Loader start karein
  
//   try {
//     const token = localStorage.getItem("your_access_token");
//     console.log("Token: ", token);

//     const response = await fetch(`${baseUrl}/testConnectionIntegration`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         platform: formData.platformName.toLowerCase(),
//         url: formData.url,
//         username: formData.username,
//         password: formData.password,
//       }),
//     });

//     const data = await response.json();
//     setWaiting(false); // Loader stop karein

//     if (response.ok) {
//       toast.success("Connection successful!");
//     } else {
//       toast.error(data.message || "Connection failed!");
//     }
//   } catch (error) {
//     setWaiting(false); // Loader stop karein
//     toast.error("Error: " + error.message);
//   }
// };

  
  
  const tableModal = async () => {
    Setintegeration(!integeration);
  
    if (!integeration) {
      try {
        // Retrieve the correct token
        const token = localStorage.getItem("your_access_token"); // Ensure this is the correct key
        console.log("token-->",token);
        
  
        if (!token) {
          console.error("Authorization token is missing.");
          return;
        }
  
        const payload = {
          platformName: formData.platformName, 
          integrationName: formData.integrationName,
          url: formData.url, 
          username: formData.username, 
          password: formData.password
        };
  
        const response = await axios.post(
          `${baseUrl}/api/integration/v1/integrationCredntial`, // Ensure baseUrl is correctly defined
          payload, // Send payload instead of an empty object
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            },
          }
        );
  
        if (response.status === 200 && response.data.tables) {
          setTables(response.data.tables); 
          setIsOpen(false)
          

          // toast.success("Tables fetched successfully!");
          // Ensure response contains tables

        } else {
          console.error("Unexpected API response:", response);
          toast.error("Failed to fetch tables.");

        }
      } catch (error) {
        console.error("Error fetching tables:", error.response?.data || error.message);
        toast.error("Error fetching tables.");

      }
    }
  };
  const handleTableSelection = (tableName, isChecked, description) => {
    setSelectedTables((prevState) => {
      if (isChecked) {
        return [
          ...prevState,
          { tableName, description }
        ];
      } else {
        return prevState.filter((table) => table.tableName !== tableName);
      }
    });
  };
  
  const handleDescriptionChange = (tableName, description) => {
    setSelectedTables((prevState) =>
      prevState.map((table) =>
        table.tableName === tableName
          ? { ...table, description }
          : table
      )
    );
  };
  
  
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("your_access_token"); // Get the token from localStorage
      console.log(token)
      if (!token) {
        console.error("Authorization token is missing.");
        return;
      }
  
      // Make sure there are selected tables
      if (selectedTables.length === 0) {
        console.error("No tables selected.");
        toast.error("No tables selected.");

        return;
      }
  
      // Send the selected tables with their descriptions to the server
      const response = await fetch(`${baseUrl}/api/integration/v1/MetaIntegrationDetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          tables: selectedTables, // Send selected tables and descriptions
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("Data saved successfully:", data);
        toast.success("Data saved successfully!");
        Setintegeration(false)
      } else {
        console.error("Error saving data:", data.message);
        toast.error("Error saving data.");

      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Error occurred while saving data.");

    }
  };
  
  

  const savedIntegration = async () => {
    const yourAuthToken = localStorage.getItem("authToken"); // Or wherever you get the token
    console.log("type-->,,,",type);
    console.log("username-->,,,",userId);
    console.log("password-->,,,",apiKey);
    console.log("url-->,,,",url);
    console.log("base-->,,,",baseUrl);

    if (!yourAuthToken) {
      console.error("No auth token found");
      return;
    }

    try {
      const response = await fetch(
        `${baseUrl}/api/integration/v1/updateIntegration`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${yourAuthToken}`,
          },
          body: JSON.stringify({type:type, username: userId, password: apiKey ,url:url }),
        }
      );

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success("Data saved successfully!");
        Setdisconneted(true); // Enable the "Disconnect" button if response is successful
        setIsConnected(true); // Set as connected after successful save
        handleCloseModal(); // Close the modal after successful save


      } else {
        toast.error(result.message || "Failed to save data");
      }
    } catch (error) {
      toast.error("An error occurred while saving data.");
    }
  };

    
  const handleDisconnect = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        toast.error("No authentication token found. Please log in again.");
        return;
      }
  
      const response = await axios.put(
        `${baseUrl}/api/integration/v1/disconnectIntegration`,
        null, // No body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      toast.success(response.data.message || "Disconnected successfully!");
      Setdisconneted(false); // Update UI to reflect disconnection
      setIsConnected(false); // Update state to show "Connect Now"
    } catch (error) {
      console.error("Error disconnecting integration:", error.response || error);
      toast.error(error.response?.data?.error || "Failed to disconnect.");
    }
  };

  const handleOpenModal = (integration) => {
    setIsModalOpen(true);
    // console.log("type is " , integration.type);
    setType(integration.type)
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="mobile:w-[390px] mobile:ml-3">
      <div className="ml-5">
      <Bar title="Integration" type="search" />
      </div>
      {/* Search Bar Container */}
      <div className="mt-14 ml-7 bg-custom-gray text-white p-4 rounded-[20px] h-[200px] mobile:ml-20 flex items-center mobile:h-20 mobile:w-[420px]">
        <div className="w-full h-[35px] mobile:w-[450px] relative">
          <input
            type="text"
            className=" bg-white text-b border-blue-500 rounded-[12px] w-full h-full pl-10 pr-20 mobile:w-full"
            placeholder="Search Integration..."
          />
          <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500">
            <IoSearch className="text-2xl" />
          </span>
        </div>


        {/* Image */}
        <img
          src={image}
          alt="Integration"
          className="ml-16 mb-16 h-[260px] rounded-lg mobile:hidden mobile:w-36 mobile:h-36"
        />
      </div>

      <div className="ml-7 flex gap-7 mobile:ml-20 mt-10 mobile:w-full">
        <p className="ml-7 category group cursor-pointer relative pb-1 text-gray-600 hover:text-blue-500">
          ALL
          <span className="ml-7 absolute left-0 right-0 bottom-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </p>
        
      </div>

      <hr className="ml-7 mobile:ml-24 mobile:w-[400px] mt-2 border-t border-gray-500" />
      <CustomButton
        onClick={() => setIsOpen(true)}
        text={"Add integeration"}

  className="ml-7 mt-3  mobile:ml-24 mobile:w-44 bg-black hover:bg-white hover:text-black border-2 border-black"
/>

      

      <div className="ml-7  mobile:ml-24 mobile:w-[400px] rounded-[12px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-14 items-center">
        {integrations.map((integration, index) => (
          <div
            key={index}
            className="rounded-[11px] mt-4 w-full h-[200px] bg-cover bg-center text-white flex flex-col mobile:w-full mobile:mb-4"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-vector/geometric-dark-message-board-wallpaper-with-copy-space-modern-designs_796268-123.jpg')",
            }}
          >
            <div className="flex items-center  mb-2">
              <img
                src={integration.icon}
                alt={`${integration.icon} Icon`}
                className="w-32 h-32 mt-8 ml-2 mobile:w-24 mobile:h-24"
              />
              <div className="flex flex-col gap-2 items-start">
                <div className="ml-3 w-full mt-5 items-start">
                  <h3 className="text-lg text-left mb-1 font-sans font-bold">
                    Integrate With {integration.name}
                  </h3>
                  <p className="text-sm text-left mt-3 text-white">
                    {integration.description}.
                  </p>
                </div>
                <div className="mt-3 mobile:mt-1 mobile:ml-0 mobile:w-24 ml-3 items-start">
                
                  
                  {/* <CustomButton
  className={`hover:text-black hover:bg-white mobile:w-32 border-2 border-black ${
    isConnected ? "cursor-not-allowed opacity-50" : ""
  }`}
  text={isConnected ? "Connected" : "Connect Now"}
  onClick={isConnected ? null : () => handleOpenModal(integration)}// Prevent modal opening if already connected
  disabled={isConnected} // Disable the button when connected
/>

<CustomButton
  className={`ml-3 mobile:w-32 ${
    discooneted ? "bg-red-500 hover:bg-red-700" : "bg-gray-300 cursor-not-allowed"
  }`}
  text={"Disconnect"}
  onClick={() => {
    handleDisconnect();
    setIsConnected(false); // Reset the state to reflect disconnection
  }}
  disabled={!discooneted}
/> */}

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>



      {isModalOpen && (
        <div className="w-[1500px] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mobile:w-72 mobile:ml-14">
            {/* Container for the heading and close button */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold mobile:text-center">
                Integration
              </h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={handleCloseModal}
              >
                <IoClose size={24} />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>

                <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                  <legend className="text-gray-500 text-sm px-2">
                    UserName
                  </legend>
                  <input
                    required
                    className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
                    id="username"
                    name="username"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </fieldset>

                <fieldset className="mt-3 border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                  <legend className="text-gray-500 text-sm px-2">
                    Password
                  </legend>
                  <input
                    type="password"
                    required
                    className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
                    id="password"
                    name="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                  />
                </fieldset>
              <fieldset className="border border-gray-400 rounded p-2 w-96 h-14 mobile:w-60">
                  <legend className="text-gray-500 text-sm px-2">
                    URL
                  </legend>
                  <input
                    required
                    className="bg-transparent rounded w-full h-5 py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none"
                    id="url"
                    name="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </fieldset>
              </div>

              <div className="flex justify-center gap-2 mt-5">
                <button
                  type="button"
                  onClick={handleTestClick}
                  className="text-white bg-green-500 hover:bg-green-700 py-2 px-4 rounded"
                >
                  Test
                </button>
                <button
                  type="submit"
                  disabled={!isConnectEnabled}
                  onClick={savedIntegration}
                  className={`py-2 px-4 rounded ${isConnectEnabled ? "bg-blue-500" : "bg-gray-300 cursor-not-allowed"
                    }`}
                >
                  Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

{isOpen && (
  <div className="fixed mobile:ml-24   inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg w-96">
      {/* Header with title and close button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Add Integration</h2>
        <button
          className="text-gray-600 hover:text-gray-800"
          onClick={() => setIsOpen(false)}
        >
          <IoClose size={24} />
        </button>
      </div>
      

      {/* Input Fields */}
      <select
        name="platformName"
        value={formData.platformName}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="" disabled>
          Select Platform
        </option>
        <option value="mysql">mysql</option>
        <option value="MYOB">MYOB</option>
        <option value="Actuity">Actuity</option>
      </select>

      <input
        type="text"
        name="integrationName"
        placeholder="Integration Name"
        value={formData.integrationName}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        name="url"
        placeholder="URL"
        value={formData.url}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />

      {/* Buttons */}
      <div className="flex items-center justify-center gap-3">
       
        {/* <button
          onClick={() => {
            console.log(formData);
            handleTestConnection(); // Trigger API test when button is clicked
          }}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {waiting ? (
    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
  ) : (
    "Test"
  )}
          
        </button> */}
        
         <button
  onClick={handleTestConnection}
  className="px-4 py-2 bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded flex items-center gap-2"
>
  {waiting ? (
    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
  ) : (
    "Test"
  )}
</button>

        <button
          onClick={tableModal}
          className="px-4 py-2 bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded"
        >
          Connect
        </button>
      </div>

      {/* Test result message */}
      {testResult && (
        <p
          className={`mt-4 text-sm ${testResult.success ? 'text-green-500' : 'text-red-500'}`}
        >
          {testResult.message}
        </p>
      )}
    </div>
  </div>
)}
      {integeration && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-h-[80vh] overflow-hidden">
          <button
          className="text-gray-600 hover:text-gray-800"
          onClick={() => Setintegeration(false)}
        >
          <IoClose size={24} />
        </button>
            <h2 className="text-xl font-semibold mb-4">List of Tables</h2>

            {/* Dynamically rendered table list */}
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {tables.length > 0 ? (
                tables.map((table, index) => (
                  <div key={index} className="flex items-start">
                    <input type="checkbox" className="mr-2 mt-1"
                    onChange={(e) =>
                      handleTableSelection(table, e.target.checked, "") // Reset description on selection
                    }
                    />
                    <div>
                      <p className="font-semibold">{table}</p>
                      <textarea
                        className="w-[290px] border p-2 text-sm text-gray-500 mt-1"
                        placeholder="Enter description..."
                        value={selectedTables.find((t) => t.tableName === table)?.description || ""}
                        onChange={(e) =>
                          handleDescriptionChange(table, e.target.value) // Update description
                        }
                      ></textarea>
                    </div>
                  </div>
                ))
              ) : (
                <p>No tables found.</p>
              )}
            </div>

            {/* Save Button */}
            <div className="mt-4 flex justify-end">
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Integration;