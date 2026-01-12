import React from "react";
import { useLoader } from "@/context/LoaderContext";

const LoaderExample = () => {
  const { showLoader, hideLoader, withLoader } = useLoader();

  const handleSimpleLoader = () => {
    showLoader("Loading data...");
    setTimeout(() => {
      hideLoader();
    }, 2000);
  };

  const handleAsyncLoader = async () => {
    await withLoader(async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Async operation completed");
    }, "Processing your request...");
  };

  const handleApiCall = async () => {
    await withLoader(async () => {
      // Simulate API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
    }, "Fetching data...");
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-[#195B48]">Loader Examples</h2>

      <div className="space-y-2">
        <button
          onClick={handleSimpleLoader}
          className="bg-[#195B48] text-white px-4 py-2 rounded hover:bg-[#174a3a] transition-colors"
        >
          Simple Loader (2s)
        </button>
      </div>

      <div className="space-y-2">
        <button
          onClick={handleAsyncLoader}
          className="bg-[#195B48] text-white px-4 py-2 rounded hover:bg-[#174a3a] transition-colors"
        >
          Async Loader with Message
        </button>
      </div>

      <div className="space-y-2">
        <button
          onClick={handleApiCall}
          className="bg-[#195B48] text-white px-4 py-2 rounded hover:bg-[#174a3a] transition-colors"
        >
          Simulate API Call
        </button>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Usage Examples:</h3>
        <pre className="text-sm">
          {`// Simple loader
const { showLoader, hideLoader } = useLoader();
showLoader('Loading...');
// ... do something
hideLoader();

// Async loader with automatic hide
const { withLoader } = useLoader();
await withLoader(async () => {
  // Your async operation
}, 'Processing...');

// In components
import { useLoader } from '@/context/LoaderContext';
const { showLoader, hideLoader, withLoader } = useLoader();`}
        </pre>
      </div>
    </div>
  );
};

export default LoaderExample;
