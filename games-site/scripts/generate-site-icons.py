#!/usr/bin/env python3
"""
generate-site-icons.py — 为每个 wiki 站生成差异化 public/icon.png（512x512）

背景：41 站 lib/seo-config.ts 均引用 ogImage: '/icon.png'，但 public/icon.png
全部缺失 → 全站 og:image 404。本脚本为每站生成一张确定性差异化图标。

设计：以站名 SHA-256 决定色相（同站永远同色、不同站必然不同色），
      深色底 + 亮色层叠三角（呼应"关卡/进度"），底部标注站名。

用法：
  python3 scripts/generate-site-icons.py                  # 生成全部站
  python3 scripts/generate-site-icons.py themoundwiki     # 只生成指定站

依赖：Pillow（已验证 PIL 11.3.0 可用）
"""

import colorsys
import hashlib
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SIZE = 512

# 非站点目录，跳过
SKIP = {"dashboard", "docs", "keyword-results", "scripts", "node_modules", ".agent"}


def hue_for(name: str) -> int:
    """站名 → 稳定色相 0-359。同站恒定，不同站高概率不同。"""
    digest = hashlib.sha256(name.encode("utf-8")).hexdigest()
    return int(digest[:8], 16) % 360


def hsl(h: int, s: float, l: float) -> tuple[int, int, int]:
    """HSL(h 0-360, s 0-1, l 0-1) → RGB 0-255"""
    r, g, b = colorsys.hls_to_rgb(h / 360.0, l, s)
    return int(r * 255), int(g * 255), int(b * 255)


def load_font(size: int):
    """优先用可缩放的默认字体；老版本 PIL 回退到点阵字体。"""
    try:
        return ImageFont.load_default(size=size)
    except TypeError:
        return ImageFont.load_default()


def make_icon(site: str) -> Image.Image:
    hue = hue_for(site)
    bg = hsl(hue, 0.42, 0.12)          # 深色底
    accent_dim = hsl(hue, 0.65, 0.40)
    accent = hsl(hue, 0.85, 0.58)
    text_color = hsl(hue, 0.30, 0.86)

    img = Image.new("RGB", (SIZE, SIZE), bg)
    draw = ImageDraw.Draw(img, "RGBA")

    # 层叠三角（向上），呼应关卡 / 进度
    cx = SIZE // 2
    cy = 150
    for half_w, height, color, alpha in (
        (150, 78, accent_dim, 165),
        (112, 60, accent, 210),
        (76, 42, (255, 255, 255), 235),
    ):
        draw.polygon(
            [(cx, cy), (cx - half_w, cy + height), (cx + half_w, cy + height)],
            fill=color + (alpha,),
        )
        cy += int(height * 1.18)

    # 站名（去掉 wiki 后缀），过长时缩小字号
    label = site[:-4] if site.endswith("wiki") else site
    font_size = 54 if len(label) <= 14 else (42 if len(label) <= 20 else 34)
    font = load_font(font_size)
    bbox = draw.textbbox((0, 0), label, font=font)
    draw.text(
        ((SIZE - (bbox[2] - bbox[0])) / 2, 430),
        label,
        font=font,
        fill=text_color,
    )
    return img


def main() -> int:
    targets = sys.argv[1:]
    if targets:
        sites = [t for t in targets if (ROOT / t).is_dir()]
        missing = [t for t in targets if not (ROOT / t).is_dir()]
        for m in missing:
            print(f"  ⚠️  目录不存在，跳过: {m}")
    else:
        sites = sorted(
            d.name
            for d in ROOT.iterdir()
            if d.is_dir() and d.name.endswith("wiki") and d.name not in SKIP
        )

    if not sites:
        print("❌ 未找到任何站点目录")
        return 1

    made = 0
    for site in sites:
        public = ROOT / site / "public"
        if not public.is_dir():
            print(f"  ⚠️  {site}/public 不存在，跳过")
            continue
        make_icon(site).save(public / "icon.png", "PNG", optimize=True)
        made += 1
        print(f"  ✅ {site}/public/icon.png  (hue={hue_for(site)})")

    print(f"\n完成：{made}/{len(sites)} 站图标已生成")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
