import { FC } from "react";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
};

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;

  const  {t, i18n} = useTranslation();

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru").catch((e) => console.log(e));
  }

  return (
    <Button 
      theme={ThemeButton.CLEAR} 
      className={classNames(cls.LangSwitcher, {}, [className])} 
      onClick={toggle}>
      {t("language")}: <span>{i18n.language}</span>
    </Button>
  );
};