export default (task) => {
  const text = document.createElement("p");
  text.innerText = `${task.name} (${task.description})`;

  const btnEdit = document.createElement("button");
  btnEdit.innerText = "Edit";
  btnEdit.onclick = function () {
    window.events.edit.fn(task);
  }

  const btnRemove = document.createElement("button");
  btnRemove.innerText = "Remove";
  btnRemove.onclick = function () {
    window.events.remove.fn(task._id);
  }

  const actions = document.createElement("div");
  actions.classList.add("actions");
  actions.append(btnEdit, btnRemove);

  const wrapper = document.createElement("div");
  wrapper.classList.add("row");
  wrapper.append(text, actions);

  return wrapper;
};
