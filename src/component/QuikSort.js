export const quickSort = async (array, setArray, sleep) => {
    let arr = [...array];
  
    const partition = async (low, high) => {
      let pivot = arr[high];
      let i = low - 1;
  
      
      document.getElementsByClassName('array-bar')[high].style.backgroundColor = 'red';
  
      for (let j = low; j < high; j++) {
        
        document.getElementsByClassName('array-bar')[j].style.backgroundColor = 'orange';
  
        await sleep(100); 
  
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]]; 
          setArray([...arr]);
  
          
          document.getElementsByClassName('array-bar')[i].style.backgroundColor = 'teal';
          document.getElementsByClassName('array-bar')[j].style.backgroundColor = 'teal';
        } else {
          document.getElementsByClassName('array-bar')[j].style.backgroundColor = 'teal';
        }
      }
  
      
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
  
      
      document.getElementsByClassName('array-bar')[high].style.backgroundColor = 'teal';
      document.getElementsByClassName('array-bar')[i + 1].style.backgroundColor = 'green';
  
      return i + 1;
    };
  
    const quickSortRecursive = async (low, high) => {
      if (low < high) {
        let pi = await partition(low, high);
        await quickSortRecursive(low, pi - 1);
        await quickSortRecursive(pi + 1, high);
      } else if (low === high) {
        document.getElementsByClassName('array-bar')[low].style.backgroundColor = 'green'; 
      }
    };
  
    await quickSortRecursive(0, arr.length - 1);
  
    
    for (let i = 0; i < arr.length; i++) {
      document.getElementsByClassName('array-bar')[i].style.backgroundColor = 'green';
    }
  };
  