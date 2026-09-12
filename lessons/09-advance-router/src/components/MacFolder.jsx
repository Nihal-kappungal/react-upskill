import { useState } from "react";

const colorMap = {
  blue: {
    front: "from-[#70c9ff] via-[#3da9f5] to-[#1685dc]",
    back: "from-[#8ed5ff] via-[#54b6f7] to-[#2695e5]",
    edge: "bg-[#117dca]",
    glow: "shadow-[0_18px_45px_rgba(25,145,225,0.28)]",
  },
  purple: {
    front: "from-[#b98cff] via-[#9361ee] to-[#7441d5]",
    back: "from-[#c9a8ff] via-[#a978f5] to-[#8752e8]",
    edge: "bg-[#6c38c9]",
    glow: "shadow-[0_18px_45px_rgba(130,75,220,0.25)]",
  },
  green: {
    front: "from-[#78e5a1] via-[#45c97b] to-[#28aa5e]",
    back: "from-[#96efb7] via-[#64d992] to-[#39bc70]",
    edge: "bg-[#209b52]",
    glow: "shadow-[0_18px_45px_rgba(45,190,105,0.25)]",
  },
  orange: {
    front: "from-[#ffd27c] via-[#ffb632] to-[#f39413]",
    back: "from-[#ffe09b] via-[#ffc85d] to-[#ffa52a]",
    edge: "bg-[#e88b0b]",
    glow: "shadow-[0_18px_45px_rgba(245,160,30,0.25)]",
  },
};

export default function MacFolder({
  label = "Projects",
  count,
  files = [],
  color = "blue",
  size = "md",
  onClick,
}) {
  const [active, setActive] = useState(false);

  const theme = colorMap[color] || colorMap.blue;

  const sizes = {
    sm: {
      folder: "h-28 w-36",
      label: "text-sm",
      tab: "h-6 w-16",
    },
    md: {
      folder: "h-40 w-52",
      label: "text-base",
      tab: "h-8 w-24",
    },
    lg: {
      folder: "h-52 w-72",
      label: "text-xl",
      tab: "h-10 w-32",
    },
  };

  const currentSize = sizes[size] || sizes.md;

  const handleClick = () => {
    setActive((prev) => !prev);
    onClick?.();
  };

  return (
    <div className="group inline-flex flex-col items-center select-none">
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Open ${label} folder`}
        className={`
          relative
          ${currentSize.folder}
          cursor-pointer
          outline-none
          [perspective:900px]
        `}
      >
        {/* Back folder */}
        <div
          className={`
            absolute
            left-0 top-0
            h-full w-full
            rounded-[22px]
            bg-linear-to-br
            ${theme.back}
            ${theme.glow}
            transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]
            group-hover:-translate-y-3.5
            group-hover:scale-95
            group-hover:rotate-x-10
            ${active ? "-translate-y-1 scale-[0.98]" : ""}
          `}
        />

        {/* Single masked folder face with the tab built into its top edge */}
        <div
          className={`
            absolute
            inset-x-0 bottom-0
            h-[88%]
            overflow-hidden
            rounded-[20px]
            border border-white/30
            bg-linear-to-br
            ${theme.front}
            shadow-[inset_0_1px_1px_rgba(255,255,255,.65),inset_0_-8px_20px_rgba(0,0,0,.08)]
            transition-all
            duration-500
            ease-[cubic-bezier(.2,.8,.2,1)]
            group-hover:-translate-y-2
            group-hover:rotate-x-[-20deg]
            ${active ? "scale-[0.98]" : ""}
          `}
          style={{
            clipPath:
              "polygon(0 14%, 30% 14%, 37% 0, 69% 0, 76% 14%, 100% 14%, 100% 100%, 0 100%)",
          }}
        >
          {/* Glass highlight */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-br
              from-white/30
              via-transparent
              to-black/10
            "
          />

          {/* Top shine */}
          {/* <div
            className="
              pointer-events-none
              absolute left-4 right-4 top-2
              h-px
              bg-white/70
            "
          /> */}

          {/* Bottom edge */}
          <div
            className={`
              absolute bottom-0 left-0 right-0
              h-2
              ${theme.edge}
              opacity-10
            `}
          />

          {/* Label */}
          {/* <div
            className="
              absolute inset-x-0 bottom-5
              flex flex-col items-center
              text-white
              drop-shadow-[0_1px_2px_rgba(0,0,0,.25)]
            "
          >
            <span className={`${currentSize.label} font-semibold`}>
              {label}
            </span>

            {count !== undefined && (
              <span className="mt-0.5 text-xs font-medium text-white/75">
                {count} {count === 1 ? "item" : "items"}
              </span>
            )}
          </div> */}
        </div>

        {/* 3D bottom shadow */}
        <div
          className="
            absolute
            -bottom-2 left-5 right-5
            h-4
            rounded-full
            bg-black/15
            blur-xl
            transition-all duration-500
            group-hover:scale-90
            group-hover:opacity-70
          "
        />
      </button>
    </div>
  );
}
