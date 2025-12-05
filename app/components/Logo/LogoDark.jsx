"use client";

export default function LogoDark(props) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#dark_shadow)">
        <path
          d="M27.0445 50.9458C27.2044 51.0018 27.3586 51.0567 27.5081 51.1108C28.245 51.378 29.0316 51.4107 29.7791 51.2048C30.5266 50.9988 31.202 50.5638 31.7138 49.9503L46.1144 33.5113C46.8326 32.6615 47.2954 31.6225 47.4469 30.5169C47.5983 29.4112 47.4325 28.2845 46.9707 27.2658C46.5089 26.2471 45.7698 25.3808 44.8365 24.7732C43.9033 24.1655 42.8166 23.8416 41.7093 23.8416H28.4541L23.1836 10.655C22.8378 9.78882 22.2594 9.02863 21.5117 8.45096C20.7641 7.87329 19.873 7.49788 18.9228 7.36104C17.9725 7.2242 16.9962 7.33098 16.0952 7.67159C15.1942 8.01219 14.3948 8.57517 13.7503 9.31135L-0.650373 25.7504C-1.36846 26.6002 -1.83136 27.6391 -1.98279 28.7448C-2.13421 29.8504 -1.96841 30.9771 -1.50663 31.9958C-1.04485 33.0146 -0.305721 33.8809 0.627525 34.4885C1.56077 35.0961 2.64737 35.4199 3.75469 35.4199H16.8398L11.6497 47.9063C11.3245 48.6425 11.1851 49.4575 11.2435 50.2716C11.3019 51.0856 11.5565 51.8706 11.984 52.5585C12.4115 53.2464 12.9993 53.8156 13.7018 54.2212C14.4043 54.6267 15.1992 54.8561 16.0173 54.889C16.8353 54.9219 17.6487 54.7574 18.3845 54.4086L27.0445 50.9458Z"
          fill="#F97316"
        />
      </g>
      <defs>
        <filter
          id="dark_shadow"
          x="-20"
          y="-10"
          width="112"
          height="112"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_52"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_52"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
