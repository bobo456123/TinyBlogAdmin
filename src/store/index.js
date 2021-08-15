import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: "root"
    },
    modules: {
        admin: require("./module/admin"),
        posts: {
            namespaced: true,
            state: { name: "module posts" }
        }
    }
});