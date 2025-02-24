import { SvgIconProps } from "../../types/global.types";

const ArrowLeft = ({
  width = "24px",
  height = "24px",
  className,
}: SvgIconProps) => {
  return (
    <>
      <svg
        fill="#000000"
        height={height}
        width={width}
        className={className}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 476.491 476.491"
        xmlSpace="preserve"
      >
        <polygon points="476.491,223.246 136.539,223.246 136.539,101.706 0,238.246 136.539,374.786 136.539,253.246 476.491,253.246 " />
      </svg>
    </>
  );
};

export default ArrowLeft;
