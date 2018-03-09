import axios from "axios";

export default {
    // Gets senator information per state from Open Secrets
    getSenators: (state) => {
        return axios.get("/api/opensecrets", )
    },

    // Gets bills sponsored by a particular senator from ProPublica
    sponBills: (state) => {
        return axios.get("/api/propublica", )
    }
};
