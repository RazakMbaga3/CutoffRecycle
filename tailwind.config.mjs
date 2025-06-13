/** @type {import('tailwindcss').Config} */
export default {  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },      colors: {
        'brand-green': '#50ad32', /* Primary brand color */
        'brand-black': '#000000', /* Pure black for text and primary elements */
        'brand-navy': '#1f4074', /* Secondary brand color */
        'brand-white': '#FFFFFF', /* White for contrast */
        'neutral-gray': '#F5F5F5', /* Light gray for backgrounds */
        'text-dark': '#000000', /* Main text color - using brand black */
        'text-light': '#1f4074', /* Secondary text color - using brand navy */
      },      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'leaf-pattern': "url('/Images/leaf-pattern.png')",
        'dot-pattern': 'radial-gradient(#50ad32 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(to right, rgba(80, 173, 50, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(80, 173, 50, 0.1) 1px, transparent 1px)',
        'circle-pattern': 'radial-gradient(circle, rgba(80, 173, 50, 0.2) 20%, transparent 20.5%), radial-gradient(circle, rgba(80, 173, 50, 0.2) 20%, transparent 20.5%)',
        'pattern-waves': "url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%2350ad32' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },      boxShadow: {
        'soft': '0 10px 25px -3px rgba(0, 0, 0, 0.05)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'btn': '0 4px 14px rgba(80, 173, 50, 0.4)',
        'custom': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 5px 15px -10px rgba(0, 0, 0, 0.05)',
        'custom-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -10px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      clipPath: {
        'curve-bottom': 'ellipse(100% 100% at 50% 0%)',
        'curve-top': 'ellipse(100% 100% at 50% 100%)',
        'wave-bottom': 'polygon(0% 0%, 100% 0%, 100% 85%, 75% 100%, 50% 85%, 25% 100%, 0 85%)',
        'wave-top': 'polygon(0% 15%, 25% 0%, 50% 15%, 75% 0%, 100% 15%, 100% 100%, 0% 100%)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        // Overriding with rem values as well
        'xl-rem': '1rem',
        '2xl-rem': '1.5rem',
        '3xl-rem': '2rem',
      },      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'zoom-in': 'zoomIn 1s ease-out forwards',
        'rotate-slow': 'rotate 15s linear infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'blur-in': 'blurIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionDelay: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
};
