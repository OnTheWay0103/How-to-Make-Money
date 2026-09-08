# QA 审计报告 — ADSENSE-P0-A1：41 站隐私页 AdSense 表述统一

- **审计员**：内容合规审计员（岗位卡 `docs/agents/01`，Profile `docs/agents/02`）
- **任务编号**：ADSENSE-P0-A1
- **材料版本**：41 站矩阵 @ commit 07348d87（HEAD 核对一致，工作区改动前干净）
- **日期**：2026-09-09
- **改动状态**：41 个 `*/app/privacy/page.tsx` 已改（工作区，**未 commit**，留待主 Agent 统一处理）

## 问题背景

41 站共用 AdSense 账号但未过审、全仓无实际广告位。原 privacy 页存在两类与事实不符/自相矛盾的表述：

- **33 站**：`We use Google AdSense to display advertisements on our website.`（确定语气 = 不实陈述）
- **8 站**：`We intend to apply for Google AdSense ...`（与已存在 ads.txt + layout loader 脚本矛盾）

## 统一后文本（41/41 站相同）

段落（section 4 首段 <p>）：
> We may display advertisements on this website through Google AdSense. Where advertising is enabled, Google uses cookies to serve ads based on your prior visits to our site and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.

列表项（section 3 <ul>）：
> Display relevant advertisements via Google AdSense (where advertising is enabled)

## 每站变更摘要（41/41）

| 站 | 原段落变体 | 原列表项 | 段落→新 | 列表项→新 |
|----|-----------|---------|--------|----------|
| aincradwiki | A（We use…） | plain | ✅ | ✅ |
| anomalypresidentwiki | B（intend to apply） | (if approved…) | ✅ | ✅ |
| ardentwildswiki | A | plain | ✅ | ✅ |
| beastreincarnationwiki | A | plain | ✅ | ✅ |
| bigwalkwiki | A | plain | ✅ | ✅ |
| bombananawiki | B | (if approved…) | ✅ | ✅ |
| boneholdwiki | A | plain | ✅ | ✅ |
| crimsonmoonwiki | B | (if approved…) | ✅ | ✅ |
| delveriumwiki | A | plain | ✅ | ✅ |
| dinobladewiki | A | plain | ✅ | ✅ |
| doloctownwiki | A | plain | ✅ | ✅ |
| dragonswordwiki | A | plain | ✅ | ✅ |
| dwarfdelvewiki | A | plain | ✅ | ✅ |
| expeditionssamuraiwiki | A | plain | ✅ | ✅ |
| fallentearwiki | B | (if approved…) | ✅ | ✅ |
| gotownwiki | A | plain | ✅ | ✅ |
| grainrotwiki | A | plain | ✅ | ✅ |
| graphitewiki | A | plain | ✅ | ✅ |
| ironnestwiki | A | plain | ✅ | ✅ |
| lowbudgetrepairswiki | A | plain | ✅ | ✅ |
| lunariumwiki | A | plain | ✅ | ✅ |
| minegeonwiki | A | plain | ✅ | ✅ |
| mistfallhunterwiki | A | plain | ✅ | ✅ |
| moonlightpeakswiki | A | plain | ✅ | ✅ |
| mystraliawiki | A | plain | ✅ | ✅ |
| nivalisnightswiki | A | plain | ✅ | ✅ |
| phantomtowerwiki | A | plain | ✅ | ✅ |
| relicfirstguardianwiki | A | plain | ✅ | ✅ |
| restorywiki | A | plain | ✅ | ✅ |
| sephiriawiki | B | (if approved…) | ✅ | ✅ |
| shiftatmidnightwiki | A | plain | ✅ | ✅ |
| skillsandraidswiki | A | plain | ✅ | ✅ |
| sovereigntowerwiki | B | plain | ✅ | ✅ |
| spiritvalewiki | A | plain | ✅ | ✅ |
| taivalwiki | A | plain | ✅ | ✅ |
| tearsofmetalwiki | A | plain | ✅ | ✅ |
| themoundwiki | B | (if approved…) | ✅ | ✅ |
| vahrinscallwiki | A | plain | ✅ | ✅ |
| waterparksimulatorwiki | A | plain | ✅ | ✅ |
| welcomeelderfieldwiki | B | (if approved…) | ✅ | ✅ |
| witchspirewiki | A | plain | ✅ | ✅ |

