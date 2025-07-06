console.log("Worker C")
for (let i = 0; i < 100000000; i++) {
  if (i % 40000 == 0) {
    console.log(i);
  }
}
