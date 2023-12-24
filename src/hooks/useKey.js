import { useEffect } from "react";

export default function useKey(key, action) {
  useEffect(() => {
    function closeWithEscape(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }

    document.addEventListener("keydown", closeWithEscape);

    // Clean up
    return function () {
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [action, key]);
}
