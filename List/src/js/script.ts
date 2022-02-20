
window.addEventListener('load', (event) => {
    main();
});

export function main() {
    AddEventListener("sample", "click", listenerFunction);
    AddEventListener("up", "click", ListUpwards);
    AddEventListener("down", "click", ListDownwards);
    AddMouseEventListener("sample", "mousemove", onMouseMove);
    ListItemsWithEventListener("card", "onmouseover", onMouseOver)
}

function ListItemsWithEventListener(className : string, eventType : string, 
    callback: (EventListenerOrEventListenerObject) => void) : void {
        const elements: HTMLCollectionOf<Element> = document.getElementsByClassName(className);
        let array  = [...elements];
        array.map(element => {element?.addEventListener(eventType, callback)});
}  


function AddEventListener(elementId: string, eventType: string,
    callback: (evt: Event) => void): void {
    const element: HTMLElement = document.getElementById(elementId);
    element?.addEventListener(eventType, callback);
}


function AddMouseEventListener(elementId: string, eventType: string,
    callback: (EventListenerOrEventListenerObject) => void): void {

    const element: HTMLElement = document.getElementById(elementId);
    element?.addEventListener(eventType, callback);
}

function ListUpwards(this: HTMLElement, e: Event) {

    console.log("Upwards in list");
}

function ListDownwards(this: HTMLElement, e: Event) {
    e.preventDefault();
    console.log("Downwards in list");
}

function listenerFunction(this: HTMLElement, ev: Event) {
    ev.preventDefault();
    this.style.backgroundColor = "red";
}

function onMouseMove(this: HTMLElement, e: MouseEvent) {
    e.preventDefault();
    console.log(e.pageX + " " + e.pageY);
}

function onMouseOver(this: HTMLElement, e: MouseEvent) {
    e.preventDefault();
    console.log(e.pageX + " " + e.pageY);
}