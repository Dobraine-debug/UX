import { createApp } from "vue"
import { useMyData } from "./data/myData.js"
import cell from "./components/cell.js";
import row from "./components/row.js";
import column from "./components/column.js";
import names from "./components/names.js";
import week from "./components/week.js";
import FilterBar from "./components/FilterBar.js";

const app = {
        setup() {
                const data = useMyData()

                function showContent() {
                        data.show.value = true;

                }

                function nextPage() {
                        if (data.page.value === 4) return;

                        data.page.value++;
                        data.firstWeek.value += 4;
                        data.secondWeek.value += 4;
                        data.thirdWeek.value += 4;
                        data.fourthWeek.value += 4;

                }
                function lastPage() {
                        if (data.page.value === 1) return;

                        data.page.value--;
                        data.firstWeek.value -= 4;
                        data.secondWeek.value -= 4;
                        data.thirdWeek.value -= 4;
                        data.fourthWeek.value -= 4;
                }

                function handleFilter() {
                        data.show.value = true;
                }

                return {
                        ...data,
                        showContent,
                        nextPage,
                        lastPage,
                        handleFilter
                }
        }
}
const vueApp = createApp(app)

vueApp.component("column", column);
vueApp.component("names", names);
vueApp.component("week", week);
vueApp.component("filter-bar", FilterBar);

// put component here when instructed


vueApp.mount("#app")