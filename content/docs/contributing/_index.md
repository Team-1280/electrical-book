---
weight: 3
bookFlatSection: true
title: "Contributing to the Handbook"
---

# Contributing

### Setting up

In order to begin editing the book, navigate to the **[repository for this guide](https://github.com/Team-1280/electrical-book)**.

You'll need to clone the repo somehow; if you're experienced with using git you already know what to do, [skip the tutorial](#style-guide).
If you're not, it's recommended for ease of use that you download either [Github Desktop](https://desktop.github.com/) and follow its steps to clone the repo,
or get the [Github CLI tool](https://github.com/cli/cli#installation).

When using the CLI tool, you'll need to log in with a Github account:

-   Run `gh auth login` to authenticate with your GitHub account. Log in with your credentials.
-   To set your preferred editor, use `gh config set editor <your_editor>`. [Sublime Text](https://www.sublimetext.com/) or [VS Code](https://code.visualstudio.com/) are good options.

Open up your command line: That's usually **Terminal** on MacOS, **Powershell** on Windows, and if you use Linux you know what you are doing.

Then move to the directory where you want this folder to be in, and clone the repo:

```
cd <the_directory_that_you_please>
gh repo clone Team-1280/electrical-book
```

#### And also install **[Hugo](https://gohugo.io/installation/)**.

### Editing

Open up the electrical book in your editor, and you'll see a file structure (I've only highlighted the relevant stuff):

```
├── content
│      ├── _index.md
│      └── docs
├── hugo.toml
├── public
│      ├── lots of files...
├── static
│      ├── css
│      └── img
└── themes
       └── hugo-book
```

#### Outlining each folder:

-   `/content` is the main text of the book and each folder defines the structure of the book, which you can see in the sidebar. **You'll be editing this most of the time.**
-   `/public` is the folder where the rendered pages that you see now are pooped out by **Hugo**, which is what we use to render plain **Markdown**. You don't need to look at this.
-   `/static/img` is where you put your images if needed.
-   `/themes` is what makes Hugo have the site to look like this, otherwise it would be ugly.
-   `hugo.toml` allows you to tweak how Hugo compiles the book, you probably won't need to touch it.

{{< hint warning>}}
If `/themes` is empty, you won't be able to see your changes on your local machine. You can see by simply opening up the folder and checking or with `ls themes`.

If that is the case, run `git submodule update --init --recursive`, which redownloads the submodule for the theme (basically a link to another repo in Git).
{{< /hint >}}

Anyways, to go and edit a file or add new pages, you'll need to work in the `/content` folder, which has all the contents of the book in plain Markdown.

You can learn about the [syntax of Markdown](https://www.markdownguide.org/cheat-sheet/), it should be pretty intuitive and simple.

Working with the book is simple:

-   Each section you see in the sidebar is represented as a folder within `/content`. If that section should have a page itself, the `_index.md` which resides in that folder is the page that will show up if you navigate to that section.
-   Within each section, markdown files describe each subpage. Name them in a descriptive way that makes it easy to maintain.

Each page has specific **metadata** going at the top of the file that describes how Hugo should have said page appear in the sidebar:

```
---
title: <STRING that appears in sidebar>

optional stuff:
weight: <NUMBER to override sidebar alphabetic sorting>
bookFlatSection: <TRUE (by default)/FALSE should it appear "flat">
bookCollapseSection: <TRUE/FALSE should it be collapsible>
---
```

The rest of the markdown goes below.

### How Git...?

{{< hint info>}}
**Git** ~~is intended~~ to make it easy to track and revert changes over time by multiple contributors. Rather than making loads of copies of the same content, Git tracks changes in lines of text, which works well for code and this guide. Don't worry about branches or insane pull requests because this isn't source code that will explode if merged incorrectly.
{{< /hint >}}

Ok,

### Style Guide
