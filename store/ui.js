const DEFAULT_STATE = {
  url: "https://s3.ap-northeast-2.amazonaws.com/static.unicornranch.co.kr/allok",
  device: "",
  view: "",
  popupAlertData: {
    state: false,
    type: null,
    title: null,
    msg: null,
    btn: {
      link: '',
      name: null,
      fnName: null,
    }
  },
};

export default {
  namespaced: true,
  state: () => ({ ...DEFAULT_STATE }),
  mutations: {
    UPDATE_STATE(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    setDevice({ commit }, payload) {
      commit('UPDATE_STATE', { device: payload });
    },
    setView({ commit }, payload) {
      commit("UPDATE_STATE", { view: payload });
    },
    setPopupAlertData({ commit }, payload) {
      commit('UPDATE_STATE', { popupAlertData: payload });
    },
  },
};
