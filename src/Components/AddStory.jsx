// import React, { useState } from 'react';
// import { AiOutlineClose } from 'react-icons/ai'; // Importing the close icon
// const AddStory = () => {
//     const [storyBoardName, setStoryBoardName] = useState('');
//     const [description, setDescription] = useState('');
//     const [integrations, setIntegrations] = useState('');
//     const [complementaryDatasets, setComplementaryDatasets] = useState('');
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission here
//         console.log("Story Board Name:", storyBoardName);
//         console.log("Description:", description);
//         console.log("Integrations:", integrations);
//         console.log("Complementary Datasets:", complementaryDatasets);
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-md p-6 max-w-lg h-[500px] mx-auto mt-10 w-[10000px]">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-medium">Add A Story</h2>

//                 {/* Close icon on the right side */}
//                 <button className="bg-sky-300 p-2 rounded-[10PX] hover:bg-sky-400">
//                     <AiOutlineClose size={20} className="text-white" />
//                 </button>
//             </div>
//             <hr className="border-t border-gray-300 w-100 mt-2" />
//             <form onSubmit={handleSubmit}>
//                 <div className="flex space-x-4 mt-7 mb-4">
//                     <div className="relative w-full">
//                         <fieldset className="border border-gray-400 rounded-[10px] ">
//                             <legend className="text-gray-500 text-lg px-3">Story board name</legend>
//                             <input
//                                 required
//                                 className="bg-transparent rounded-[12px] py-1 px-3 text-gray-700 leading-tight focus:outline-none"
//                                 id="firstName"
//                                 type="text"
//                                 value={storyBoardName}
//                                 onChange={(e) => setStoryBoardName(e.target.value)}
//                             />
//                         </fieldset>
//                     </div>
//                 </div>
//                 <div className="mb-4">
//                     <fieldset className="border border-gray-400 rounded-[10px] ">
//                         <legend className="text-gray-500 text-lg px-3">Description</legend>

//                         <input
//                             type="text"
//                             id="description"
//                             className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                         />
//                     </fieldset>
//                 </div>

//                 <div className="mb-4">
//                     <fieldset className="border border-gray-400 rounded-[10px] ">
//                         <legend className="text-gray-500 text-lg px-3">Integrations</legend>

//                         <input
//                             type="text"
//                             id="integrations"
//                             className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
//                             value={integrations}
//                             onChange={(e) => setIntegrations(e.target.value)}
//                         />
//                     </fieldset>
//                 </div>

//                 <div className="mb-4">
//                     <fieldset className="border border-gray-400 rounded-[10px] ">
//                         <legend className="text-gray-500 text-lg px-3">            Complementary Datasets
//                         </legend>

//                         <input
//                             type="text"
//                             id="Complementary Datasets"
//                             className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
//                             value={complementaryDatasets}
//                             onChange={(e) => setComplementaryDatasets(e.target.value)}
//                         />
//                     </fieldset>
//                 </div>

//                 <div className="flex items-left justify-evenly w-72 space-x-64"> {/* Added space-x-4 for gap */}
//                     {/* Cancel button with hover and conditional click effect */}
//                     <button
//                         type="button"
//                         className={`w-1/2 font-bold py-2 px-6 rounded-[15px] focus:outline-none focus:shadow-outline border border-black transition duration-300 hover:bg-black hover:text-white`}
//                     >
//                         Cancel
//                     </button>

//                     {/* Save button with hover and conditional click effect */}
//                     <button
//                         type="button"
//                         className={`w-1/2 font-bold py-2 px-6 rounded-[15px] focus:outline-none focus:shadow-outline border border-black transition duration-300 hover:bg-black hover:text-white`}
//                     >
//                         Save
//                     </button>
//                 </div>

//             </form>
//         </div>
//     );
// };

// export default AddStory;

import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Importing the close icon

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
        <div className="bg-white rounded-lg shadow-md p-6 max-w-lg h-auto mx-auto mt-10 sm:w-full w-full"> {/* Set responsive width */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Add A Story</h2>

                {/* Close icon on the right side */}
                <button className="bg-sky-300 p-2 rounded-[10px] hover:bg-sky-400">
                    <AiOutlineClose size={20} className="text-white" />
                </button>
            </div>
            <hr className="border-t border-gray-300 w-full mt-2" /> {/* Set hr width to full */}
            
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mt-7 mb-4">
                    <div className="relative w-full">
                        <fieldset className="border border-gray-400 rounded-[10px] ">
                            <legend className="text-gray-500 text-lg px-3">Story board name</legend>
                            <input
                                required
                                className="bg-transparent rounded-[12px] py-1 px-3 text-gray-700 leading-tight focus:outline-none w-full"
                                id="firstName"
                                type="text"
                                value={storyBoardName}
                                onChange={(e) => setStoryBoardName(e.target.value)}
                            />
                        </fieldset>
                    </div>
                </div>
                <div className="mb-4">
                    <fieldset className="border border-gray-400 rounded-[10px] ">
                        <legend className="text-gray-500 text-lg px-3">Description</legend>
                        <input
                         required
                            type="text"
                            id="description"
                            className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </fieldset>
                </div>

                <div className="mb-4">
                    <fieldset className="border border-gray-400 rounded-[10px] ">
                        <legend className="text-gray-500 text-lg px-3">Integrations</legend>
                        <input
                            required
                            type="text"
                            id="integrations"
                            className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                            value={integrations}
                            onChange={(e) => setIntegrations(e.target.value)}
                        />
                    </fieldset>
                </div>

                <div className="mb-4">
                    <fieldset className="border border-gray-400 rounded-[10px] ">
                        <legend className="text-gray-500 text-lg px-3">Complementary Datasets</legend>
                        <input
                          required
                            type="text"
                            id="Complementary Datasets"
                            className="bg-transparent rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none"
                            value={complementaryDatasets}
                            onChange={(e) => setComplementaryDatasets(e.target.value)}
                        />
                    </fieldset>
                </div>

                {/* Responsive button section */}
                <div className="flex flex-col sm:flex-row items-center justify-evenly w-full space-y-4 sm:space-y-0 sm:space-x-4"> 
                    {/* Cancel button */}
                    <button
                        type="button"
                        className="w-full sm:w-auto font-bold py-2 px-6 rounded-[15px] focus:outline-none focus:shadow-outline border border-black transition duration-300 hover:bg-black hover:text-white"
                    >
                        Cancel
                    </button>

                    {/* Save button */}
                    <button
                        type="submit"
                        className="w-full sm:w-auto font-bold py-2 px-6 rounded-[15px] focus:outline-none focus:shadow-outline border border-black transition duration-300 hover:bg-black hover:text-white"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddStory;

