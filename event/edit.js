export const key = "edit";

function fn(detail) {
  const event = new CustomEvent(key, { detail });

  const FORM = document.forms.task;
  FORM.dispatchEvent(event);
};

window.events = {
  ...window.events,
  edit: {
    key,
    fn,
  },
};

export default fn;
