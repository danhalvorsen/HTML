export interface MyEventMap {
    'click': MouseEvent;
    'dan': CustomEvent;
}

//https://developers.google.com/web/fundamentals/web-components/customelements
export class MyListItem extends HTMLElement {
    constructor() {
        super();

        this.addEventListener("click", this.onClick)
    }
    onClick(onClick: any) {
        console.log("Clicked");
    }

    connectedCallback() {
        this.innerHTML = "<b>I'm an app-text-markup!</b>";
      }

    public addEventListener<T extends keyof MyEventMap>(
        type: T,
        listener: (this: MyListItem, ev: MyEventMap[T]) => any,
        options?: boolean | AddEventListenerOptions): void {

    };
}