import createRowItem from "../template/createRowItem.js";

const URL = "http://localhost:3003/tasks";

export async function list() {
  const response = await fetch(URL, {
    method: "GET",
  });

  const json = await response.json();
  return json.map(createRowItem);
}

export async function save(task) {
  await fetch(URL, {
    method: "POST",
    body: JSON.stringify(task),
  });
}

export async function edit(id, task) {
  await fetch(`${URL}?${new URLSearchParams({ id }).toString()}`, {
    method: "PUT",
    body: JSON.stringify(task),
  });
}

export async function remove(id) {
  await fetch(`${URL}?${new URLSearchParams({ id }).toString()}`, {
    method: "DELETE",
  });
}
