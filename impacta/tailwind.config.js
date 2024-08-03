/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                corPrincipal: "#FF8225",
                corSecudanria: "#454545",
                fundoPrincipal: "#181A1C",
                fundoSecundario: "#27292E",
            },
            screens: {
                s380: "380px",
                s480: "480px",
                s580: "580px",
                s680: "680px",
                s780: "780px",
                s880: "880px",
                s980: "980px",
                s1080: "1080px",
                s1180: "1180px",
                s1280: "1280px",
                s1380: "1380px",
                s1480: "1480px",
                s1580: "1580px",
                s1680: "1680px",
                s1780: "1780px",
                s1880: "1880px",
                s1920: "1920px",
            },
        },
    },
    plugins: [],
};
