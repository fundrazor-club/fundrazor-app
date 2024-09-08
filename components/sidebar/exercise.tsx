const ExercisesIcon = (props: any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_1269_6861"
      // style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1269_6861)">
      <path
        d="M4.16667 13.2917L9.16667 16.1875V10.4792L4.16667 7.58335V13.2917ZM10.8333 16.1875L15.8333 13.2917V7.58335L10.8333 10.4792V16.1875ZM5.0625 6.18752L10 9.04169L14.9375 6.18752L10 3.33335L5.0625 6.18752ZM2.5 14.2709V6.68752C2.5 6.38196 2.57292 6.10419 2.71875 5.85419C2.86458 5.60419 3.06944 5.4028 3.33333 5.25002L9.16667 1.89585C9.43056 1.74308 9.70833 1.66669 10 1.66669C10.2917 1.66669 10.5694 1.74308 10.8333 1.89585L16.6667 5.25002C16.9306 5.4028 17.1354 5.60419 17.2813 5.85419C17.4271 6.10419 17.5 6.38196 17.5 6.68752V13.3125C17.5 13.6181 17.4271 13.8959 17.2813 14.1459C17.1354 14.3959 16.9306 14.5972 16.6667 14.75L10.8333 18.1042C10.5694 18.257 10.2917 18.3334 10 18.3334C9.70833 18.3334 9.43056 18.257 9.16667 18.1042L2.5 14.2709Z"
        fill={props.fill}
      />
    </g>
  </svg>
);

export default ExercisesIcon;
