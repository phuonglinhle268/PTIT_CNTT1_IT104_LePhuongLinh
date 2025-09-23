import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { setLanguage } from "../redux/slices/language.slice";

export default function LanguageSwitcher() {
  const { currentLang } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(e.target.value as "en" | "vi"));
  };

  return (
    <div>
      <select value={currentLang} onChange={handleChange}>
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
