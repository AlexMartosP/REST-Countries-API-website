function searchInRegion(search, data) {
  const lowerSearch = search.toLowerCase();

  const filteredData = data.filter((country) => {
    let lowerName = country.name.toLowerCase();
    return lowerName.includes(lowerSearch);
  });

  return filteredData;
}

export default searchInRegion;
