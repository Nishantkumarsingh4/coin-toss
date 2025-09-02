
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { tossCoin } from '@/store/tossSlice';
import { useMemo, useState } from 'react';

export default function Coin() {
  const dispatch = useDispatch();
  const { status, lastResult } = useSelector((s) => s.toss);
  const flipping = status === 'loading';
  const imageSrc = useMemo(
    () => (lastResult === 'Tails' ? '/coin-tail.svg' : '/coin-head.svg'),
    [lastResult]
  );

  // 🔑 Add a counter to trigger fresh animation every toss
  const [flipCount, setFlipCount] = useState(0);

  const handleToss = () => {
    setFlipCount((prev) => prev + 1);
    dispatch(tossCoin());
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        key={flipCount} // ensures re-render for each toss
        animate={{ rotateY: 720 }}
        transition={{ duration: 1.6 }}
        className="w-40 h-40 relative select-none"
      >
        <Image src={imageSrc} alt="Coin" fill className="object-contain" priority />
      </motion.div>

      <button
        onClick={handleToss}
        disabled={flipping}
        className="btn-primary disabled:opacity-60"
      >
        {flipping ? 'Flipping...' : 'Toss Coin 🎲'}
      </button>

      {/* {lastResult && (
        <div className="text-xl font-semibold">
          Result: <span className="text-green-600">{lastResult}</span>
        </div>
      )} */}
    </div>
  );
}
