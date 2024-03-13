import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <main className="relative min-h-screen dark:bg-[#0C134F] dark:text-slate-200">
      <AppRouter />
      <Footer />
    </main>
  );
}
