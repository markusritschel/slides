[![Netlify Status](https://api.netlify.com/api/v1/badges/c682e67c-3cf8-4aa2-aa45-e437e47a7597/deploy-status)](https://app.netlify.com/projects/markusritschel-talks/deploys)


# Welcome to my slides repository

Here, I collect all my presentations created with [Slidev](https://github.com/slidevjs/slidev).

The repository is observed by [Netlify](https://www.netlify.com/), where the slides get served.



## Local usage

First, clone the repository to your local machine.

Then, to start the slide show:

- `pnpm install`
- `pnpm run dev`
- select a presentation directory
- visit <http://localhost:3030>

Edit the corresponding `slides.md` to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).


## Creating a new slideshow

> [!NOTE]
> All new slideshows must be placed in a directory following the structure `slides/yyyy-mm-dd_<name>/src/`.

To create a new slideshow, execute `pnpm new` in the terminal.
This will ask you for a `date` and a `talkName`.
It will then create the following directory structure:
```
.
├── slides
│   └── 2024-07-18_my-talk
│       ├── README.md
│       └── src                 <-- the Slidev project
```
initialize a Slidev project inside `src` and remove redundant files.
Now, you can start to edit inside `src`.


## Publish slides online

Before pushing the changes to the online repository, make sure that the individual presentations run and that your `netlify.toml` is up-to-date.
To update the `netlify.toml` run
```
pnpm update-netlify
```

You can also create a pre-push hook that automatically updates the `netlify.toml` before pushing to the online repository.
Paste the following lines in `.git/hooks/pre-push`:
```
npm run update
git add netlify.toml
git commit --amend --no-edit
```


## Tipps

Use the [interactive UnoCSS documentation](https://unocss.dev/interactive/) as well as the [interactive iconify database](https://icon-sets.iconify.design/).
