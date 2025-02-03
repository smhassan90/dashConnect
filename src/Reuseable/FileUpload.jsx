import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file!");
      return;
    }

    const formData = new FormData();
    formData.append("csvFile", file);  // "csvFile" key matches the multer field name

    try {
      const response = await fetch("http://localhost:5000/uploadCsv", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      
      if (response.ok) {
        alert(result.message);  // Success message from backend
      } else {
        alert(result.error);    // Error message from backend
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button type="submit" style={{ marginLeft: "10px" }}>
          Upload
        </button>
      </form>
    </div>
  );
}

export default FileUpload;
