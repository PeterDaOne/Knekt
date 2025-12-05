export default function Logo({ color = '#1F2937', className = '' }) {
  // Generate unique filter ID to avoid conflicts when multiple logos are rendered
  const filterId = `shadow-${color.replace('#', '')}`
  
  return (
    <div className={`relative ${className}`}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Drop shadow */}
        <path
          d="M20 50 L40 25 L50 30 L60 20 L70 30 L50 75 L40 75 L30 60 L20 50 Z"
          fill={color}
          fillOpacity="0.25"
          transform="translate(3, 3)"
        />
        {/* Main logo shape - horizontal symmetrical lightning bolt/Z shape */}
        <path
          d="M20 50 L40 25 L50 30 L60 20 L70 30 L50 75 L40 75 L30 60 L20 50 Z"
          fill={color}
          filter={`url(#${filterId})`}
        />
      </svg>
    </div>
  )
}
