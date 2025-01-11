import { useTranslation } from "react-i18next";
import { useState } from "react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  return (
    <div className={`absolute top-10 end-10 z-50`}>
      <button
        onClick={toggleLanguage}
        className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out transform border-2 ${
          isEnglish
            ? "bg-purple-600 text-white border-purple-600 hover:bg-purple-700 hover:border-purple-700"
            : "bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200 hover:border-purple-300"
        }`}
      >
        {isEnglish ? "عربي" : "English"}
      </button>
    </div>
  );
}
