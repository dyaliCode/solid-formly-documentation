import { createSignal, createRoot } from "solid-js";
import Cookies from "js-cookie";

const _mode = Cookies.get("theme_mode");

function createThemeMode() {
  const [mode, setMode] = createSignal(_mode ?? "dark");
  const toggleMode = () => {
    setMode(mode() === "light" ? "dark" : "light");
    Cookies.set("theme_mode", mode());
  };
  return { mode, toggleMode };
}

export default createRoot(createThemeMode);
