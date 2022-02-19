"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
function main() {
    const element = document.getElementById("sample");
    element?.addEventListener("click", listenerFunction);
    element?.addEventListener("mousemove", onMouseMove);
}
exports.main = main;
function listenerFunction(ev) {
    ev.preventDefault();
    this.style.backgroundColor = "red";
}
function onMouseMove(e) {
    e.preventDefault();
    console.log(e.pageX + " " + e.pageY);
}
window.addEventListener('load', (event) => {
    main();
});
//# sourceMappingURL=script.js.map