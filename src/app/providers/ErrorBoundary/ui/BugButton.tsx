import { FC, useState, useEffect } from "react";
import { Button } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

// only for testing
export const BugButton: FC = () => {
  const  { t } = useTranslation();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  const throwError = () => setError(true);

  return (
    <Button
      onClick={throwError}
    >
      {t("throwError")}
    </Button>
  );
};