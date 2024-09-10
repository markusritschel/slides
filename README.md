# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

To start the slide show:

- `npm install`
- `npm run dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).


All new slideshows must be placed in a directory following the structure `yyyy-mm-dd/src/`.


To create a new slideshow, type `npm run new-talk`.
This will ask you for a `date` and a `talkName`.
It creates a `{date}_{talkName}` directory, creates a slidev project in src, and removes redundant files.
Now, get started inside `src`.

When you're done, execute `npm run update` to update the netlify.toml.
Once you push, Netlify will parse