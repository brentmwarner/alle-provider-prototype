module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "annotationsannotation-red": "var(--annotationsannotation-red)",
        borderinteractiveblackenable: "var(--borderinteractiveblackenable)",
        borderneutralblack: "var(--borderneutralblack)",
        iconneutralblack: "var(--iconneutralblack)",
        iconneutralwhite: "var(--iconneutralwhite)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "body-extra-small-regular":
          "var(--body-extra-small-regular-font-family)",
        "body-large-regular": "var(--body-large-regular-font-family)",
        "body-medium-medium": "var(--body-medium-medium-font-family)",
        "body-medium-regular": "var(--body-medium-regular-font-family)",
        "body-small-medium": "var(--body-small-medium-font-family)",
        "body-small-regular": "var(--body-small-regular-font-family)",
        "body-small-semi-bold": "var(--body-small-semi-bold-font-family)",
        "caption-large-bold": "var(--caption-large-bold-font-family)",
        "caption-medium-regular": "var(--caption-medium-regular-font-family)",
        "caption-small-medium": "var(--caption-small-medium-font-family)",
        "caption-small-regular": "var(--caption-small-regular-font-family)",
        "headline-extra-small-primary-medium":
          "var(--headline-extra-small-primary-medium-font-family)",
        "headline-large-primary-medium":
          "var(--headline-large-primary-medium-font-family)",
        "headline-medium-petersburg":
          "var(--headline-medium-petersburg-font-family)",
        "headline-small-primary-regular":
          "var(--headline-small-primary-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { "elevation-1-cast-down": "var(--elevation-1-cast-down)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'sidebar-collapse': '1275px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  darkMode: ["class"],
};
