"use client";

import { createContext, useContext } from "react";

export type Lang = "en" | "ja" | "zh" | "ko";
export const LANGS: { key: Lang; label: string }[] = [
  { key: "en", label: "English" },
];
export const isLang = (v: unknown): v is Lang => v === "en";

/* A module-level copy lets non-React helpers (item defaults, prompt text)
 * follow the language without threading it through every call. */
let current: Lang = "en";
export const getLang = () => current;
export const setGlobalLang = (l: Lang) => {
  current = l;
};

export const LangContext = createContext<Lang>("en");
export const useLang = () => useContext(LangContext);

const SEED = { favorite: "Favorite", share: "Share", inbox: "Inbox", starred: "Starred", archive: "Archive", supporting: "Supporting text", start: "Get started" };
export const SEED_TEXT: Record<Lang, typeof SEED> = {
  ja: SEED,
  en: SEED,
  zh: SEED,
  ko: SEED,
};

/** ponytail: matches defaults by text; add provenance if authored copies must be distinguished. */
export function translateDefaultText(value: string, kind: string, field: "label" | "supporting" | "tab", lang: Lang): string {
  return value;
}

type Str = { ja: string; en: string; zh: string };

export function translateDefaultFrameName(name: string, lang: Lang): string {
  return name;
}

const COLOR_TOKENS = { surface: "Surface", surfaceContainerLow: "Container (low)", surfaceContainer: "Container", surfaceContainerHigh: "Container (high)", surfaceContainerHighest: "Container (highest)", primaryContainer: "Primary container", secondaryContainer: "Secondary container", tertiaryContainer: "Tertiary container", primary: "Primary", inverseSurface: "Inverse surface" };
export const COLOR_TOKEN_TEXT: Record<string, typeof COLOR_TOKENS> = {
  ja: COLOR_TOKENS,
  en: COLOR_TOKENS,
  zh: COLOR_TOKENS,
  ko: COLOR_TOKENS,
};

