export let ConnectStreamTimeSetting = {
  template: `<div id="PTTConnect-Time-Setting" class="form-row mb-2 d-none">
  <div class="form-group col-8">
    <label for="appt-time">實況重播開台時間:</label>
    <input id="stream-time" type="time" name="stream-time" step="2">
  </div>
  <div class="form-check col-4 pl-4">
    <input type="checkbox" class="form-check-input" id="streambeforepost">
    <label class="form-check-label ml-2" for="streambeforepost">發文前已開台</label>
  </div>
</div>`,
}