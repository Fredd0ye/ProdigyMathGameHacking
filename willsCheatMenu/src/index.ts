import "./style.scss";
import { PIXI } from "../../typings/pixi";
export const menu = document.createElement("div");
export const wrapper = document.getElementById("game-wrapper");
document.getElementById("cheat-menu")?.remove();
document.getElementById("menu-toggler")?.remove();
menu.id = "cheat-menu";
wrapper?.prepend(menu);
export const toggler = document.createElement("button");
toggler.id = "menu-toggler";
toggler.innerText = "▲";
let visible = true;
wrapper?.prepend(toggler);
toggler.onclick = () => {
	if (visible) {
		toggler.innerText = "▼";
		menu.style.top = "-62vh";
	} else {
		toggler.innerText = "▲";
		menu.style.top = "";
	}
	visible = !visible;
};
export const addArea = (title: string) => {
	const area = document.createElement("div");
	area.classList.add("menu-area");
	menu.append(area);
	const header = document.createElement("h1");
	header.innerHTML = title;
	area.append(header);
	return area;
};
const title = document.createElement("h1");
title.classList.add("menu-title");
title.innerHTML = "Prodigy Cheat Menu"
menu.append(title)
export class Hack {
	public element: HTMLButtonElement;
	constructor(public parent: HTMLDivElement, name?: string) {
		this.element = document.createElement("button");
		this.element.classList.add("menu-hack");
		this.parent.append(this.element);
		if (name) this.element.innerText = name;
	}
	setName(name: string) {
		this.element.innerText = name;
		return this;
	}
	setClick(event: () => any) {
		this.element.onclick = event;
		return this;
	}
}
export const category = {
	player: addArea("Player Hacks")
};
