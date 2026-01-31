"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface AnnouncementBannerProps {
  message: string
  // Optional: If you want to control visibility from parent, but we'll manage internally for simplicity
  // isVisible?: boolean;
  // onClose?: () => void;
}

export function AnnouncementBanner({ message }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div
      className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm py-2 px-4 flex items-center justify-between shadow-md z-10 flex-shrink-0"
      role="alert"
    >
      <p className="flex-1 text-center">{message}</p>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="关闭公告"
        title="关闭公告"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
