/* eslint-disable no-undef */
/* eslint-disable no-undef */
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    home
    <van-cell-group v-for="(mac, index) in tagList" :key='mac'>
      <!-- <van-cell title="单元格" value="内容" /> -->
      <van-cell title="nfc tag" :value='index'  :label="mac" />
    </van-cell-group>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import { NfcClass } from "@/assets/nfc";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  // name: 'Home',
  // components: {
  //   // HelloWorld
  // }
  tagList: string[] = []
  mounted() {
    // Read NDEF formatted NFC Tags
    // eslint-disable-next-line no-undef
    // const nfcInstance = new NfcClass()
    // nfcInstance.initialize()
    document.addEventListener("deviceready", this.onDeviceReady, false);
  }
  onDeviceReady() {
    // app.receivedEvent('deviceready');
    // Read NDEF formatted NFC Tags
    if (typeof nfc == "undefined") {
      console.log("您的机器没有NFC功能,或者NFC功能没有打开");
    } else {
      nfc.addTagDiscoveredListener(
        (nfcEvent: any) => {
          console.log("NFC已经读取");
          console.log("nfcEvent is ", nfcEvent);
          const tag = nfcEvent.tag;
          console.log("tag is ", tag)
          const oRfid = nfc.bytesToHexString(tag.id);
          console.log("oRfid is ", oRfid);
          const rfid = oRfid.toUpperCase();
          console.log("rfid is ", rfid);
          this.tagList.push(rfid)
        },
        () => {
          // success callback
          console.log("Waiting for NDEF tag");
        },
        (error: any) => {
          // error callback
          console.log("Error adding NDEF listener ", error);
        }
      );
    }
   
  }
}
</script>
