export const LogoOrange = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <defs>
      <filter id="shadow-orange" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="6"
          floodOpacity="0.45"
          floodColor="#000000"
        />
      </filter>
    </defs>
    <rect width="160" height="160" fill="#1F2937" rx="16" />
    <path
      d="M95 25 L135 75 L95 75 L135 135 L25 75 L65 75 L25 25 Z"
      fill="#F97316"
      filter="url(#shadow-orange)"
      style={{ borderRadius: "8px" }}
    />
  </svg>
);

export const LogoDark = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <defs>
      <filter id="shadow-dark" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="6"
          floodOpacity="0.45"
          floodColor="#000000"
        />
      </filter>
    </defs>

    <rect width="160" height="160" fill="#F97316" rx="16" />

    <path
      d="M95 25 L135 75 L95 75 L135 135 L25 75 L65 75 L25 25 Z"
      fill="#1F2937"
      filter="url(#shadow-dark)"
      style={{ borderRadius: "8px" }}
    />
  </svg>
);
