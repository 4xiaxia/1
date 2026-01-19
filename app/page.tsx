"use client"

import { useState, useEffect, useRef } from "react"
import { FloatingAd } from "@/components/floating-ad"
import { BottomNav } from "@/components/bottom-nav"
import { DynamicBackground } from "@/components/dynamic-background"
import { X, RefreshCw } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { logUserActivity } from "@/actions/log-event"
import { MobileBannerAd } from "@/components/mobile-banner-ad"

export default function AISearchApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [iframeLoading, setIframeLoading] = useState(true)
  const [iframeError, setIframeError] = useState(false)
  const [iframeSrc, setIframeSrc] = useState("https://gongke.net/")
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const isMobile = useIsMobile()

  // 处理标签页切换
  const handleTabChange = async (tab: string) => {
    if (tab === activeTab) return // 避免重复加载相同标签

    setActiveTab(tab)
    setIframeLoading(true)
    setIframeError(false)

    let url = ""
    switch (tab) {
      case "home":
        url = "https://www.gongke.net/"
        break
      case "search": // "搜云盘" tab
        url = "https://soali.net/search?keyword=python&app=bnd"
        break
      case "feisoo":
        url = "https://www.feisoo.com/result/%E5%A4%A7%E6%A8%A1%E5%9E%8B"
        break
      case "prompts":
        url = "https://v0-image-analysis-7f-pied.vercel.app/"
        break
      case "knowledge":
        url = "https://govanacxtj.feishu.cn/wiki/Tkh7wGgMeiaohEkjbSEcitYBn5g"
        break
      default:
        url = "https://www.gongke.net/"
    }

    setIframeSrc(url)
    try {
      await logUserActivity("Tab Switched", { tabName: tab })
    } catch (error) {
      console.error("Error logging tab switch:", error)
    }
  }

  // 重新加载iframe
  const reloadIframe = () => {
    setIframeLoading(true)
    setIframeError(false)
    if (iframeRef.current) {
      iframeRef.current.src = iframeSrc
    }
  }

  // 初始加载
  useEffect(() => {
    const logInitialLoad = async () => {
      try {
        await logUserActivity("Page Loaded", { defaultTab: activeTab })
      } catch (error) {
        console.error("Error logging page load:", error)
      }
    }
    logInitialLoad()
  }, [activeTab])

  return (
    <div className="min-h-screen flex justify-center text-neutral-800 p-4 flex-col gap-5 px-4 items-center">
      <DynamicBackground />

      <main
        className="relative w-full max-w-4xl h-[calc(100vh-32px)] bg-white/70 flex flex-col overflow-hidden rounded-xl shadow-2xl backdrop-blur-md"
        role="main"
      >
        {/* Header and Ad conditional rendering */}
        {isMobile ? (
          <>
            {/* Header always at the top for mobile, solid background */}
            <header
              className="flex justify-between px-4 py-3 bg-white z-50 flex-shrink-0 items-center "
              role="banner"
            >
              <h1 className="text-lg font-semibold text-blue-600 m-0">AI·DEMO学习搜索</h1>
              <div className="flex gap-2">
                <button
                  id="closeBtn-mobile"
                  className="hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                  aria-label="关闭应用"
                  title="关闭应用"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </header>
            {/* Mobile Banner Ad below the header, floating over iframe */}
            <MobileBannerAd
              src="https://i.postimg.cc/sDKgryzN/2.jpg"
              alt="推广广告图片"
              href="https://govanacxtj.feishu.cn/wiki/POYswNA9dixWnSkuDwbcKaUMnXd"
              className="absolute top-[56px] inset-x-0 z-40" // Positioned below header, above iframe
            />
          </>
        ) : (
          <>
            {/* Floating Ad for desktop (positioned absolutely) */}
            <FloatingAd
              src="/pic.png"
              alt="推广广告图片"
              href="https://govanacxtj.feishu.cn/wiki/POYswNA9dixWnSkuDwbcKaUMnXd"
            />
            {/* Header for desktop (positioned relatively) */}
            <header
              className="flex justify-between px-4 py-3 bg-white/70 z-10 flex-shrink-0 backdrop-blur-md items-center "
              role="banner"
            >
              <h1 className="text-lg font-semibold text-blue-600 m-0">AI·DEMO学习搜索</h1>
              <div className="flex gap-2">
                <button
                  id="closeBtn-desktop"
                  className="hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                  aria-label="关闭应用"
                  title="关闭应用"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </header>
          </>
        )}

        <section id="mainContent" className="flex-1 relative flex flex-col" role="main" aria-label="主要内容区域">
          <div
            id="iframeContainer"
            className="flex-grow relative flex flex-col z-1 overflow-hidden iframe-mask-overlay"
          >
            <iframe
              ref={iframeRef}
              id="mainIframe"
              className={`w-[calc(100%+17px)] h-full border-none bg-white transition-opacity duration-300 ${
                iframeLoading || iframeError ? "opacity-50" : "opacity-100"
              }`}
              title="主内容区域"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="geolocation; microphone; camera"
              src={iframeSrc}
              onLoad={() => {
                setIframeLoading(false)
                setIframeError(false)
              }}
              onError={() => {
                setIframeLoading(false)
                setIframeError(true)
              }}
            ></iframe>

            {/* 加载状态 */}
            {(iframeLoading || iframeError) && (
              <div
                id="iframeStatus"
                className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 transition-opacity duration-300"
                onClick={iframeError ? reloadIframe : undefined}
                style={{ cursor: iframeError ? "pointer" : "default" }}
              >
                {iframeLoading ? (
                  <>
                    <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-600">加载页面中...</p>
                  </>
                ) : (
                  <div className="text-center">
                    <p className="text-red-500 mb-4">页面加载失败</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation() // 防止事件冒泡到父div
                        reloadIframe()
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <RefreshCw className="w-4 h-4" />
                      重新加载
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <BottomNav activeTab={activeTab} onTabChange={handleTabChange} showIframeView={true} />
      </main>
    </div>
  )
}
