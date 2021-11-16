//1. Any live cell with fewer than two live neighbours dies as if by under population.
//2. Any live cell with more than three live neighbours dies, as if by overcrowding.
//3. Any live cell with two or three live neighbours lives on to the next generation.
//4. Any dead cell with exactly three live neighbours becomes a live cell.
let cell1 ={
  alive: true ,
   neighbors: 3
};
let cell2 ={
  alive: true , 
  neighbors: 2
};
let cell3 ={
  alive: false,
   neighbors: 3
};
let cell4 ={
  alive: true ,
   neighbors: 3
};
let cell5 ={
  alive: true , 
  neighbors: 4
};
let cell6={
  alive: true ,
   neighbors: 1
};




function simulateGeneration(cell) {
  console.log(cell)
  return false;
 // let numberFound = false;
  //password.split("").map((i) => {
    //if (!isNaN(i)) {
      //numberFound = true;
    //}
  //});
  //if (
    //password.length <= 8 ||
   // password.toUpperCase() === password ||
   // password.toLowerCase() === password ||
    //!numberFound
  //) {
    //return false;
  //}
  //return true;
}


describe("Game Of life simulator", () => {
  it("starts as alive and has 3 neighbours", () => {
    const result = simulateGeneration(cell);
    expect(result).toBe(true);
  });
  //it("is 9 characters, no numbers, it fails", () => {
    //const result = passVerifier("abcdefghj");
    //expect(result).toBe(false);
  //});
  //it("is 9 characters, has numbers, no uppercase, it fails", () => {
    //const result = passVerifier("abcdefghj0");
    //expect(result).toBe(false);
  //});
  //it("is 9 characters, has numbers, no lowercase, it fails", () => {
    //const result = passVerifier("ASDFGHJKL0");
    //expect(result).toBe(false);
  //});
  //it("is 9 characters, has numbers, has upper, has lower, it pass", () => {
    //const result = passVerifier("ASDkGHJKL0");
    //expect(result).toBe(true);
  //});
});