> 变体 A = `We use Google AdSense to display advertisements on our website.`；变体 B = `We intend to apply for Google AdSense...`；plain = 无后缀列表项。34 站列表项为 plain；7 站（anomalypresident / bombanana / crimsonmoon / fallentear / sephiria / themound / welcomeelderfield，均为 B 变体站）为 `(if approved for the program)`。两种均统一为新列表项（sovereigntower 是 8 个 B 变体站中唯一列表项为 plain 的站）。上述形态已用 `git show HEAD:` 逐一核对，非推测。

## 完成标准实测证据

1. **标准 1**：`grep -rc 'We use Google AdSense' */app/privacy/page.tsx` → 全 41 行均为 `:0`，**残留 0**
2. **标准 2**：`grep -rc 'intend to apply' */app/privacy/page.tsx` → 全 41 行均为 `:0`，**残留 0**
3. **标准 3**：`grep -rl 'We may display advertisements on this website through Google AdSense' */app/privacy/page.tsx | wc -l` = **41**
4. **标准 4**：opt-out 链接 41/41 保留（脚本实测）：
   - `https://www.google.com/settings/ads` missing: none
   - `https://www.aboutads.info/choices/` missing: none
   - （含第三方 vendor 披露段落 section 4 的 "Specifically:" 列表，未动）
5. **标准 5**：抽样 3 站 diff（themoundwiki=B 变体、sephiriawiki=B 变体+approved 列表项、aincradwiki=A 变体）见下
6. **标准 6**：`git diff --stat` → **41 files changed, 82 insertions(+), 82 deletions(-)**，全部为 `*/app/privacy/page.tsx`，每站恰 2 行替换（段落行 + 列表项行），**无任何越界文件**

### 抽样 diff（标准 5）

**aincradwiki**（A 变体站）：
```diff
-        <li>Display relevant advertisements via Google AdSense</li>
+        <li>Display relevant advertisements via Google AdSense (where advertising is enabled)</li>
-        We use Google AdSense to display advertisements on our website. Google uses cookies to serve ads based on your prior visits to our site and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
+        We may display advertisements on this website through Google AdSense. Where advertising is enabled, Google uses cookies to serve ads based on your prior visits to our site and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
```

**sephiriawiki**（B 变体站）：
```diff
-        <li>Display relevant advertisements via Google AdSense (if approved for the program)</li>
+        <li>Display relevant advertisements via Google AdSense (where advertising is enabled)</li>
-        We intend to apply for Google AdSense to display advertisements on our website. If approved, Google may use cookies to serve ads based on your prior visits to our site and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
+        We may display advertisements on this website through Google AdSense. Where advertising is enabled, Google uses cookies to serve ads based on your prior visits to our site and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
```

**themoundwiki**（B 变体站 + 基准实现）：
```diff
-        <li>Display relevant advertisements via Google AdSense (if approved for the program)</li>
+        <li>Display relevant advertisements via Google AdSense (where advertising is enabled)</li>
-        We intend to apply for Google AdSense to display advertisements on our website. If approved, Google may use cookies to serve ads based on your prior visits to our site and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
+        We may display advertisements on this website through Google AdSense. Where advertising is enabled, Google uses cookies to serve ads based on your prior visits to our site and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
```

## 执行前一致性预检（防止结构猜测）

替换前对 41 站逐一脚本比对，全部通过（无「第三种形态」，未做任何猜测改写）：
- 段落变体不匹配：0 / 41
- 列表项变体不匹配：0 / 41
- 缺 opt-out 链接：0 / 41

## 遵守的约束（MUST NOT 自查）

- ✅ 未动 About / Terms / Contact / FAQ 任何内容
- ✅ 未删改 opt-out 链接与第三方 vendor 披露段落（section 4 "Specifically:" 三列表项原样保留）
- ✅ 未新增任何公司名/地址/人名/资质
- ✅ 未 git commit / push（改动留在工作区）
- ✅ 未动部署配置（vercel.json / rootDirectory）
- ✅ 未动 `*/content/` 攻略内容

## 异常与备注

- 无异常。任务描述与实测一致：33 站 A 变体 + 8 站 B 变体 = 41/41 全覆盖。
- 补充事实（供主 Agent 参考）：section 2 Usage Data 列表项仍有 `may be collected via Google AdSense if the site is approved for the program`（条件语气，无矛盾，不在本任务替换范围内，未动）。
- 下一环节（A3）建议：build + 部署 41 站 + 线上验证；本任务为纯文本替换，风险低。
