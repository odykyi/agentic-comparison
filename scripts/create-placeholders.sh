# Generic placeholder for tool logos until official ones are obtained
# These are SVG placeholders with tool initials

# OpenCode - Blue gradient with "OC"
echo '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><defs><linearGradient id="oc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3b82f6"/><stop offset="100%" style="stop-color:#1d4ed8"/></linearGradient></defs><rect width="120" height="120" rx="20" fill="url(#oc)"/><text x="60" y="80" font-family="system-ui" font-size="48" font-weight="bold" fill="white" text-anchor="middle">OC</text></svg>' > /private/var/www/agentic-comparison/assets/images/tools/opencode.svg

# Codex - Green gradient with "CX"
echo '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><defs><linearGradient id="cx" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#22c55e"/><stop offset="100%" style="stop-color:#16a34a"/></linearGradient></defs><rect width="120" height="120" rx="20" fill="url(#cx)"/><text x="60" y="80" font-family="system-ui" font-size="48" font-weight="bold" fill="white" text-anchor="middle">CX</text></svg>' > /private/var/www/agentic-comparison/assets/images/tools/codex.svg

# Claude - Orange gradient with "CC"
echo '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><defs><linearGradient id="cc" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f97316"/><stop offset="100%" style="stop-color:#ea580c"/></linearGradient></defs><rect width="120" height="120" rx="20" fill="url(#cc)"/><text x="60" y="80" font-family="system-ui" font-size="48" font-weight="bold" fill="white" text-anchor="middle">CC</text></svg>' > /private/var/www/agentic-comparison/assets/images/tools/claude_code.svg

# Default/Fallback
echo '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" rx="20" fill="#64748b"/><text x="60" y="80" font-family="system-ui" font-size="48" font-weight="bold" fill="white" text-anchor="middle">AI</text></svg>' > /private/var/www/agentic-comparison/assets/images/tools/default.svg

echo "Placeholder SVG logos created"