import { FC } from "react";
import cls from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
};

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const  { t } = useTranslation();
  const { className } = props;

  return (
    <div
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      {t("notFoundPage")}
    </div>
  );
};