export const UI = {
  // panels
  parts: { ja: "Parts", en: "Parts", zh: "Parts" },
  layers: { ja: "Layers", en: "Layers", zh: "Layers" },
  edit: { ja: "Edit", en: "Edit", zh: "Edit" },
  prompt: { ja: "Prompt", en: "Prompt", zh: "Prompt" },
  closePanel: { ja: "Close panel", en: "Close panel", zh: "Close panel" },
  search: { ja: "Search", en: "Search", zh: "Search" },
  favorites: { ja: "Favorites", en: "Favorites", zh: "Favorites" },
  addFavorite: { ja: "Add to favorites", en: "Add to favorites", zh: "Add to favorites" },
  removeFavorite: { ja: "Remove from favorites", en: "Remove from favorites", zh: "Remove from favorites" },
  clear: { ja: "Clear", en: "Clear", zh: "Clear" },
  language: { ja: "Language", en: "Language", zh: "Language" },
  // toolbar
  select: { ja: "Select", en: "Select", zh: "Select" },
  hand: { ja: "Hand", en: "Hand", zh: "Hand" },
  blank: { ja: "Blank canvas", en: "Blank canvas", zh: "Blank canvas" },
  phone: { ja: "Phone screens", en: "Phone screens", zh: "Phone screens" },
  addFrame: { ja: "Add screen", en: "Add screen", zh: "Add screen" },
  preview: { ja: "Preview", en: "Preview", zh: "Preview" },
  zoomIn: { ja: "Zoom in", en: "Zoom in", zh: "Zoom in" },
  zoomOut: { ja: "Zoom out", en: "Zoom out", zh: "Zoom out" },
  fit: { ja: "Fit", en: "Fit", zh: "Fit" },
  undo: { ja: "Undo", en: "Undo", zh: "Undo" },
  redo: { ja: "Redo", en: "Redo", zh: "Redo" },
  clearAll: { ja: "Clear canvas", en: "Clear canvas", zh: "Clear canvas" },
  clearAllTitle: { ja: "Clear the canvas?", en: "Clear the canvas?", zh: "Clear the canvas?" },
  clearAllBody: { ja: "Every screen and part will be removed. Undo (Ctrl+Z) can bring them back.", en: "Every screen and part will be removed. Undo (Ctrl+Z) can bring them back.", zh: "Every screen and part will be removed. Undo (Ctrl+Z) can bring them back." },
  // inspector
  screen: { ja: "Screen", en: "Screen", zh: "Screen" },
  screenName: { ja: "Screen name", en: "Screen name", zh: "Screen name" },
  name: { ja: "Name", en: "Name", zh: "Name" },
  background: { ja: "Background", en: "Background", zh: "Background" },
  export: { ja: "Export", en: "Export", zh: "Export" },
  project: { ja: "Project", en: "Project", zh: "Project" },
  saveProject: { ja: "Save project", en: "Save project", zh: "Save project" },
  openProject: { ja: "Open project", en: "Open project", zh: "Open project" },
  replaceProjectTitle: { ja: "Open this project?", en: "Open this project?", zh: "Open this project?" },
  askAi: { ja: "Ask an AI", en: "Ask an AI", zh: "Ask an AI" },
  askAiHint: { ja: "Describe what you want and press Draft with AI: the model from the AI tab draws the design on the canvas. Or copy the instruction for an AI agent such as Claude Code; open the link it replies with, or save its JSON and load it with Open project.", en: "Describe what you want and press Draft with AI: the model from the AI tab draws the design on the canvas. Or copy the instruction for an AI agent such as Claude Code; open the link it replies with, or save its JSON and load it with Open project.", zh: "Describe what you want and press Draft with AI: the model from the AI tab draws the design on the canvas. Or copy the instruction for an AI agent such as Claude Code; open the link it replies with, or save its JSON and load it with Open project." },
  askAiIdea: { ja: "What to build (e.g. an app to save and search recipes)", en: "What to build (e.g. an app to save and search recipes)", zh: "What to build (e.g. an app to save and search recipes)" },
  askAiIdeaFallback: { ja: "(describe what to build here)", en: "(describe what to build here)", zh: "(describe what to build here)" },
  askAiCopy: { ja: "Copy the instruction", en: "Copy the instruction", zh: "Copy the instruction" },
  askAiText: {
    ja: "Make a PS Canvas sketch. First read {url} and follow it: build the design as JSON and reply with a share link. If you cannot run code, reply with the JSON in a code block (it will be saved to a file and opened). No verification is needed.\n\nWhat to build: {idea}",
    en: "Make a PS Canvas sketch. First read {url} and follow it: build the design as JSON and reply with a share link. If you cannot run code, reply with the JSON in a code block (it will be saved to a file and opened). No verification is needed.\n\nWhat to build: {idea}",
    zh: "Make a PS Canvas sketch. First read {url} and follow it: build the design as JSON and reply with a share link. If you cannot run code, reply with the JSON in a code block (it will be saved to a file and opened). No verification is needed.\n\nWhat to build: {idea}",
  },
  askAiGenerate: { ja: "Draft with AI", en: "Draft with AI", zh: "Draft with AI" },
  askAiPasted: { ja: "Paste it into your AI agent", en: "Paste it into your AI agent", zh: "Paste it into your AI agent" },
  askAiTitle: { ja: "Ask an AI for a design", en: "Ask an AI for a design", zh: "Ask an AI for a design" },
  askAiCopyTitle: { ja: "Instruction for an AI agent", en: "Instruction for an AI agent", zh: "Instruction for an AI agent" },
  askAiGenerateTitle: { ja: "Uses the key in the AI tab", en: "Uses the key in the AI tab", zh: "Uses the key in the AI tab" },
  aiSetup: { ja: "AI settings", en: "AI settings", zh: "AI settings" },
  aiSetupHint: { ja: "Add a key to draft it right here", en: "Add a key to draft it right here", zh: "Add a key to draft it right here" },
  aiSetupTitle: { ja: "Open the AI tab", en: "Open the AI tab", zh: "Open the AI tab" },
  draftKeep: { ja: "Keep this design", en: "Keep this design", zh: "Keep this design" },
  draftUndo: { ja: "Back to the previous design", en: "Back to the previous design", zh: "Back to the previous design" },
  askAiGenerating: { ja: "Drafting…", en: "Drafting…", zh: "Drafting…" },
  selectedTab: { ja: "Selected", en: "Selected", zh: "Selected" },
  shareLinkCopy: { ja: "Copy link", en: "Copy link", zh: "Copy link" },
  shareLinkHint: { ja: "A link that opens this design (no images)", en: "A link that opens this design (no images)", zh: "A link that opens this design (no images)" },
  replaceProject: { ja: "The current canvas will be replaced. Undo (Ctrl+Z) brings it back.", en: "The current canvas will be replaced. Undo (Ctrl+Z) brings it back.", zh: "The current canvas will be replaced. Undo (Ctrl+Z) brings it back." },
  invalidProject: { ja: "Could not open the project file.", en: "Could not open the project file.", zh: "Could not open the project file." },
  readOnlyTitle: { ja: "Editing in another tab", en: "Editing in another tab", zh: "Editing in another tab" },
  readOnlyBody: { ja: "This canvas is being edited in another tab. Close that tab, then reload this page to edit.", en: "This canvas is being edited in another tab. Close that tab, then reload this page to edit.", zh: "This canvas is being edited in another tab. Close that tab, then reload this page to edit." },
  reload: { ja: "Reload", en: "Reload", zh: "Reload" },
  copied: { ja: "Copied", en: "Copied", zh: "Copied" },
  saveImage: { ja: "Save as image", en: "Save as image", zh: "Save as image" },
  saving: { ja: "Saving…", en: "Saving…", zh: "Saving…" },
  previewFrom: { ja: "Preview from this screen", en: "Preview from this screen", zh: "Preview from this screen" },
  duplicate: { ja: "Duplicate", en: "Duplicate", zh: "Duplicate" },
  more: { ja: "More", en: "More", zh: "More" },
  delete: { ja: "Delete", en: "Delete", zh: "Delete" },
  deleteSelection: { ja: "Delete selection", en: "Delete selection", zh: "Delete selection" },
  text: { ja: "Text", en: "Text", zh: "Text" },
  label: { ja: "Label", en: "Label", zh: "Label" },
  bold: { ja: "Bold", en: "Bold", zh: "Bold" },
  action: { ja: "Action", en: "Action", zh: "Action" },
  supporting: { ja: "Supporting text", en: "Supporting text", zh: "Supporting text" },
  tabs: { ja: "Items", en: "Items", zh: "Items" },
  options: { ja: "Options", en: "Options", zh: "Options" },
  addOption: { ja: "Add an option", en: "Add an option", zh: "Add an option" },
  removeOption: { ja: "Remove this option", en: "Remove this option", zh: "Remove this option" },
  addTab: { ja: "Add a tab", en: "Add a tab", zh: "Add a tab" },
  selectedOption: { ja: "Initial value", en: "Initial value", zh: "Initial value" },
  changeIcon: { ja: "Change icon", en: "Change icon", zh: "Change icon" },
  image: { ja: "Image", en: "Image", zh: "Image" },
  pickImage: { ja: "Choose image", en: "Choose image", zh: "Choose image" },
  removeImage: { ja: "Remove image", en: "Remove image", zh: "Remove image" },
  imageUrl: { ja: "Image URL", en: "Image URL", zh: "Image URL" },
  imageFailed: { ja: "This image could not be read", en: "This image could not be read", zh: "This image could not be read" },
  imageTop: { ja: "Top", en: "Top", zh: "Top" },
  imageBottom: { ja: "Bottom", en: "Bottom", zh: "Bottom" },
  imageLeading: { ja: "Leading", en: "Leading", zh: "Leading" },
  imageTrailing: { ja: "Trailing", en: "Trailing", zh: "Trailing" },
  imageBehind: { ja: "Behind the text", en: "Behind the text", zh: "Behind the text" },
  cardLayout: { ja: "Layout", en: "Layout", zh: "Layout" },
  noImageLayout: { ja: "No image", en: "No image", zh: "No image" },
  textPosition: { ja: "Text position", en: "Text position", zh: "Text position" },
  textTop: { ja: "Top", en: "Top", zh: "Top" },
  textMiddle: { ja: "Middle", en: "Middle", zh: "Middle" },
  textBottom: { ja: "Bottom", en: "Bottom", zh: "Bottom" },
  textStart: { ja: "Start", en: "Start", zh: "Start" },
  textCenter: { ja: "Center", en: "Center", zh: "Center" },
  textEnd: { ja: "End", en: "End", zh: "End" },
  imageSize: { ja: "Image size", en: "Image size", zh: "Image size" },
  textColor: { ja: "Text color", en: "Text color", zh: "Text color" },
  autoWidth: { ja: "Auto", en: "Auto", zh: "Auto" },
  icon: { ja: "Icon", en: "Icon", zh: "Icon" },
  noIcon: { ja: "No icon", en: "No icon", zh: "No icon" },
  searchIcons: { ja: "Search icons", en: "Search icons", zh: "Search icons" },
  style: { ja: "Style", en: "Style", zh: "Style" },
  filled: { ja: "Filled", en: "Filled", zh: "Filled" },
  tonal: { ja: "Tonal", en: "Tonal", zh: "Tonal" },
  elevated: { ja: "Elevated", en: "Elevated", zh: "Elevated" },
  outlined: { ja: "Outlined", en: "Outlined", zh: "Outlined" },
  standard: { ja: "Standard", en: "Standard", zh: "Standard" },
  vibrant: { ja: "Vibrant", en: "Vibrant", zh: "Vibrant" },
  styleSurface: { ja: "Surface", en: "Surface", zh: "Surface" },
  stylePrimary: { ja: "Primary", en: "Primary", zh: "Primary" },
  styleSecondary: { ja: "Secondary", en: "Secondary", zh: "Secondary" },
  state: { ja: "State", en: "State", zh: "State" },
  railState: { ja: "Rail state", en: "Rail state", zh: "Rail state" },
  railCollapsed: { ja: "Collapsed", en: "Collapsed", zh: "Collapsed" },
  railExpanded: { ja: "Expanded", en: "Expanded", zh: "Expanded" },
  railStandard: { ja: "In layout", en: "In layout", zh: "In layout" },
  railModal: { ja: "Modal overlay", en: "Modal overlay", zh: "Modal overlay" },
  expandNavigation: { ja: "Expand navigation", en: "Expand navigation", zh: "Expand navigation" },
  collapseNavigation: { ja: "Collapse navigation", en: "Collapse navigation", zh: "Collapse navigation" },
  selected: { ja: "Selected", en: "Selected", zh: "Selected" },
  handle: { ja: "Handle", en: "Handle", zh: "Handle" },
  switchOff: { ja: "Switch, off", en: "Switch, off", zh: "Switch, off" },
  switchOn: { ja: "Switch, on", en: "Switch, on", zh: "Switch, on" },
  on: { ja: "On", en: "On", zh: "On" },
  container: { ja: "Container", en: "Container", zh: "Container" },
  wavy: { ja: "Wavy", en: "Wavy", zh: "Wavy" },
  trackThickness: { ja: "Track thickness", en: "Track thickness", zh: "Track thickness" },
  partType: { ja: "Type", en: "Type", zh: "Type" },
  progressLoop: { ja: "Loop", en: "Loop", zh: "Loop" },
  progressPercent: { ja: "Percent", en: "Percent", zh: "Percent" },
  progressState: { ja: "Progress", en: "Progress", zh: "Progress" },
  noTrigger: { ja: "Nothing is opened by tapping this part", en: "Nothing is opened by tapping this part", zh: "Nothing is opened by tapping this part" },
  noMatch: { ja: "No parts match", en: "No parts match", zh: "No parts match" },
  noIcons: { ja: "No icons match", en: "No icons match", zh: "No icons match" },
  loading: { ja: "Loading…", en: "Loading…", zh: "Loading…" },
  progressBar: { ja: "Bar", en: "Bar", zh: "Bar" },
  progressRing: { ja: "Ring", en: "Ring", zh: "Ring" },
  progressWavyBar: { ja: "Wavy bar", en: "Wavy bar", zh: "Wavy bar" },
  progressWavyRing: { ja: "Wavy ring", en: "Wavy ring", zh: "Wavy ring" },
  determinate: { ja: "Determinate", en: "Determinate", zh: "Determinate" },
  size: { ja: "Size", en: "Size", zh: "Size" },
  width: { ja: "Width", en: "Width", zh: "Width" },
  height: { ja: "Height", en: "Height", zh: "Height" },
  fontSize: { ja: "Font size", en: "Font size", zh: "Font size" },
  cornerRadius: { ja: "Corner radius", en: "Corner radius", zh: "Corner radius" },
  cornerTop: { ja: "Top corners", en: "Top corners", zh: "Top corners" },
  cornerBottom: { ja: "Bottom corners", en: "Bottom corners", zh: "Bottom corners" },
  cornerLeft: { ja: "Left corners", en: "Left corners", zh: "Left corners" },
  cornerRight: { ja: "Right corners", en: "Right corners", zh: "Right corners" },
  cornersEach: { ja: "Each corner", en: "Each corner", zh: "Each corner" },
  cornerTl: { ja: "Top left", en: "Top left", zh: "Top left" },
  cornerTr: { ja: "Top right", en: "Top right", zh: "Top right" },
  cornerBl: { ja: "Bottom left", en: "Bottom left", zh: "Bottom left" },
  cornerBr: { ja: "Bottom right", en: "Bottom right", zh: "Bottom right" },
  screenWidth: { ja: "Full", en: "Full", zh: "Full" },
  contentWidth: { ja: "Standard", en: "Standard", zh: "Standard" },
  halfWidth: { ja: "Half", en: "Half", zh: "Half" },
  columnWidth: { ja: "One phone column", en: "One phone column", zh: "One phone column" },
  screenHeight: { ja: "Screen height", en: "Screen height", zh: "Screen height" },
  halfHeight: { ja: "Half the screen", en: "Half the screen", zh: "Half the screen" },
  tapTo: { ja: "Tap action", en: "Tap action", zh: "Tap action" },
  none: { ja: "None", en: "None", zh: "None" },
  goBack: { ja: "Back", en: "Back", zh: "Back" },
  swipeTo: { ja: "Swipe to open", en: "Swipe to open", zh: "Swipe to open" },
  toggle: { ja: "Toggle button", en: "Toggle button", zh: "Toggle button" },
  toggleHint: { ja: "Tap toggles on / off", en: "Tap toggles on / off", zh: "Tap toggles on / off" },
  behavior: { ja: "Behavior", en: "Behavior", zh: "Behavior" },
  whenPressed: { ja: "When pressed…", en: "When pressed…", zh: "When pressed…" },
  whatItDoes: { ja: "What this part does…", en: "What this part does…", zh: "What this part does…" },
  removeLink: { ja: "Remove link", en: "Remove link", zh: "Remove link" },
  group: { ja: "Group", en: "Group", zh: "Group" },
  makeGroup: { ja: "Group", en: "Group", zh: "Group" },
  ungroup: { ja: "Ungroup", en: "Ungroup", zh: "Ungroup" },
  selectedParts: { ja: "selected", en: "selected", zh: "selected" },
  groupHint: { ja: "Keeps the overlap and moves as one layer", en: "Keeps the overlap and moves as one layer", zh: "Keeps the overlap and moves as one layer" },
  noBackground: { ja: "No background", en: "No background", zh: "No background" },
  normalState: { ja: "Normal", en: "Normal", zh: "Normal" },
  onState: { ja: "On", en: "On", zh: "On" },
  groupEditNote: { ja: "Ungroup to edit the parts inside", en: "Ungroup to edit the parts inside", zh: "Ungroup to edit the parts inside" },
  openPanel: { ja: "Open panel", en: "Open panel", zh: "Open panel" },
  colors: { ja: "Colors", en: "Colors", zh: "Colors" },
  templates: { ja: "Palettes", en: "Palettes", zh: "Palettes" },
  customColor: { ja: "Custom", en: "Custom", zh: "Custom" },
  seedColor: { ja: "Seed color", en: "Seed color", zh: "Seed color" },
  seedHint: { ja: "One color builds the whole Material 3 scheme. Fine-tune changes single roles.", en: "One color builds the whole Material 3 scheme. Fine-tune changes single roles.", zh: "One color builds the whole Material 3 scheme. Fine-tune changes single roles." },
  useThis: { ja: "Use it", en: "Use it", zh: "Use it" },
  fineTune: { ja: "Fine-tune", en: "Fine-tune", zh: "Fine-tune" },
  dynamicColor: { ja: "Dynamic color", en: "Dynamic color", zh: "Dynamic color" },
  dynamicOnHint: { ja: "These colors are editor-only; the phone uses its wallpaper colors.", en: "These colors are editor-only; the phone uses its wallpaper colors.", zh: "These colors are editor-only; the phone uses its wallpaper colors." },
  dynamicOffHint: { ja: "When on, the phone uses wallpaper colors and these are the fallback.", en: "When on, the phone uses wallpaper colors and these are the fallback.", zh: "When on, the phone uses wallpaper colors and these are the fallback." },
  closeBtn: { ja: "Close", en: "Close", zh: "Close" },
  screens: { ja: "Choose screen", en: "Choose screen", zh: "Choose screen" },
  // layers
  noLayers: { ja: "Nothing on this screen yet", en: "Nothing on this screen yet", zh: "Nothing on this screen yet" },
  showParts: { ja: "Show the parts inside", en: "Show the parts inside", zh: "Show the parts inside" },
  hideParts: { ja: "Hide the parts inside", en: "Hide the parts inside", zh: "Hide the parts inside" },
  lock: { ja: "Lock", en: "Lock", zh: "Lock" },
  unlock: { ja: "Unlock", en: "Unlock", zh: "Unlock" },
  lockedGroup: { ja: "That group is locked. Unlock it in the Layers panel first", en: "That group is locked. Unlock it in the Layers panel first", zh: "That group is locked. Unlock it in the Layers panel first" },
  lockedEdit: { ja: "Locked. Switch off to edit.", en: "Locked. Switch off to edit.", zh: "Locked. Switch off to edit." },
  // prompt panel
  brief: { ja: "What this app is…", en: "What this app is…", zh: "What this app is…" },
  appName: { ja: "App name", en: "App name", zh: "App name" },
  targetPlatform: { ja: "Target", en: "Target", zh: "Target" },
  targetAndroid: { ja: "Build as a native Android app", en: "Build as a native Android app", zh: "Build as a native Android app" },
  targetWeb: { ja: "Build as a web app that runs in the browser", en: "Build as a web app that runs in the browser", zh: "Build as a web app that runs in the browser" },
  copyPrompt: { ja: "Copy prompt", en: "Copy prompt", zh: "Copy prompt" },
  // preview
  back: { ja: "Back", en: "Back", zh: "Back" },
  close: { ja: "Close", en: "Close", zh: "Close" },
  // parts content
  cancel: { ja: "Cancel", en: "Cancel", zh: "Cancel" },
  ok: { ja: "OK", en: "OK", zh: "OK" },
  leading: { ja: "Leading", en: "Leading", zh: "Leading" },
  title: { ja: "Title", en: "Title", zh: "Title" },
  body: { ja: "Body", en: "Body", zh: "Body" },
  message: { ja: "Message", en: "Message", zh: "Message" },
  placeholder: { ja: "Placeholder", en: "Placeholder", zh: "Placeholder" },
  regular: { ja: "Regular", en: "Regular", zh: "Regular" },
  typeBody: { ja: "Body", en: "Body", zh: "Body" },
  typeTitle: { ja: "Title", en: "Title", zh: "Title" },
  typeHeadline: { ja: "Headline", en: "Headline", zh: "Headline" },
  typeDisplay: { ja: "Display", en: "Display", zh: "Display" },
  trailing: { ja: "Trailing", en: "Trailing", zh: "Trailing" },
  // frames
  home: { ja: "Home", en: "Home", zh: "Home" },
  screenN: { ja: "Screen", en: "Screen", zh: "Screen" },
  copySuffix: { ja: " copy", en: " copy", zh: " copy" },
  frameSize: { ja: "Screen size", en: "Screen size", zh: "Screen size" },
  phoneFrame: { ja: "Phone", en: "Phone", zh: "Phone" },
  desktopFrame: { ja: "Desktop", en: "Desktop", zh: "Desktop" },
  // mobile
  mobileNote: { ja: "Full features on a desktop browser", en: "Full features on a desktop browser", zh: "Full features on a desktop browser" },
  addButton: { ja: "Add button", en: "Add button", zh: "Add button" },
  done: { ja: "Done", en: "Done", zh: "Done" },
  theme: { ja: "Theme", en: "Theme", zh: "Theme" },
  settings: { ja: "Theme and settings", en: "Theme and settings", zh: "Theme and settings" },
  // theme panels
  shape: { ja: "Shape", en: "Shape", zh: "Shape" },
  typography: { ja: "Type", en: "Type", zh: "Type" },
  motion: { ja: "Motion", en: "Motion", zh: "Motion" },
  brightness: { ja: "Brightness", en: "Brightness", zh: "Brightness" },
  light: { ja: "Light", en: "Light", zh: "Light" },
  dark: { ja: "Dark", en: "Dark", zh: "Dark" },
  contrast: { ja: "Contrast", en: "Contrast", zh: "Contrast" },
  bothModes: { ja: "Both", en: "Both", zh: "Both" },
  contrastStandard: { ja: "Standard", en: "Standard", zh: "Standard" },
  contrastMedium: { ja: "Medium", en: "Medium", zh: "Medium" },
  contrastHigh: { ja: "High", en: "High", zh: "High" },
  shapeScale: { ja: "Corner roundness", en: "Corner roundness", zh: "Corner roundness" },
  shapeSquare: { ja: "Square", en: "Square", zh: "Square" },
  shapeRounded: { ja: "Rounded", en: "Rounded", zh: "Rounded" },
  shapeFull: { ja: "Full", en: "Full", zh: "Full" },
  design: { ja: "Design", en: "Design", zh: "Design" },
  trigger: { ja: "Trigger", en: "Trigger", zh: "Trigger" },
  noteDialog: { ja: "Button spec", en: "Button spec", zh: "Button spec" },
  partSpec: { ja: "What this part does", en: "What this part does", zh: "What this part does" },
  toggleLookHint: { ja: "The two looks are customized in the Design tab", en: "The two looks are customized in the Design tab", zh: "The two looks are customized in the Design tab" },
  addFrameHint: { ja: "Add a screen and you can send a tap to it here", en: "Add a screen and you can send a tap to it here", zh: "Add a screen and you can send a tap to it here" },
  replay: { ja: "Play again", en: "Play again", zh: "Play again" },
  toggleTitle: { ja: "Toggle", en: "Toggle", zh: "Toggle" },
  whenPressedExample: { ja: "e.g. Save and go back to the list", en: "e.g. Save and go back to the list", zh: "e.g. Save and go back to the list" },
  resizeWidth: { ja: "Drag to change width", en: "Drag to change width", zh: "Drag to change width" },
  resizeHeight: { ja: "Drag to change height", en: "Drag to change height", zh: "Drag to change height" },
  resizeSize: { ja: "Drag to change the size", en: "Drag to change the size", zh: "Drag to change the size" },
  openLink: { ja: "Open a link", en: "Open a link", zh: "Open a link" },
  fabPlain: { ja: "Standard", en: "Standard", zh: "Standard" },
  fabExtended: { ja: "Extended", en: "Extended", zh: "Extended" },
  fabMenuAction: { ja: "Open a menu", en: "Open a menu", zh: "Open a menu" },
  dropToRemove: { ja: "Remove", en: "Remove", zh: "Remove" },
  reorder: { ja: "Reorder", en: "Reorder", zh: "Reorder" },
  splitMain: { ja: "Main action", en: "Main action", zh: "Main action" },
  splitMenu: { ja: "Arrow", en: "Arrow", zh: "Arrow" },
  selectDate: { ja: "Select date", en: "Select date", zh: "Select date" },
  selectTime: { ja: "Select time", en: "Select time", zh: "Select time" },
  dateLabel: { ja: "Date", en: "Date", zh: "Date" },
  hourLabel: { ja: "Hour", en: "Hour", zh: "Hour" },
  minuteLabel: { ja: "Minute", en: "Minute", zh: "Minute" },
  layout: { ja: "Layout", en: "Layout", zh: "Layout" },
  carouselMultiBrowse: { ja: "Multi-browse", en: "Multi-browse", zh: "Multi-browse" },
  carouselUncontained: { ja: "Uncontained", en: "Uncontained", zh: "Uncontained" },
  carouselHero: { ja: "Hero", en: "Hero", zh: "Hero" },
  carouselFullScreen: { ja: "Full screen", en: "Full screen", zh: "Full screen" },
  dateModal: { ja: "Modal", en: "Modal", zh: "Modal" },
  dateDocked: { ja: "Docked", en: "Docked", zh: "Docked" },
  dateInput: { ja: "Input", en: "Input", zh: "Input" },
  timeDial: { ja: "Dial", en: "Dial", zh: "Dial" },
  cards: { ja: "Cards", en: "Cards", zh: "Cards" },
  linkUrl: { ja: "Link URL", en: "Link URL", zh: "Link URL" },
  linkInvalid: { ja: "Enter a valid web address", en: "Enter a valid web address", zh: "Enter a valid web address" },
  linkBrowser: { ja: "Browser", en: "Browser", zh: "Browser" },
  fullscreen: { ja: "Edit full screen", en: "Edit full screen", zh: "Edit full screen" },
  exitFullscreen: { ja: "Close full screen", en: "Close full screen", zh: "Close full screen" },
  outline: { ja: "Outline", en: "Outline", zh: "Outline" },
  screenLook: { ja: "Screen colour", en: "Screen colour", zh: "Screen colour" },
  shapeHint: { ja: "Changes the default corners of every part at once. A radius you typed on a part stays as it is.", en: "Changes the default corners of every part at once. A radius you typed on a part stays as it is.", zh: "Changes the default corners of every part at once. A radius you typed on a part stays as it is." },
  fontFamily: { ja: "Typeface", en: "Typeface", zh: "Typeface" },
  emphasized: { ja: "Emphasized", en: "Emphasized", zh: "Emphasized" },
  emphasizedHint: { ja: "Headlines and labels use the heavier M3 Expressive styles.", en: "Headlines and labels use the heavier M3 Expressive styles.", zh: "Headlines and labels use the heavier M3 Expressive styles." },
  motionScheme: { ja: "Motion scheme", en: "Motion scheme", zh: "Motion scheme" },
  motionStandard: { ja: "Standard", en: "Standard", zh: "Standard" },
  motionExpressive: { ja: "Expressive", en: "Expressive", zh: "Expressive" },
  motionHint: { ja: "Expressive is a bouncy spring. It drives the preview transitions and the prompt.", en: "Expressive is a bouncy spring. It drives the preview transitions and the prompt.", zh: "Expressive is a bouncy spring. It drives the preview transitions and the prompt." },
  tryIt: { ja: "Tap to try", en: "Tap to try", zh: "Tap to try" },
  // tidy
  tidy: { ja: "Tidy", en: "Tidy", zh: "Tidy" },
  tidyUndo: { ja: "Undo tidy", en: "Undo tidy", zh: "Undo tidy" },
  tidyDone: { ja: "Already tidy", en: "Already tidy", zh: "Already tidy" },
  placement: { ja: "Placement", en: "Placement", zh: "Placement" },
  placeTop: { ja: "From the top", en: "From the top", zh: "From the top" },
  placeCenter: { ja: "Centered", en: "Centered", zh: "Centered" },
  placeBottom: { ja: "At the bottom", en: "At the bottom", zh: "At the bottom" },
  placeSpread: { ja: "Spread out", en: "Spread out", zh: "Spread out" },
  // alignment of a selection
  align: { ja: "Align", en: "Align", zh: "Align" },
  alignLeft: { ja: "Align left", en: "Align left", zh: "Align left" },
  alignCenterH: { ja: "Center horizontally", en: "Center horizontally", zh: "Center horizontally" },
  alignRight: { ja: "Align right", en: "Align right", zh: "Align right" },
  distributeH: { ja: "Distribute horizontally", en: "Distribute horizontally", zh: "Distribute horizontally" },
  alignTop: { ja: "Align top", en: "Align top", zh: "Align top" },
  alignCenterV: { ja: "Center vertically", en: "Center vertically", zh: "Center vertically" },
  alignBottom: { ja: "Align bottom", en: "Align bottom", zh: "Align bottom" },
  distributeV: { ja: "Distribute vertically", en: "Distribute vertically", zh: "Distribute vertically" },
  // screen description
  description: { ja: "Description", en: "Description", zh: "Description" },
  screenDescription: { ja: "What this screen is for", en: "What this screen is for", zh: "What this screen is for" },
  // ai
  ai: { ja: "AI", en: "AI", zh: "AI" },
  promptReset: { ja: "Back to the generated prompt", en: "Back to the generated prompt", zh: "Back to the generated prompt" },
  aiWriteShort: { ja: "Write with AI", en: "Write with AI", zh: "Write with AI" },
  aiWrite: { ja: "Let the AI write it", en: "Let the AI write it", zh: "Let the AI write it" },
  aiSettings: { ja: "AI settings", en: "AI settings", zh: "AI settings" },
  aiProvider: { ja: "Provider", en: "Provider", zh: "Provider" },
  aiBaseUrl: { ja: "Base URL", en: "Base URL", zh: "Base URL" },
  aiModel: { ja: "Model ID", en: "Model ID", zh: "Model ID" },
  aiKey: { ja: "API key", en: "API key", zh: "API key" },
  aiGetKey: { ja: "Get a key", en: "Get a key", zh: "Get a key" },
  aiKeyHint: { ja: "Stored only in this browser and sent straight to the provider.", en: "Stored only in this browser and sent straight to the provider.", zh: "Stored only in this browser and sent straight to the provider." },
  aiRestore: { ja: "Switch between the AI rewrite and the original", en: "Switch between the AI rewrite and the original", zh: "Switch between the AI rewrite and the original" },
  aiApplied: { ja: "Applied", en: "Applied", zh: "Applied" },
  aiSelectScreen: { ja: "Select a screen first", en: "Select a screen first", zh: "Select a screen first" },
  aiNoKey: { ja: "Add a key in the AI tab to use this", en: "Add a key in the AI tab to use this", zh: "Add a key in the AI tab to use this" },
  aiError: { ja: "The AI request failed", en: "The AI request failed", zh: "The AI request failed" },
  aiErrorRefusal: { ja: "The model declined to answer", en: "The model declined to answer", zh: "The model declined to answer" },
  aiErrorJson: { ja: "The model's reply could not be read", en: "The model's reply could not be read", zh: "The model's reply could not be read" },
  aiErrorLong: { ja: "The reply was cut short. Try fewer screens", en: "The reply was cut short. Try fewer screens", zh: "The reply was cut short. Try fewer screens" },
  aiErrorModel: { ja: "Enter a model ID", en: "Enter a model ID", zh: "Enter a model ID" },
  aiErrorInsecure: { ja: "The base URL must use https or point at localhost", en: "The base URL must use https or point at localhost", zh: "The base URL must use https or point at localhost" },
  aiErrorNetwork: { ja: "Could not connect. Check the URL, the network and the server's CORS settings", en: "Could not connect. Check the URL, the network and the server's CORS settings", zh: "Could not connect. Check the URL, the network and the server's CORS settings" },
} as const satisfies Record<string, Str>;

