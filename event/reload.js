export const key = "reload";

function fn() {
  const event = new Event(key);

  const CONTENT = document.getElementById("content");
  CONTENT.dispatchEvent(event);
};

window.events = {
  ...window.events,
  reload: {
    key,
    fn,
  },
};

export default fn;
