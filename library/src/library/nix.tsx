import type { ComponentProps, FC } from "react"

const Nix: FC<ComponentProps<"svg">> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="#60A5FA"
            d="M8.127 3l-1.137.002-.557.963 1.298 2.26-2.614-.006-1.1 1.95h9.741l-1.127-1.943-2.66-.005L8.126 3zm5.146 0l-2.24.02 4.872 8.44 1.118-1.95-1.325-2.304 1.866-3.209-.569-.984h-1.113l-1.309 2.254L13.273 3zm5.739 3.496l-4.872 8.437 2.247-.006 1.334-2.3 3.71.013.569-.986-.555-.964-2.608-.007 1.311-2.26-1.136-1.927zM9.86 8.412l-2.247.006-1.334 2.3-3.71-.013L2 11.69l.555.964 2.608.007-1.312 2.258 1.137 1.93L9.86 8.411zm-1.752 3.47l-.005.008-.001-.003-1.119 1.95 1.325 2.304-1.866 3.208.57.985h1.113l.003-.005 1.307-2.248 1.298 2.267 2.24-.022-.003-.005h.008l-4.87-8.44zm2.125 3.275l1.129 1.943 2.66.005 1.845 3.22h1.136l.557-.964-1.297-2.261 2.614.007 1.1-1.95h-9.744z"
        ></path>
    </svg>
)

export default Nix