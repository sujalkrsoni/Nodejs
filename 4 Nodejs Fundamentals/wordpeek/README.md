## 🔍 wordpeek

**wordpeek** is a simple command-line tool that reads a `.txt` file and tells you:

- ✅ Total number of words
- ⮏ (Optional) How many times a specific word appears

It works great for checking the length of notes, blog posts, or any paragraph file!

---

## 📦 Installation

### ✅ Use without installing (using `npx`)

You don't need to install anything! Just run:

```bash
npx wordpeek ./yourfile.txt
```

To check how many times a word (like `sujal`) appears:

```bash
npx wordpeek ./yourfile.txt sujal
```

🧠 This works because `npx` downloads and runs the tool temporarily for you.

---

### 🌍 Install globally (optional)

If you want to use `wordpeek` like a normal terminal command:

```bash
npm install -g wordpeek
```

Then just run:

```bash
wordpeek ./yourfile.txt
wordpeek ./yourfile.txt sujal
```

---

## 🧠 Usage

### Count total words in a file

```bash
wordpeek ./notes.txt
```

Output:

```
✅ Word Count: 158
```

---

### Count how many times a word appears

```bash
wordpeek ./notes.txt sujal
```

Output:

```
✅ Word Count: 158
⮏ 'sujal' appears 3 times.
```

> Case-insensitive — so `sujal`, `SUJAL`, and `Sujal` are all counted.

---

## 👤 Author

**Sujal Kumar Soni**\
📍 Delhi, India\
📧 [sujalkrsoni@gmail.com](mailto\:sujalkrsoni@gmail.com)\
📀 [LinkedIn Profile](https://linkedin.com/in/sujalsoni)

---

## 📄 License

Licensed under the **MIT License** — free to use and modify.

###
