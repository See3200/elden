import { FC } from "react";
import "./Loader.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
};

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={classNames("loader", {}, [className])}
    >
      <div className="loadingio-spinner-spin-6mso5h3ityc"><div className="ldio-7ecmi8di8m5">
        <div><div></div></div><div><div></div></div><div><div>
        </div></div><div><div></div></div><div><div></div></div><div>
          <div></div></div><div><div></div></div><div><div></div></div>
      </div></div>
    </div>
  );
};