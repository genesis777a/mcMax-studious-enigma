var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// telegramChatbot/tmp_scripts_649/7ad1c536-d130-4efd-8207-7f708d5f3dde_temp.ts
var ad1c536_d130_4efd_8207_7f708d5f3dde_temp_exports = {};
__export(ad1c536_d130_4efd_8207_7f708d5f3dde_temp_exports, {
  default: () => sendTypingAction
});
module.exports = __toCommonJS(ad1c536_d130_4efd_8207_7f708d5f3dde_temp_exports);
async function sendTypingAction({ chatId }, { auth }) {
  const token = auth.getKey();
  if (token === void 0) {
    throw new Error("Please select a key for this node.");
  }
  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendChatAction`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, action: "typing" })
    }
  );
  return response.json();
}
