interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  transparentBg?: boolean;
}

export function SigeLogoIcon({
  className = 'h-10 w-auto',
  transparentBg = false,
}: {
  className?: string;
  transparentBg?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 170.28 85.58"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SIGnageExpert Logo"
    >
      {/* Background container */}
      <rect
        width="170.28"
        height="85.58"
        rx="8"
        fill={transparentBg ? 'transparent' : '#141824'}
        stroke="#334155"
        strokeWidth={transparentBg ? '0' : '1.5'}
      />

      {/* S */}
      <path
        fill="#8da6d6"
        d="M14.09,37.29V34.63l.35-.35h4l.35.35V36a.94.94,0,0,0,1,1h2.7a1,1,0,0,0,1-1V31.23l0,0a.91.91,0,0,0-.95-1h-4a4.08,4.08,0,0,1-3.86-2.19,4.65,4.65,0,0,1-.52-2.14V18.52a4.22,4.22,0,0,1,4.38-4.39h5.38a4.06,4.06,0,0,1,3.82,2.2,5.13,5.13,0,0,1,.56,2.19v2.66l-.35.34h-4l-.35-.34V19.81h0a.94.94,0,0,0-1-.95h-2.7c-.43,0-.78.17-.86.43a1.42,1.42,0,0,0-.13.56v4.81a1,1,0,0,0,1,.9h4a4.07,4.07,0,0,1,3.82,2.19,5.18,5.18,0,0,1,.56,2.19v7.35A8.66,8.66,0,0,1,28,38.67,4.29,4.29,0,0,1,26.38,41a4.58,4.58,0,0,1-2.53.68H18.47A4.32,4.32,0,0,1,14.09,37.29Z"
      />

      {/* I */}
      <path
        fill="#8da6d6"
        d="M35.25,41.29l-.35.34h-4l-.34-.34V14.44l.34-.35h4l.35.35Z"
      />

      {/* G */}
      <path
        fill="#8da6d6"
        d="M41.92,14.13H47.3a4.06,4.06,0,0,1,3.82,2.2,5.13,5.13,0,0,1,.56,2.19v4l-.35.3h-4l-.35-.3V19.81l0,0a.85.85,0,0,0-.95-.9h-2.7c-.43,0-.78.17-.86.43a1.42,1.42,0,0,0-.13.56V36a.94.94,0,0,0,1,1H46a.9.9,0,0,0,.82-.47A2,2,0,0,0,47,36v-3.7H46l-.34-.34v-4l.34-.35h5.37l.35.35v9.36c-.17,2.28-1.59,4.38-4.38,4.38H41.92a4.22,4.22,0,0,1-3.86-2.23,4.7,4.7,0,0,1-.52-2.15V18.52A4.22,4.22,0,0,1,41.92,14.13Z"
      />

      {/* E */}
      <path
        fill="#8da6d6"
        d="M42.31,55.43h5l.34.35v4l-.34.3h-5v6.75h9.07l.3.3v4l-.3.34H37.93l-.35-.34V44.35l.35-.35H51.38l.3.35v4l-.3.34H42.31Z"
      />

      {/* White box frame surrounding NAGE EXPERT */}
      <path
        fill="#ffffff"
        d="M54,14.14V71.49H156.19V14.14Zm98.36,53.49H57.82V18h94.51Z"
      />

      {/* N */}
      <path
        fill="#8da6d6"
        d="M71.46,41.36l-.24.27h-3.1l-.26-.17L64.23,30.6V41.36l-.27.27h-3.1l-.27-.27V20.73l.27-.26H64l.27.19,3.63,10.87V20.73l.26-.26h3.1l.24.26Z"
      />

      {/* A */}
      <path
        fill="#8da6d6"
        d="M85.92,41.33l-.23.33H82.58l-.26-.23-.92-4.92H77.57l-.93,4.92-.26.23H73.31L73,41.33,77.17,20.7l.26-.2h4.13l.23.2Zm-7.66-8.45H80.7l-1.22-6.6Z"
      />

      {/* G */}
      <path
        fill="#8da6d6"
        d="M90.59,20.5h4.12a3.13,3.13,0,0,1,2.94,1.68,4,4,0,0,1,.43,1.69V27l-.26.23H94.71L94.45,27V24.86h0a.7.7,0,0,0-.76-.73H91.61a.66.66,0,0,0-.66.33,1.09,1.09,0,0,0-.1.43V37.34a.72.72,0,0,0,.76.72h2.08a.7.7,0,0,0,.63-.36,1.55,1.55,0,0,0,.13-.43V34.43h-.76l-.26-.26V31.1l.26-.27h4.13l.26.27v7.19a3.34,3.34,0,0,1-3.37,3.37H90.59a3.23,3.23,0,0,1-3-1.72,3.57,3.57,0,0,1-.4-1.65V23.87A3.24,3.24,0,0,1,90.59,20.5Z"
      />

      {/* E */}
      <path
        fill="#8da6d6"
        d="M103.47,29.28h3.86l.27.27v3.1l-.27.23h-3.86v5.18h7l.24.23V41.4l-.24.26H100.1l-.26-.26V20.76l.26-.26h10.33l.24.26v3.11l-.24.26h-7Z"
      />

      {/* X */}
      <path
        fill="#8da6d6"
        d="M73.44,64.76l-.24.36H69.61L69.34,65,67,59.48,64.69,65l-.23.13H60.82l-.23-.36,4.33-10.2-4.33-10.2.23-.4h3.64l.23.17L67,49.64l2.31-5.51.27-.17H73.2l.24.4-4.33,10.2Z"
      />

      {/* P */}
      <path
        fill="#8da6d6"
        d="M85.4,45.94a4.34,4.34,0,0,1,.47,2V53a3.88,3.88,0,0,1-.17,1.19A3.69,3.69,0,0,1,82,56.9H78.67v8l-.27.27H75.3L75,64.89V44.26L75.3,44H82A3.58,3.58,0,0,1,85.4,45.94Zm-3.13,6.57V48.32a.73.73,0,0,0-.76-.69H78.67V53.3h2.84A.79.79,0,0,0,82.27,52.51Z"
      />

      {/* E */}
      <path
        fill="#8da6d6"
        d="M91.26,52.78h3.86l.27.26v3.1l-.27.24H91.26v5.18h7l.23.23v3.1l-.23.27H87.89l-.26-.27V44.26l.26-.26H98.23l.23.26v3.1l-.23.27h-7Z"
      />

      {/* R */}
      <path
        fill="#8da6d6"
        d="M111.05,53.24a3.74,3.74,0,0,1-2.54,3.47l2.5,8.08-.19.37h-3.11l-.26-.2-2.51-8.06h-1.09v8l-.26.27h-3.11l-.26-.27V44.26l.26-.26h6.7a3.6,3.6,0,0,1,3.41,1.94,4.41,4.41,0,0,1,.46,2Zm-3.6-.73V48.32a.73.73,0,0,0-.76-.69h-2.84V53.3h2.84A.79.79,0,0,0,107.45,52.51Z"
      />

      {/* T */}
      <path
        fill="#8da6d6"
        d="M123.46,47.36l-.26.27h-3.37V64.89l-.26.27H116.5l-.27-.27V47.63h-3.36l-.23-.27v-3.1l.23-.26H123.2l.26.26Z"
      />
    </svg>
  );
}

export default function Logo({
  className = '',
  size = 'md',
  showSubtitle = true,
  transparentBg = false,
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official SIGnageExpert SVG vector emblem */}
      <div className="relative shrink-0 transition-transform duration-200 hover:scale-105 filter drop-shadow-md">
        <SigeLogoIcon
          className={`${sizeClasses[size]} w-auto aspect-[170.28/85.58]`}
          transparentBg={transparentBg}
        />
      </div>

      {showSubtitle && (
        <div className="hidden sm:flex flex-col justify-center leading-tight pl-0.5 border-l border-slate-800 ml-1 py-0.5">
          <span className="text-[12px] font-bold text-slate-200 tracking-tight">
            Robert Chlebowski
          </span>
          <span className="text-[10px] text-cyan-400 font-semibold tracking-wider">
            SIGE
          </span>
        </div>
      )}
    </div>
  );
}
