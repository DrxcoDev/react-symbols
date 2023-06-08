import type { ComponentProps, FC } from "react"

const Patch: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F87171"
      d="M4.784 13.813l1.23-1.23 5.404 5.402-1.231 1.231a2.676 2.676 0 01-3.785 0l-1.618-1.618a2.676 2.676 0 010-3.785zm14.432-3.626l-1.231 1.23-5.403-5.402 1.231-1.23a2.676 2.676 0 013.785 0l1.618 1.617a2.676 2.676 0 010 3.785zm-5.403 9.029a2.676 2.676 0 003.785 0l1.618-1.618a2.676 2.676 0 000-3.785l-9.03-9.03a2.676 2.676 0 00-3.784 0L4.784 6.403a2.676 2.676 0 000 3.785l9.03 9.029zM9.53 11.382a.618.618 0 110 1.236.618.618 0 010-1.236zm3.088 3.088a.618.618 0 11-1.235 0 .618.618 0 011.235 0zm0-2.47a.618.618 0 11-1.235 0 .618.618 0 011.235 0zM12 8.912a.618.618 0 110 1.235.618.618 0 010-1.235zM15.088 12a.618.618 0 11-1.235 0 .618.618 0 011.235 0z"
    ></path>
  </svg>
);

export default Patch;
