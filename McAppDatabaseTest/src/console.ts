export class Console {
    textarea: HTMLTextAreaElement;
    
    constructor() {
        this.textarea = document.createElement('textarea');
        this.textarea.style.width = "500px";
        this.textarea.style.height = "500px";

    }

    log(txt: string, type?: string) {
        if (type) this.textarea.value += type + " ";
        this.textarea.value += txt + "\n";
    }
    error = (txt: string) => {
        this.log(txt, "ERROR!");
    }
}