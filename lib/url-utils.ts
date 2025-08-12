// 搜索引擎URL生成器
export function getEncryptedUrl(engine: string, keyword: string): string {
  // 引擎参数映射表
  const appMap: { [key: string]: string } = {
    soali: "",
    baidu: "bnd",
    quark: "quark",
    xunlei: "xunleipan",
  }

  // Directly use encodeURIComponent, no Base64 encoding
  const b64Encode = (str: string) => encodeURIComponent(str)

  // Generate base URL
  const baseUrl = "https://soali.net/search?"

  // URL encode the keyword
  const encodedKeyword = b64Encode(keyword)

  // Build URL
  let url = baseUrl + "keyword=" + encodedKeyword

  // Add engine parameter (if needed)
  if (engine !== "soali" && appMap[engine]) {
    url += "&app=" + appMap[engine]
  }

  return url
}
