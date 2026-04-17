# AI Coding Assistants Comparison Matrix

## Overview Table

| Feature | OpenAI Codex | GitHub Copilot CLI | Cursor | Google Antigravity | Junie | OpenCode | Windsurf |
|---------|--------------|-------------------|---------|-------------------|-------|----------|----------|
| **MCP Support** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Offline Mode** | — | — | — | ✓ | — | — | — |
| **IDE Support** | VS Code, CLI | CLI | VS Code, JetBrains | Any | JetBrains | Any | VS Code |
| **Local Model Support** | — | — | ✓ | ✓ | — | — | — |
| **Agent Mode** | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Self-Hosted** | — | — | ✓ | ✓ | — | ✓ | — |
| **Pricing** | Subscription | Subscription | Subscription | Free/Paid | Subscription | Free | Subscription |

---

## Detailed Comparison

### 1. OpenAI Codex CLI
**Type:** Official OpenAI agent in CLI
**Best For:** Developers wanting native OpenAI integration
**Key Features:**
- Full GPT-4o model access
- Works directly in terminal
- Can run commands, edit files, debug
- Requires `codex` CLI installation
**MCP:** Native support with extensible tool system
**Limitations:** Cloud-only, requires internet connection

---

### 2. GitHub Copilot CLI
**Type:** GitHub's official CLI tool (`gh copilot`)
**Best For:** GitHub-centric workflows
**Key Features:**
- Integrated with `gh` CLI
- GitHub Actions and PR assistance
- Git command suggestions
- Explains shell commands
**MCP:** Available via extensions
**Limitations:** Requires GitHub Copilot subscription

---

### 3. Cursor
**Type:** VS Code fork with AI native
**Best For:** Developers wanting AI-integrated IDE
**Key Features:**
- Native AI chat in sidebar
- Composer for multi-file edits
- Tab autocomplete
- @-mentions for context
**MCP:** Via settings > features > MCP
**Offline:** Can run local models
**Pricing:** $20/mo Pro, $40/mo Business

---

### 4. Google Antigravity (Opencode)
**Type:** Full-stack agent framework
**Best For:** Enterprise/self-hosted AI workflows
**Key Features:**
- Open source and self-hostable
- Extensive skill system (skills shown in your project!)
- Can run entirely offline with local models
- Multi-agent orchestration
- Advanced planning and research modes
**MCP:** Native first-class support
**Offline:** Full offline capability with Ollama/LM Studio
**Pricing:** Free (open source), enterprise support available

---

### 5. JetBrains Junie
**Type:** JetBrains' own AI agent
**Best For:** JetBrains IDE users (IntelliJ, PyCharm, etc.)
**Key Features:**
- Native in JetBrains IDEs
- Context-aware coding
- Test generation
- Refactoring suggestions
**MCP:** Via plugin system
**Pricing:** Included with JetBrains AI subscription

---

### 6. OpenCode
**Type:** Autonomous AI coding agent
**Best For:** Developers wanting AI to drive development
**Key Features:**
- Similar to Codex CLI approach
- Can run entirely in terminal
- File editing, command execution
- Git integration
**MCP:** Supported
**Pricing:** Free (open source)

---

### 7. Windsurf (Codeium)
**Type:** AI IDE with Cascade agent
**Best For:** Developers wanting AI-native experience
**Key Features:**
- Cascade agent for autonomous coding
- Real-time collaborative AI
- Full context awareness
- Free tier available
**MCP:** Via extensions
**Pricing:** Free tier, Pro $20/mo, Teams custom

---

## Decision Guide

### Choose **Codex CLI** if:
- You want official OpenAI model
- You prefer terminal workflows
- You need MCP tool ecosystem

### Choose **Cursor** if:
- You want AI-native IDE experience
- You use VS Code
- You need local model option

### Choose **Antigragivity/Opencode** if:
- You need self-hosted/enterprise deployment
- You want full offline capability
- You need advanced skill system
- You want multi-agent orchestration

### Choose **Windsurf** if:
- You want free tier with good features
- You like Cascade agent approach
- You want real-time AI collaboration

---

## MCP Support Details

| Tool | MCP Implementation | Notes |
|------|-------------------|-------|
| OpenAI Codex | Native | Built-in tool system |
| Cursor | Settings-based | Enable in settings |
| Antigravity | Native first-class | Skills integrate with MCP |
| Windsurf | Via extension | Plugin architecture |

---

## Offline Capabilities

| Tool | Offline Method | Model Options |
|------|---------------|---------------|
| Antigravity | Ollama, LM Studio | Any local model |
| Cursor | Local mode | Various local LLMs |
| Others | ❌ None | Cloud-only |
