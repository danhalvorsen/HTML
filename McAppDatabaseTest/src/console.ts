export class Console {
    textarea: HTMLTextAreaElement;
    
    constructor() {
        this.textarea = document.createElement('textarea');
    }
    log(txt: string, type?: string) {
        if (type) this.textarea.value += type + " ";
        this.textarea.value += txt + "\n";
    }
    error = (txt: string) => {
        this.log(txt, "ERROR!");
    }
}