# 📝 Notes App

A simple, no-framework Notes App built with vanilla JavaScript, HTML, and Tailwind CSS. Create, edit, and delete notes with automatic local persistence — no backend required.

## 🚀 Features

* **Create Notes** — Add new notes instantly via the floating action button.
* **Auto-Save** — Notes save automatically when the modal is closed, no manual save button needed.
* **Edit Notes** — Click any note to open and edit its title and content.
* **Delete Notes** — Remove notes directly from the note view.
* **Recently Opened** — Notes opened within the last 48 hours appear in a separate "Recently Opened" section.
* **Auto Titling** — Notes left without a title default to "Unnamed".
* **Persistent Storage** — All notes are saved in the browser's `localStorage`, so your data stays even after refreshing.

## 🧠 How It Works

* Notes are stored as an array of objects, each with a unique `id`, `title`, `content`, `date`, and `lastOpened` timestamp.
* The UI is fully re-rendered from this array on every change — the array is the **single source of truth**.
* **Event delegation** is used for click handling, so new notes work without needing individual listeners.
* A 48-hour time window determines whether a note appears in "Recently Opened" or "All Notes".

## 🛠️ Tech Stack

* **HTML5**
* **Tailwind CSS**
* **Vanilla JavaScript** (no frameworks or libraries)
* **Browser localStorage** for persistence

## 💻 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com
   ```
2. **Navigate to the project folder**
   ```bash
   cd notes-app
   ```
3. **Open the app**
   Simply open `index.html` in your browser!

## 📈 Status

**Core CRUD functionality complete.** Built as a planning-and-logic practice project, with the feature list and architecture designed independently before implementation.
