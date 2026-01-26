"use client"

import { Search, Book, Command, FileText, Home } from "lucide-react"

interface BottomNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
  // showIframeView is no longer needed for conditional rendering of main content,
  // but still useful for determining which set of nav items to show if needed.
  showIframeView: boolean
}

export function BottomNav({ activeTab, onTabChange, showIframeView }: BottomNavProps) {
  const navItems = [
    {
      name: "首页",
      icon: Home,
      type: "home",
      ariaLabel: "首页",
      action: () => onTabChange("home"),
    },
    {
      name: "搜云盘",
      icon: Search,
      type: "search",
      ariaLabel: "搜索云盘",
      action: () => onTabChange("search"),
    },
    {
      name: "搜飞书",
      icon: Book,
      type: "feisoo",
      ariaLabel: "搜索飞书",
      action: () => onTabChange("feisoo"),
    },
    {
      name: "指令库",
      icon: Command,
      type: "prompts",
      ariaLabel: "查看指令库",
      action: () => onTabChange("prompts"),
    },
    {
      name: "知识库",
      icon: FileText,
      type: "knowledge",
      ariaLabel: "查看知识库",
      action: () => onTabChange("knowledge"),
    },
    // Removed "返回" item
  ]

  return (
    <nav
      className="absolute bottom-0 left-0 right-0 bg-white/70 border-t border-gray-200 z-20 flex-shrink-0 backdrop-blur-md px-5 py-0 text-transparent border-none shadow-xl rounded-none"
      role="navigation"
      aria-label="主导航"
    >
      <div className="flex justify-around items-stretch overflow-x-auto whitespace-nowrap">
        {navItems.map((item) => {
          const isActive = activeTab === item.type
          const IconComponent = item.icon
          return (
            <button
              key={item.type}
              className={`flex flex-col items-center p-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 group my-0 py-1.5 rounded-3xl px-12 ${isActive ? "text-blue-600 bg-blue-50 shadow-sm" : "text-gray-500 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md"}
            active:scale-95
          `}
              aria-label={item.ariaLabel}
              title={item.ariaLabel}
              onClick={item.action}
            >
              <IconComponent
                className={`w-6 h-6 mb-1 transition-colors duration-200 ${
                  isActive ? "text-blue-600" : "group-hover:text-blue-600"
                }`}
              />
              <span className="text-xs font-medium">{item.name}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
