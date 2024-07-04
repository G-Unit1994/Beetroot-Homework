document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('myTable');
    const headers = table.querySelectorAll('th');
    headers.forEach((header, index) => {
        header.addEventListener('click', () => {
            sortTableByColumn(table, index);
        });
    });
});

function sortTableByColumn(table, columnIndex) {
    const rowsArray = Array.from(table.tBodies[0].rows);
    const isNumericColumn = !isNaN(rowsArray[0].cells[columnIndex].innerText);

    rowsArray.sort((a, b) => {
        const cellA = a.cells[columnIndex].innerText;
        const cellB = b.cells[columnIndex].innerText;

        if (isNumericColumn) {
            return Number(cellA) - Number(cellB);
        } else {
            return cellA.localeCompare(cellB);
        }
    });

    table.tBodies[0].append(...rowsArray);
}