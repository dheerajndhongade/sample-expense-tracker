function handleFormSubmit(e) {
  e.preventDefault();
  console.log("adfdgb");
  let amount = e.target.amount.value;
  let description = e.target.description.value;
  let category = e.target.category.value;
  let ulist = document.querySelector(".ulist");
  let list = document.createElement("li");

  let editButton = document.createElement("button");
  let deleteButton = document.createElement("button");
  list.textContent = `${amount}-${category}-${description}`;
  editButton.textContent = "Edit Expense";
  deleteButton.textContent = "Delete Expense";
  editButton.type = "button";
  deleteButton.type = "button";
  editButton.className = "edit-button";
  deleteButton.classList = "del-button";
  list.appendChild(deleteButton);
  list.appendChild(editButton);
  ulist.appendChild(list);
  let obj = {
    amount: amount,
    description: description,
    category: category,
  };
  localStorage.setItem(amount, JSON.stringify(obj));
  deleteButton.addEventListener("click", function (e) {
    valtodel = e.target.parentNode;
    console.log(valtodel);
    ulist.removeChild(valtodel);
    localStorage.removeItem(valtodel);
  });
  editButton.addEventListener("click", (e) => {
    let valToEdit = e.target.parentNode;
    let arr = valToEdit.textContent.split("-");
    console.log(arr);

    let details = JSON.parse(localStorage.getItem(amount, arr[0].trim()));

    ulist.removeChild(valToEdit);
    document.getElementById("amount").value = details.amount;
    document.getElementById("description").value = details.description;
    document.getElementById("category").value = details.category;
    localStorage.removeItem(arr[0]);
  });
  e.target.amount.value = "";
  e.target.description.value = "";
  e.target.category.value = "";
}
