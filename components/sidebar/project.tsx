const ProjectIcon = (props: any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_1269_6856"
      // style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1269_6856)">
      <path
        d="M8 13L9.16667 11.7916L7.375 9.99998L9.16667 8.20831L8 6.99998L5 9.99998L8 13ZM12 13L15 9.99998L12 6.99998L10.8333 8.20831L12.625 9.99998L10.8333 11.7916L12 13ZM4.16667 17.5C3.70833 17.5 3.31597 17.3368 2.98958 17.0104C2.66319 16.684 2.5 16.2916 2.5 15.8333V4.16665C2.5 3.70831 2.66319 3.31595 2.98958 2.98956C3.31597 2.66317 3.70833 2.49998 4.16667 2.49998H7.66667C7.84722 1.99998 8.14931 1.5972 8.57292 1.29165C8.99653 0.986091 9.47222 0.833313 10 0.833313C10.5278 0.833313 11.0035 0.986091 11.4271 1.29165C11.8507 1.5972 12.1528 1.99998 12.3333 2.49998H15.8333C16.2917 2.49998 16.684 2.66317 17.0104 2.98956C17.3368 3.31595 17.5 3.70831 17.5 4.16665V15.8333C17.5 16.2916 17.3368 16.684 17.0104 17.0104C16.684 17.3368 16.2917 17.5 15.8333 17.5H4.16667ZM4.16667 15.8333H15.8333V4.16665H4.16667V15.8333ZM10 3.54165C10.1806 3.54165 10.3299 3.48262 10.4479 3.36456C10.566 3.24651 10.625 3.0972 10.625 2.91665C10.625 2.73609 10.566 2.58679 10.4479 2.46873C10.3299 2.35067 10.1806 2.29165 10 2.29165C9.81944 2.29165 9.67014 2.35067 9.55208 2.46873C9.43403 2.58679 9.375 2.73609 9.375 2.91665C9.375 3.0972 9.43403 3.24651 9.55208 3.36456C9.67014 3.48262 9.81944 3.54165 10 3.54165Z"
        fill={props.fill}
      />
    </g>
  </svg>
);

export default ProjectIcon;
