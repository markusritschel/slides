# Welcome to my slides repository

Here, I collect all my presentations created with [Slidev](https://github.com/slidevjs/slidev).

The repository is observed by [Netlify](https://www.netlify.com/), where the slides get hosted.


## Local usage
First, clone the repository to your local machine.

Then, to start the slide show:

- `npm install`
- `npm run dev`
- select a presentation directory
- visit <http://localhost:3030>

Edit the corresponding `slides.md` to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).


## Creating a new slideshow
> [!NOTE]
> All new slideshows must be placed in a directory following the structure `slides/yyyy-mm-dd_<name>/src/`.

To create a new slideshow, execute `npm run new-talk` in the terminal.
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

Once you push the changes to the online repository, a git post-commit hook will automatically update the netlify.toml file to include the new slideshow.
This can also be achieved by running `npm run update`.
