"use client";

import { useEffect, useState } from "react";
import { Item, Palette, clamp } from "@/lib/tokens";
import { isHex } from "@/lib/color";
import { Icon } from "./M3Node";
import { Field, IconBtn, Section, Segmented, Slider } from "./ui";
import { useLang } from "@/lib/i18n";

export function CustomColorField({
  value,
  onChange,
  onClear,
  p,
  label,
}: {
  value?: string;
  onChange: (color: string) => void;
  onClear: () => void;
  p: Palette;
  label: string;
}) {
  const [text, setText] = useState(value ?? "");
  useEffect(() => setText(value ?? ""), [value]);

  const displayColor = value || "transparent";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, height: 38 }}>
      <label
        style={{
          position: "relative",
          width: 28,
          height: 28,
          borderRadius: 14,
          background: displayColor,
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.14), 0 1px 2px rgba(0,0,0,0.08)",
          flex: "0 0 auto",
          overflow: "hidden",
          cursor: "pointer",
          display: "grid",
          placeItems: "center",
        }}
      >
        <input
          type="color"
          value={value && isHex(value) ? value : "#6750A4"}
          onChange={(e) => {
            const hex = e.target.value.toUpperCase();
            setText(hex);
            onChange(hex);
          }}
          aria-label={label}
          style={{ position: "absolute", inset: -8, width: 44, height: 44, opacity: 0, cursor: "pointer" }}
        />
        {!value && (
          <span style={{ fontSize: 10, color: p.onSurfaceVariant, fontWeight: 700 }}>—</span>
        )}
      </label>
      <span
        style={{
          flex: 1,
          minWidth: 0,
          fontSize: 12,
          fontWeight: 500,
          color: p.onSurface,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <input
        value={text}
        placeholder="Default"
        onChange={(e) => {
          const val = e.target.value;
          setText(val);
          if (isHex(val)) onChange(val.toUpperCase());
          else if (val.trim() === "") onClear();
        }}
        onBlur={() => {
          if (value && isHex(text)) onChange(text.toUpperCase());
          else if (!text.trim()) onClear();
          else setText(value ?? "");
        }}
        spellCheck={false}
        style={{
          width: 80,
          height: 28,
          borderRadius: 14,
          border: `1px solid ${p.outlineVariant}`,
          background: p.surfaceContainerHigh,
          color: p.onSurface,
          fontSize: 11,
          fontWeight: 600,
          fontFamily: "monospace",
          textAlign: "center",
          outline: "none",
        }}
      />
      {value && (
        <button
          onClick={onClear}
          title="Reset color"
          className="m3-press"
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            border: "none",
            background: "transparent",
            color: p.onSurfaceVariant,
            cursor: "pointer",
            display: "grid",
            placeItems: "center",
            flex: "0 0 auto",
            padding: 0,
          }}
        >
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  );
}

