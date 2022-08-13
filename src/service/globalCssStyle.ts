import { ReactHTML } from "react";


export const changeCssVaribals = (theme : string) => {
    let root = document.querySelector(':root') as HTMLDivElement;
    


    root.style.setProperty('--color-bg', `var(--theme-color-${theme})`);
    root.style.setProperty('--color-text', `var(--theme-color-text-${theme})`);
}