import React, { useState } from 'react';

const Uploadsale = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadProgress(0);
    setUploadSuccess(false);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) return;
  
    setIsUploading(true);
  
    const formData = new FormData();
    formData.append("file", selectedFile);
  
    try {
      // Replace 'YOUR_API_URL' with your actual API endpoint
      const response = await fetch("http://172.16.16.140:9999/api/v1/sale/mnpUpload", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to upload file");
      }
  
      // Simulating file upload progress
      const fakeUpload = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(fakeUpload);
            setUploadSuccess(true);
            setIsUploading(false);
          }
          return Math.min(prevProgress + 10, 100);
        });
      }, 300);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("File upload failed. Please try again.");
      setIsUploading(false);
    }
  };

  return (
    <div className="relative">
      {isUploading && (
        <div
          className="fixed inset-0 z-50"
          style={{ cursor: 'none' }}
        ></div>
      )}

      <div
        className="size-100 w-90 mt-15 mb-15 p-8 justify-center dark:bg-gradient-to-r
        from-blue-900 to-purple-900 border border-slate-400 rounded-md 
        flex-grow flex-col items-center max-w-7xl mx-auto px-4 md:px-6 lg:px-8 overscroll-y-none"
      >
        <img
          className="items-center w-20 ml-25 p-2"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Dashboard Logo"
        />

        <div className="text-4xl text-blue-500 text-center">Upload Sale</div>

        <label
          className="block mb-2 text-2xl text-center font-bold mt-4 text-blue-500 dark:to-blue-500"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          className="block w-full text-sm dark:bg-gradient-to-r
        from-blue-900 to-purple-900 border border-slate-500 rounded-md  cursor-pointer "
          id="file_input"
          type="file"
          onChange={handleFileChange}
        />

        {selectedFile && (
          <div className="mt-4">
           
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
    </div>
  );
};

export default Uploadsale;