export type UIKey = keyof typeof UI;

/** exported for the parity tests only; read strings through t() */
export const KO: Record<string, string> = {};

const LOCALE: Record<Lang, string> = { ja: "en-US", en: "en-US", zh: "en-US", ko: "en-US" };

export const dateHeadline = (lang: Lang, at: Date = new Date()) => new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(at);

export const monthHeadline = (lang: Lang, at: Date = new Date()) => new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" }).format(at);

export const t = (key: UIKey, _lang: Lang = current): string => UI[key]?.en ?? (key as string);

const KIND_TEXT_EN = {
    box: { noun: "box" },
    button: { noun: "button", label: "Button" },
    iconButton: { noun: "icon button" },
    fab: { noun: "FAB" },
    extendedFab: { noun: "extended FAB", label: "Create" },
    chip: { noun: "chip", label: "Chip" },
    topAppBar: { noun: "top app bar", label: "Title" },
    bottomNav: { noun: "navigation bar" },
    navRail: { noun: "navigation rail" },
    searchBar: { noun: "search bar", label: "Search" },
    card: { noun: "card", label: "Card headline", supporting: "Supporting text goes here." },
    listItem: { noun: "list item", label: "List item", supporting: "Supporting text" },
    dialog: { noun: "dialog", label: "Confirm", supporting: "Do you want to continue?" },
    snackbar: { noun: "snackbar", label: "Saved", supporting: "Undo" },
    textField: { noun: "text field", label: "Label" },
    select: { noun: "dropdown", label: "Label" },
    switch: { noun: "switch", label: "Notifications" },
    checkbox: { noun: "checkbox", label: "I agree" },
    slider: { noun: "slider" },
    text: { noun: "text", label: "Headline" },
    image: { noun: "image" },
    camera: { noun: "camera" },
    map: { noun: "map" },
    divider: { noun: "divider" },
    loadingIndicator: { noun: "loading" },
    linearProgress: { noun: "progress bar" },
    circularProgress: { noun: "progress ring" },
    splitButton: { noun: "split button", label: "Send" },
    fabMenu: { noun: "FAB menu" },
    toolbar: { noun: "toolbar" },
    tabs: { noun: "tabs" },
    radio: { noun: "radio button", label: "Option" },
    carousel: { noun: "carousel" },
    datePicker: { noun: "date picker", label: "Mon, Mar 17" },
    timePicker: { noun: "time picker" },
};

