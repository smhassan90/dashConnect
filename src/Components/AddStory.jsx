import React, { useState } from 'react';

const AddStory = () => {
  const [storyBoardName, setStoryBoardName] = useState('');
  const [description, setDescription] = useState('');
  const [integrations, setIntegrations] = useState('');
  const [complementaryDatasets, setComplementaryDatasets] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Story Board Name:", storyBoardName);
    console.log("Description:", description);
    console.log("Integrations:", integrations);
    console.log("Complementary Datasets:", complementaryDatasets);
  };

  return (
<div className="bg-white rounded-lg shadow-md p-6 max-w-lg h-[800px] mx-auto mt-10 w-[900px]">
<h2 className="text-lg font-medium mb-4">Add A Story</h2>
      <hr className="border-t border-gray-300 w-100 mt-2" />
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-4">
          <label htmlFor="storyBoardName" className="block text-gray-700 text-sm font-bold mb-2">
            Story Board Name
          </label>

          <input
            type="text"
            id="storyBoardName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={storyBoardName}
            onChange={(e) => setStoryBoardName(e.target.value)}
          />
        </div> */}                     <div className="flex space-x-4 mb-4">
                                        <div className="relative w-full">
                                    <fieldset className="border border-gray-400 rounded p-1">
                                        <legend className="text-gray-500 text-sm px-2">Story board name</legend>
                                        <input
                                            required
                                            className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                                            id="firstName"
                                            type="text"
                                            value={storyBoardName}
                                            onChange={(e) => setStoryBoardName(e.target.value)}
                                        />
                                    </fieldset>
                                    </div>


                                    <div className="relative w-full">
                                    <fieldset className="border border-gray-400 rounded p-1">
                                        <legend className="text-gray-500 text-sm px-2">Description
                                        </legend>
                                        <input
                                            
                                            className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                                            id="description"
                                            type="text"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </fieldset>
                                    </div>






                                    </div>





        {/* <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div> */}
        <div className="mb-4">
          <label htmlFor="integrations" className="block text-gray-700 text-sm font-bold mb-2">
            Integrations
          </label>
          <input
            type="text"
            id="integrations"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={integrations}
            onChange={(e) => setIntegrations(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="complementaryDatasets" className="block text-gray-700 text-sm font-bold mb-2">
            Complementary Datasets
          </label>
          <input
            type="text"
            id="complementaryDatasets"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={complementaryDatasets}
            onChange={(e) => setComplementaryDatasets(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStory;
