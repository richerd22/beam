# The Beam - source

`build.py` turns `content/` (markdown parts, source tables and JSON data) into the static site at the repo root.

    BEAM_REPORT=src/content BEAM_OUT=. STRICT=1 python3 src/build.py
    BEAM_OUT=. python3 src/og.py <source count>

Footnotes are `[^key]` in the parts; keys map to URLs in `content/frag/*-sources.tsv`.
