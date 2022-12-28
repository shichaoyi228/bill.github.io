//1. 改變文件標題（h1）內容
/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/


//2. 點一下會跳出 alert
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
//也可以跟下面變換照片的一起用，誰在上面誰先發動


//2.5 按讚功能
var $likeIcon = document.getElementById("like-icon");	//利用ID抓出icon圖片元素
var $likeCount = document.getElementById("like-count"); //利用ID抓出按攢計數元素
var count = 0;

/*
$likeIcon.addEventListener("click", function(){			//寫入函數監聽，每按一下就啟動計數一次
	count += 1;
	$likeCount.innerHTML = count;
})
*/

$likeIcon.onclick = function(){			//用類似3.的函數測試，
	count += 1;
	$likeCount.innerHTML = count;
}



//3. 同一個位置，交換圖片(2張)
var myImage = document.getElementById('fishing-cat');	//document.querySelector()抓出選擇器(這裡是element)
														//圖片超過一張，改用ID抓
myImage.onclick = function() {							//將.onclick 設定為一個function(匿名函數)
    let mySrc = myImage.getAttribute('src');			//getAttribute()抓出屬性(attribute)(這裡是src)
    if ( mySrc === 'images/cat.png' ) {					//設定conditionals
      myImage.setAttribute ('src','images/xmas.png');		//setAttribute()給予屬性
    } else {
      myImage.setAttribute ('src','images/cat.png');
    }
}
//我給了兩張圖片到html上，但是只有一張(程式碼比較上面的)「原地」變換照片，並不是交換位置


//4. 客製化歡迎訊息
			//按鈕新增名字-->儲存-->下次可直接讀取	//若讀取不到-->執行setUserName()	//第一次使用應該會主動跳出(執行)
//先編輯index.html檔案，增加<button>Change user</button>
//設定按鈕和h1
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//設定setUserName()函數
function setUserName() {
  let myName = prompt('Please enter your name.');	//prompt()會產生對話視窗，使用者可以輸入資料
   if(!myName || myName === null) {					//新增一個if-else，來檢查是否為輸入名字或是輸入空白名字 || 或
    setUserName();									//不可以取消(值=null)，可以輸入空白，但不能不輸入就按確認(值=!myName)
  } else {
  localStorage.setItem('name', myName);				//localStorage是一個API
  myHeading.innerHTML = 'Hello, ' + myName;
  }
}
/*
這個函式包含了一個會產生一個對話視窗的 prompt() (en-US) 函式，有點像 alert()，只是 prompt() 會要求使用者輸入一些資料，並在使用者點選確認之後，將內容儲存在一個變數裡面。
接著，我們呼叫一個名稱為 localStorage 的 API，這個 API 可以讓使用者先將一些資料儲存在瀏覽器裡面，之後有需要的話再取出來使用。
我們使用 localStorage 的 setItem() 函式來建立並且把資料儲存到一個名稱為 'name' 的變數裡，再把包含者用者名字的 myName 的值指定給她。
最後，我們將一個字串跟使用者的名字指定給標題的 innerHTML 特性：
*/

//設定運作條件：
//初始化程式碼
if(!localStorage.getItem('name')) {						//如果沒有name，XXX為false，!XXX會為true
  setUserName();										//執行這個function
} else {
  let storedName = localStorage.getItem('name');		//getItem() 取出變數""的value
  myHeading.innerHTML = 'Hello, ' + storedName;
}
/*
這個區塊一開始使用了邏輯負運算子（邏輯非）來檢查 name 這個物件是否存在。如果沒有，那就執行 setUserName() 這個函式並且創造她。如果有了（例如：使用者已經在上一次造訪網頁時就設定過了），我們就使用 getItem() 函式來取得儲存的名字，並且將標題的 innerHTML 特性設定為一個字串加上使用者的名字，也就是我們在 setUserName() 函式裡做的事情。
*/

//最後，把以下的 onclick 事件處理器跟按鈕綁定，如此一來，每次點選按鈕時就會執行 setUserName()。這將允許使用者透過點選那個按鈕來重新設定一個新的名字：
myButton.onclick = function() {
  setUserName();
}

/*
現在當您造訪這個網頁時，她會詢問您的名字，並且給您一個客製化過的歡迎訊息。在這之後，您也可以隨時透過點選那個按鈕來更改名字。順帶一提，因為這組客製化過的訊息是存在 localStorage 裡的，所以即使您將網頁關起來，她還是會保留著，所以當您下次開啟這個網頁時，這段客製化的訊息依然會出現！
*/
