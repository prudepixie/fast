/* eslint-disable */
import { css, FASTElement, html, when } from "@microsoft/fast-element";

export class Main extends FASTElement {
    public initializedString: string = "Initialized string content";
    public initializedBool: boolean = true;
}

FASTElement.define(Main, {
    name: "fast-main",
    /*html*/
    template: html<Main>`
        <p id="static-element">Static Element Content</p>
        <p id="static-element-bound-content">
            ${(x: Main): string => x.initializedString}
        </p>
        ${when(
            (x: Main): boolean => x.initializedBool,
            html`
                <p id="when-directive-true">When directive true</p>
            `
        )}
        ${when(
            (x: Main): boolean => !x.initializedBool,
            html`
                <p id="when-directive-false">When directive false</p>
            `
        )}
        <fast-leaf id="nested-custom-element"></fast-leaf>
        <fast-open-shadow-root id="open-shadow-root"></fast-open-shadow-root>
        <fast-closed-shadow-root id="closed-shadow-root"></fast-closed-shadow-root>
        <fast-slot id="default-slotted-text">
            Shadow DOM slotted text
        </fast-slot>
        <fast-slot id="default-slotted-element">
            <fast-leaf></fast-leaf>
        </fast-slot>
        <fast-slot id="named-slotted-element">
            <fast-leaf slot="named-slot"></fast-leaf>
        </fast-slot>
        <fast-bindings
            attribute="attribute-value"
            ?boolean=${x => true}
            :property=${x => "property-value"}
        ></fast-bindings>

        <fast-repeater></fast-repeater>
        <fast-repeater :data=${x => [1, 2, 3, 4].map(x => x.toString())}></fast-repeater>
    `,
    styles: css`
        :host {
            display: "block";
        }
    `,
});
