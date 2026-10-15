# Aural
### A modern, browser-based multitrack audio studio

Aural combines Audacity-inspired waveform editing with a sleek studio workspace, track mixer and flexible audio export. It runs in a modern desktop browser and is deployed on GitHub Pages.

| Project | Link |
| :-- | :-- |
| Live editor | [Launch Aural](https://averydimbulb79.github.io/aural/) |
| Source repository | [Averydimbulb79/aural](https://github.com/Averydimbulb79/aural) |
| Current version | **v1.2.0** |
| License | MIT |
| Platform | Desktop-first web app |
| Hosting | GitHub Pages |

## What Aural can do

| Category | Available features |
| :-- | :-- |
| Audio import | WAV, MP3 and other formats supported by your browser; multi-file drag and drop |
| Timeline | Multitrack waveforms, clip dragging within tracks, playhead, zoom +/− and Fit |
| Editing | Split, trim left/right, duplicate, delete, undo and redo |
| Mixing | Track gain, pan, mute/solo and master gain |
| Transport | Play, pause, stop, rewind, loop |
| Export | **MP3 and WAV**, user-selectable export settings |
| Projects | Save and reopen editable JSON projects containing audio data |
| Workspace | Dark ribbon interface, mixer, inspector and fullscreen |

## Export Audio (new in v1.2.0)

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
| Drag clip | Change clip start time within its track |
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
| **v1.2** | **MP3 export, adjustable quality, improved export workflow** | **Released** |
| v2.0 | Region selection, clipboard editing, fades, crossfades, snap | Planned |
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
| Recovery | No autosave or crash recovery in current releases |
| Editing | Clips cannot yet be dragged between tracks; no group editing |
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
| Before v1.2 | `backup/pre-v1.2-export` |
| Before v1.1 | `backup/pre-v1.1-zoom` |
| Initial v1.0 | `backup/v1.0.0` |

## Technical notes

Aural currently uses HTML, CSS and vanilla JavaScript, Web Audio API for mixing and playback, Canvas for waveforms, OfflineAudioContext for export rendering, and LameJS for MP3 encoding. The app is hosted as a static GitHub Pages site. We will modularise the engine as the feature set grows.

### License

MIT. See [LICENSE](LICENSE).
