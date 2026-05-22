# Quiz

## 1. What is a React component?

React components are composible, reusable pieces of UI that can be defined as JavaScript functions or classes.
They allow developers to break down complex user interfaces into smaller, manageable parts, making it easier to build and maintain applications.
Components can accept inputs (called "props") and manage their own state, enabling dynamic and interactive user experiences.

## 2. What's wrong with this code?

```text
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

The issue with the code is that the function name `myComponent` does not follow the convention for React component names, which should start with an uppercase letter.
In React, component names must begin with an uppercase letter to distinguish them from regular HTML elements and to allow React to recognize them as compoents.

## 3. What's wrong with this code?

```text
function Header() {
    return (
        <header>
            <img src="./react-logo.svg" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

The issue with the code is that the `Header` component is being invoked as a regular function (`Header()`) instead of being rendered as a React component using JSX syntax.`
