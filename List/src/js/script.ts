
export function main() {
    const element: HTMLElement = document.getElementById("sample");
    element?.addEventListener("click", listenerFunction);
    element?.addEventListener("mousemove", onMouseMove);
}

function listenerFunction(this: HTMLElement, ev: Event) {
    ev.preventDefault();
    this.style.backgroundColor = "red";


}

function onMouseMove(this: HTMLElement, e: MouseEvent) {
    e.preventDefault();
    console.log(e.pageX + " " + e.pageY);
}

window.addEventListener('load', (event) => {
    main();

});