# Changelog

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
