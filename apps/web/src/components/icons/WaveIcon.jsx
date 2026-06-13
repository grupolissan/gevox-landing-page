import React from 'react';

const WaveIcon = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="10" y="40" width="8" height="20" rx="4" fill="currentColor" className="animate-wave" />
      <rect x="25" y="30" width="8" height="40" rx="4" fill="currentColor" className="animate-wave-delay-1" />
      <rect x="40" y="20" width="8" height="60" rx="4" fill="currentColor" className="animate-wave-delay-2" />
      <rect x="55" y="30" width="8" height="40" rx="4" fill="currentColor" className="animate-wave-delay-3" />
      <rect x="70" y="35" width="8" height="30" rx="4" fill="currentColor" className="animate-wave-delay-4" />
      <rect x="85" y="42" width="8" height="16" rx="4" fill="currentColor" className="animate-wave" />
    </svg>
  );
};

export default WaveIcon;