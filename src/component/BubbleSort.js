export const bubbleSort =  async(array, setArray, sleep) => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          document.getElementsByClassName('array-bar')[j].style.backgroundColor = 'red';
          document.getElementsByClassName('array-bar')[j + 1].style.backgroundColor = 'red';

          setArray([...arr]);
          await sleep(100);

          document.getElementsByClassName('array-bar')[j].style.backgroundColor = 'teal';
        document.getElementsByClassName('array-bar')[j + 1].style.backgroundColor = 'teal';

        }
      }
    }
  };
  