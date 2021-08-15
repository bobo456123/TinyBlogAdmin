module.exports = {
    namespaced: true,
    state: { name: "module admin" },
    getters: {
        theName: function (state) {
            return "the" + state.name;
        }
    },
    mutations: {
        test: function (state) {
            console.log(state.name);
            return state.name;
        }
    },
    actions: {
        asynctest: function (context) {
            return new Promise((r) => {
                setTimeout(() => {
                    console.log(context);
                    r("1000ms之后");
                }, 1000);
            });
        }
    }
};