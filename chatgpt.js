function bodlogoHomeWork(Number, Number1) {
  let urjver = 0;
  urjver = Number * Number1;
  console.log(urjver);
  return urjver;
}

bodlogoHomeWork(10, 20);

function checkPositiveOrNegative(number) {
  if (number > 0) {
    console.log("Эерэг");
  } else {
    console.log("Сөрөг");
  }
}

checkPositiveOrNegative(10);

function calculateAverage(arr) {
  let value = 0,
    a = 0;
  for (i = 0; i < arr.length; i++) {
    value = value + arr[i];
    a = value / arr.length;
  }
  console.log(a);
}

calculateAverage([20, 10, 10, 10]);

function checkAgeCategory(age) {
  if (age < 30) {
    console.log("gen z");
  } else if (age < 60) {
    console.log("gen y");
  } else console.log("gen old");
}

checkAgeCategory(25);

function findMinMax(dundaj) {
  let max = 0,
    min = 0;
  for (i = 0; i < dundaj.length; i++) {
    max = max + dundaj[i];
    if ((dundaj[i] = max)) {
      max = max > dundaj[i];
      console.log(max);
    } else {
      console.log(min);
    }
  }
}

findMinMax([10, 20, 30, 40]);
