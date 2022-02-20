import { MyListItem } from "./MyListItem";

export function register(): void {
    window.customElements.define('app-drawer', MyListItem);
}
