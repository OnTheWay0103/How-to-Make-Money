# AdSense P0 整改 — 41 站线上内容级验证证据

> 验证日期：2026-09-09 | 工具：`scripts/verify-adsense-rollout.sh`
> 验证口径：不依赖 `deploy-wiki-site.sh` 退出码（并发下误报），改为逐站内容级检查
> 检查项：首页 200 + /icon.png 200 + /privacy 含新统一表述 + /privacy 旧表述残留 = 0

```
站点                              首页  icon    新表述    旧残留  判定
────────────────────────────────────────────────────────────────────────
aincradwiki                    200   200      1      0  ✅ PASS
anomalypresidentwiki           200   200      1      0  ✅ PASS
ardentwildswiki                200   200      1      0  ✅ PASS
beastreincarnationwiki         200   200      1      0  ✅ PASS
bigwalkwiki                    200   200      1      0  ✅ PASS
bombananawiki                  200   200      1      0  ✅ PASS
boneholdwiki                   200   200      1      0  ✅ PASS
crimsonmoonwiki                200   200      1      0  ✅ PASS
delveriumwiki                  200   200      1      0  ✅ PASS
dinobladewiki                  200   200      1      0  ✅ PASS
doloctownwiki                  200   200      1      0  ✅ PASS
dragonswordwiki                200   200      1      0  ✅ PASS
dwarfdelvewiki                 200   200      1      0  ✅ PASS
expeditionssamuraiwiki         200   200      1      0  ✅ PASS
fallentearwiki                 200   200      1      0  ✅ PASS
gotownwiki                     200   200      1      0  ✅ PASS
grainrotwiki                   200   200      1      0  ✅ PASS
graphitewiki                   200   200      1      0  ✅ PASS
ironnestwiki                   200   200      1      0  ✅ PASS
lowbudgetrepairswiki           200   200      1      0  ✅ PASS
lunariumwiki                   200   200      1      0  ✅ PASS
minegeonwiki                   200   200      1      0  ✅ PASS
mistfallhunterwiki             200   200      1      0  ✅ PASS
moonlightpeakswiki             200   200      1      0  ✅ PASS
mystraliawiki                  200   200      1      0  ✅ PASS
nivalisnightswiki              200   200      1      0  ✅ PASS
phantomtowerwiki               200   200      1      0  ✅ PASS
relicfirstguardianwiki         200   200      1      0  ✅ PASS
restorywiki                    200   200      1      0  ✅ PASS
sephiriawiki                   200   200      1      0  ✅ PASS
shiftatmidnightwiki            200   200      1      0  ✅ PASS
skillsandraidswiki             200   200      1      0  ✅ PASS
sovereigntowerwiki             200   200      1      0  ✅ PASS
spiritvalewiki                 200   200      1      0  ✅ PASS
taivalwiki                     200   200      1      0  ✅ PASS
tearsofmetalwiki               200   200      1      0  ✅ PASS
themoundwiki                   200   200      1      0  ✅ PASS
vahrinscallwiki                200   200      1      0  ✅ PASS
waterparksimulatorwiki         200   200      1      0  ✅ PASS
welcomeelderfieldwiki          200   200      1      0  ✅ PASS
witchspirewiki                 200   200      1      0  ✅ PASS

汇总：PASS 41 / FAIL 0 （共 41 站）
```

**结论：41/41 PASS。**
