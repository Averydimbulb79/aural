# Aural development roadmap

Aural aims for broad Audacity-inspired capability with a refined multitrack interface. The roadmap describes targets, not completed functionality.

## v1.0 Foundation
- [x] Dark studio design: editing ribbon, timeline, inspector and basic mixer
- [x] Multiple independent audio tracks
- [x] Browser-supported audio import
- [x] Waveform drawing, horizontal zoom and clip repositioning
- [x] Split, trim, delete and duplicate clip operations
- [x] Playback, stop, timeline seek and loop
- [x] Gain, pan, mute, solo and master volume
- [x] WAV export and editable JSON project save/load
- [x] Undo/redo for primary edit actions
- [ ] Performance and real-browser regression suite

## v2.0 Precision editing
- [x] Single-track time selection on empty lane space
- [x] Copy/cut/paste a selected clip or audio segment
- [x] Track-to-track clip dragging
- [x] Snap to configurable time-grid intervals
- [x] Non-destructive fixed-duration fade-in and fade-out
- [ ] Multi-track selection and grouped clip editing
- [ ] Snap to clip boundaries, markers and beats
- [ ] Adjustable fade handles, crossfades and ripple edits
- [ ] Markers, labels and timeline rulers
- [ ] Robust playback of project edits and preview scrubbing

## v2.2 Professional studio workspace
- [x] Full menu bar and searchable command palette
- [x] Context-sensitive tabbed ribbon with compact icons
- [x] Quick access command row and right-click menus
- [x] Resizable, collapsible project browser and inspector
- [x] Resizable dock with Mixer, History, Analysis and Effects tabs
- [x] Editing, Mixing and Mastering workspace presets
- [x] Browser-local persisted panel configuration
- [ ] Interactive spectrum/effects panels (deferred to audio processing releases)
- [ ] Advanced user-customisable docking, draggable panel rearrangement and history snapshots

## v3.0 Graphical studio foundation
- [x] Redesigned, higher-contrast graphical studio work area
- [x] Vertical mixer faders, pan sliders, mute/solo controls
- [x] Master signal analyser visual indicator
- [x] Project asset browser with clip focus actions
- [x] Local recovery snapshots via IndexedDB with manual save/restore
- [ ] Independent per-track calibrated meters and master peak hold
- [ ] Modular TypeScript project architecture and automated browser suite
- [ ] Compact incremental media storage and guaranteed large-project recovery
- [ ] Recorder, beat maker, graphical effects, advanced processing (later releases)

## v3.2 Effects and mixer
- [ ] Non-destructive effect rack and presets
- [ ] EQ, compressor, limiter, reverb, delay, normalization
- [ ] Realtime meters, peak/clip indicators
- [ ] Mix buses and flexible signal routing

## v3.1 Precision editing and recording
- [ ] Multi-track region selection and fade handles
- [ ] Clip join/crossfade, loop ranges, ripple editing
- [ ] Microphone capture, recording and overdubbing

## v3.3 Tempo, pitch and beat tools
- [ ] Time stretch and pitch shift
- [ ] BPM analysis, drum pads, step sequencer

## v3.4 Export and conversion
- [ ] Video-to-audio extraction, ringtone maker, batch export

## v3.5 Intelligent processing
- [ ] Optional browser-side stem separation and speech/noise isolation

## v4.0 Recording
- [ ] Browser microphone capture and device selection
- [ ] Overdub and punch recording
- [ ] Monitoring and latency calibration

## v5.0 Spectral tools
- [ ] Spectrogram and FFT analyzer
- [ ] Spectral selection and noise profiling
- [ ] De-click and basic noise restoration

## v6.0 Mastering and interchange
- [ ] LUFS and true-peak metering
- [ ] Mastering effects workflow
- [ ] MP3/FLAC and other supported exports
- [ ] Compact project packaging and autosave

## v7.0 Advanced workflow
- [ ] Automation lanes
- [ ] Advanced routing and grouped tracks
- [ ] Plug-in / WebAssembly DSP extension architecture

## v8.0 Reliability and polish
- [ ] Chunked playback/rendering and memory optimisation
- [ ] Automated regression checks and accessibility improvements
- [ ] Configurable and saved workspaces
