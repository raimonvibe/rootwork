# 🌱 Rootwork

**🌐 Live site:** [https://rootwork-teal.vercel.app/](https://rootwork-teal.vercel.app/)

![Rootwork mascot — ginger root logo](root.png)

---

## 💬 What is Rootwork?

Rootwork is a **compassionate, strengths-based** information website for people exploring **work and employment** — especially those reflecting on how **early life experiences** can shape trust, communication, and confidence in the workplace.

✨ **Warm and clear** — not clinical, not overwhelming  
📚 **Cited sources** — links to trusted public organizations  
🎧 **Listen button** — read-aloud powered by your browser (no account needed)  
📱 **Works on mobile** — add to your home screen with the ginger icon  

> *"You've come a long way. Now let's move forward."*

---

## 🗂️ Pages

| Page | Path |
|------|------|
| Home | `/` |
| About | `/about` |
| How early experiences shape work | `/experience-and-work` |
| For job seekers | `/for-individuals` |
| For employers & HR | `/for-employers` |
| Trusted sources | `/resources` |
| Privacy | `/privacy` |

---

## 🛠️ Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript · Tailwind CSS · Framer Motion · Lucide icons
- Deployed on [Vercel](https://vercel.com/)

---

## 🚀 Run locally

```bash
npm install
cp .env.example .env.local   # optional — sets production URL for OG previews
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🖼️ Assets (`public/`)

| File | Purpose |
|------|---------|
| `favicon.ico` | Browser tab icon |
| `social.png` | Link previews (Open Graph / Twitter / messaging apps) |
| `apple-touch-icon.png` | Phone home screen icon |
| `ginger.png` | Site background texture |
| `root.png` (project root) | Brand mascot (README & docs) |

Set **`NEXT_PUBLIC_SITE_URL=https://rootwork-teal.vercel.app`** in Vercel environment variables so share previews use the correct domain.

---

## 📦 Repository

[github.com/raimonvibe/rootwork](https://github.com/raimonvibe/rootwork)

---

## ⚠️ Disclaimer

Rootwork provides **general information only** and is not a substitute for professional mental health, medical, or legal advice.
