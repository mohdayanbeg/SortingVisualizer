export const mergeSort = async (array, setArray, sleep) => {
    const merge = async (arr, start, end) => {
      if (start === end) return [arr[start]];
  
      const mid = Math.floor((start + end) / 2);
  
      
      for (let i = start; i <= mid; i++) {
        document.getElementsByClassName('array-bar')[i].style.backgroundColor = 'blue'; 
      }
  
      
      for (let i = mid + 1; i <= end; i++) {
        document.getElementsByClassName('array-bar')[i].style.backgroundColor = 'purple'; 
      }
  
      await sleep(500); 
  
      const left = await merge(arr, start, mid);
      const right = await merge(arr, mid + 1, end);
  
      
      return await mergeArrays(left, right, start, end);
    };
  
    const mergeArrays = async (left, right, start, end) => {
      let i = 0, j = 0, k = start;
      let sortedArray = [];
  
      
      for (let idx = start; idx <= end; idx++) {
        document.getElementsByClassName('array-bar')[idx].style.backgroundColor = 'orange'; 
      }
  
      while (i < left.length && j < right.length) {
        document.getElementsByClassName('array-bar')[k].style.backgroundColor = 'red'; 
  
        if (left[i] < right[j]) {
          array[k] = left[i];
          sortedArray.push(left[i]);
          i++;
        } else {
          array[k] = right[j];
          sortedArray.push(right[j]);
          j++;
        }
  
        setArray([...array]);
        await sleep(100); 
        document.getElementsByClassName('array-bar')[k].style.backgroundColor = 'teal'; 
        k++;
      }
  
      while (i < left.length) {
        document.getElementsByClassName('array-bar')[k].style.backgroundColor = 'red'; 
        array[k] = left[i];
        sortedArray.push(left[i]);
        i++;
        setArray([...array]);
        await sleep(100);
        document.getElementsByClassName('array-bar')[k].style.backgroundColor = 'teal'; 
        k++;
      }
  
      while (j < right.length) {
        document.getElementsByClassName('array-bar')[k].style.backgroundColor = 'red'; 
        array[k] = right[j];
        sortedArray.push(right[j]);
        j++;
        setArray([...array]);
        await sleep(100);
        document.getElementsByClassName('array-bar')[k].style.backgroundColor = 'teal'; 
        k++;
      }
  
      
      for (let idx = start; idx <= end; idx++) {
        document.getElementsByClassName('array-bar')[idx].style.backgroundColor = 'green'; 
      }
  
      return sortedArray;
    };
  
    const sorted = await merge(array, 0, array.length - 1);
    setArray([...sorted]);
  };
  