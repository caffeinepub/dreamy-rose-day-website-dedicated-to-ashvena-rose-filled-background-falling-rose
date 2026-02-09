import { ThemeProvider } from 'next-themes';
import RoseDay from './pages/RoseDay';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <RoseDay />
    </ThemeProvider>
  );
}
