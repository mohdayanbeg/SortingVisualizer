export const insertionSort = async (array, setArray, sleep) => {
    let arr = [...array];
    
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
  
      document.getElementsByClassName('array-bar')[i].style.backgroundColor = 'red'; 
      
     
      while (j >= 0 && arr[j] > current) {
        
        document.getElementsByClassName('array-bar')[j].style.backgroundColor = 'orange'; 
        
        arr[j + 1] = arr[j]; 
        setArray([...arr]);
        await sleep(100); 
        
        
        document.getElementsByClassName('array-bar')[j].style.backgroundColor = 'teal'; 
        j--;
      }
      
      arr[j + 1] = current;
      setArray([...arr]);
      await sleep(100); 
      
      
      document.getElementsByClassName('array-bar')[i].style.backgroundColor = 'green'; 
    }
    
    
    for (let i = 0; i < arr.length; i++) {
      document.getElementsByClassName('array-bar')[i].style.backgroundColor = 'green'; 
    }
  };
  