export function CustomStyleSection({
  item,
  onChange,
  palette: p,
}: {
  item: Item;
  onChange: (patch: Partial<Item>) => void;
  palette: Palette;
}) {
  const lang = useLang();

  const hasCustom =
    item.customBg !== undefined ||
    item.customColor !== undefined ||
    item.customBorderColor !== undefined ||
    item.customBorderWidth !== undefined ||
    item.customRadius !== undefined ||
    item.customFontSize !== undefined ||
    item.customFontWeight !== undefined ||
    item.customPadding !== undefined ||
    item.customOpacity !== undefined ||
    item.customHeight !== undefined ||
    item.customShadow !== undefined;

  const handleResetAll = () => {
    onChange({
      customBg: undefined,
      customColor: undefined,
      customBorderColor: undefined,
      customBorderWidth: undefined,
      customRadius: undefined,
      customFontSize: undefined,
      customFontWeight: undefined,
      customPadding: undefined,
      customOpacity: undefined,
      customHeight: undefined,
      customShadow: undefined,
    });
  };

  const PRESET_COLORS = [
    { label: "Primary", color: p.primary },
    { label: "Container", color: p.primaryContainer },
    { label: "Secondary", color: p.secondaryContainer },
    { label: "Surface", color: p.surfaceContainerHigh },
    { label: "White", color: "#FFFFFF" },
    { label: "Dark", color: "#1E1E24" },
    { label: "Red", color: "#BA1A1A" },
    { label: "Green", color: "#2E6B38" },
    { label: "Blue", color: "#006399" },
    { label: "Amber", color: "#E08000" },
  ];

  return (
    <Section
      id="custom-styling"
      icon="tune"
      title="Custom Style"
      p={p}
      defaultOpen={false}
      right={
        hasCustom ? (
          <button
            onClick={handleResetAll}
            title="Reset custom styles"
            className="m3-press"
            style={{
              border: "none",
              background: "transparent",
              color: p.error,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: "0 6px",
            }}
          >
            <Icon name="restart_alt" size={16} />
            <span>Reset</span>
          </button>
        ) : null
      }
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Colors */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, color: p.onSurfaceVariant }}>
            Colors
          </span>

          <CustomColorField
            label="Background"
            value={item.customBg}
            onChange={(customBg) => onChange({ customBg })}
            onClear={() => onChange({ customBg: undefined })}
            p={p}
          />

          <CustomColorField
            label="Text & Icon"
            value={item.customColor}
            onChange={(customColor) => onChange({ customColor })}
            onClear={() => onChange({ customColor: undefined })}
            p={p}
          />

          <CustomColorField
            label="Border"
            value={item.customBorderColor}
            onChange={(customBorderColor) => onChange({ customBorderColor })}
            onClear={() => onChange({ customBorderColor: undefined })}
            p={p}
          />

          {/* Quick Palette presets for background */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4, overflowX: "auto", paddingBottom: 4 }}>
            {PRESET_COLORS.map((pr) => (
              <button
                key={pr.label}
                onClick={() => onChange({ customBg: pr.color })}
                title={`Set background to ${pr.label}`}
                className="m3-press"
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  background: pr.color,
                  border: item.customBg === pr.color ? `2px solid ${p.primary}` : `1px solid rgba(0,0,0,0.12)`,
                  boxSizing: "border-box",
                  cursor: "pointer",
                  flex: "0 0 auto",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Borders & Corners */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, color: p.onSurfaceVariant }}>
            Corners & Borders
          </span>

          <Slider
            icon="rounded_corner"
            title="Corner Radius"
            value={item.customRadius ?? 0}
            min={0}
            max={48}
            step={2}
            onChange={(customRadius) => onChange({ customRadius: customRadius === 0 ? undefined : customRadius })}
            p={p}
            unit="dp"
          />

          <Slider
            icon="border_style"
            title="Border Width"
            value={item.customBorderWidth ?? 0}
            min={0}
            max={8}
            step={1}
            onChange={(customBorderWidth) => onChange({ customBorderWidth: customBorderWidth === 0 ? undefined : customBorderWidth })}
            p={p}
            unit="dp"
          />
        </div>

        {/* Typography */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, color: p.onSurfaceVariant }}>
            Typography
          </span>

          <Slider
            icon="format_size"
            title="Font Size"
            value={item.customFontSize ?? 14}
            min={10}
            max={48}
            step={1}
            onChange={(customFontSize) => onChange({ customFontSize })}
            p={p}
            unit="sp"
          />

          <Segmented<string>
            options={[
              { key: "400", label: "Regular", title: "Regular (400)" },
              { key: "500", label: "Medium", title: "Medium (500)" },
              { key: "600", label: "Semi", title: "Semi-Bold (600)" },
              { key: "700", label: "Bold", title: "Bold (700)" },
            ]}
            value={String(item.customFontWeight ?? 500)}
            onChange={(key) => onChange({ customFontWeight: Number(key) })}
            p={p}
            height={34}
            grow
          />
        </div>

        {/* Sizing & Padding */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, color: p.onSurfaceVariant }}>
            Dimensions & Padding
          </span>

          <Slider
            icon="height"
            title="Height"
            value={item.customHeight ?? 40}
            min={24}
            max={320}
            step={4}
            onChange={(customHeight) => onChange({ customHeight })}
            p={p}
            unit="dp"
          />

          <Slider
            icon="space_bar"
            title="Inner Padding"
            value={item.customPadding ?? 12}
            min={0}
            max={48}
            step={2}
            onChange={(customPadding) => onChange({ customPadding })}
            p={p}
            unit="dp"
          />
        </div>

        {/* Effects (Opacity & Shadow) */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, color: p.onSurfaceVariant }}>
            Effects
          </span>

          <Slider
            icon="opacity"
            title="Opacity"
            value={item.customOpacity ?? 100}
            min={10}
            max={100}
            step={5}
            onChange={(customOpacity) => onChange({ customOpacity: customOpacity === 100 ? undefined : customOpacity })}
            p={p}
            unit="%"
          />

          <Segmented<string>
            options={[
              { key: "0", label: "None", title: "No shadow" },
              { key: "1", label: "Low", title: "Elevation 1" },
              { key: "2", label: "Med", title: "Elevation 2" },
              { key: "3", label: "High", title: "Elevation 3" },
              { key: "4", label: "Max", title: "Elevation 4" },
            ]}
            value={String(item.customShadow ?? 0)}
            onChange={(key) => {
              const num = Number(key);
              onChange({ customShadow: num === 0 ? undefined : num });
            }}
            p={p}
            height={34}
            grow
          />
        </div>
      </div>
    </Section>
  );
}
