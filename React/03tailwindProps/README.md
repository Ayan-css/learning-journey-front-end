# 03tailwindProps

This project demonstrates how to use **props** in React components styled with **Tailwind CSS**.

## Overview

- Learn how to pass and use props in React.
- Style components using Tailwind CSS utility classes.
- See practical examples of dynamic styling based on props.

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Run the development server:**
    ```bash
    npm start
    ```

3. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Key Concepts

- **Props:** Pass data to components for dynamic rendering.
- **Tailwind CSS:** Use utility classes for rapid UI development.

## Example

```jsx
function Button({ label, color }) {
  return (
     <button className={`px-4 py-2 rounded ${color}`}>
        {label}
     </button>
  );
}
```

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

Happy coding!