# Cardiology Digest — website

Source for **[digest.realikechukwu.com](https://digest.realikechukwu.com)**, the public home of the Cardiology Digest: a weekly, fully automated cardiology research email.

The page explains the method behind the digest: a Python pipeline that runs every Sunday on GitHub Actions and

1. **Retrieves** the past week's papers from 20 journals via NCBI E-utilities (17 cardiology journals + NEJM, The Lancet and Nature filtered by MeSH and title/abstract terms),
2. **Classifies** them by PubMed publication type, keeping original research and reviews and dropping editorials, letters, errata and protocols,
3. **Deduplicates** across weeks using git-tracked JSON state,
4. **Prioritises** RCTs, meta-analyses, systematic reviews and large cohorts,
5. **Summarises** each paper with an LLM held to a strict JSON schema and restricted to the abstract,
6. **Delivers** personalised HTML emails via Brevo, with a one-click feedback loop.

The pipeline itself lives in a separate private repository; source available on request.

## Structure

```
public/            Static site served by Cloudflare
  index.html       Landing page + method walkthrough
  sample.html      A real issue (15 Jan 2026), with feedback/unsubscribe links disabled
  404.html
wrangler.jsonc     Cloudflare Workers static-assets config (custom domain)
redirect/          Worker that 301-redirects the old realikechukwu.com/cardiology-digest/ page
```

## Develop & deploy

```bash
python3 -m http.server 8765 -d public   # preview at http://localhost:8765
wrangler deploy                          # deploy the site
cd redirect && wrangler deploy           # deploy the redirect worker
```

---

Built by [Ike Chukwudi](https://realikechukwu.com) · [digest@realikechukwu.com](mailto:digest@realikechukwu.com)
