import { useEffect, useState } from "react";

export const useDebouce = (value: string, delay: number) => {
  const [keyword, setKeyword] = useState<string>(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setKeyword(value);
    }, delay);

    // Dọn dẹp bộ nhớ
    return () => clearTimeout(timerId);
  }, [delay, value]);

  return keyword;
};