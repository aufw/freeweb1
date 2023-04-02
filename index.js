/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import colors from "./colors.js";

export default plugin.withOptions(() => {
    return function ({addBase, addUtilities, matchUtilities, theme, variants,}) {




        addUtilities(
            {
                colors
            }
        )

    }

}

)
