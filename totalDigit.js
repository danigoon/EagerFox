function totalDigitRekursif(angka) {
    // you can only write your code here!
    str = angka + '';
    if (str.length == 0) {
        return 0;
    }
    // console.log(str);
    
    return  Number(str[0]) + totalDigitRekursif(str.slice(1));
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5