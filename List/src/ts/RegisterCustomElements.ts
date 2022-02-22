import { MyListItem } from "./MyListItem";

export function Register(): void {
    window.customElements.define('my-list-item', MyListItem);
}
