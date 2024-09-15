import React, { useState, useEffect } from "react";
import "./Visualizer.css";
import { bubbleSort } from "./BubbleSort";
import { mergeSort } from "./MergeSort";
import { insertionSort } from "./InsertionSort";
import { selectionSort } from "./SelectionSort";
import { quickSort } from "./QuikSort";
import SortInfo from "./SortInfo";

const Visualizer = () => {
  const [arrlength, setarrlength] = useState(20);
  const [array, setArray] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [maxarrlength, setMaxarrlength] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMaxarrlength(20); // Max array length for mobile view
      } else {
        setMaxarrlength(100); // Default for larger screens
      }
    };

    // Call once on component mount
    handleResize();

    // Add event listener for screen resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    resetArray();
  }, [arrlength]);

  // Generate a random array
  const resetArray = () => {
    const arr = Array.from({ length: arrlength }, () =>
      Math.floor(Math.random() * 400)
    );
    setArray(arr);
    const arrayBars = document.getElementsByClassName('array-bar');
  for (let i = 0; i < arrayBars.length; i++) {
    arrayBars[i].style.backgroundColor = 'teal';}

    
  };
  

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleSortAndShowInfo = (algorithm) => {
    setSelectedAlgorithm(algorithm);
    switch (algorithm) {
      case "bubbleSort":
        bubbleSort(array, setArray, sleep);
        break;
      case "quickSort":
        quickSort(array, setArray, sleep);
        break;
      case "selectionSort":
        selectionSort(array, setArray, sleep);
        break;
      case "insertionSort":
        insertionSort(array, setArray, sleep);
        break;
      case "mergeSort":
        mergeSort(array, setArray, sleep);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="head font-extrabold text-5xl text-white">
        Sorting-Visualizer
      </div>
      <div>
        <div className="array-container border-2 border-black m-2 pt-8 bg-black">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
        <div className="flex flex-col items-center mb-6">
          <form className="w-full max-w-md mt-4">
            <label htmlFor="length" className="block text-white text-lg mb-2">
              Array Length: {arrlength}
            </label>
            <input
              type="range"
              name="length"
              id="length"
              min="5"
              max={maxarrlength}
              value={arrlength}
              onChange={(e) => setarrlength(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer
                     sm:min-w-[100px] sm:max-w-[400px]
                     md:min-w-[200px] md:max-w-[500px]"
              style={{
                background: `linear-gradient(to right, #4a90e2 ${
                  ((arrlength - 5) / (maxarrlength - 5)) * 100
                }%, #ddd ${((arrlength - 5) / (maxarrlength - 5)) * 100}%)`,
              }}
            />
          </form>
        </div>
      </div>

      <div>
        <button
          className="rounded-none bg-pink-400 hover:rounded-lg hover:bg-pink-600 m-2 p-2"
          onClick={resetArray}
        >
          Generate New Array
        </button>
      </div>

      <div>
        <button
          className="rounded-none bg-cyan-400 hover:rounded-lg hover:bg-cyan-600 m-2 p-2"
          onClick={() => handleSortAndShowInfo("bubbleSort")}
        >
          Bubble Sort
        </button>
        <button
          className="rounded-none bg-cyan-400 hover:rounded-lg hover:bg-cyan-600 m-2 p-2"
          onClick={() => handleSortAndShowInfo("insertionSort")}
        >
          Insertion Sort
        </button>
        <button
          className="rounded-none bg-cyan-400 hover:rounded-lg hover:bg-cyan-600 m-2 p-2"
          onClick={() => handleSortAndShowInfo("selectionSort")}
        >
          Selection Sort
        </button>
        <button
          className="rounded-none bg-cyan-400 hover:rounded-lg hover:bg-cyan-600 m-2 p-2"
          onClick={() => handleSortAndShowInfo("mergeSort")}
        >
          Merge Sort
        </button>
        <button
          className="rounded-none bg-cyan-400 hover:rounded-lg hover:bg-cyan-600 m-2 p-2"
          onClick={() => handleSortAndShowInfo("quickSort")}
        >
          Quick Sort
        </button>
      </div>

      <div className={`sort-info ${selectedAlgorithm ? "show" : ""}`}>
        <SortInfo algorithm={selectedAlgorithm} />
      </div>
    </>
  );
};

export default Visualizer;
