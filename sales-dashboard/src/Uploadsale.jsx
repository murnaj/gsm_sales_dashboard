import React from 'react'
import  { useState } from 'react'



const Uploadsale = () => {

  const [selectedFile, setSelectedFile] = useState(null);
const [uploadProgress, setUploadProgress] = useState(0);
const [uploadSuccess, setUploadSuccess] = useState(false);

const handleFileChange = (event) => {
  setSelectedFile(event.target.files[0]);
  setUploadProgress(0);
  setUploadSuccess(false);
};

const handleFileUpload = () => {
  if (!selectedFile) return;

  // Simulating file upload with a fake progress
  const fakeUpload = setInterval(() => {
    setUploadProgress((prevProgress) => {
      if (prevProgress >= 100) {
        clearInterval(fakeUpload);
        setUploadSuccess(true);
      }
      return Math.min(prevProgress + 10, 100);
    });
  }, 300);
};

  return (
    <div className='size-100 w-90 mt-15 mb-15 p-8  justify-center dark:bg-gradient-to-r
    from-blue-900 to-purple-900 border border-slate-400 rounded-md 
flex-grow  flex-col items-center  max-w-7xl mx-auto px-4 md:px-6 lg:px-8 overscroll-y-none'>
        <img  className=' items-center w-20 ml-25 p-2 ' src='https://flowbite.com/docs/images/logo.svg' alt='Dashboard Logo'/>

    <div className='text-4xl  text-blue-500 text-center'>Upload Sale</div>

    <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
          onChange={handleFileChange}
        />

        {selectedFile && (
          <div className="mt-4">
            <button
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
              onClick={handleFileUpload}
            >
              Upload File
            </button>
          </div>
        )}

        {uploadProgress > 0 && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="bg-blue-500 text-xs font-medium text-center text-white p-0.5 leading-none rounded-full"
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress}%
              </div>
            </div>
          </div>
        )}

        {uploadSuccess && (
          <div className="mt-4 flex items-center justify-center text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="ml-2">Upload Successful!</span>
          </div>
        )}


    </div>
  )
}

export default Uploadsale