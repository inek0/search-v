import Vue from "vue";
import Vuex from "vuex";
import { catsSlice } from "@/store/modules/catsSlice";

Vue.use(Vuex);

const store = new Vuex.Store({ modules: { catsSlice: catsSlice } });
export default store;
