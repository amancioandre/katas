/* In genetic algorithms, crossover is a genetic operator used to vary the programming of chromosomes from one generation to the next.

The one-point crossover consists in swapping one's cromosome part with another in a specific given point. The image bellow shows the crossover being applied on chromosomes 1011011001111 and 1011100100110 with the cut point (index) 4:



In this kata you have to implement a function crossover that receives two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return an array with the crossover result on both chromosomes [chromosome1, chromosome2].

Example:
crossover('111000', '000110', 3) should return ['111110', 000000']

See other katas from this series
Genetic Algorithm Series - #1 Generate
Genetic Algorithm Series - #2 Mutation
Genetic Algorithm Series - #3 Crossover
Genetic Algorithm Series - #4 Get population and fitnesses
Genetic Algorithm Series - #5 Roulette wheel selection
This kata is a piece of  2 kyu Binary Genetic Algorithm */

// https://www.codewars.com/kata/genetic-algorithm-series-number-3-crossover

const crossover = (chromosome1, chromosome2, index) => {
  chromosome1 = chromosome1.split('');
  chromosome2 = chromosome2.split('');
  let cross1 = chromosome1.splice(index);
  let cross2 = chromosome2.splice(index);

  return [chromosome1.concat(cross2).join(''), chromosome2.concat(cross1).join('')]
};

console.log(crossover('111000', '000110', 3))

/* Refactor */
const crossover = (chromosome1, chromosome2, index) => {
  return [
    chromosome1.substring(0, index) + chromosome2.substring(index),
    chromosome2.substring(0, index) + chromosome1.substring(index)
  ]
};