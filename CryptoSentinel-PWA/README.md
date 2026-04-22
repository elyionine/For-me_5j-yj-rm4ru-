# CryptoSentinel PWA — W11 + iPhone 完整教學

## 為什麼選 PWA？
| | Swift/Xcode | **CryptoSentinel PWA** |
|--|--|--|
| 開發環境 | 需要 macOS | **Windows 11 ✓** |
| 編輯工具 | Xcode | **任何文字編輯器** |
| iPhone 使用 | 需上架 App Store | **Safari 直接打開** |
| iPhone 編輯 | 不行 | **可用 Replit / 記事本 app** |
| 更新 | 重新編譯 | **改 index.html 存檔即可** |

---

## 方法一：GitHub Pages（推薦，免費永久）

### 步驟
1. 去 [github.com](https://github.com) 建立免費帳號
2. 新建 Repository（建議命名 `sentinel`，設為 **Private**）
3. 上傳這 4 個檔案：
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon.svg`
4. 進入 Settings → Pages → Source 選 `main` branch → Save
5. 等 1-2 分鐘，得到網址：`https://你的帳號.github.io/sentinel`

### iPhone 安裝步驟
1. 用 Safari 開啟上面的網址
2. 點擊底部分享按鈕 `⬆`
3. 選「加入主畫面」
4. 名稱輸入「Sentinel」→ 新增
5. 桌面出現圖示 → 完成！

---

## 方法二：本機使用（無網路也能編輯）

### W11 本機測試
```
1. 安裝 VS Code（免費）
2. 安裝 "Live Server" 插件
3. 開啟資料夾 → index.html → 右鍵 "Open with Live Server"
4. 瀏覽器自動開啟 http://localhost:5500
```

### iPhone 連本機測試（同一 WiFi 下）
```
1. 在 W11 CMD 執行：ipconfig 找到你的 IP（例如 192.168.1.5）
2. iPhone Safari 開啟：http://192.168.1.5:5500
3. 可以測試，但 WebSocket 和 API 需要網路
```

---

## iPhone 上直接編輯

### 工具推薦
| App | 說明 | 費用 |
|-----|------|------|
| **Replit** | 完整雲端 IDE，可直接改 + 預覽 | 免費 |
| **GitHub Mobile** | 直接編輯 repo 裡的檔案 | 免費 |
| **Textastic** | 本地 HTML 編輯器 | 付費 |

### Replit 流程
1. iPhone 安裝 Replit App
2. Import 你的 GitHub Repo
3. 直接改 `index.html` 的程式碼
4. Replit 提供即時預覽網址
5. Push 到 GitHub → GitHub Pages 自動更新

---

## API Key 申請（全免費）

### Blockchair（最重要，BTC/ETH 排行榜）
1. 去 https://blockchair.com/api
2. 申請 Shared Key（每月 1萬次免費）
3. 在 App「設定」頁面貼上

### Etherscan（ETH 錢包查詢）
1. 去 https://etherscan.io/apis
2. 建立帳號 → API Keys → 新增
3. 每天 10萬次免費
4. 在 App「設定」頁面貼上

### NewsAPI（Trump Jr 新聞）
1. 去 https://newsapi.org
2. Get API Key（免費）
3. 每天 100 次（個人使用夠用）
4. 在 App「設定」頁面貼上

### Binance WebSocket
- 不需要任何 Key
- App 啟動後自動連線

---

## 自訂 Trump Jr 錢包地址

在「設定」頁面新增，或直接編輯 `index.html` 搜尋 `builtIn`:

```javascript
const builtIn = [
  { address:'填入地址', label:'標籤名稱', chain:'ETH', builtin:true },
  { address:'填入BTC地址', label:'標籤', chain:'BTC', builtin:true },
];
```

### 哪裡找最新 Trump Jr 相關地址？
- **Arkham Intelligence**：https://platform.arkm.com → 搜尋 "Trump"
- **鏈上分析報導**：Decrypt、CoinDesk 相關報導
- **X (Twitter)**：搜尋 `$TRUMP wallet address` 或 `Trump Jr crypto wallet`

---

## 檔案說明
```
index.html    ← 全部功能都在這一個檔案（你主要編輯這個）
manifest.json ← PWA 安裝設定（通常不需要改）
sw.js         ← 離線快取（通常不需要改）
icon.svg      ← App 圖示（可自行換）
```
