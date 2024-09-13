import React, { useState, useEffect } from "react";
import "./Visualizer.css";
import { bubbleSort } from "./BubbleSort";
import { mergeSort } from "./MergeSort";
import { insertionSort } from "./InsertionSort";
import { selectionSort } from "./SelectionSort";
import { quickSort } from "./QuikSort";
import SortInfo from "./SortInfo";

const Visualizer = () => {
  const [array, setArray] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  useEffect(() => {
    resetArray();
  }, []);

  // Generate a random array
  const resetArray = () => {
    const arr = Array.from({ length: 50 }, () =>
      Math.floor(Math.random() * 400)
    );
    setArray(arr);
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
      <div className="array-container border-2 border-black m-2 pt-8 bg-black">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
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
