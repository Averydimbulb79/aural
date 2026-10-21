# Changelog

## 3.0.1 - 2026-10-21

### UI refinements
- Unified scrollbar styling throughout Aural's studio panels, timeline, menus and dialogs.
- Narrow, rounded dark scroll tracks with desaturated teal thumbs and brighter hover/active states.
- Added Firefox scrollbar properties and WebKit scrollbar styling where supported.
- Updated visible application and browser titles to v3.0.1.

### Notes
- Native overlay scrollbar presentation can vary by browser and operating system.
- Audio editing and processing functions are unchanged.
- Rollback: `backup/pre-v3.0.1-scrollbars`.



## 3.0.0 - 2026-10-18

Initial graphical studio foundation for the expanded Aural roadmap.

### Added
- Refined high-contrast graphical studio styling and taller waveform lanes.
- Mixer channel strips with vertical gain faders, stereo pan sliders, mute and solo buttons.
- Live master-level visualisation using a Web Audio analyser, plus approximate strip meter indicators.
- Clip asset browser with focus-on-clip navigation.
- Best-effort automatic local recovery snapshots using IndexedDB.
- Manual recovery save/restore controls and status.

### Preserved
- Existing precision editing, cross-track dragging, browser WAV/MP3 export, playback, and project JSON format.

### Known limitations
- Current strip meters estimate levels based on master signal; independent track analysers remain pending.
- Large decoded audio data may exceed IndexedDB storage quotas and cause recovery to fail.
- Full UI regression testing is pending; no microphone recording, beat maker, EQ or AI processing in this version.
- This is the first v3 foundation release, not full parity with the referenced Android product.

### Rollback
- `backup/pre-v3.0-studio`



## 2.2.1 - 2026-10-16

### Improved
- Cross-track clip drag operation with visible teal drop-target highlighting.
- Floating clip label appears while dragging to identify the active clip.
- Horizontal timeline placement and snap behaviour are maintained while dragging vertically.
- Explicit cancellation and destination checking prevent accidental moves when dropped outside the track area.
- Clip moves preserve undo history and selected clip/track state.
- Updated application header and browser title to v2.2.1.

### Rollback
- Backup branch: `backup/pre-v2.2.1-cross-track-drag`.

### Verification
- JavaScript syntax validated. Interactive browser drag tests are still pending.



## 2.2.0 - 2026-10-16

### Added
- Full application menu bar with File, Edit, Tracks, Clips, Effects, Generate, Analyze, View and Help categories.
- Tabbed contextual command ribbon and compact Quick Access Toolbar.
- Searchable command palette (Ctrl/Cmd+K) and contextual track/clip menus.
- Resizable project browser, inspector and bottom dock, plus visibility toggles.
- Editing, Mixing and Mastering workspace presets with browser-local layout persistence.
- Bottom dock tab switcher with live mixer, undo/redo controls and clearly labelled placeholders for planned audio analysis and effects.

### Preserved
- Existing clip editing, transport, zoom, WAV/MP3 export and project file actions.

### Limitations
- Planned analysis and effects are intentionally disabled or labelled rather than simulated.
- Dock tabs are fixed and panel rearrangement is not yet supported.
- Browser-based interaction and regression testing remain outstanding.

### Rollback
- Backup branch: `backup/pre-v2.2-workspace`.



## 2.1.1 - 2026-10-16

### Changed
- Added the version number to the browser page title and visible studio header.
- Documented the proposed v2.2 multi-panel professional workspace, without changing existing editing functionality.

### Rollback
- Backup branch: `backup/pre-v2.1.1-title`.



## 2.1.0 - 2026-10-16

### Changed
- Replaced word-heavy toolbar buttons with compact, consistent SVG line icons.
- Grouped editing actions into a denser, scrollable ribbon suitable for a professional audio workspace.
- Converted top-bar project operations (save, open, fullscreen) to icon-only buttons.
- Preserved button action IDs and event handlers, zoom and snap selectors.

### Accessibility
- Added descriptive aria-label and native title tooltips to every converted button.
- Added keyboard-focus outlines and active-state styling for the Snap toggle.
- Added pointer hover hints with command names.

### Rollback
- Backup branch: `backup/pre-v2.1-icon-toolbar`.



## 2.0.0 - 2026-10-16

### Added
- Single-track range selection by dragging through empty timeline lane space.
- Internal clipboard to copy and cut whole clips or intersecting time segments, plus paste onto the selected track at the playhead.
- Drag clips vertically between existing tracks.
- Non-destructive fade-in and fade-out toggles, applied in playback and rendered exports.
- Optional time-grid snapping at 0.1, 0.5, 1 or 5 second increments.
- Clear Selection button and Escape shortcut.
- Ctrl/Cmd+C, Ctrl/Cmd+X and Ctrl/Cmd+V shortcuts for editing operations.

### Limitations
- Range selection begins in empty lane space, not directly over a waveform.
- Fades are default-duration toggles rather than draggable handles.
- No crossfades, ripple editing, clip-boundary snapping or multitrack selection yet.
- Browser end-to-end functional testing remains pending.

### Rollback
- Backup branch: `backup/pre-v2.0-precision`.



## 1.2.0 - 2026-10-16

### Added
- Export Audio dialog with editable output filename and format selection.
- MP3 export using browser-side LameJS, with configurable 96, 128, 160, 192, 256 and 320 kbps bitrate.
- Sample rate options: 32 kHz, 44.1 kHz and 48 kHz.
- Mono and stereo export options.
- WAV export with 16-bit or 24-bit PCM depth.

### Improved
- Audio export renders at the selected output sample rate and channel count.
- Export progress/status reporting and error handling.
- README reorganised into feature, export settings, shortcuts, limitations and roadmap tables.

### Notes
- MP3 encoder is loaded on demand from jsDelivr; an internet connection is required for initial encoder loading.
- For large projects, export remains memory-intensive. Automated browser validation is pending.
- Rollback branch: `backup/pre-v1.2-export`.



## 1.1.0 - 2026-10-16

### Added
- Zoom In (+) and Zoom Out (−) toolbar buttons and keyboard shortcuts.
- Fit control that scales all audio clips to the available timeline area.
- Custom zoom percentages down to 0.5% and up to 1600%.
- Adaptive timeline ruler spacing and labels for long-duration projects.

### Improved
- Zoom operations retain the approximate timeline viewport centre.
- The README documents the zoom workflow and current limits.

### Rollback
- Previous repository state preserved on branch `backup/pre-v1.1-zoom`.


## 1.0.0 - 2026-10-16

Initial functional studio foundation.

### Added
- Dark multitrack workspace with ribbon, waveform timeline, inspector, mixer, transport and responsive layout.
- Drag-and-drop audio import and waveform generation.
- Multiple tracks, renaming, mute, solo, gain, pan and master level.
- Drag clips within a track, split at playhead, trim from either edge, duplicate and delete.
- Undo/redo for core editing operations.
- Playback with playhead, looping, zoom and fullscreen.
- Stereo WAV export using offline audio rendering.
- Self-contained editable project JSON format and project reload.
- Initial project documentation and milestone roadmap.

### Known limitations
- Browser-dependent import codecs; WAV-only export.
- Memory-heavy project JSON and no autosave yet.
- No real-time effect chains, recording or spectral tools.
- Real-browser acceptance tests are still pending.
