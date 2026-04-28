import { ref } from "vue"

export function useMyData() {
    const show = ref(false);
    const page = ref(1);

    const firstWeek = ref(1);
    const secondWeek = ref(2);
    const thirdWeek = ref(3);
    const fourthWeek = ref(4);

    const selectedWorker = ref("");
    const selectedPercent = ref("");

    const workerOne = ref([
        ["booked_full", "prel_booked_full", "prel_booked_half", "booked_full", "booked_half"],
        ["absent", "booked_full", "booked_half", "booked_full", "booked_half"],
        ["booked_half", "booked_full", "booked_half", "booked_full", "booked_half"],
        ["available", "available", "booked_full", "booked_half", "absent"]
    ]);

    const workerTwo = ref([
        ["available", "booked_half", "booked_full", "available", "booked_half"],
        ["prel_booked_full", "booked_full", "absent", "booked_half", "available"],
        ["booked_full", "available", "available", "booked_half", "booked_full"],
        ["absent", "booked_full", "booked_half", "booked_full", "booked_half"]
    ]);

    const workerThree = ref([
        ["booked_full", "available", "booked_half", "booked_full", "available"],
        ["available", "available", "booked_full", "absent", "booked_half"],
        ["booked_half", "booked_full", "available", "available", "booked_full"],
        ["absent", "booked_half", "booked_full", "booked_half", "available"]
    ]);

    const workerFour = ref([
        ["available", "booked_full", "booked_half", "available", "booked_full"],
        ["booked_half", "available", "available", "booked_full", "absent"],
        ["booked_full", "booked_half", "booked_full", "available", "booked_half"],
        ["available", "absent", "booked_half", "booked_full", "booked_full"]
    ]);

    const workerFive = ref([
        ["booked_full", "booked_half", "available", "booked_full", "available"],
        ["available", "booked_full", "absent", "booked_half", "booked_full"],
        ["booked_half", "available", "booked_full", "available", "booked_half"],
        ["booked_full", "booked_half", "booked_half", "booked_full", "available"]
    ]);


    const names = ref([
        "(Mu) Johan Andersson",
        "(Må) Erik Johansson",
        "(E) Lars Karlsson",
        "(Mu) Mikael Nilsson",
        "(E) Per Svensson",
        "(Mu) Johan Andersson",
        "(Må) Erik Johansson",
        "(E) Lars Karlsson",
        "(Mu) Mikael Nilsson",
        "(E) Per Svensson",
        "(Mu) Johan Andersson",
        "(Må) Erik Johansson",
        "(E) Lars Karlsson",
        "(Mu) Mikael Nilsson",
        "(E) Per Svensson",
        "(Mu) Johan Andersson",
        "(Må) Erik Johansson",
        "(E) Lars Karlsson",
        "(Mu) Mikael Nilsson",
        "(E) Per Svensson",
        "(Mu) Johan Andersson",
        "(Må) Erik Johansson",
        "(E) Lars Karlsson",
        "(Mu) Mikael Nilsson",
        "(E) Per Svensson"
    ]);

    const weeks = ref([
        ["1/1", "2/1", "3/1", "4/1", "5/1"],
        ["8/1", "9/1", "10/1", "11/1", "12/1"],
        ["15/1", "16/1", "17/1", "18/1", "19/1"],
        ["22/1", "23/1", "24/1", "25/1", "26/1"],
        ["29/1", "30/1", "31/1", "1/2", "2/2"],
        ["5/2", "6/2", "7/2", "8/2", "9/2"],
        ["12/2", "13/2", "14/2", "15/2", "16/2"],
        ["19/2", "20/2", "21/2", "22/2", "23/2"],
        ["26/2", "27/2", "28/2", "1/3", "2/3"],
        ["5/3", "6/3", "7/3", "8/3", "9/3"],
        ["12/3", "13/3", "14/3", "15/3", "16/3"],
        ["19/3", "20/3", "21/3", "22/3", "23/3"],
        ["26/3", "27/3", "28/3", "29/3", "30/3"],
        ["2/4", "3/4", "4/4", "5/4", "6/4"],
        ["9/4", "10/4", "11/4", "12/4", "13/4"],
        ["16/4", "17/4", "18/4", "19/4", "20/4"]
    ]);

    return {
        show,
        page,
        firstWeek,
        secondWeek,
        thirdWeek,
        fourthWeek,
        selectedWorker,
        selectedPercent,
        workerOne,
        workerTwo,
        workerThree,
        workerFour,
        workerFive,
        names,
        weeks
    };
}
