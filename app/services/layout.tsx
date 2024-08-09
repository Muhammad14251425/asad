import React, { ReactNode } from 'react'
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'], // Adjust as necessary
  weight: ['400', '700'], // Add the weights you need
});

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${playfairDisplay.className}`}>
      {children}
    </div>
  )
}

export default layout