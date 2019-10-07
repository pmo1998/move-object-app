import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    currentDirection: '',
    disabledDirections: {
        left: false,
        up: false,
        right: false,
        down: false
    },
    isMovingRequested: false
}

const getters = {}

const mutations = {
    setCurrentDirection(state, payload) {
        state.currentDirection = payload.currentDirection;
    },
    setDisabledDirections(state, payload) {
        const disabledDirections = {
            ...state.disabledDirections,
            ...payload
        }
        state.disabledDirections = disabledDirections;
    },
    setMovingRequested(state, payload) {
        state.isMovingRequested = payload.isMovingRequested;
    }
}

const actions = {
    setCurrentDirection(context, payload) {
        context.commit('setCurrentDirection', payload);
    },
    setDisabledDirections(context, payload) {
        context.commit('setDisabledDirections', payload);
    },
    setMovingRequested(context, payload) {
        context.commit('setMovingRequested', payload);
        if (payload.isMovingRequested) {
            window.setTimeout(() => {
                context.commit('setMovingRequested', {isMovingRequested: false});
            }, 0);
        }
    }    
}

export const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});