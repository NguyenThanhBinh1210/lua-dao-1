/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#df782c',
        secondary: '#f99245',
        third: '#ef6013',
        primaryLight: '#fff1e2'
      }
    }
  },
  plugins: []
})
