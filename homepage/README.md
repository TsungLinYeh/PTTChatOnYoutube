Youtube聊天室顯示PTT推文
=======================
在Youtube及其他[支援網站](#支援網站-點擊項目可跳轉至使用教學)觀看實況或實況紀錄時載入PTT討論串推文

**套件主要有以下兩個功能：**

1. **實況：** 即時顯示討論串最新推文，並且可以直接在套件內直接推文

2. **實況紀錄** (目前僅支援Youtube的實況紀錄)： ~~設定好影片開台時間後就能根據影片時間顯示當時的推文~~ 現在會自動抓取開台時間了
<p align='center'>
    <img src='https://raw.githubusercontent.com/zoosewu/PTTChatOnYoutube/master/images/samplemain.gif' width='70%'>
</p>

## 支援網站 (點擊項目可跳轉至使用教學)：
* [Youtube](#youtubetwitch)
* [Twitch](#youtubetwitch)
* [Holotools](#holotools)
* [Holodex](#holodex)
* [Niji-mado](#niji-mado)


## 如何安裝：

**新使用者：**

1. 安裝[暴力猴](https://violentmonkey.github.io/)
2. 安裝[本套件](https://greasyfork.org/zh-TW/scripts/418469-pttchatonyt)

**舊使用者：**

* 腳本安裝之後每天會自動更新一次
* 手動檢查更新:點右上角的暴力猴 -> 設定 (齒輪圖示) -> 檢查更新 (重新整理圖示)

## 如何使用：
### Youtube、Twitch：
* 實況或實況紀錄的聊天室左上方會有一個P的按鈕，點擊就能打開介面

### Holotools：
* 右上方控制列中會有一個P的按鈕，點擊就能開闔介面
* P按鈕的上方有佈局變更按鈕，可以切換至直立式螢幕模式

### Holodex：
* 在空的分割中會有一個紫色的P按鈕，點擊後會打開含有套件的聊天室分割
* 若要瀏覽Youtube聊天室，可以點擊左上方P按鈕暫時隱藏PTT聊天室
* 若要調整大小、位置，可以點擊左下方的編輯按鈕，完成後點擊下方確認按紐即可回復到滿版畫面

* **註：** 一個分頁中僅允許一個PTT聊天室存在，若在其他分割中打開介面會讓聊天室移到該分割中
* **註：** 因Holodex改版頻繁，如果套件沒有在分割內正常運作，可切換為舊的顯示模式


### Niji-mado：
* 右方會有一個P的按鈕，點擊就能打開介面

## 基本操作：
* 登入：輸入PTT帳號與密碼並登入

* 搜尋文章：
   * 使用代碼：輸入包含看板名稱的完整文章代碼，範例：**#1V-m0SMK (C_Chat)**  
   (文章完整代碼獲得方法：在文章標題或文章內部鍵入大寫Q即可顯示複製)
   
   * 使用標題：點擊下拉選單，選單內會顯示預設及常用選項  
    若要手動添加選項可以點擊**新增其他選項**按鈕，輸入看板及欲搜尋的標題

    * **註：** 標題搜尋功能僅會進入到最新的文章，請確保使用的關鍵字可以找到正確的文章

* 文章讀取完成後會自動轉跳到聊天室介面，享受你的聊天室: )
    * 實況：會自動每2.5秒重新載入一次推文，並且可以推文參與討論。

    * 實況紀錄：會自動計算影片當下的時間並捲動到當時的推文。

    * **註：** 如果離開網頁時有個視窗一閃而過，那是背景執行的term.ptt.cc關閉視窗的警告動作，是正常現象。

[腳本介紹](https://github.com/zoosewu/PTTChatOnYoutube/tree/master/homepage): 如果你想想查看詳細的腳本介紹。

[Github](https://github.com/zoosewu/PTTChatOnYoutube/tree/master): 如果你想查看完整程式碼或是想要自己下載腳本測試、修改。

[回報問題或建議](https://github.com/zoosewu/PTTChatOnYoutube/issues): 有任何建議或是問題都可以在這邊回報，方便我追蹤進度。

如果你沒有github帳號，也可以依照[問題回報範例](https://github.com/zoosewu/PTTChatOnYoutube/blob/master/.github/ISSUE_TEMPLATE/bug-report.md)及[建議範例](https://github.com/zoosewu/PTTChatOnYoutube/blob/master/.github/ISSUE_TEMPLATE/feature-request.md)在PTT內私信給我(Zoosewu)。

## 贊助

如果你覺得這個套件好用，歡迎[點我](https://qr.opay.tw/eZHf2)贊助或使用下方QR Code。

[![](https://payment.opay.tw/Upload/Broadcaster/2303549/QRcode/QRCode_C65AA1C8A89CB53AF4D93286E44468BF.png "贊助連結")](https://qr.opay.tw/eZHf2)

## 腳本功能
套件所有資料全部都在你的瀏覽器處理，
用你的瀏覽器撈資料再顯示出來，
沒有經過第三方的伺服器。

**紀錄重播功能**
* 在Youtube實況紀錄顯示PTT推文。
* 自動計算影片當下的時間並捲動到當時的推文。

**實況功能**
* 在實況顯示PTT推文。
* 定時更新文章最新推文。
* 直接推文參與討論。

## 其他注意事項

**term.ptt.cc使用者注意須知**

    如果你是透過瀏覽器使用PTT，並且有安裝其他PTT的輔助腳本例如自動登入/自動跳過畫面的話，
    請在"其他"腳本最前面加上以下兩行程式碼，這是讓其他腳本不會干擾背景執行的PTT。
```js
let isTopframe = (window.top === window.self);
if (!isTopframe) throw "[Script Stopped: This script should run in top frame only.]";
```
新增完之後應該長這樣：
![在PTT腳本附加額外程式碼的正確位置](https://raw.githubusercontent.com/zoosewu/PTTChatOnYoutube/master/images/addscript.png "腳本間加程式碼示意圖")

**有時候P的按鈕沒有冒出來給我用**

    請到github issue回報給我。

**如果出現奇怪的現象或是你想了解腳本實際運作的情況**

~~可以進入腳本說明欄並點開除錯模式，會顯示更完整的PTT畫面，更多套件資訊，以及測試用的假文章載入。~~

    套件測試版，所有測試功能都啟用以方便回報。

**我的瀏覽器說我的帳號被盜了**

    因為腳本本身是把你的帳號密碼傳給背景執行的PTT去登入，讀取帳號密碼欄位傳出去的行為有時候會被判定為盜帳號，

    剛開始開發的時候瀏覽器也一直說我被盜，但是開發到後面Google就沒有說了，**我完全不知道為什麼**，我當時害怕極了。

    本套件並且沒有架設任何伺服器去撈取資料，僅是單純的在你的前端開一個PTT幫你登入。

    並且帳號密碼的傳輸過程都有加密過，盡可能保護帳號的安全性。

    所有程式碼都沒有做任何的壓縮或混淆，在greasyfork、github以及你的瀏覽器都可以查看完整的程式碼以供任何人檢視，

    如果對此套件還有疑慮的話請勿使用。

**影片沒有顯示聊天室 請問怎麼打開介面**

    目前只支援有聊天室的實況或實況紀錄 未來可能會支援沒有顯示聊天室的影片

**我直接用PTT畫面登入之後 它卻說我還沒登入**

    請避免手動操作PTT畫面裡的PTT以免造成爬蟲壞掉

**套件一直說PTT無回應**

    晚上為PTT使用尖峰時段，負載過大時PTT會不給連線，只能稍微等一下再重新嘗試。

**套件的自動滾動有時候會壞掉**

    請到github issue回報給我，並詳述什麼情況下會壞掉，壞掉前最後一次滾動的樣子有沒有異常。

**載入聊天室之後整個網頁都很lag**

    請到github issue回報給我。

**套件原本好好的，突然就壞掉了**

    如果原本可以使用變成壞掉的話，可以試試看重開瀏覽器或重開機，
    如果還是一樣有問題請到github issue回報給我。

**我有其他疑問想問但是這邊沒有寫**

    請回報給我，或在PTT原串下面推文回應。

## 其他預覽圖
<p align='center'>
    <img src='https://raw.githubusercontent.com/zoosewu/PTTChatOnYoutube/master/images/sample1.png' width='70%'>
</p>
<p align='center'>
    <img src='https://raw.githubusercontent.com/zoosewu/PTTChatOnYoutube/master/images/sample2.png' width='70%'>
</p>
<p align='center'>
    <img src='https://raw.githubusercontent.com/zoosewu/PTTChatOnYoutube/master/images/sample3.png' width='70%'>
</p>
<p align='center'>
    <img src='https://raw.githubusercontent.com/zoosewu/PTTChatOnYoutube/master/images/sample4.png' width='70%'>
</p>
<p align='center'>
    <img src='https://raw.githubusercontent.com/zoosewu/PTTChatOnYoutube/master/images/sample5.png' width='70%'>
</p>
<p align='center'>
    <img src='https://raw.githubusercontent.com/zoosewu/PTTChatOnYoutube/master/images/sample6.png' width='70%'>
</p>

## 聲明

本套件僅做PTT與Youtube的連線，除此之外並不會連到任何伺服器，所以不會蒐集任何關於你的資訊

所有程式碼都沒有做任何的壓縮或混淆，在greasyfork、github以及你的瀏覽器都有完整的程式碼以供任何人檢視。

請確保瀏覽實況或紀錄檔時，沒有任何其他PTT的腳本同時啟用；如果有的話請參閱完整網站說明並跟著操作。

本套件盡可能保證套件在操作PTT時的安全性，並盡可能避免帳號資訊在傳輸過程中被第三方所竊取。

任何使用套件的人士 須自行承擔一切風險，本人不會負責任何因使用此套件所造成的任何形式的損失。

使用本套件所造成任何形式的帳號損害，包含但不限於帳號遭到竊取、推文而招致水桶或帳號註銷，本人一概不負責。