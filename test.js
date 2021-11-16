

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
//let cell6={
  //alive: true ,
  // neighbors: 1
//};




function simulateGeneration(cell){
  console.log(cell);
  

 if (cell.alive === false && cell.neighbors !==3){
 return false;
}
if(cell.neighbors === 2 || cell.neighbors ===3){
  return true;
}
return false;
}

  describe("Game Of life simulator", () => {
  it(" alive and has 3 neighbours", () => {
    const result = simulateGeneration(cell1);
    expect(result).toBe(true);
  });
  it(" alive and has 2 neighbours", () => {
    const result = simulateGeneration(cell2);
    expect(result).toBe(true);
  });
  it(" alive and has 4 neighbours", () => {
    const result = simulateGeneration(cell3);
    expect(result).toBe(true);
  });
  it(" dead and has 3 neighbours", () => {
    const result = simulateGeneration(cell4);
    expect(result).toBe(true);
  });
  it(" dead and has 4 neighbours", () => {
    const result = simulateGeneration(cell5);
    expect(result).toBe(false);
   });
 });

  
