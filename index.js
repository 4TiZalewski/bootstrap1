// @ts-check

/**
 * @type {HTMLButtonElement | null}
 */
const change_theme_btn_nullable = document.querySelector("#change-theme");

if (change_theme_btn_nullable) {
    const change_theme_btn = /** @type {HTMLButtonElement} */ (change_theme_btn_nullable);
    change_theme_btn.addEventListener("click", (event) => {
        event.preventDefault();

        /**
         * @type {HTMLHtmlElement}
         */
        const html_element = /** @type {HTMLHtmlElement} */ (document.querySelector("html"));
        if (html_element.dataset.bsTheme === "light") {
            html_element.dataset.bsTheme = "dark";
        } else {
            html_element.dataset.bsTheme = "light";
        }
    });
} else {
    console.warn("Required elements do not exist!");
}