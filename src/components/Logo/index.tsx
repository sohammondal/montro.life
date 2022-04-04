import React from 'react'

import { theme } from 'theme'

interface Props {
  fill?: string
}

export const Logo: React.FC<Props> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      height="100%"
      width="100%"
      fill={fill}
      xmlSpace="preserve"
    >
      <path d="M560.16 254.97c0 76.73-.01 153.46.04 230.19 0 1.92-.61 2.48-2.45 2.47-25.73-.04-51.46-.04-77.19 0-1.69 0-2.18-.56-2.18-2.25.04-140.41.02-280.82.05-421.23 0-20.92 14.14-37.64 34.81-41.34 2.59-.46 5.25-.71 7.87-.73 12.18-.08 24.37.01 36.55-.08 2-.01 2.54.56 2.54 2.55-.04 76.81-.03 153.61-.04 230.42zM239.72 425.49c0-76.72.01-153.45-.04-230.17 0-1.89.51-2.46 2.41-2.46 25.59.05 51.17.05 76.76.01 1.85 0 2.63.38 2.63 2.5-.05 139.82-.06 279.65-.02 419.47 0 10.33-2.51 19.72-9.07 27.81-8.1 9.99-18.66 15.33-31.49 15.6-13.04.28-26.09.04-39.13.11-1.82.01-2.1-.68-2.09-2.28.04-76.86.04-153.72.04-230.59zm201.46-217.43c0 33.05-.01 66.1.04 99.15 0 1.49-.51 2.36-1.7 3.16a8295.47 8295.47 0 0 0-37.63 25.67c-1.21.83-2.04.77-3.23-.04-12.4-8.52-24.83-16.99-37.27-25.45-1.17-.8-1.97-1.56-1.97-3.23.05-65.96.05-131.92.05-197.87 0-3.11 0-3.12 2.99-3.12h75.89c2.84 0 2.83.01 2.83 2.79-.01 32.98 0 65.96 0 98.94zM359.59 345.1c2.58 1.75 4.87 3.29 7.15 4.85 10.6 7.22 21.2 14.42 31.76 21.7 1.35.93 2.27.89 3.61-.04 12.27-8.45 24.6-16.81 36.92-25.2.56-.38 1.14-.74 1.96-1.26.09.79.19 1.25.19 1.72 0 75.42-.01 150.85.04 226.27 0 2.07-.68 2.52-2.59 2.52-25.51-.05-51.02-.05-76.53 0-2.03 0-2.69-.56-2.69-2.69.05-75.28.04-150.56.05-225.84 0-.55.07-1.08.13-2.03zm200.98 200.83c-.05 23.3-18.44 41.98-41.22 41.87-22.47-.1-40.68-18.97-40.6-42.05.08-23.21 18.39-41.81 41.1-41.76 22.48.05 40.77 18.89 40.72 41.94zM284.32 721.88c-.91 4.61-1.84 9.22-2.73 13.84-1.92 9.99-3.81 19.98-5.72 29.97-.6 3.17-1.25 6.32-1.82 9.5-.23 1.29-.84 1.81-2.17 1.77-2.58-.08-5.16-.08-7.74 0-1.43.05-2.06-.56-2.32-1.91-1.22-6.26-2.49-12.5-3.73-18.75-1.91-9.62-3.81-19.25-5.75-28.86-.4-1.97-.91-3.92-1.37-5.88-.22.04-.43.07-.65.11 0 1.75-.01 3.5 0 5.25.13 15.99.25 31.97.43 47.96.02 1.62-.53 2.15-2.1 2.1-2.94-.09-5.88-.07-8.81 0-1.43.03-2.03-.38-2.03-1.95.04-29.04.05-58.08.02-87.11 0-1.47.45-2.03 1.96-2.01 4.66.07 9.32.06 13.97 0 1.45-.02 1.99.6 2.25 1.96 3.75 19.63 7.54 39.24 11.32 58.86.1.53.28 1.05.6 2.25.45-1.07.73-1.51.82-1.99 1.71-9.3 3.41-18.6 5.1-27.9 1.62-8.88 3.23-17.76 4.85-26.63.28-1.55.6-3.1.82-4.65.19-1.38.85-1.92 2.29-1.9 4.66.07 9.32.08 13.97 0 1.66-.03 2.04.66 2.03 2.19-.09 16.35-.14 32.69-.17 49.04-.03 12.4-.06 24.81.02 37.21.01 2.11-.66 2.76-2.7 2.65-2.64-.15-5.3-.1-7.95-.01-1.64.05-2.27-.45-2.25-2.2.13-13.19.16-26.38.24-39.57.02-3.66.13-7.31.17-10.97.01-.76-.08-1.52-.12-2.27a4.28 4.28 0 0 0-.73-.1zm92.89 4.84c-.06.67-.17 1.33-.16 2 .14 15.19.26 30.39.49 45.58.03 2.07-.58 2.8-2.66 2.68-2.71-.16-5.45-.14-8.16 0-1.96.1-2.56-.53-2.55-2.54.08-18.93.04-37.85.05-56.78 0-9.82.05-19.64-.02-29.46-.01-1.79.55-2.41 2.33-2.31 2.43.13 4.87.08 7.31.02 1.25-.03 1.96.41 2.38 1.64 5.29 15.29 10.61 30.57 15.95 45.84.29.84.73 1.64 1.1 2.45.19-.03.38-.05.57-.08.04-.71.13-1.42.11-2.13-.26-15.12-.5-30.24-.82-45.36-.04-1.72.4-2.46 2.25-2.37 2.86.13 5.74.13 8.6 0 1.86-.09 2.26.66 2.25 2.38-.06 26.02-.06 52.05-.07 78.07 0 2.87-.1 5.74.02 8.6.07 1.68-.61 2.11-2.14 2.04-2.07-.09-4.16-.11-6.23.01-1.49.08-2.19-.56-2.65-1.89-2.97-8.52-5.99-17.02-9-25.52-2.6-7.36-5.21-14.71-7.82-22.06-.11-.31-.33-.57-.5-.86-.22-.01-.42.02-.63.05zm123.46 1.58c1.37 1.29 2.95 2.16 3.53 3.46 1.2 2.71 2.5 5.62 2.65 8.5.59 11.66.74 23.35 1.09 35.03.04 1.24-.48 1.65-1.64 1.64-3.65-.02-7.31-.05-10.96.01-1.65.03-1.85-.93-1.86-2.21-.08-9.96-.13-19.93-.29-29.89-.04-2.35-.27-4.72-.71-7.02-.49-2.56-2.08-3.84-4.7-3.87-6.55-.08-5.42-.66-5.45 4.97-.06 11.9-.05 23.8.02 35.7.01 1.78-.52 2.4-2.31 2.34-3.44-.11-6.88-.08-10.32-.01-1.49.03-1.98-.51-1.98-2.01.06-29.03.08-58.07.06-87.1 0-1.54.55-1.97 2-1.96 7.16.05 14.33-.03 21.5.05 8.33.09 13.92 3.1 15.37 12.82.98 6.55 1.21 13.13.21 19.71-.61 4.04-2.21 7.54-6.21 9.84zm-18.31-18.31c0 2.72-.04 5.44.01 8.16.09 4.98-1.08 4.72 4.93 4.6 3.27-.07 4.8-1.11 5.13-4.3.47-4.6.74-9.27.54-13.89-.28-6.62-1.7-7.63-8.4-7.57-1.7.02-2.27.6-2.23 2.26.08 3.58.02 7.16.02 10.74zm39 21.4c0-7.67-.26-15.35.1-23 .19-4.01 1.05-8.11 2.32-11.93 2.04-6.11 6.61-9.64 12.98-10.9 4.39-.87 8.72-.7 12.96.58 6.09 1.83 9.46 6.35 10.81 12.28.9 3.95 1.5 8.06 1.54 12.11.16 14.11.14 28.23-.08 42.35-.08 5.13-.66 10.28-2.88 15.09-2.86 6.19-8.06 8.92-14.39 9.82-3.63.52-7.26.08-10.78-1.18-7.06-2.53-10.48-8.01-11.66-14.97-.73-4.28-.85-8.69-.96-13.04-.15-5.73-.04-11.47-.04-17.2.04-.01.06-.01.08-.01zm14.66-.31h-.14c0 7.09-.08 14.18.04 21.27.04 2.78.35 5.57.83 8.31.57 3.23 2.23 4.55 5.04 4.49 2.7-.06 4.45-1.56 4.93-4.7.44-2.82.76-5.69.77-8.54.08-14.33.07-28.65 0-42.98-.01-2.35-.3-4.72-.71-7.03-.46-2.6-2.11-4-4.47-4.21-2.47-.21-4.49.94-5.32 3.43-.56 1.67-.92 3.49-.94 5.24-.09 8.25-.03 16.48-.03 24.72zm-184.29.83c-.28 9.09-.39 18.2-.95 27.27-.18 2.99-1.25 6.03-2.41 8.84-2.61 6.3-8.04 8.87-14.36 9.76-3.56.5-7.13.05-10.57-1.15-7.07-2.48-10.53-7.93-11.74-14.9-.71-4.07-.94-8.26-.97-12.39-.11-13.04-.13-26.09.06-39.13.06-3.83.63-7.72 1.56-11.44 1.99-7.92 7.27-12.66 15.39-13.42 3.83-.36 7.91.02 11.65.97 5.98 1.53 9.38 6.19 10.46 11.97 1.05 5.66 1.31 11.5 1.57 17.27.25 5.43.05 10.89.05 16.34.09.01.18.01.26.01zm-26.34-.95h-.09c0 7.23-.09 14.47.04 21.7.05 2.91.47 5.84.97 8.72.38 2.17 1.8 3.52 4.12 3.74 2.61.24 4.33-.5 5.07-2.96.77-2.57 1.3-5.32 1.32-7.99.13-15.61.09-31.23.05-46.85 0-1.77-.31-3.57-.65-5.32-.51-2.69-2.16-4.15-4.61-4.33-2.45-.17-4.47 1.03-5.26 3.54-.55 1.75-.9 3.63-.92 5.46-.1 8.1-.04 16.2-.04 24.29zm119.04 6.77c0 12.19-.05 24.38.04 36.57.02 2.08-.58 2.78-2.66 2.67a98.19 98.19 0 0 0-9.24 0c-1.94.08-2.56-.5-2.56-2.53.08-22.87.07-45.75.07-68.62 0-1.65-.1-3.31.03-4.95.15-1.93-.7-2.54-2.52-2.45-1.93.1-3.87-.05-5.8.04-1.61.07-2.38-.44-2.32-2.19.09-2.87.07-5.74 0-8.6-.03-1.28.37-1.79 1.71-1.79 10.54.04 21.07.03 31.61.01 1.23 0 1.85.37 1.82 1.72-.06 2.94-.06 5.88 0 8.82.03 1.48-.58 2.07-2.05 2.02-1.79-.06-3.59.08-5.37-.03-2.06-.13-2.74.67-2.72 2.74.08 11.62.04 23.23.04 34.85v1.72h-.08z" />
    </svg>
  )
}

Logo.defaultProps = {
  fill: theme.colors.BuddhaGold,
}
