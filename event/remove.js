export const key = "remove";

function fn(detail) {
  const event = new CustomEvent(key, { detail });

  const FORM = document.forms.task;
  FORM.dispatchEvent(event);
};

window.events = {
  ...window.events,
  remove: {
    key,
    fn,
  },
};

export default fn;
