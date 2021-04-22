# Project name：餐廳清單

- 此專案讓使用者可以建立自己想要的美食地圖，包含瀏覽、新增、刪除和修改餐廳資訊（如評價、google map 等等）

# Features：功能列表

- Ｃ：使用者可以新增喜歡的餐廳
  - 在首頁點選`新建餐廳`中的`Create`按鈕，可以新建你心儀的餐廳
  - 輸入好資訊後，按下`Save`，即可在首頁觀看到已經存擋的餐廳
- Ｒ：使用者可以瀏覽全部或一家餐廳的資訊
  - 點選`Detail`或是`餐廳圖片`，可以進去瀏覽詳細的餐廳資訊
  - 點選`Back`可以回到首頁
- Ｕ：使用者可以修改一家餐廳的資訊
  - 點選`Edit`可以編輯該餐廳的詳細資訊
- Ｄ：使用者可以刪除任何一家不想要的餐廳
  - 在首頁點選該餐廳卡片中的`delete`按鈕，即可刪除不想要的餐廳
  - 若進去瀏覽該餐廳詳細資訊，發現這不是心目中的樣子，亦可按下`Delete`按鈕，刪除後自動回到首頁

# Environment Setup：環境安裝

[Node.js](https://nodejs.org/en/)
[Express](https://expressjs.com/)
[Mongobd](https://www.mongodb.com/)

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

# 作業過程

- 先快速按照前面的流程複習一遍，並想辦法將route和資料流的部分處理好

- 建置餐廳資料格式那裡卡了一下，後面有參考同學和學長的做法，但感覺應該有更好的方式，可以直接建構出來

- 未被解決的部分：有試著想要導入搜尋功能，但好像無法呈現，好奇後面的課程是否會教到 www，期待期待
