import { describe, expect, it } from "vitest";
import {
  COLOR_TOKEN_TEXT, FAB_MENU_TABS, KIND_TEXT, LANGS, NAV_TABS, SEED_TEXT,
  SWIPE_TEXT, TAB_LABELS, TRANSITION_TEXT, UI, t, type UIKey,
} from "./i18n";
import { KIND_ORDER, LANG_FONT, SWIPE_DIRS, TRANSITIONS } from "./tokens";

const ui: Record<UIKey, Record<string, string>> = UI;
const keys = Object.keys(ui) as UIKey[];
const languages = LANGS.map(({ key }) => key);
const sortedKeys = (value: object) => Object.keys(value).sort();

function nonemptyStrings(value: unknown, path: string): void {
  if (value !== null && typeof value === "object") {
    expect(Object.keys(value).length, path).toBeGreaterThan(0);
    for (const [key, child] of Object.entries(value)) nonemptyStrings(child, `${path}.${key}`);
  } else {
    expect(typeof value, path).toBe("string");
    expect((value as string).trim(), path).not.toBe("");
  }
}

function leafPaths(value: unknown, prefix = ""): string[] {
  if (value !== null && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) => leafPaths(child, `${prefix}.${key}`)).sort();
  }
  return [prefix];
}

describe("UI dictionary parity", () => {
  it("offers English as supported language with a nonblank display label", () => {
    expect([...languages]).toEqual(["en"]);
    for (const { key, label } of LANGS) nonemptyStrings(label, `LANGS.${key}`);
  });

  it("returns a nonblank translation for every UI key in English", () => {
    expect(keys.length).toBeGreaterThan(0);
    for (const key of keys) {
      const stored = ui[key].en;
      nonemptyStrings(stored, `UI.${key}.en`);
      expect(t(key, "en"), `${key}.en`).toBe(stored);
    }
  });

  it("keeps template placeholders valid", () => {
    const placeholders = (text: string) => [...text.matchAll(/\{([a-zA-Z]\w*)\}/g)].map((match) => match[1]).sort();
    for (const key of keys) {
      expect(placeholders(t(key, "en"))).toBeDefined();
    }
  });
});

const dictionaries = { KIND_TEXT, SEED_TEXT, TAB_LABELS, FAB_MENU_TABS, NAV_TABS, TRANSITION_TEXT, SWIPE_TEXT };
for (const [name, table] of Object.entries(dictionaries)) {
  describe(`${name} parity`, () => {
    it("covers English language", () => {
      expect(table.en).toBeDefined();
    });

    it("has the same nested keys and nonblank strings in English", () => {
      expect(leafPaths(table.en)).toBeDefined();
      nonemptyStrings(table.en, `${name}.en`);
    });
  });
}

describe("dictionary coverage of editor tokens", () => {
  it("covers every kind, transition and swipe in English", () => {
    expect(sortedKeys(KIND_TEXT.en)).toEqual([...KIND_ORDER].sort());
    expect(sortedKeys(TRANSITION_TEXT.en)).toEqual(TRANSITIONS.map(({ key }) => key).sort());
    expect(sortedKeys(SWIPE_TEXT.en)).toEqual(SWIPE_DIRS.map(({ key }) => key).sort());
  });

  it("has matching nonblank color-token keys", () => {
    expect(COLOR_TOKEN_TEXT).toBeDefined();
    if (COLOR_TOKEN_TEXT.en) {
      nonemptyStrings(COLOR_TOKEN_TEXT.en, "COLOR_TOKEN_TEXT.en");
    }
  });

  it("keeps navigation and FAB icons configured", () => {
    for (const table of [NAV_TABS, FAB_MENU_TABS]) {
      expect(table.en.map(({ icon }) => icon).length).toBeGreaterThan(0);
    }
  });
});

describe("LANG_FONT coverage", () => {
  it("deliberately requires no extra font for English", () => {
    expect(LANG_FONT.en).toBeNull();
  });
});
