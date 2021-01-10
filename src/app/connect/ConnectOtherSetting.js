import { ConnectEnableSetNewChat } from './ConnectEnableSetNewChat.js';
import { ConnectDisablePushGray } from './ConnectDisablePushGray.js';
export let ConnectOtherSetting = {
  components: {
    "connect-enable-set-new-chat": ConnectEnableSetNewChat,
    "connect-disable-push-gray": ConnectDisablePushGray,

  },
  template: `<div>
  <div id="PTTConnect-OtherSetting" class="form-row mb-2">
    <legend class="col-form-label col-3 pt-0">其他設定</legend>
    <div class="col">
      <connect-enable-set-new-chat></connect-enable-set-new-chat>
      <connect-disable-push-gray></connect-disable-push-gray>
    </div>
  </div>
  <!-- test push button -->
  <button id="fakebtn" class="btn ptt-btnoutline m-2 d-none" type="button">讀取測試用假推文</button>
  <!-- New version button -->
  <a id="updatebtn" class="btn ptt-btnoutline m-2 d-none"
    href="https://greasyfork.org/zh-TW/scripts/418469-youtubechatonptt" target="_blank" rel="noopener noreferrer"
    role="button">檢測到新版本</a>
</div>`,
}