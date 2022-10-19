import React from 'react';

export const EmailIcon = ({ size = '1.25rem', ...props }) => {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.33325 4.16667C2.87682 4.16667 2.49992 4.54357 2.49992 5V15C2.49992 15.4564 2.87682 15.8333 3.33325 15.8333H16.6666C17.123 15.8333 17.4999 15.4564 17.4999 15V5C17.4999 4.54357 17.123 4.16667 16.6666 4.16667H3.33325ZM0.833252 5C0.833252 3.6231 1.95635 2.5 3.33325 2.5H16.6666C18.0435 2.5 19.1666 3.6231 19.1666 5V15C19.1666 16.3769 18.0435 17.5 16.6666 17.5H3.33325C1.95635 17.5 0.833252 16.3769 0.833252 15V5Z'
        fill='currentColor'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0.983964 4.52251C1.24789 4.14547 1.7675 4.05378 2.14454 4.3177L9.99999 9.81652L17.8554 4.3177C18.2325 4.05378 18.7521 4.14547 19.016 4.52251C19.2799 4.89955 19.1882 5.41916 18.8112 5.68309L10.4779 11.5164C10.1909 11.7173 9.80904 11.7173 9.52211 11.5164L1.18877 5.68309C0.81173 5.41916 0.720035 4.89955 0.983964 4.52251Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const LockIcon = ({ size = '1.25rem', ...props }) => {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.16675 9.99967C3.70651 9.99967 3.33341 10.3728 3.33341 10.833V16.6663C3.33341 17.1266 3.70651 17.4997 4.16675 17.4997H15.8334C16.2937 17.4997 16.6667 17.1266 16.6667 16.6663V10.833C16.6667 10.3728 16.2937 9.99967 15.8334 9.99967H4.16675ZM1.66675 10.833C1.66675 9.4523 2.78604 8.33301 4.16675 8.33301H15.8334C17.2141 8.33301 18.3334 9.4523 18.3334 10.833V16.6663C18.3334 18.0471 17.2141 19.1663 15.8334 19.1663H4.16675C2.78604 19.1663 1.66675 18.0471 1.66675 16.6663V10.833Z'
        fill='currentColor'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10 2.49967C9.11594 2.49967 8.2681 2.85086 7.64298 3.47599C7.01786 4.10111 6.66667 4.94895 6.66667 5.83301V9.16634C6.66667 9.62658 6.29357 9.99967 5.83333 9.99967C5.3731 9.99967 5 9.62658 5 9.16634V5.83301C5 4.50693 5.52678 3.23516 6.46447 2.29747C7.40215 1.35979 8.67392 0.833008 10 0.833008C11.3261 0.833008 12.5979 1.35979 13.5355 2.29747C14.4732 3.23516 15 4.50693 15 5.83301V9.16634C15 9.62658 14.6269 9.99967 14.1667 9.99967C13.7064 9.99967 13.3333 9.62658 13.3333 9.16634V5.83301C13.3333 4.94895 12.9821 4.10111 12.357 3.47599C11.7319 2.85086 10.8841 2.49967 10 2.49967Z'
        fill='currentColor'
      />
    </svg>
  );
};
