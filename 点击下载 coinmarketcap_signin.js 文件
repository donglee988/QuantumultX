/**
 * @fileoverview CoinMarketCap 自动签到
 * 说明：需先抓取 Header（token、cookie、csrf-token）并存储到变量中
 * Quantumult X 使用方式：配合 rewrite 触发 header 抓取脚本后运行本脚本任务
 */

const sign_url = 'https://api.coinmarketcap.com/v1/diamond/daily/checkin';
const sign_headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-CMC_PRO_API_KEY': $prefs.valueForKey('cmc_token') || '',
  'Cookie': $prefs.valueForKey('cmc_cookie') || '',
  'X-CMC-CSRF-TOKEN': $prefs.valueForKey('cmc_csrf') || ''
};

const sign_request = {
  url: sign_url,
  headers: sign_headers,
  method: 'POST',
  body: '{}'
};

$task.fetch(sign_request).then(response => {
  const data = JSON.parse(response.body);
  if (data && data.data && data.data.quantity) {
    $notify("CMC 签到成功", `获得 ${data.data.quantity} 钻石`, "");
  } else {
    const msg = data.status?.error_message || "未知错误";
    $notify("CMC 签到失败", msg, "");
  }
  $done();
}, reason => {
  $notify("CMC 签到接口请求失败", "", reason.error || reason);
  $done();
});
