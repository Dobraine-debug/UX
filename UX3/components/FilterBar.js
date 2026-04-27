import { ref } from "vue";

export default {
    emits: ["filter"],

    setup(_, { emit }) {

        const selectedWorker = ref("");
        const selectedPercent = ref("");

        function submit() {
            emit("filter", {
                worker: selectedWorker.value,
                percent: selectedPercent.value
            });
        }

        return {
            selectedWorker,
            selectedPercent,
            submit
        };
    },

    template: `
    <div>

        <div class="dropdown">

            <select v-model="selectedWorker">
                <option disabled value="">Välj yrke</option>
                <option>Målare</option>
                <option>Snickare</option>
                <option>Elektriker</option>
                <option>Rörmockare</option>
            </select>

            <button class="date-btn"><img src="images/Calendar.png">Välj datum</button>

            <select v-model="selectedPercent">
                <option disabled value="">Procent</option>
                <option value="100">100%</option>
                <option value="50">50%</option>
            </select>

            <button class="filter-btn" @click="submit">
                Filtrera
            </button>

        </div>

        <div class="legend">

            <div class="legend-row">
                <span class="box absent"></span>
                <span>100% Ledig</span>
            </div>

            <div class="legend-row">
                <span class="box booked_full"></span>
                <span>100% Bokad</span>
            </div>

            <div class="legend-row">
                <span class="box booked_half"></span>
                <span>50% Bokad</span>
            </div>

            <div class="legend-row">
                <span class="box absent cross">&#10005;</span>
                <span>Frånvaro</span>
            </div>

            <div class="legend-row">
                <span class="box prel_booked_full"></span>
                <span>Prel 100% bokad</span>
            </div>

            <div class="legend-row">
                <span class="box prel_booked_half"></span>
                <span>Prel 50% bokad</span>
            </div>

        </div>

    </div>
    `
}