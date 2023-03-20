import { useState } from "react";
// const _alert = () => alert("hello word")
class ToggleSideBar {
    constructor(elm, state = null) {

        this.mousedown = false;
        this.start = 0;
        this.isOpen = false
        this.elm = document.querySelector(elm);
        this.elm.ontouchstart = e => {
            this.start = e.touches[0].clientX;
            this.mousedown = true
        }
        this.elm.ontouchend = e => {
            this.mousedown = false
            this.isOpen = false
        }
        this.elm.ontouchmove = e => {

            if (!this.mousedown) return
            const end = e.touches[0].clientX;
            if (!(this.start > end)) return
            if (Math.abs(this.start - end) > 100) {
                // alert("open side bar ")
                this.isOpen = true
                alert(this.isOpen)
            }
        }

    }

    open() { return this.isOpen }


}
export function slider(slide) { return new ToggleSideBar(slide) }