export const KIND_TEXT: Record<
  Lang,
  Record<string, { noun: string; label?: string; supporting?: string }>
> = {
  ja: KIND_TEXT_EN,
  en: KIND_TEXT_EN,
  zh: KIND_TEXT_EN,
  ko: KIND_TEXT_EN,
};

const TAB_LABELS_EN = ["For you", "Following", "Trending", "New", "Saved"];
export const TAB_LABELS: Record<Lang, string[]> = {
  ja: TAB_LABELS_EN,
  en: TAB_LABELS_EN,
  zh: TAB_LABELS_EN,
  ko: TAB_LABELS_EN,
};

const SELECT_OPTIONS_EN = ["Option 1", "Option 2", "Option 3"];
export const SELECT_OPTIONS: Record<Lang, string[]> = {
  ja: SELECT_OPTIONS_EN,
  en: SELECT_OPTIONS_EN,
  zh: SELECT_OPTIONS_EN,
  ko: SELECT_OPTIONS_EN,
};

const FAB_MENU_TABS_EN = [
  { icon: "edit", label: "Note" },
  { icon: "photo_camera", label: "Photo" },
  { icon: "mic", label: "Audio" },
  { icon: "attach_file", label: "File" },
  { icon: "event", label: "Event" },
];
export const FAB_MENU_TABS: Record<Lang, { icon: string; label: string }[]> = {
  ja: FAB_MENU_TABS_EN,
  en: FAB_MENU_TABS_EN,
  zh: FAB_MENU_TABS_EN,
  ko: FAB_MENU_TABS_EN,
};

