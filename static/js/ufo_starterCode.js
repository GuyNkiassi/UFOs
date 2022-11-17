let filters = ['datetime', 'city', 'state', 'country', 'shape']

buildTable(data);
d3.selectAll('input').on('change', updateFilters);
d3.select('button').on('click', () => {
  d3.selectAll('input').property('value', '')
  updateFilters();
});

function buildTable(data) {
  d3.select("tbody").html("");
  data.forEach((dataRow) => {
    let row = d3.select("tbody").append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
};

function updateFilters() {
  let filteredData = data;

  filters.forEach(id => {
    let selection = d3.select(`input#${id}`).node().value;
    if (selection) filteredData = filteredData.filter(obj => obj[id] == selection)
  });

  buildTable(filteredData)
}
