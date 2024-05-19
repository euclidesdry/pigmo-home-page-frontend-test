import { HTMLStyledProps } from "../../../../../styled-system/types";
import { styled } from "../../../../../styled-system/jsx";

type UpProps = HTMLStyledProps<"strong">;

export function Down(props: UpProps) {
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
          d="M1.33353 8.77827C1.00216 8.77827 0.733529 8.50964 0.733529 8.17827L0.733529 2.46599C0.733529 2.13462 1.00216 1.86599 1.33353 1.86599C1.6649 1.86599 1.93353 2.13462 1.93353 2.46599L1.93353 6.72974L7.57359 1.08968C7.8079 0.855367 8.1878 0.855368 8.42212 1.08968C8.65643 1.324 8.65643 1.70389 8.42212 1.93821L2.78206 7.57827L7.04581 7.57827C7.37718 7.57827 7.64581 7.8469 7.64581 8.17827C7.64581 8.50964 7.37718 8.77827 7.04581 8.77827L1.33353 8.77827Z"
        />
      </svg>
    </styled.strong>
  );
}
