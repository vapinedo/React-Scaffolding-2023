# React Scaffolding 2023 - By Valp

Organizing a frontend project effectively and intuitively increases the productivity of the development team, and allows you to speed up decision-making when creating, editing, moving, deleting or simply searching for a folder or file.

Being clear about the rules of the game, before starting the coding work, is a task that should not be omitted for the good of the team and for the good of the project.

# Table of Contents

1. [Initial structure](#1-initial-structure)
2. [Naming Convention](#2-naming-convention)
    1. [Directories](#21-directories)
    2. [Files](#22-files)
        1. [Components](#221-components)
        2. [Pages](#222-pages)
    3. [React Functional Components](#24-custom-hooks)
        1. [Regular components](#231-regular-components)
        2. [Pages](#232-pages)
    4. [Custom Hooks](#24-custom-hooks)
3. [Final Folder Structure](#3-final-folder-structure)

## 1. Initial structure

Normally in a frontend application, all the source code that we generate is located within the /src folder, which is why the following folder structure takes the React JS project src folder as its root.

**When developing frontend applications, we usually create code that can be divided into three broad categories:**

1. **CORE**: Code related to the management of data, information or state of the application.
    - State management (Context, Reduxt, MobX, etc).
    - Code related to data consumption from external or local APIs ( fetch, axios, react-query, custom hooks, localStorage, sessionStorage )
    - Services
    - Data mocks
    - Route guards
    - Models, types, interfaces
    - etc.

2. **FEATURE**: Code related to user requirements, or the functionalities that the application must have.
    - Login / registration page
    - Product page
    - Shopping cart
    - Contact form
    - etc.

3. **SHARED**: Code related to shared resources throughout the entire application ( except related to state, those go in CORE ).
    - Navbars, menu
    - HOC ( High Order Components )
    - Themes / Layouts
    - Helper functions
    - Forms controls ( button, input, etc )
    - etc.

```
── src
    ├── app
    ├── core
    ├── feature
    ├── shared
```

## 2. Naming Convention

Creating a standard for naming files, folders, functions, constants, etc. is also a good practice and also speeds up our decision making when writing code. That is why the following conventions are presented below:

### 2.1 Directories

When creating folders we are always going to create them in sharp lowercase, and if they have compound names, we are going to separate them with a hyphen, like this:

```
└── components
    ├── hero
    ├── hero-form
    ├── home
    ├── login
    ├── revenue-report
    └── example-of-large-folder-name

```

### 2.2 Files

When creating files, depending on the type of files we are creating, the rule for creating them varies according to the type, like this:

#### 2.2.1 Components 

When creating a component, we will create a folder for each component individually.

It is recommended that the folder name, file name, and React function component name have the same name, or have a close relationship when naming them.

> Files that export React components must be capitalized

<em>Example</em>


```
└── components
    ├── hero
        ├── Hero.js
        └── Hero.css
    ├── hero-form
        ├── HeroForm.js
        └── HeroForm.css
    └── hero-card
        ├── HeroCard.js
        └── HeroCard.css        
```

#### 2.2.2 Pages

In some cases we will have components, which will have an assigned route, that is, components that we can access directly by writing a url segment in the browser, for example

```https://mysite.com/login```

then the login page will be displayed.

For these cases, where a component has a route assigned in the application router, then we will place them within a folder called pages, and to each of the files of these components, we will add the suffix Page

> When naming the functional component, we will also add the Page suffix

<em>Example</em>


```
└── pages
    └── login
        ├── LoginPage.js
        └── LoginPage.css
    ├── hero
        ├── HeroPage.js
        └── HeroPage.css
    └── home
        ├── HomePage.js
        └── HomePage.css        
```

### 2.3 React Functional Components

When creating the functional react components, we will create them concisely by writing the name of the function and the export statement on the same line, like this:

#### 2.3.1 Regular componentS

```
export default function HeroDetail() {
  return (
    <div>
        Hero details!
    </div>
  )
}
```

> To speed up the creation of the functional component, you can install the following extension in VS Code, and use within a .js, .jsx, .ts or .tsx file, write the ```rfc``` command. [Simple React Snippets Plugin](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

#### 2.3.2 Pages

In the case of components that have an assigned path, that is, pages components, it would look like this:

```
export default function HeroPage() {
  return (
    <div>
        Main hero page!
    </div>
  )
}
```

#### 2.4 Custom Hooks

Like the hooks that come built into React, the idea is to name the files that contain hooks, with the prefix <em>**use**</em>, using lower camel case to name the file.

<em>Example</em>

```
└── hooks
    ├── useHero.js
    └── useHomePage.css
```

> It is strongly recommended to use the Data suffix, whenever hooks return data, information or some piece of state.

<em>Example</em>

```
└── hooks
    ├── useHeroData.js
    └── useHomePageData.css
```

## 3. Final Folder Structure

Again we consider /src as the root of our scaffolding.

It is really difficult to cover all the possible scenarios, file types and libraries that could be used in the project. Therefore, the structure that we will see below is intended to be an initial guide to start organizing our project.

And ideally, as new file types emerge, and the complexity of the project increases, new conventions will be created and this documentation will be updated.


```
└── src
    └── app
    └── core
        ├── hooks
        ├── slices
        ├── store
        └── models
            ├── interfaces
            └── types
    ├── feature
        └── heroes
            ├── components
                └── hero-card
                    ├── HeroCard.js
                    └── HeroCard.css
                └── hero-detail
                    ├── HeroDetail.js
                    └── HeroDetail.css
            ├── pages
                └── hero
                    ├── HeroPage.js
                    └── HeroPage.css
            └── HeroRouting.js
    └── shared
        ├── components
            └── navbar
                ├── Navbar.js
                └── Navbar.css
            └── form
                ├── Input.js
                ├── Select.css
                ├── Radio.css
                ├── ChekBox.css
                └── DropDown.css
        ├── hoc
            └── fancy-box
                ├── FancyBox.js
                └── FancyBox.css
        ├── themes
            ├── darkTheme.js
            └── ligthTheme.js
        └── helpers
            ├── currencyMask.js
            ├── emailValidator.js
            └── checkIsEmptyField.js
```