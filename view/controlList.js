import { list } from "../service/api.js";

const CONTENT = document.getElementById("content");
CONTENT.addEventListener(window.events.reload.key, async function() {
  const tasks = await list();

  while (CONTENT.firstChild) {
    CONTENT.removeChild(CONTENT.firstChild);
  }

  CONTENT.append(...tasks);
});
