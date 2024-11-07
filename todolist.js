let toDo = [{ name: "hool idne", status: "none" }];
function addOne(addToDo) {
  toDo.push(addToDo);
}
function changeName() {
  let item = toDo[0];
  item.name = "Hool idmeer bn";
}
function changeStatus() {
  let item2 = toDo[1];
  item2.status = "Idyoo";
}
function deleteOne(indextoremove) {
  let hide = [];
  for (i = 0; i < toDo.length; i++) {
    if (i !== indextoremove) {
      hide.push(toDo[i]);
    }
  }
  console.log(hide);
}

addOne({ name: "Delguur garna", status: "done" });
addOne({ name: "javascript sudlah", status: "done" });
changeName();
changeStatus();
deleteOne(0);
