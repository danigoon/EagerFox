function kaliTerusRekursif(angka) {
    // you can only write your code here!
	if (angka < 10) {
	   return angka;
	}
	var hasil = kaliTerusRekursif( angka % 10 * kaliTerusRekursif(Math.floor(angka / 10)))
	return hasil
  }

  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
