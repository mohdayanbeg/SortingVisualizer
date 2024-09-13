import React from "react";
import "./SortInfo.css";
const SortInfo = ({ algorithm }) => {
  return (
    <div className="sort-info">
        <h1>What is Sorting?</h1>
        <p>Sorting is the process of arranging items in a particular order. In the context of algorithms and computer science, sorting usually refers to ordering elements in an array or list. The most common sorting orders are:</p>
        <ul>
            <li><strong>Ascending Order:</strong> From smallest to largest (e.g., numbers from 1 to 10 or alphabetical order A to Z).</li>
            <li><strong>Descending Order:</strong> From largest to smallest (e.g., numbers from 10 to 1 or alphabetical order Z to A).</li>
        </ul>
        <p>Sorting is essential for various tasks such as:</p>
        <ul>
            <li><strong>Organizing Data:</strong> Making it easier to search, analyze, and present information.</li>
            <li><strong>Improving Efficiency:</strong> Sorted data can be processed more efficiently by algorithms, improving overall performance in data retrieval and management.</li>
        </ul>
        <p>In computer science, sorting is implemented using various algorithms, each with different techniques and efficiencies for arranging the data.</p>

      {algorithm === "bubbleSort" && (
        <div>
          <h1>Bubble Sort Information</h1>

          <h3>Description:</h3>
          <p>
            Bubble Sort is a simple, comparison-based sorting algorithm where
            each pair of adjacent elements is compared, and they are swapped if
            they are in the wrong order. The process is repeated until no more
            swaps are needed, which means the list is sorted. The largest
            unsorted element "bubbles" to the end of the array with each
            iteration.
          </p>

          <h3>Key Points:</h3>
          <p>
            <strong>Time Complexity:</strong>
          </p>
          <ul>
            <li>
              <strong>Best Case:</strong> O(n) (when the array is already
              sorted)
            </li>
            <li>
              <strong>Average Case:</strong> O(n²)
            </li>
            <li>
              <strong>Worst Case:</strong> O(n²) (when the array is sorted in
              reverse)
            </li>
            <li>
              <strong>Space Complexity:</strong> O(1) (in-place sorting)
            </li>
          </ul>

          <p>
            <strong>Stable Sort:</strong> Yes (does not change the relative
            order of equal elements)
          </p>
          <p>
            <strong>Adaptive:</strong> No (doesn't take advantage of the
            existing order of the elements)
          </p>

          <h3>Practical Use:</h3>
          <ul>
            <li>
              Rarely used in practice due to its inefficiency on large datasets.
            </li>
            <li>
              Suitable for small datasets or for educational purposes due to its
              simplicity.
            </li>
          </ul>

          <h3>Algorithm Steps:</h3>
          <ol>
            <li>Compare the first and second elements of the array.</li>
            <li>If the first element is greater than the second, swap them.</li>
            <li>
              Move to the next pair of elements (second and third), and repeat
              the process.
            </li>
            <li>Continue this process for the entire array.</li>
            <li>
              At the end of one pass, the largest element will have moved to the
              last position.
            </li>
            <li>
              Repeat the process for the remaining unsorted part of the array
              until the entire array is sorted.
            </li>
          </ol>

          <h3>Example:</h3>
          <p>
            Given an array <code>[5, 1, 4, 2, 8]</code>, the algorithm proceeds
            as follows:
          </p>

          <h4>First pass:</h4>
          <ul>
            <li>
              Compare 5 and 1 → Swap → <code>[1, 5, 4, 2, 8]</code>
            </li>
            <li>
              Compare 5 and 4 → Swap → <code>[1, 4, 5, 2, 8]</code>
            </li>
            <li>
              Compare 5 and 2 → Swap → <code>[1, 4, 2, 5, 8]</code>
            </li>
            <li>
              Compare 5 and 8 → No Swap → <code>[1, 4, 2, 5, 8]</code>
            </li>
            <li>Largest element (8) is at the correct position now.</li>
          </ul>

          <h4>Second pass:</h4>
          <ul>
            <li>
              Compare 1 and 4 → No Swap → <code>[1, 4, 2, 5, 8]</code>
            </li>
            <li>
              Compare 4 and 2 → Swap → <code>[1, 2, 4, 5, 8]</code>
            </li>
            <li>
              Compare 4 and 5 → No Swap → <code>[1, 2, 4, 5, 8]</code>
            </li>
            <li>Now 5 is also in its correct position.</li>
          </ul>

          <p>Repeat until the entire array is sorted.</p>

          {/* Add other algorithms' information conditionally here */}
        </div>
      )}

      {algorithm === "insertionSort" && (
        <div>
          <h1>Insertion Sort Information</h1>

          <h3>Description:</h3>
          <p>
            Insertion Sort is a simple sorting algorithm that builds the final
            sorted array one element at a time. It works similarly to how we
            sort playing cards in our hands. The array is virtually split into a
            sorted and unsorted part, and values from the unsorted part are
            picked and placed at the correct position in the sorted part.
          </p>

          <h3>Key Points:</h3>
          <p>
            <strong>Time Complexity:</strong>
          </p>
          <ul>
            <li>
              <strong>Best Case:</strong> O(n) (when the array is already
              sorted)
            </li>
            <li>
              <strong>Average Case:</strong> O(n²)
            </li>
            <li>
              <strong>Worst Case:</strong> O(n²) (when the array is sorted in
              reverse)
            </li>
            <li>
              <strong>Space Complexity:</strong> O(1) (in-place sorting)
            </li>
          </ul>

          <p>
            <strong>Stable Sort:</strong> Yes (it maintains the relative order
            of equal elements)
          </p>
          <p>
            <strong>Adaptive:</strong> Yes (efficient for data sets that are
            already partially sorted)
          </p>

          <h3>Practical Use:</h3>
          <ul>
            <li>Efficient for small data sets and nearly sorted data.</li>
            <li>Used in hybrid algorithms such as Timsort.</li>
          </ul>

          <h3>Algorithm Steps:</h3>
          <ol>
            <li>
              Start from the second element (element at index 1) and compare it
              with the first element.
            </li>
            <li>
              If the second element is smaller, move it to the first position.
            </li>
            <li>
              Proceed to the next element and compare it with the elements on
              its left. Shift larger elements one position to the right to make
              space for the smaller element.
            </li>
            <li>Repeat the process until the entire array is sorted.</li>
          </ol>

          <h3>Example:</h3>
          <p>
            Given an array <code>[5, 2, 4, 6, 1, 3]</code>, the algorithm
            proceeds as follows:
          </p>

          <h4>First step:</h4>
          <ul>
            <li>
              Compare 5 and 2 → Swap → <code>[2, 5, 4, 6, 1, 3]</code>
            </li>
          </ul>

          <h4>Second step:</h4>
          <ul>
            <li>
              Compare 5 and 4 → Swap → <code>[2, 4, 5, 6, 1, 3]</code>
            </li>
          </ul>

          <h4>Third step:</h4>
          <ul>
            <li>6 is already in the correct position.</li>
          </ul>

          <h4>Fourth step:</h4>
          <ul>
            <li>
              Compare 6 and 1 → Swap → <code>[2, 4, 5, 1, 6, 3]</code>
            </li>
            <li>
              Compare 5 and 1 → Swap → <code>[2, 4, 1, 5, 6, 3]</code>
            </li>
            <li>
              Compare 4 and 1 → Swap → <code>[2, 1, 4, 5, 6, 3]</code>
            </li>
            <li>
              Compare 2 and 1 → Swap → <code>[1, 2, 4, 5, 6, 3]</code>
            </li>
          </ul>

          <h4>Final step:</h4>
          <ul>
            <li>
              Compare 6 and 3 → Swap → <code>[1, 2, 4, 5, 3, 6]</code>
            </li>
            <li>
              Compare 5 and 3 → Swap → <code>[1, 2, 4, 3, 5, 6]</code>
            </li>
            <li>
              Compare 4 and 3 → Swap → <code>[1, 2, 3, 4, 5, 6]</code>
            </li>
          </ul>

          <p>
            Now the array is sorted: <code>[1, 2, 3, 4, 5, 6]</code>
          </p>
        </div>
      )}

      {algorithm === "selectionSort" && (
        <div>
          <h1>Selection Sort Information</h1>

          <h3>Description:</h3>
          <p>
            Selection Sort is a simple, comparison-based sorting algorithm. It
            divides the input list into two parts: a sorted sublist of items
            (which is built up from left to right at the front of the list) and
            a sublist of the remaining unsorted items. The algorithm repeatedly
            selects the smallest (or largest, depending on the order) unsorted
            element and swaps it with the leftmost unsorted element, moving the
            boundary between sorted and unsorted parts.
          </p>

          <h3>Key Points:</h3>
          <p>
            <strong>Time Complexity:</strong>
          </p>
          <ul>
            <li>
              <strong>Best Case:</strong> O(n²)
            </li>
            <li>
              <strong>Average Case:</strong> O(n²)
            </li>
            <li>
              <strong>Worst Case:</strong> O(n²)
            </li>
            <li>
              <strong>Space Complexity:</strong> O(1) (in-place sorting)
            </li>
          </ul>

          <p>
            <strong>Stable Sort:</strong> No (it may change the relative order
            of equal elements)
          </p>
          <p>
            <strong>Adaptive:</strong> No (it does not take advantage of any
            existing order in the array)
          </p>

          <h3>Practical Use:</h3>
          <ul>
            <li>Simple but inefficient for large datasets.</li>
            <li>
              Useful for small datasets or when memory usage is a concern.
            </li>
          </ul>

          <h3>Algorithm Steps:</h3>
          <ol>
            <li>Start by selecting the first element as the minimum.</li>
            <li>
              Compare this element with the rest of the array to find the actual
              minimum element.
            </li>
            <li>Once found, swap the actual minimum with the first element.</li>
            <li>
              Move to the next element and repeat the process for the remaining
              unsorted part of the array.
            </li>
            <li>Continue until the array is sorted.</li>
          </ol>

          <h3>Example:</h3>
          <p>
            Given an array <code>[64, 25, 12, 22, 11]</code>, the algorithm
            proceeds as follows:
          </p>

          <h4>First step:</h4>
          <ul>
            <li>
              Find the minimum element (11) and swap it with the first element
              (64).
            </li>
            <li>
              Array becomes <code>[11, 25, 12, 22, 64]</code>.
            </li>
          </ul>

          <h4>Second step:</h4>
          <ul>
            <li>
              Find the next minimum element (12) and swap it with the second
              element (25).
            </li>
            <li>
              Array becomes <code>[11, 12, 25, 22, 64]</code>.
            </li>
          </ul>

          <h4>Third step:</h4>
          <ul>
            <li>
              Find the next minimum element (22) and swap it with the third
              element (25).
            </li>
            <li>
              Array becomes <code>[11, 12, 22, 25, 64]</code>.
            </li>
          </ul>

          <h4>Fourth step:</h4>
          <ul>
            <li>
              Since the remaining elements are already in order, no swap is
              needed.
            </li>
          </ul>

          <p>
            Now the array is sorted: <code>[11, 12, 22, 25, 64]</code>
          </p>
        </div>
      )}
      {algorithm === "mergeSort" && (
        <div>
          <h1>Merge Sort Information</h1>

          <h3>Description:</h3>
          <p>
            Merge Sort is an efficient, stable, and comparison-based sorting
            algorithm. It works on the principle of divide and conquer, where
            the array is recursively split into smaller sub-arrays, and these
            sub-arrays are sorted and merged to produce the final sorted array.
          </p>

          <h3>Key Points:</h3>
          <p>
            <strong>Time Complexity:</strong>
          </p>
          <ul>
            <li>
              <strong>Best Case:</strong> O(n log n)
            </li>
            <li>
              <strong>Average Case:</strong> O(n log n)
            </li>
            <li>
              <strong>Worst Case:</strong> O(n log n)
            </li>
            <li>
              <strong>Space Complexity:</strong> O(n) (due to the additional
              storage needed for merging)
            </li>
          </ul>

          <p>
            <strong>Stable Sort:</strong> Yes (it maintains the relative order
            of equal elements)
          </p>
          <p>
            <strong>Adaptive:</strong> No (it always performs O(n log n)
            operations regardless of the existing order of the elements)
          </p>

          <h3>Practical Use:</h3>
          <ul>
            <li>
              Widely used in external sorting (e.g., for large datasets that
              don't fit in memory).
            </li>
            <li>Efficient and stable for large data sets.</li>
          </ul>

          <h3>Algorithm Steps:</h3>
          <ol>
            <li>
              Divide the array into two halves until each sub-array contains a
              single element (base case of recursion).
            </li>
            <li>Recursively sort both halves.</li>
            <li>
              Merge the sorted halves back together to form a complete sorted
              array.
            </li>
          </ol>

          <h3>Example:</h3>
          <p>
            Given an array <code>[38, 27, 43, 3, 9, 82, 10]</code>, the
            algorithm proceeds as follows:
          </p>

          <h4>First step (splitting the array):</h4>
          <ul>
            <li>
              Split <code>[38, 27, 43, 3, 9, 82, 10]</code> into{" "}
              <code>[38, 27, 43]</code> and <code>[3, 9, 82, 10]</code>.
            </li>
            <li>
              Further split <code>[38, 27, 43]</code> into <code>[38]</code> and{" "}
              <code>[27, 43]</code>.
            </li>
            <li>
              Further split <code>[27, 43]</code> into <code>[27]</code> and{" "}
              <code>[43]</code>.
            </li>
            <li>
              Similarly, split <code>[3, 9, 82, 10]</code> into{" "}
              <code>[3, 9]</code> and <code>[82, 10]</code>, and so on.
            </li>
          </ul>

          <h4>Second step (merging the arrays):</h4>
          <ul>
            <li>
              Merge <code>[27]</code> and <code>[43]</code> into{" "}
              <code>[27, 43]</code>.
            </li>
            <li>
              Merge <code>[38]</code> and <code>[27, 43]</code> into{" "}
              <code>[27, 38, 43]</code>.
            </li>
            <li>
              Merge <code>[3]</code> and <code>[9]</code> into{" "}
              <code>[3, 9]</code>.
            </li>
            <li>
              Merge <code>[82]</code> and <code>[10]</code> into{" "}
              <code>[10, 82]</code>.
            </li>
            <li>
              Merge <code>[3, 9]</code> and <code>[10, 82]</code> into{" "}
              <code>[3, 9, 10, 82]</code>.
            </li>
          </ul>

          <h4>Final step (merge both sorted halves):</h4>
          <ul>
            <li>
              Merge <code>[27, 38, 43]</code> and <code>[3, 9, 10, 82]</code>{" "}
              into the fully sorted array{" "}
              <code>[3, 9, 10, 27, 38, 43, 82]</code>.
            </li>
          </ul>

          <p>
            Now the array is sorted: <code>[3, 9, 10, 27, 38, 43, 82]</code>
          </p>
        </div>
      )}

      {algorithm === "quickSort" && (
        <div>
          <h1>Quick Sort Information</h1>

          <h3>Description:</h3>
          <p>
            Quick Sort is an efficient, comparison-based sorting algorithm that
            uses the divide-and-conquer approach. It works by selecting a
            'pivot' element from the array and partitioning the other elements
            into two sub-arrays according to whether they are less than or
            greater than the pivot. The sub-arrays are then sorted recursively.
          </p>

          <h3>Key Points:</h3>
          <p>
            <strong>Time Complexity:</strong>
          </p>
          <ul>
            <li>
              <strong>Best Case:</strong> O(n log n) (when the pivot divides the
              array into two equal parts)
            </li>
            <li>
              <strong>Average Case:</strong> O(n log n)
            </li>
            <li>
              <strong>Worst Case:</strong> O(n²) (when the pivot is the smallest
              or largest element)
            </li>
            <li>
              <strong>Space Complexity:</strong> O(log n) (due to recursion
              stack)
            </li>
          </ul>

          <p>
            <strong>Stable Sort:</strong> No (it may change the relative order
            of equal elements)
          </p>
          <p>
            <strong>Adaptive:</strong> No (it does not take advantage of any
            existing order in the array)
          </p>

          <h3>Practical Use:</h3>
          <ul>
            <li>
              Widely used in practice due to its efficiency in average cases.
            </li>
            <li>Commonly used in many standard libraries for sorting.</li>
          </ul>

          <h3>Algorithm Steps:</h3>
          <ol>
            <li>Select a 'pivot' element from the array.</li>
            <li>
              Partition the array into two sub-arrays: elements less than the
              pivot and elements greater than the pivot.
            </li>
            <li>Recursively apply the same process to the two sub-arrays.</li>
            <li>
              Combine the sorted sub-arrays and the pivot to form the sorted
              array.
            </li>
          </ol>

          <h3>Example:</h3>
          <p>
            Given an array <code>[10, 7, 8, 9, 1, 5]</code>, the algorithm
            proceeds as follows:
          </p>

          <h4>First step (partitioning around a pivot):</h4>
          <ul>
            <li>Choose a pivot (e.g., 5).</li>
            <li>
              Partition the array into elements less than 5 and elements greater
              than 5.
            </li>
            <li>
              Array after partitioning: <code>[1, 5, 8, 9, 10, 7]</code> with 5
              as pivot.
            </li>
          </ul>

          <h4>Second step (recursively sort the sub-arrays):</h4>
          <ul>
            <li>
              Apply Quick Sort on the left sub-array <code>[1]</code> (already
              sorted).
            </li>
            <li>
              Apply Quick Sort on the right sub-array <code>[8, 9, 10, 7]</code>
              .
            </li>
          </ul>

          <h4>Third step (partitioning the right sub-array):</h4>
          <ul>
            <li>Choose a new pivot (e.g., 7) for the right sub-array.</li>
            <li>
              Partition the array into elements less than 7 and elements greater
              than 7.
            </li>
            <li>
              Array after partitioning: <code>[1, 5, 7, 9, 10, 8]</code> with 7
              as pivot.
            </li>
          </ul>

          <h4>Final step (recursively sort the remaining sub-arrays):</h4>
          <ul>
            <li>
              Apply Quick Sort on the left sub-array <code>[9, 10, 8]</code>.
            </li>
            <li>Partition and sort it until the entire array is sorted.</li>
          </ul>

          <p>
            Now the array is sorted: <code>[1, 5, 7, 8, 9, 10]</code>
          </p>
        </div>
      )}
    </div>
  );
};

export default SortInfo;
