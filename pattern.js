const TOTAL_ROWS = 6;

for (let i = 1; i <= TOTAL_ROWS; i++) {

  let value = i % 2 === 1 ? 1 : 0;
  let line = "";

  for (let j = 1; j <= i; j++) {

    line += value + " ";
    value = value === 1 ? 0 : 1;

  }

  console.log(line.trimEnd());
}
