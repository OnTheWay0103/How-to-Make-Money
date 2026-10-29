# Nivalis Nights — 素材表（2026-10-30 扩词）

> 对应页面：`nivalisnightswiki/content/guides/fill-venue-inventory-stuck-guide.md`
> 采集方式：Steam 官方公告（`dig @1.1.1.1 store.steampowered.com` 取 IP 后 `curl --resolve`）、社区 wiki、Google Suggest（只作需求证据，不作事实来源）。

## 搜索需求证据（Google Suggest，2026-10-30，hl=en&gl=us）

采集命令：`node scripts/harvest-keywords.mjs --game "Nivalis Nights" --seeds "stuck,bug,not working,quest,phone,green thumb,how to fix,curfew"`

命中且站内无覆盖的症状词：

- `nivalis nights stuck on fill venue inventory`（后缀 stuck）
- `nivalis nights stuck on buy ingredients`（后缀 stuck）
- `nivalis nights buy ingredients bug`（后缀 bug）
- `nivalis nights stuck on fill venue inventory` 与 `curfew quest`、`green thumb quest`、`quest failed` 同批出现，说明开局任务卡点是成组需求

## 来源 1：A 官方 — Steam 公告 Update #1
- URL: https://store.steampowered.com/news/app/1488490/view/699903325897752826
- 抓取日期：2026-10-30（公告日期 2026-10-01）
- 关键内容（原文）：
  - `Fixed an issue with the intro tutorial quest objective, where buying only the required amount from the shopping list could later cause confusion when completing the "Fill Venue Inventory" objective`
  - `Improved workflow for staff taking orders, also fixing a case where that action could be repeated multiple times when ingredients need to be restocked`
  - `Improved manager staff behaviour when buying ingredients`

## 来源 2：A 官方 — Steam 公告 Update #2
- URL: https://store.steampowered.com/news/app/1488490/view/699903325897753685
- 抓取日期：2026-10-30（公告日期 2026-10-02）
- 关键内容（原文）：
  - `Decorative furniture with a configured storage or refrigerated storage value will now correctly count towards the venue's storage space`
  - `Configured the Kitchen Buffet as a storage unit holding 100 normal storage space and 50 refrigerated storage space`
  - `Older ingredients are now used first for mealmaking`
  - 员工任务优先级：Serve a meal → Process ingredient → Make meal → Take new order → Deliver ingredients (Manager role) → Buy ingredients (Manager role) → Manage complaint (Manager role) → Cleanup meal → Cleanup trash (Cleaner role) → Cleanup storage (Cleaner role)

## 来源 3：A 官方 — Steam 公告 Update #7
- URL: https://store.steampowered.com/news/app/1488490/view/693150463100454120
- 抓取日期：2026-10-30（公告日期 2026-10-29）
- 关键内容（原文）：
  - `Managers now do the ingredient delivery runs. Other staff only step in when no manager is on shift.`
  - `You can no longer hire a manager for a venue that hasn't unlocked managers.`
  - `Drinks you make for a customer who leaves before the drink is ready no longer stay stuck in the drink machine.`
  - `Empty cups no longer jump back into the drink machine after a customer drinks`
  - `You can now clean up cups left in the drink machine yourself, not only your staff.`
  - `Fixed story conversations sometimes continuing as if you had made a different choice` / `Phone calls you missed are no longer skipped for good`（本轮未用，留给后续任务页）

## 来源 4：A 官方 — Steam 商店页
- URL: https://store.steampowered.com/app/1488490/Nivalis_Nights/
- 抓取日期：2026-10-30
- 关键内容：`Grow your business, manage restaurants and nightclubs...`；商店页未公布仓储槽位与开局任务细节 → 仓储流程只能标 Community。

## 来源 5：B 社区 — 社区 wiki（Fill Venue Inventory）
- URL: https://nivalisnightsgame.wiki/business/nivalis-nights-restocking
- 抓取日期：2026-10-30（页面标注 Updated / Verified 2026-10-03）
- 关键内容（原文摘录）：
  - `Buying ingredients puts them in your personal inventory... you must transfer them into the venue Cupboards or Refrigerators for the restaurant to use`
  - `owning ingredients in your backpack is not the same as stocking the business`
  - `The beginner guide places Chicken in refrigerated storage and Onions and Ramen Noodles in the cupboard.`
  - `The restaurant can consume ingredients while operating, so recheck the live requirement and business inventory.`
  - `include the objective text and version in a report`

## 玩家反馈（真实症状）

- 需求侧：Google Suggest 直接出现 `stuck on fill venue inventory` / `stuck on buy ingredients`（2026-10-30 采集），是本轮唯一能拿到的一手“玩家在搜什么”证据。
- 官方侧：Update #1 公告自述该开局任务目标会造成 confusion 并修复，等同官方承认这是真实卡点。
- 无法访问：本机 `steamcommunity.com` 全线超时（DNS 投毒 + IP 不可达）、Reddit 403，Steam 评测接口 302 跳首页，故未能附 Steam 评测原话。