const SPLIT_MENU_TABS_EN = [
  { icon: "schedule_send", label: "Schedule send" },
  { icon: "save", label: "Save draft" },
  { icon: "share", label: "Share" },
];
export const SPLIT_MENU_TABS: Record<Lang, { icon: string; label: string }[]> = {
  ja: SPLIT_MENU_TABS_EN,
  en: SPLIT_MENU_TABS_EN,
  zh: SPLIT_MENU_TABS_EN,
  ko: SPLIT_MENU_TABS_EN,
};

const NAV_TABS_EN = [
  { icon: "home", label: "Home" },
  { icon: "search", label: "Search" },
  { icon: "favorite", label: "Saved" },
  { icon: "settings", label: "Settings" },
];
export const NAV_TABS: Record<Lang, { icon: string; label: string }[]> = {
  ja: NAV_TABS_EN,
  en: NAV_TABS_EN,
  zh: NAV_TABS_EN,
  ko: NAV_TABS_EN,
};

const TRANSITION_TEXT_EN: Record<string, string> = {
  slide: "a slide in from the right",
  slideLeft: "a slide in from the left",
  slideUp: "a slide up from the bottom",
  slideDown: "a slide down from the top",
  fade: "a fade",
  expand: "an expand",
  none: "no animation",
};
export const TRANSITION_TEXT: Record<Lang, Record<string, string>> = {
  ja: TRANSITION_TEXT_EN,
  en: TRANSITION_TEXT_EN,
  zh: TRANSITION_TEXT_EN,
  ko: TRANSITION_TEXT_EN,
};

const SWIPE_TEXT_EN: Record<string, string> = {
  left: "swiping left",
  right: "swiping right",
  up: "swiping up",
  down: "swiping down",
};
export const SWIPE_TEXT: Record<Lang, Record<string, string>> = {
  ja: SWIPE_TEXT_EN,
  en: SWIPE_TEXT_EN,
  zh: SWIPE_TEXT_EN,
  ko: SWIPE_TEXT_EN,
};
