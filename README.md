# Project name：餐廳清單

- 此專案讓使用者可以建立自己想要的美食地圖，包含瀏覽、新增、刪除和修改餐廳資訊（如評價、google map 等等）

# Features：功能列表

- 註冊或登入系統
  - 使用者可以手動註冊帳號，或是綁定 FB account。
  - 使用者可以手動或是 FB 登入。
  - 使用者登出、註冊失敗或登入失敗時，會看到對應的系統訊息
- 登入後，使用者可以建立專屬的餐廳清單，並且可以執行下列動作：
  - 新增、瀏覽、修改、刪除、搜尋任何一家餐廳資訊
  - 可以按照自己的喜好排序餐廳

# Environment Setup：環境安裝

[Node.js](https://nodejs.org/en/)
[Express](https://expressjs.com/)
[Mongodb](https://www.mongodb.com/)
[Heroku](https://dashboard.heroku.com/)

# Installing Procedure：專案安裝

1.開啟終端機，新建資料夾後，並 cd 到預計要儲存的專案位置，執行：

```
mkdir restaurant_list //建立專案資料夾
```

```
cd restaurant_list //切換到專案資料夾
```

```
git clone https://github.com/DennisWei9898/restaurant_list.git
```

2.安裝套件和種子資料：

```
npm install //安裝 npm 套件
```

```
npm run seed //安裝種子資料
```

3.啟動伺服器，執行 app.js 檔案

```
npm run dev //成功啟動後，終端機會顯示：This server is running on http://localhost:3000
            //mongodb connected!
```

4.打開網址，體驗餐廳清單

> 進入下列網址來體驗餐廳清單服務： [http://localhost:3000/](https://)

5.如果無法設定，請檢查是否有設好.env 檔案中的資訊

# 作業過程

- 搞清楚 passport 的運作機制，也更了解 req.flash 如何串接的過程
- FB 登入是之前一直想學習的功能，現在終於做到了！
