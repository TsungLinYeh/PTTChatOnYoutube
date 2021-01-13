import { ConnectPluginSettingInputElement } from './PluginSettings/ConnectPluginSettingInputElement.js';
import { ConnectOtherSetting } from './PluginSettings/ConnectOtherSetting.js';
import { ConnectNewVersion } from './PluginSettings/ConnectNewVersion.js';
export let ConnectPluginSetting = {
  components: {
    //"connect-plugin-height": ConnectPluginHeight,
    "connect-other-setting": ConnectOtherSetting,
    "connect-new-version": ConnectNewVersion,
  },
  template: `<div class="my-4">
  <div class="text-center mb-2">
    <h4 class="mb-1 mt-0">套件設定</h4>
    <p class="mt-1 mb-0">輸入數值之後按Enter確認</p>
  </div>
  <div class="my-3 form-row px-2">
    <plugin-setting-input setting-name="PluginHeight" description="套件長度(px)" default-value="850" max="850" min="180" column="6">
    </plugin-setting-input>
    <plugin-setting-input setting-name="PushInterval" description="推文更新(s)" default-value="2.5" max="360" min="2.5" column="6">
    </plugin-setting-input>
  </div>
  <div class="my-3 form-row px-2">
    <plugin-setting-input setting-name="Fontsize" description="字體尺寸(px)" default-value="18" max="30" min="9" column="6">
    </plugin-setting-input>
    <plugin-setting-input setting-name="ChatSpace" description="推文間隔(行)" default-value="0.8333" max="5" min="0" column="6">
    </plugin-setting-input>
  </div>
  <div class="my-3 form-row px-2">
    <connect-other-setting></connect-other-setting>
  </div>
  <div class="my-3 form-row px-2">
    <connect-new-version></connect-new-version>
  </div>
</div>`,
}