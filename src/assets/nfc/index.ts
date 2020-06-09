// export class NfcClass {
//   // Application Constructor
//   initialize() {
//     this.bindEvents();
//   }
//   // Bind Event Listeners
//   //
//   // Bind any events that are required on startup. Common events are:
//   // 'load', 'deviceready', 'offline', and 'online'.
//   bindEvents() {
//     document.addEventListener("deviceready", this.onDeviceReady, false);
//   }
//   // deviceready Event Handler
//   //
//   // The scope of 'this' is the event. In order to call the 'receivedEvent'
//   // function, we must explicitly call 'app.receivedEvent(...);'
//   onDeviceReady() {
//     function failure(reason: any) {
//       console.log("启动错误");
//       console.log("启动错误" + reason);
//     }
//     console.log("启动成功");
//     //按钮事件
//     // document.addEventListener("backbutton", eventBackButton, false); //返回键
//     // document.addEventListener("menubutton", eventMenuButton, false); //菜单键
//     // document.addEventListener("searchbutton", eventSearchButton, false); //搜索键
//     initNFC();
//   }
// }

// // //返回键
// // function eventBackButton() {
// //   // window.location.href = "indexList.html";
// // }
// // //菜单键
// // function eventMenuButton() {
// //   //window.plugins.ToastPlugin.show_short('点击了 菜单 按钮!');
// // }
// // //搜索键
// // function eventSearchButton() {
// //   //window.plugins.ToastPlugin.show_short('点击了 搜索 按钮!');
// // }

// function initNFC() {
//   console.log("NFC初始化");
//   if (typeof nfc == "undefined") {
//     console.log("您的机器没有NFC功能,或者NFC功能没有打开");
//   } else {
//     //旧系统使用监听
//     nfc.addTagDiscoveredListener(
//       nfccallback,
//       nfconSuccesscallback,
//       nfcerrorcallback
//     );
//     //新系统使用监听
//     nfc.addNdefFormatableListener(
//       nfccallback,
//       nfconSuccesscallback,
//       nfcerrorcallback
//     );
//   }
// }

// function nfccallback(nfcEvent: any) {
// 	console.log("NFC已经读取");
// 	console.log('nfcEvent is ', nfcEvent)
// 	const tag = nfcEvent.tag;
// 	console.log('tag is ', tag)
// 	const oRfid = nfc.bytesToHexString(tag.id);
// 	console.log('oRfid is ', oRfid)
// 	const rfid = oRfid.toUpperCase();
// 	console.log('rfid is ', rfid)
//   checkform(rfid);
//   //$("#state").text('rfid=' + rfid);
// }

// function nfconSuccesscallback() {
//   // error callback
//   console.log("NFC已经打开");
// }

// function nfcerrorcallback(error: any) {
//   // error callback
//   console.log("NFC功能错误！" + error);
// }

// function checkform(ID: number) {
//   //读卡和校验
// }

// // app.initialize();
