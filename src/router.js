import Vue from "vue";
import Router from "vue-router";
import MainView from "./components/MainView";

import BoardList from "./components/board/BoardList.vue";
import AddBorad from "./components/board/AddBorad.vue";
import SearchBoards from "./components/board/SearchBoards.vue";
import Board from "./components/board/Board.vue";

import CustomersList from "./components/customer/CustomersList.vue";
import AddCustomer from "./components/customer/AddCustomer.vue";
import SearchCustomers from "./components/customer/SearchCustomers.vue";
import Customer from "./components/customer/Customer.vue";

import SignWait from "./components/approval/SignWait.vue";
import Approval from "./components/approval/Approval";
import DocWrite from "./components/approval/DocWrite";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "mainView",
            component: MainView,
        },

        {
            path: "/bbs/board",
            name: "boards",
            alias: "/bbs",
            component: BoardList,
        },
        {
            path: "/bbs/BoardList/:b_id",
            name: "board-details",
            component: Board,
            props: true
        },
        {
            path: "/bbs/add",
            name: "add",
            component: AddBorad
        },
        {
            path: "/bbs/search",
            name: "search",
            component: SearchBoards
        },

        {
            path: "/customer/customer",
            name: "customers",
            alias: "/customer",
            component: CustomersList,
        },
        {
            path: "/customer/customer/:id",
            name: "customer-details",
            component: Customer,
            props: true
        },
        {
            path: "/customer/add",
            name: "add",
            component: AddCustomer
        },
        {
            path: "/customer/search",
            name: "search",
            component: SearchCustomers
        },

        {
            path: "/app/sign",
            name: "approval",
            alias : "/app",
            component :Approval
        },

        {
            path: "/app/sign/wait",
            name: "wait",
            component :SignWait
        },
        {
            path : "/app/doc/write",
            name: "write",
            component : DocWrite
        }
    ]
});