import { Book } from "lucide-react" // Using Lucide for consistency

export function HomeCards() {
  return (
    <div className="px-4 pb-2">
      {/* Top Banner: 内测邀请中 */}
      <div className="relative bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4 flex items-center shadow-sm">
        <div className="absolute -top-2 -left-2 bg-orange-400 text-white text-xs px-2 py-1 rounded-md shadow-md">
          内测邀请中
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-orange-200 rounded-full mr-3">
          <Book className="w-5 h-5 text-orange-700" />
        </div>
        <div>
          <h3 className="font-semibold text-sm text-orange-800">共建知识库</h3>
          <p className="text-xs text-orange-600">知识创造收入</p>
        </div>
      </div>

      {/* 最新活动 (Latest Activities) */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm relative overflow-hidden">
        <h2 className="font-semibold text-base mb-3">最新活动</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>最新活动消息通知公告</li>
          <li>最新活动消息通知公告</li>
          <li>最新活动消息通知公告</li>
          <li>最新活动消息通知公告</li>
        </ul>
        <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* AI最新应用 (Latest AI Applications) */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm">
        <h2 className="font-semibold text-base mb-3">AI最新应用</h2>
        <div className="grid grid-cols-4 gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full h-16 bg-gray-200 rounded-md"></div>
          ))}
        </div>
      </div>

      {/* 常用工具 (Common Tools) */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm">
        <h2 className="font-semibold text-base mb-3">常用工具</h2>
        <div className="grid grid-cols-4 gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full h-16 bg-gray-200 rounded-md"></div>
          ))}
        </div>
      </div>

      {/* 福利羊毛 (Welfare Wool) */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm relative overflow-hidden">
        <h2 className="font-semibold text-base mb-3">福利羊毛</h2>
        <div className="w-full h-24 bg-gray-200 rounded-md mb-2"></div> {/* Placeholder image */}
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-50 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* 热门知识库 (Popular Knowledge Base) */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm">
        <h2 className="font-semibold text-base mb-3">热门知识库</h2>
        <div className="grid grid-cols-4 gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full h-16 bg-gray-200 rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
