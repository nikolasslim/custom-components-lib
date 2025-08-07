# Custom Components Library

A collection of reusable React components built with TypeScript and CSS.

## 🚀 Quick Start

### Installation

```bash
npm install @nikolasslim1/custom-components-lib
```

### Basic Usage

```jsx
import React from "react";
import {Button, TextField, Modal} from "@nikolasslim1/custom-components-lib";

// ⚠️ IMPORTANT: Import the styles!
import "@nikolasslim1/custom-components-lib/dist/styles.css";

function App() {
    return (
        <div>
            <Button label="Click me" variant="contained" size="medium"/>
            <TextField label="Email" placeholder="Enter your email"/>
        </div>
    );
}
```

## 📦 What's Included

### Components

- **Button** - Multiple sizes and variants
- **TextField** - With error states and labels
- **Select** - Custom dropdown component
- **Checkbox** - Custom styled checkbox
- **Switch** - Toggle switch component
- **Modal** - Modal dialog component

## 🎨 Component Examples

### Button

```jsx
<Button
    label="Click me"
    size="medium"
    variant="contained"
    onClick={() => console.log("clicked")}
/>
```

**Props:**

- `label` (string) - Button text
- `size` (small | medium | large) - Button size
- `variant` (text | contained | outlined) - Button style
- `onClick` (function) - Click handler

### TextField

```jsx
<TextField
    label="Email"
    placeholder="Enter your email"
    error="Invalid email"
    onChange={(e) => setEmail(e.target.value)}
/>
```

**Props:**

- `label` (string) - Field label
- `error` (string | boolean) - Error message or state
- `onChange` (function) - Change handler
- `value` (string) - Controlled value
- `defaultValue` (string) - Uncontrolled value

### Select

```jsx
<Select
    label="Country"
    options={[
        {value: "us", label: "United States"},
        {value: "ca", label: "Canada"},
    ]}
    onChange={(e) => setCountry(e.target.value)}
/>
```

### Checkbox

```jsx
<Checkbox
    label="Accept terms"
    checked={isChecked}
    onChange={(e) => setIsChecked(e.target.checked)}
/>
```

### Switch

```jsx
<Switch checked={isEnabled} onChange={(e) => setIsEnabled(e.target.checked)}/>
```

### Modal

```jsx
<Modal open={isOpen} onClose={() => setIsOpen(false)}>
    <h2>Modal Title</h2>
    <p>Modal content goes here</p>
    <Button label="Close" onClick={() => setIsOpen(false)}/>
</Modal>
```

## 🧪 Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the library
npm run build

# Run Storybook (component preview)
npm run storybook

# Lint code
npm run lint

# Format code
npm run format
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

---

**Note:** This library is designed to work out-of-the-box with any React project. The styles are bundled separately and
imported explicitly to avoid CSS module conflicts.
