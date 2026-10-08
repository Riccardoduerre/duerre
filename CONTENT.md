# Content Management Guide

This guide explains how to add new blog posts and portfolio projects to the site.

## Adding a Blog Post

Blog posts are stored in `src/content/blog/<slug>/`.

To create a new post, run the scaffolding script:
```bash
node scripts/new-post.js <your-post-slug>
```

This will generate a new folder with an `index.ts`, `en.md`, and `it.md`. 
Edit `index.ts` to configure the metadata (title, date, excerpt, and image). Write the English content in `en.md` and the Italian content in `it.md`.

## Adding a Portfolio Project

Portfolio projects are stored in `src/content/projects/<id>/`.

To create a new project, run the scaffolding script:
```bash
node scripts/new-project.js <your-project-id>
```

This will generate a new folder with an `index.ts` file. 
Edit the file to configure your project details (category, title, client, scope, etc.). Images must be imported and configured in this file.
