function formatPopulation(population) {
  return new Intl.NumberFormat("en-US").format(population);
}

export default formatPopulation;
