import React, { useRef, useState } from "react";
import CardActions from "./CardActions";
import RecentTransactions from "./RecentTransactions";

const MIN_HEIGHT = 160;
const MAX_HEIGHT = typeof window !== "undefined" ? window.innerHeight : 800;

export default function MobileDrawer() {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(MIN_HEIGHT);

  const startY = useRef(0);
  const startHeight = useRef(height);

  const onTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    startHeight.current = sheetRef.current?.offsetHeight || MIN_HEIGHT;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const currentY = e.touches[0].clientY;
    const diff = startY.current - currentY; 
    let newHeight = startHeight.current + diff;

    if (newHeight < MIN_HEIGHT) newHeight = MIN_HEIGHT;
    if (newHeight > MAX_HEIGHT) newHeight = MAX_HEIGHT;

    if (sheetRef.current) {
      sheetRef.current.style.height = `${newHeight}px`;
    }
  };

  const onTouchEnd = () => {
    const currentHeight = sheetRef.current?.offsetHeight || height;

    let snapTo = MIN_HEIGHT;


    if (currentHeight > MAX_HEIGHT * 0.6) {
      snapTo = MAX_HEIGHT;
    }

    if (sheetRef.current) {
      sheetRef.current.style.transition = "height 0.25s ease";
      sheetRef.current.style.height = `${snapTo}px`;

      setTimeout(() => {
        if (sheetRef.current) sheetRef.current.style.transition = "";
      }, 250);
    }

    
    setHeight(snapTo);
  };

  return (
    <>
      <div
        ref={sheetRef}
        className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-xl md:hidden"
        style={{
          height: MIN_HEIGHT,
          touchAction: "none",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >

        <div className="h-full overflow-y-auto">
          <CardActions />
          <div className="mx-6 mb-16">
            <RecentTransactions />
          </div>
        </div>
      </div>
    </>
  );
}
