// Quantumult X: coinmarketcap_getHeader.js
// 用途：抓取 CoinMarketCap 签到所需的请求头数据（cookie、token、csrf-token）

const url = $request.url;
const headers = $request.headers;

if (url.includes("/zh/account")) {
  const cookie = headers["Cookie"] || headers["cookie"];
  const token = headers["Authorization"] || headers["authorization"];
  const csrf = headers["X-CMC_PRO_API_KEY"] || headers["x-cmc_pro_api_key"] || headers["X-CSRF-TOKEN"] || headers["x-csrf-token"];

  if (cookie) $persistentStore.write(cookie, "cmc_cookie");
  if (token) $persistentStore.write(token, "cmc_token");
  if (csrf) $persistentStore.write(csrf, "cmc_csrf");

  console.log("✅ 已成功抓取并保存 CoinMarketCap 登录 Header");
  console.log("Cookie: " + cookie);
  console.log("Token: " + token);
  console.log("CSRF: " + csrf);

  $notify("CMC 登录信息获取成功", "点击钻石页面时已抓取", "Cookie/Token/CSRF 已保存");
} else {
  console.log("❌ 不匹配的请求，未进行抓取");
}

$done({});
