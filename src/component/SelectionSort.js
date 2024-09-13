export const selectionSort = async (array, setArray, sleep) => {
    let arr = [...array];
  
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
  
      
      document.getElementsByClassName('array-bar')[minIndex].style.backgroundColor = 'red';
  
      for (let j = i + 1; j < arr.length; j++) {
        
        document.getElementsByClassName('array-bar')[j].style.backgroundColor = 'orange';
  
        await sleep(100); 
  
        if (arr[j] < arr[minIndex]) {
          
          document.getElementsByClassName('array-bar')[minIndex].style.backgroundColor = 'teal';
  
          
          minIndex = j;
  
          
          document.getElementsByClassName('array-bar')[minIndex].style.backgroundColor = 'red';
        } else {
          
          document.getElementsByClassName('array-bar')[j].style.backgroundColor = 'teal';
        }
      }
  
      
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]);
        await sleep(100); 
      }
  
      
      document.getElementsByClassName('array-bar')[i].style.backgroundColor = 'green';
  
      
      document.getElementsByClassName('array-bar')[minIndex].style.backgroundColor = 'teal';
    }
  
    
    document.getElementsByClassName('array-bar')[arr.length - 1].style.backgroundColor = 'green';
  };
  