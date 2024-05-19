import { HTMLStyledProps } from "../../../../../styled-system/types";
import { styled } from "../../../../../styled-system/jsx";

type UpProps = HTMLStyledProps<"strong">;

export function Up(props: UpProps) {
  return (
    <styled.strong
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.16644 0.221732C8.49781 0.221732 8.76644 0.490361 8.76644 0.821732L8.76644 6.53401C8.76644 6.86538 8.49781 7.13401 8.16644 7.13401C7.83507 7.13401 7.56644 6.86538 7.56644 6.53401L7.56644 2.27026L1.92638 7.91032C1.69207 8.14463 1.31217 8.14463 1.07785 7.91032C0.84354 7.676 0.84354 7.29611 1.07785 7.06179L6.71791 1.42173L2.45416 1.42173C2.12279 1.42173 1.85416 1.1531 1.85416 0.821732C1.85416 0.490361 2.12279 0.221732 2.45416 0.221732L8.16644 0.221732Z"
        />
      </svg>
    </styled.strong>
  );
}
