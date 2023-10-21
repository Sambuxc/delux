import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

/**
 * Search Filter Menu
 */

document.querySelectorAll(".control-switch").forEach((elem) => {
  elem.addEventListener("click", function () {
    const elem__header = elem.parentElement;

    if (!elem__header.closest("[disabled]")) {
      // if element is not disabled

      // toggle state for the icon button and it's header element
      if (!elem.classList.contains("active")) {
        elem.classList.add("active");

        if (elem__header.classList.contains("search-filter-item__header")) {
          // if the parent element is the search-filter header set open state
          elem__header.classList.add("open");
        }
      } else {
        elem.classList.remove("active");
        elem__header.classList.remove("open"); // no need to if check, it won't remove if it doesn't exist anyway
      }
    }
  });
});
