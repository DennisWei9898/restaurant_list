# 餐廳清單

- 此專案讓使用者可以查看想去餐廳的介紹，並且可以搜尋

## 功能列表

- 可以搜尋餐廳名稱
- 可以進入餐廳的單獨分頁，看更多介紹

# 安裝

1.開啟終端機，並 cd 到預計要儲存的專案位置，執行：

> git clone //複製餐廳清單資料夾

2.安裝套件：

> npm install express `安裝 express 套件`

> npm run dev `安裝專案中的 pcakage.json 腳本`

3.建置 express server

> nodemon app.js `啟動 express server`

4.打開網址，體驗餐廳清單

> 進入下列網址來體驗餐廳清單服務： [http://localhost:3000/](https://)

# 作業過程

- 先快速按照前面的流程複習一遍，第一次先把 movie list 的 json 和資料換成 restaurant 的資料

- 後續再慢慢把 index show main 的 handlebars 換成作業所需的格式

- 未被解決的部分：餐廳清單中的 icon 都跑不出來(電話，地址，類別等)，已經試了很多方法但還是無法像 codepan 中一樣有出現，有試著將 codepan 的 CSS 另建資料夾，一樣引入到 main.handlebars，但都沒有用
