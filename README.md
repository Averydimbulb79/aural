# Aural
### Browser-based multitrack audio studio

Aural is a sleek multitrack audio editor inspired by Audacity, with a professional, desktop-first interface and a long-term roadmap for non-destructive editing, mixing, recording, spectral analysis and mastering.

**Version:** 1.0.0 (foundation release)  
**Live site (once GitHub Pages is enabled):** https://averydimbulb79.github.io/aural/  
**Repository:** https://github.com/Averydimbulb79/aural

## Version 1.0 features

- Responsive dark studio interface with a contextual editing ribbon, track timeline, mixer and inspector.
- Import multiple browser-decodable audio files via file picker or drag and drop.
- Display audio waveforms on separate tracks.
- Playback and pause, stop, rewind, playhead navigation, loop playback, time readout.
- Move clips within their tracks, split at playhead, trim left/right, delete and duplicate.
- Add empty tracks, rename tracks, mute and solo individual tracks.
- Track gain and stereo pan, master gain.
- Timeline zoom presets and fullscreen mode.
- Undo and redo for supported editing actions.
- Render the multitrack mix to a stereo 44.1 kHz 16-bit WAV file.
- Save and reload an editable Aural project as JSON, including raw audio samples.
- Keyboard shortcuts: Space for play/pause, Ctrl/Cmd+Z undo, Ctrl/Cmd+Shift+Z or Ctrl/Cmd+Y redo, Delete to remove selected clip.

### Getting started

Open the published GitHub Pages site, or open `index.html` in a current desktop browser. Import audio files, select a clip and use the toolbar to edit, or drag a clip to move it. Click the ruler to position the playhead. Adjust track gain and pan in the inspector, then export the final mix as WAV.

No account, external server or software installation is needed for the v1.0 editor. Imported audio is decoded locally using the browser's Web Audio API. Supported import formats depend on the browser and operating system.

### Limitations of version 1.0

This is a foundation release, not yet feature parity with Audacity.

- The project JSON embeds audio samples and can become very large. A compact project container and IndexedDB/OPFS persistence are planned.
- WAV is the only export format currently provided. MP3, FLAC and other outputs are planned.
- There is no microphone recording, real-time effect rack, spectrogram, advanced automation, crossfade or plugin support yet.
- Clips can be moved along their existing tracks; moving between tracks and multi-clip group editing are not yet supported.
- There is no autosave or recovery system yet. Save project files frequently.
- Large files and long sessions can consume substantial memory. A chunked rendering architecture is planned.
- The timeline and mixer layout is desktop-first. Browser codec support varies.

## Development roadmap

| Version | Focus |
| --- | --- |
| 1.0 | Multitrack foundation, imports, editing, mixing basics, WAV export |
| 2.0 | Selection workflow, snapping, clipboard operations, fades and ripple editing |
| 3.0 | Real-time EQ, compression, effects, effect chains, advanced mixer |
| 4.0 | Recording, overdubbing, input monitoring and latency compensation |
| 5.0 | Spectrogram, FFT analysis, noise profiling and restoration |
| 6.0 | Mastering, loudness analysis, expanded export formats |
| 7.0 | Automation lanes, advanced routing, extensible processing |
| 8.0 | Optimisation, accessibility, reliability and UX polish |

See [ROADMAP.md](ROADMAP.md) for the detailed plan and [CHANGELOG.md](CHANGELOG.md) for release changes.

## Release and rollback policy

For every subsequent release:

1. Preserve a rollback point on GitHub before implementing changes, preferably a version tag referencing the current stable commit.
2. Implement incremental changes without intentionally breaking existing workflows.
3. Verify core actions and export before considering the update complete.
4. Update this README and CHANGELOG for every release.
5. Publish to the main branch for GitHub Pages only after checking the changes.

The Git commit history already provides recovery points. A separate release tag should be created for each stable version where supported.

## GitHub Pages setup

1. In the repository, navigate to **Settings → Pages**.
2. Set **Build and deployment** to **Deploy from a branch**.
3. Select **main** and **/(root)**, then save.
4. Once published, the editor should be accessible at https://averydimbulb79.github.io/aural/.

## Technology

Aural v1.0 is a static HTML/CSS/JavaScript application using the Web Audio API and Canvas for waveform drawing. This keeps GitHub Pages deployment simple. The audio engine and interface can be modularised as complexity increases.

## License

MIT. See LICENSE.
