import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed px-4 py-2 bottom-10 right-7 bg-orange-400 cursor-pointer text-white rounded-2xl shadow-lg"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
