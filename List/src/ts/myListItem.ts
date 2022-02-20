export interface MyEventMap {
    'click': MouseEvent;
    'dan': CustomEvent;
}

//https://developers.google.com/web/fundamentals/web-components/customelements
export class MyListItem extends HTMLElement {

    /**
     *
     */
    constructor() {
        super();
    }

    render() {
        '<h1>TEST</h1>'
    }

    public addEventListener<T extends keyof MyEventMap>(
        type : T, 
        listener: (this: MyListItem, ev: MyEventMap[T]) => any, 
        options?: boolean | AddEventListenerOptions): void
    {

    };
}

