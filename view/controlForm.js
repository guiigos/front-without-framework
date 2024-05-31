import { save, edit, remove } from "../service/api.js";
import Load from "../event/reload.js";

const ATTRIBUTE = "_id";

const FORM = document.forms.task;
FORM.addEventListener("submit", async function(event) {
  event.preventDefault();

  const task = {
    name: FORM.name.value,
    description: FORM.description.value,
  };

  if (FORM.hasAttribute(ATTRIBUTE)) {
    await edit(FORM.getAttribute(ATTRIBUTE), task)
    FORM.removeAttribute(ATTRIBUTE);
  } else {
    await save(task);
  }

  FORM.reset();
  Load();
});

FORM.addEventListener(window.events.remove.key, async function(event) {
  await remove(event.detail);
  window.events.reload.fn();
});

FORM.addEventListener(window.events.edit.key, function(event) {
  FORM.name.value = event.detail.name;
  FORM.description.value = event.detail.description;
  FORM.setAttribute(ATTRIBUTE, event.detail._id);
});
