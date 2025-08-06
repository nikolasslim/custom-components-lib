# Custom Components Library

A collection of reusable React components built with TypeScript and SCSS.

## Task
[https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view]

## Installation

```bash
npm install @nikolasslim/custom-components-lib
```

## Usage

```jsx
import { Button, TextField, Select, Checkbox } from '@nikolasslim/custom-components-lib';

function App() {
  return (
    <div>
      <Button label="Click me" variant="contained" size="medium" />
      <TextField label="Enter text" />
      <Select 
        label="Choose option" 
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" }
        ]} 
      />
      <Checkbox label="Accept terms" />
    </div>
  );
}
```

## Development

### How to run the app

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Build the project:**
   ```bash
   npm run build
   ```
3. **Run tests:**
   ```bash
   npm test
   ```
4. **Start Storybook (UI components preview):**
   ```bash
   npm run storybook
   ```

## Publishing

To publish the package to npm:

```bash
npm login
npm publish
```

---
- Node.js and npm are required.
- For any issues, check your Node.js version or dependencies in `package.json`. 