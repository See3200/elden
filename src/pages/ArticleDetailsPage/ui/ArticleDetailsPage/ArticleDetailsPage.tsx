import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation("articleDetails");

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      {t("articleDetailsPage")}
    </div>
  );
};

export default memo(ArticleDetailsPage);
