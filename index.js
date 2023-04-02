/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default plugin.withOptions(() => {
    return function ({addBase, addUtilities, matchUtilities, theme, variants,}) {




        addUtilities(
            {
                '.bg-test': { 'background': 'red' },
                '.bg-test1': { 'background': 'blue' },
                '.bg-test2': { 'background': 'green' },
            }
        )

    }

}

)
