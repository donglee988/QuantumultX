// Quantumult X 脚本：用于抓取 CoinMarketCap 签到 Header
// 触发路径：打开 CoinMarketCap App 的签到页面时执行

if ($request && $request.method !== "OPTIONS") {
  const url = $request.url;
  const headers = $request.headers;

  if (url.includes("/v1/diamond/") || url.includes("user_info")) {
    const data = {
      url: url,
      headers: headers
    };
    $prefs.setValueForKey(JSON.stringify(data), "CMC_HEADER");
    console.log("✅ CMC Header 获取成功");
    $notify("CMC 抓包成功", "", "Header 已保存，可以开始自动签到任务");
  }
}
$done({});
