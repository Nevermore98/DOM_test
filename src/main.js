/*
 * @Author: your name
 * @Date: 2021-04-28 23:09:57
 * @LastEditTime: 2021-04-28 23:27:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /DOM_test/src/main.js
 */
const div = dom.find("#test>.red")[0] // 获取最近的子类选择器
dom.style(div, "color", "red") // 设置 div.style.color

const divList = dom.find(".red") // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素
