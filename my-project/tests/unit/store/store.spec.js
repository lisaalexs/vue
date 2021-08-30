import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import storeConfig from "./store.cfg.js";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = storeConfig; //если store = new Vuex.Store(storeConfig) то все тесты обнуляются.

describe("store testing", () => {
    it("return all tasks count", () => {
        expect(store.getters.todosLength).toBe(3);
    });
    it("return all sort btns", () => {
        expect(store.getters.sortBtn.length).toBe(3);
    });
    it("return completed todos", () => {
        expect(store.getters.todosCompleted).toBe(1);
    });
    test("getter showSortBtn shows todos according to the filter", () => {

        //THIS TEST DOESN'T WORK CORRECTLY OR CODE IS WRONG

        store.state.type = "All";
        expect(store.getters.showSortBtn).toBe(store.state.todos);
        store.state.type = "Active";
        expect(store.getters.showSortBtn.length).toBe(2);
        store.state.buttonTitle = "Complete";
        expect(store.getters.showSortBtn.length).toBe(1);
    });

    test("mutation 'removeTodo' delete one chosen todo", () => {
        const id = store.state.todos[0].id;
        store.commit("removeTodo", id);
        expect(store.state.todos.length).toBe(store.state.todos.length - 1);
    });
    test("getFromStorage", () => {
        store.dispatch("getFromStorage");
        expect(store.state.todos.length).toBe(0);
    });
});