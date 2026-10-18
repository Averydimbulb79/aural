# Aural
### A modern, browser-based multitrack audio studio

Aural combines Audacity-inspired waveform editing with a sleek studio workspace, track mixer and flexible audio export. It runs in a modern desktop browser and is deployed on GitHub Pages.

| Project | Link |
| :-- | :-- |
| Live editor | [Launch Aural](https://averydimbulb79.github.io/aural/) |
| Source repository | [Averydimbulb79/aural](https://github.com/Averydimbulb79/aural) |
| Current version | **v3.0.0** |
| License | MIT |
| Platform | Desktop-first web app |
| Hosting | GitHub Pages |

## What Aural can do

| Category | Available features |
| :-- | :-- |
| Audio import | WAV, MP3 and other formats supported by your browser; multi-file drag and drop |
| Timeline | Multitrack waveforms, range selection, highlighted cross-track drag destinations, snapping, playhead, zoom +/− and Fit |
| Editing | Split, trim, cut/copy/paste clip segments, fade in/out, duplicate, delete, undo and redo |
| Mixing | Graphical vertical channel faders, pan sliders, mute/solo, master gain and master-level visualization |
| Transport | Play, pause, stop, rewind, loop |
| Export | **MP3 and WAV**, user-selectable export settings |
| Projects | Save/reopen JSON projects and local IndexedDB session recovery |
| Workspace | Menu bar, contextual ribbon tabs, quick access controls, command palette, context menus, resizable panels and presets |

## v3.0: Studio foundation

The first v3.0 release begins Aural's graphical studio upgrade. It extends the existing editor while preserving the essential editing, playback and export workflow.

| Studio feature | Implementation |
| :-- | :-- |
| Interface | Darker high-contrast timeline, taller audio lanes, refined panel chrome |
| Graphical mixer | Vertical channel faders, stereo pan sliders, mute and solo buttons, track names and level readouts |
| Output metering | Live master waveform peak display during playback, using a Web Audio analyser |
| Media library | Imported clip list in the asset browser; click to focus a clip and set playback position |
| Recovery | Browser-local recovery snapshot saved to IndexedDB after a short period without edits |
| Manual recovery | Save Recovery Point / Restore Local Recovery buttons in the project browser |
| Existing functionality | Clipboard, cross-track dragging, zoom, WAV/MP3 export and JSON project import/export retained |

### Recovery and persistence

Aural attempts to write the current session to the browser's IndexedDB approximately 12 seconds after editing stops. Recovery can also be requested manually. When a browser-local recovery point is available, use **Restore local recovery** in the Asset Browser. Restoration replaces the current session after confirmation.

Recovery saves full audio sample data and may consume significant browser storage. Storage quotas, private browsing, very large recordings, and interrupted writes may prevent successful recovery. **Continue saving downloadable JSON project files as your primary backup.** A compact binary project container and incremental asset storage remain future work.

### Metering limitations

The master-level bar currently reflects the amplitude observed by a Web Audio analyser. Channel-strip meter graphics are based on that master-level signal and channel gain settings; they are **not calibrated independent per-track metering**. Independent per-track analysers, true-peak detection, clipping history and loudness metering are planned.

The Mixer, Asset Browser and Recovery controls are functional, but recording, beat-making, AI separation, full graphical effects and video-to-audio conversion are **not implemented** in this release.

## Moving audio clips between tracks (v2.2.1)

1. Import at least one clip and create a second track (or import a second audio file).
2. Press and hold the clip waveform, then drag vertically to the destination track.
3. The destination track highlights in teal while the pointer is above it; a floating label identifies the clip being moved.
4. Release on the highlighted track to move the clip. The clip retains its timeline position unless you also move it horizontally.
5. If you release outside the track area, the move is cancelled. Use **Undo** (Ctrl/Cmd+Z) to reverse a completed move.

This update makes the existing cross-track dragging behaviour clearer and more reliable, including pointer cancellation, a visual drag proxy, drop-target feedback and preserved editing history. Snapping still applies to horizontal movement when enabled. Drag and drop currently moves a clip; it does not create a linked copy.

## Professional workspace (introduced in v2.2.0)

Aural v2.2 introduces the framework for a professional multi-window studio interface. Existing audio editing and exporting capabilities are retained.

| Workspace section | Available functionality |
| :-- | :-- |
| Menu bar | File, Edit, Tracks, Clips, Effects, Generate, Analyze, View, Help |
| Ribbon tabs | Home, Edit, Tracks, Clips and View with contextual icon commands |
| Quick Access Toolbar | Import, Save Project, Undo, Redo, Export and Fit |
| Command palette | Ctrl/Cmd+K; search available commands and execute them |
| Context menu | Right-click a clip or track to access relevant operations |
| Asset browser | Collapsible and horizontally resizable project browser |
| Inspector | Collapsible and horizontally resizable properties panel |
| Bottom dock | Vertically resizable tabs for Mixer, History, Analysis and Effects |
| Workspace presets | Editing, Mixing and Mastering panel arrangements |
| Layout persistence | Panel dimensions, visibility, and ribbon tab are saved in local browser storage |

### Menus and feature availability

The full application menu exposes available commands with shortcuts where applicable. Items marked **(planned)** are disabled until the matching audio-processing implementation exists. Analysis and Effects dock panels currently contain explicit future-feature messages; they are not live analyzers or effect chains.

### Resizing and workspace presets

Drag the thin dividers between the browser, timeline and inspector to resize the side panels. Drag the divider directly above the bottom dock to adjust its height. Use **Browser**, **Inspector** and **Dock** controls to hide or show panels. The workspace selector includes Editing, Mixing and Mastering layouts.

The editing ribbon's command groups update when switching tabs. The Quick Access controls and full menus remain available regardless of the active ribbon tab.

### Keyboard and contextual workflows

| Interaction | Behaviour |
| :-- | :-- |
| Ctrl/Cmd + K | Open searchable command palette |
| Right-click a clip | Display edit operations such as split, fades, duplicate and delete |
| Right-click a track | Display track-oriented actions |
| Esc | Dismiss menus and clear active selection where applicable |
| Click a ribbon tab | Switch visible icon tools without changing their underlying functions |
| Choose a workspace preset | Change panel dimensions and visible sections |

### Limitations

- This version delivers the UI architecture, not functional spectrum plots, EQ processors or recorders.
- Panel layout controls are browser-local and are not embedded in exported project files.
- The current bottom dock has a functional mixer and undo/redo actions; advanced history snapshots are planned.
- The main timeline remains the existing editing engine, and browser end-to-end testing is still pending.
- Icon layout is optimised for desktop. Very narrow screens may need horizontal scrolling.

## Icon-based toolbar (introduced in v2.1.0)

Aural now uses a compact, professional, icon-first command ribbon, replacing wide text buttons with consistent line icons. Hover over a button to see its full command name; keyboard navigation and screen-reader accessible labels are preserved. Tool groups separate file operations, clip editing, clipboard/fades/snapping, history, export and zoom. The top-bar project buttons are also icon-based.

| Group | Available commands |
| :-- | :-- |
| File and tracks | Import Audio, Add Empty Track |
| Clip editing | Split at Playhead, Delete Clip, Duplicate, Trim Left, Trim Right |
| Clipboard | Cut, Copy, Paste |
| Envelope and selection | Fade In, Fade Out, Snap On/Off, Clear Selection |
| History | Undo, Redo |
| Output and navigation | Export Audio, Zoom Out, Zoom In, Fit to Timeline |
| Project bar | Save Project, Open Project, Toggle Fullscreen |

The snap interval and zoom percentage remain visible as compact dropdowns. Tooltips appear on hover, and native browser button titles offer an additional hint. Features and keyboard shortcuts otherwise behave as in v2.0.

## Precision editing (introduced in v2.0.0)

| Tool | How it works |
| :-- | :-- |
| Time range selection | Drag across the empty area of a track to highlight an interval on that track |
| Copy | Select a clip or time range; click **Copy** or press Ctrl/Cmd+C |
| Cut | Select a clip or time range; click **Cut** or press Ctrl/Cmd+X; non-selected portions remain |
| Paste | Select a destination track, place playhead, then click **Paste** or Ctrl/Cmd+V |
| Fade In / Fade Out | Select a clip and click the matching button; click again to remove its 2-second (or shorter) fade |
| Move between tracks | Drag a selected clip vertically onto another track |
| Snapping | Toggle **Snap On/Off**, then choose a 0.1, 0.5, 1 or 5 second interval |
| Clear Selection | Remove the time-range highlight |
| Undo / Redo | Restore supported structural editing operations |

Range selection operates on one track at a time. The clipboard is internal to Aural, not the system clipboard. Fades are non-destructive gain envelopes and are applied to playback and WAV/MP3 export. Undo/redo snapshots store clip metadata while sharing original decoded audio buffers.

### Current precision-editing limitations

- Drag selection begins on empty lane space. Selecting directly across an existing waveform requires a dedicated selection tool in a future update.
- No crossfades, ripple editing, multi-track range selection, multi-clip grouping, paste insert mode, or waveform fade handles yet.
- Pasting places segments at the playhead and overlays existing clips rather than shifting them.
- Snapping currently uses time-grid intervals, not clip boundaries or zero crossings.
- Clip fades currently use a fixed default duration, toggled on/off, rather than draggable handles.
- Browser-based acceptance tests are still pending.

## Export Audio (introduced in v1.2.0)

Click **Export Audio…** in the top ribbon or **Export mix** in the project browser. A settings dialog lets you choose an output filename and these options:

| Setting | MP3 | WAV |
| :-- | :-- | :-- |
| Sample rate | 32,000 / 44,100 / 48,000 Hz | 32,000 / 44,100 / 48,000 Hz |
| Channels | Mono / Stereo | Mono / Stereo |
| Bitrate | 96 / 128 / 160 / 192 / 256 / 320 kbps | Not applicable |
| Bit depth | Not applicable | 16-bit PCM / 24-bit PCM |
| Default | Stereo, 44.1 kHz, 320 kbps | Stereo, 44.1 kHz, 16-bit PCM |
| Encoding | LameJS 1.2.1, loaded from CDN on first use | Built-in local WAV writer |

MP3 compression is lossy. A higher bitrate generally improves fidelity at the expense of file size. WAV is uncompressed PCM and is suitable for further editing or mastering.

### Important export considerations

- MP3 encoding downloads **lamejs 1.2.1** from jsDelivr when used for the first time. This requires network access. Encoding then happens inside your browser; the audio is not uploaded to a remote service.
- WAV export uses built-in application code and does not need the MP3 encoder.
- For long sessions, export processing can use considerable RAM and CPU resources. Large-project optimisations are planned.
- Bitrate is expressed in **kilobits per second (kbps)**; sample rate is expressed in **hertz (Hz)**. They are distinct audio parameters.
- Audio will be rendered at the selected sample rate. Exported channel count and WAV bit depth follow the selected options.

## Working with the timeline

| Control | Behaviour |
| :-- | :-- |
| **+** | Zoom in around the viewport centre |
| **−** | Zoom out around the viewport centre |
| **Fit** | Fit the full project audio into the visible waveform area |
| Zoom dropdown | Select fixed or custom scale |
| Click ruler | Set playback position |
| Drag clip | Change clip start time and move between tracks |
| Split at Playhead | Divide selected clip at the playhead |
| Trim Left / Right | Remove audio outside the relevant playhead boundary |

Available timeline zoom: 0.5%–1600%. For extremely long projects, the minimum zoom can still require scrolling.

## Keyboard shortcuts

| Shortcut | Action |
| :-- | :-- |
| Space | Play / Pause |
| Ctrl/Cmd + Z | Undo |
| Ctrl/Cmd + Shift + Z | Redo |
| Ctrl/Cmd + Y | Redo |
| Ctrl/Cmd + C | Copy selection |
| Ctrl/Cmd + X | Cut selection |
| Ctrl/Cmd + V | Paste selection |
| Escape | Clear time selection |
| Delete | Delete selected clip |
| + or = | Zoom in |
| - | Zoom out |

## Getting started

1. Open [Aural](https://averydimbulb79.github.io/aural/) in a recent desktop browser.
2. Select **Import Audio**, or drag audio files directly onto the editor.
3. Press **Fit** to see all imported audio across the timeline.
4. Edit clips, use the mixer or inspector to change track levels, and preview playback.
5. Select **Export Audio…** to choose MP3/WAV, sample rate, channel count and quality.
6. To preserve editable clips, select **Save Project**, then use **Open Project** to resume later.

## Development milestones

| Release | Scope | Status |
| :-- | :-- | :-- |
| v1.0 | Basic multitrack editing, playback, WAV export | Released |
| v1.1 | Zoom In, Zoom Out and Fit to Screen | Released |
| v1.2 | MP3 export, adjustable quality, improved export workflow | Released |
| v2.0 | Track range selection, cut/copy/paste, fades, grid snapping, cross-track clip drag | Released |
| v2.1 | Professional icon ribbon and hover labels | Released |
| v2.2 | Menu bar, tabbed ribbon, dockable-style panels, contextual commands and presets | Released |
| **v3.0** | **Graphical studio foundation, channel strips, master metering, asset browser and recovery** | **Released (foundation)** |
| **v2.2.1** | **Cross-track drag reliability and visual feedback** | **Released** |
| v3.0 | EQ, compressor, limiter, real-time effect chains | Planned |
| v4.0 | Recording and overdubbing | Planned |
| v5.0 | Spectrogram and spectral repair | Planned |
| v6.0 | Mastering, LUFS metering, batch export | Planned |
| v7.0 | Automation and advanced routing | Planned |
| v8.0 | Performance and accessibility refinements | Planned |

Full milestones: [ROADMAP.md](ROADMAP.md). Release history: [CHANGELOG.md](CHANGELOG.md).

## Current limitations

| Area | Limitation |
| :-- | :-- |
| Large audio | Browser memory usage can grow quickly; no chunked engine yet |
| Project files | JSON stores uncompressed audio samples and may be large |
| Recovery | IndexedDB local recovery is best-effort and not a substitute for exported project backups |
| Editing | No group editing, crossfades, ripple editing or multi-track range selection yet |
| Effects | No real-time effect rack or plugin host yet |
| Recording | Microphone recording is planned |
| MP3 offline use | Encoder must first be loaded via CDN; reliable offline MP3 support is not yet provided |
| Quality assurance | Automated full-browser export testing remains outstanding |

## Release discipline and rollback

1. Create a GitHub backup branch before each incremental update.
2. Update `README.md` and `CHANGELOG.md` during every release.
3. Preserve existing application behaviour when extending functionality.
4. Verify committed changes and check functionality before describing a release as tested.
5. Restore a previous backup branch when rollback is requested.

| Release | Backup branch |
| :-- | :-- |
| Before v3.0 | `backup/pre-v3.0-studio` |
| Before v2.2.1 | `backup/pre-v2.2.1-cross-track-drag` |
| Before v2.2 | `backup/pre-v2.2-workspace` |
| Before v2.1 | `backup/pre-v2.1-icon-toolbar` |
| Before v2.0 | `backup/pre-v2.0-precision` |
| Before v1.2 | `backup/pre-v1.2-export` |
| Before v1.1 | `backup/pre-v1.1-zoom` |
| Initial v1.0 | `backup/v1.0.0` |

## Technical notes

Aural currently uses HTML, CSS and vanilla JavaScript, Web Audio API for mixing and playback, Canvas for waveforms, OfflineAudioContext for export rendering, and LameJS for MP3 encoding. The app is hosted as a static GitHub Pages site. We will modularise the engine as the feature set grows.

### License

MIT. See [LICENSE](LICENSE).
