import { createApp } from "vue";
import App from "./App.vue";


//获取arr1
// import * as name1 from "../src/js/index"

// console.log(name1);
// console.log(name1.arr1(3,4))
// console.log(name1.arr2(8,2))


import {arr1} from "../src/js/index"
console.log(arr1(3,4))


createApp(App).mount("#app");
