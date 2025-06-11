# 🧚‍♀️ GP Design – UI Component Library for React 🥰

**GP Design** is a UI component library built with **React + TypeScript**, designed to offer a solid, accessible, and consistent foundation for modern web projects.

Created and maintained by [Giulia Puntoni](https://www.giuliapuntoni.com), this library provides a modular and complete Design System ready to use.

---

## 🚀 Key Features

- ✅ Accessible and fully typed components (TypeScript)
- 🎨 Styling via **CSS Modules**
- ⚙️ Lightweight setup based on **Vite**
- 📚 Documentation powered by **Storybook v8**
- 🧪 Test-ready with `data-testid` attributes (e.g., Playwright)

---

## 📦 What’s Inside

### 🧱 Base Components

Reusable UI elements, including:

- **Form Elements**: Button, Input, Checkbox, Radiobox, Select, Switch, TextArea, TextField
- **UI Elements**: Accordion, Alert, Dialog, Avatar, Tag, Toast, Divider, Hint, ListItem

### 🧰 Utility Components

- **Layout Helpers**: Flex, Row, Column
- **Interactive Menus**: DropdownMenu

### 🧾 Foundations & Tokens

- **Typography**: Variants like Display, Heading, Body, etc.
- **Colors**, **Spacing**, **Shadows**, **Radii**, **Semantic constants**
- **Centralized Icon System**

---

## 🛠️ How to Use

1. Install the package:

```bash
npm install gp-design
# or
yarn add gp-design
```

2. Import the global CSS file (required):

```ts
import "gp-design/dist/index.css";
```

3. Use the components:

```tsx
import { Button } from "gp-design";

<Button label="Click me" onClick={() => console.log("Clicked")} />;
```

---

## 💡 Best Practices

- 🔹 Always assign unique `id`s to interactive components
- 🔹 Use `handleChange` for controlled components
- 🔹 Add `aria-label` if no visible label is provided

---

## 📖 Documentation

The full documentation is available via Storybook. To run it locally:

```bash
npm run storybook
# or
yarn storybook
```

Make sure to install dependencies first (`npm install` or `yarn`).

---

## 👩🏻‍💻 About the Author

- Developed by [Giulia Puntoni](https://www.giuliapuntoni.com)
- [GitHub](https://github.com/GiuliaPuntoni)
- [LinkedIn](https://www.linkedin.com/in/giulia-puntoni-5a0a4496)

---

> ✨ If you use this library in a project, let me know!  
> 🖖🏻 Happy coding!
