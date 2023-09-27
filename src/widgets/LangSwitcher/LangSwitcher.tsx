import { FC } from "react";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
};

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className, short } = props;

  const  {t, i18n} = useTranslation();

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru").catch((e) => console.log(e));
  }

  return (
    <Button 
      theme={ButtonTheme.CLEAR} 
      className={classNames(cls.LangSwitcher, {}, [className])} 
      onClick={toggle}>
      {short ? "" : `${t("language")}:`} <span>{i18n.language}</span>
    </Button>
  );
};