"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
window.addEventListener('load', (event) => {
    main();
});
function main() {
    AddEventListener("sample", "click", listenerFunction);
    AddEventListener("up", "click", ListUpwards);
    AddEventListener("down", "click", ListDownwards);
    AddMouseEventListener("sample", "mousemove", onMouseMove);
    ListItemsWithEventListener("card", "onmouseover", onMouseOver);
}
exports.main = main;
function ListItemsWithEventListener(className, eventType, callback) {
    const elements = document.getElementsByClassName(className);
    let array = [...elements];
    array.map(element => { element?.addEventListener(eventType, callback); });
}
function AddEventListener(elementId, eventType, callback) {
    const element = document.getElementById(elementId);
    element?.addEventListener(eventType, callback);
}
function AddMouseEventListener(elementId, eventType, callback) {
    const element = document.getElementById(elementId);
    element?.addEventListener(eventType, callback);
}
function ListUpwards(e) {
    console.log("Upwards in list");
}
function ListDownwards(e) {
    e.preventDefault();
    console.log("Downwards in list");
}
function listenerFunction(ev) {
    ev.preventDefault();
    this.style.backgroundColor = "red";
}
function onMouseMove(e) {
    e.preventDefault();
    console.log(e.pageX + " " + e.pageY);
}
function onMouseOver(e) {
    e.preventDefault();
    console.log(e.pageX + " " + e.pageY);
}
//# sourceMappingURL=script.js.map