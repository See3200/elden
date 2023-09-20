import { FC } from "react";
import cls from "./ErrorPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface ErrorPageProps {
  className?: string;
};

export const ErrorPage: FC<ErrorPageProps> = (props) => {
  const { className } = props;
  const  { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div
      className={classNames(cls.ErrorPage, {}, [className])}
    >
      <p>{t("pageErrorMessage")}</p>
      <Button onClick={reloadPage}>
        {t("pageRefresh")}
      </Button>
    </div>
  );
};