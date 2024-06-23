import { useState } from "react";
import { LanguageType } from "../../types/utlis/languageType";

export const useLanguageToggle = (initialLanguage: string): LanguageType => {

    const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);

    const handleLanguageChange = () => setCurrentLanguage(currentLanguage === "ru" ? "ua" : "ru");

    return { currentLanguage, handleLanguageChange };

};
