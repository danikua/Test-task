document.addEventListener("DOMContentLoaded", function () {
  // Get references to the main and sidebar elements
  const main = document.querySelector(".main");
  const sidebar = document.querySelector(".sidebar");
  const tableRows = document.querySelectorAll(".customers-table__row");

  // Add the 'show' class to trigger the animations
  main.classList.add("show");
  sidebar.classList.add("show");

  tableRows.forEach((row) => {
    row.classList.add("show");
  });
});
