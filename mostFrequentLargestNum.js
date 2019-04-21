function sorting(arrNumber) {
    // code di sini
    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = 0; j < arrNumber.length; j++) {
            if (arrNumber[i] > arrNumber[j]) {
                temp = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }
    }
    var hasil = arrNumber;
    return hasil;
    
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var sortedNum = arrNumber;
    var counter = 0;
    var hN = sortedNum[0];

    if (sortedNum.length == 0) {
        return '\'\'';
    }
    for (var j = 0; j < sortedNum.length; j++) {
        if (sortedNum[j] == hN) {
            counter++;
        }
    }
    
    return 'angka paling besar adalah ' + hN + ' dan jumlahnya kemunculannya sebanyak ' + counter + ' kali.';
    
  }
  
//   console.log(getTotal(sorting([1,5,4,89,0,7])))
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''