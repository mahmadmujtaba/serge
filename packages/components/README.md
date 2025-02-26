[🏠 Docsite home](../../docs/index.md)

# Serge Project Component library

This is the primary component library of the serge project. New components should always be created inside the `local` folder.

This is where our Storybook implementation lives. For those who don't know what storybook is, here is a brief introduction:

[![Storybook intro video on YouTube](https://i.imgur.com/FDvR6zl.jpg)](https://www.youtube.com/watch?v=p-LFh5Y89eM)

## Getting started

In the root of the serge project, ensure that you have installed all packages and dependencies and then run the project:

```bash
yarn install
yarn storybook
```
**Note:** in June 2020, Ian has had to perform `yarn build` in the project root before storybook.

## Contributing to the component library

It is recommended to use the [`Buildcom`](https://github.com/foxleigh81/buildcom) npm package to ensure consistency in component generation: 

Running this in the Serge project root will generate a 'my-new-component` component in the local folder, with sass-modules and typescript already configured as well as an example spec file and an example storybook story.

```bash
npx buildcom -sjt -c "sass" -m --output "packages/components/src/local" --name "My New Component"
```

Each component should have a single task (See Brad Frost's [Atomic Design Principle](https://bradfrost.com/blog/post/atomic-web-design/) for more information) and be written as a 'pure' component. This means that it should only use react's hooks and context API along with props to receive and pass information. (See React Coding standards below)

Before a new component is created, please refer to https://material-ui.com/ to see if there is a ready-made version we can import. If so then please ensure you add an entry for it to Storybook (see below)

If you are making a new component, ensure that it is written in TypeScript, contains all of the required files (see below) and that you have configured them properly (for an example of how a component should be built, take a look at the `progress-indicator` component in `/src/local`.)

### Required files

All components should have:

Name | Type | Description | Required/Optional
--- | --- | --- | ---
`index.tsx` | File | The main component code | Required
`index.spec.tsx`| File | The unit test for the component | Required
`index.stories.tsx` | File | The Storybook file for the component | Required
`README.md` | File | The documentation for the component | Required
`styles.modules.scss` | File | The Stylesheet for the component | Optional
`styles.modules.scss.d.ts` | File | The declaration file for the stylesheet | Required if using stylesheet*
`__snapshots__` | Directory | The snapshots generated by the Unit test | Required*
`mocks` | Directory | Mock data used by the unit tests and stories | Optional
`types` | Directory | The type interfaces used by the component | Required if custom types are needed
`helpers` | Directory | Additional code related to generating the component | optional
`images` | Directory | Imagery used exclusively by the component | optional

`*` = Generated automatically

## Creating the component file


### Naming

The component file should be named `index.tsx` as this allows the component to be referenced via the folder name only in imports (e.g. `@serge/components/progress-indicator` instead of `@serge/components/progress-indicator/progress-indicator`).

### TypeScript

There should be no JavaScript inside a component, it should be TypeScript only.

### One component per folder

You should not nest components, if you want to make a smaller component inside a larger component then that should be a component in its own right.

### Pure components only

A component should be written as a pure function component, that means that it will work, regardless of where it is used provided it is passed the right data. If the use of a global state is required (e.g. Redux) then that should be added in the main application View and passed to the component via props.

## Adding helper functions

Helper functions are used to help a component do something which isn't directly related to the output of the component itself (void functions such as click handlers, state setters, etc... are allowed to live in the tsx file).

All helper functions should reside in `./helpers` and have one function per file (if necessary, one class with multiple methods is also acceptable but if you use that, you will be asked to justify its use in your Pull Request.

If you have multiple helpers, it would be preferable to import them into and export them from an `index.ts` file in the root of `./helpers`, that way you can reference them with object destructuring

e.g.

```js
import { helperOne, helperTwo } from './helpers`
```

Instead of:

```js
import helperOne from './helpers/helper-one.ts'
import helperTwo from './helpers/helper-two.ts'
```

Helper functions should never output TSX elements, if you have a function that needs to do that then you should convert it into a component in its own right. A simple test would be that if you need to import the `React` scope or name your file `.tsx` then it's a component and not a helper function.

## Adding types

As we are now using TypeScript it is quite likely you will need to define at least one Interface (a custom type definition) for your new component, the primary one of these will be the `Props` type, all new interfaces must be created inside the `types` folder.

If you feel that the type you are using might be reusable, consider adding it to the `custom-types` package, similarly, have a look in there first to see if the type you are creating already exists.

The use of `any` is strongly discouraged, if it used at all you will need to justify it's usage when raising your Pull Request.

## Adding Unit Tests

Unless you use helper functions then you can get away with only having a snapshot test. Otherwise, every helper function should also have its own spec file giving as close to 100% coverage as it's possible to get.

### Generating snapshots

Once you have added the code to test for snapshots, you will need to generate them before your tests will pass. To do this simply run `yarn test --snapshot` from within the components package.

## Adding stories

All components, no matter how small or large should have a Storybook entry. Ideally, a component should be built in insolation and tested within Storybook before being imported into the primary project (or that components parent component), this ensures that the component is robust and works by itself. It also provides a handy component library for developers to be able to reuse components and prevent the reinvention of the wheel.

Rather than document how to use Storybook, please refer to the excellent [Storybook Documentation](https://storybook.js.org/docs/basics/introduction/)

Stories are stored in two locations:

This package - The `vendor` directory in this package is where we keep our third-party component stories, primarily these come from [Material-UI](https://material-ui.com/) but any component we did not make ourselves will be documented here.

The `local` package - When we need to make a custom component, it will be created here. Each component will have its own `index.stories.mdx` file which will end up in our Storybook.

When adding a story, please ensure you add a prefix to the title to ensure that it appears in the correct Storybook group, either `local` for our own components or `vendor` for any third-party components.

e.g.

```js
export default {
  title: 'local/ProgressIndicator',
}
```
Each story should be named in a descriptive manner, although the first story may be named `Default` if it is the only story for that component then `Default` is also an acceptable name.

> ❗  Stories are named after their PascalCased variables and will output as a regular sentence. e.g. `OverviewComplete` will be shown as `Overview Complete` in Storybook

Stories are required for all components, a Pull Request will not be approved unless you show a working screenshot from that components story.

## Updating the README

For the most part, the README, is auto-generated by `buildcom`, the only part which needs to be edited is the description (the first paragraph). Everything else should be left as it is as it will be used by Storybook to populate the documentation there.

## Using Mocks

Mock data should be used to populate the Story and Spec data. 

In a similar way to the custom types, it's worth checking to see if the mock data you require is available in the `mocks` package and if you are making mock data that is likely to be reusable, please add it to the `mocks` package.

Do not add more data than is required as a) This will mess up the way the storybook code looks and b) it will require you making an excessively large custom type. A great example of this can be seen in the `progress-indicator` package, The data in that mock is also available in the `mocks` package via `wargame.mock.json` but that is a huge object whereas the only elements the component needs are `name` and `complete`.

## Local Vs Vendor components

There are two types of components used in this project. Local components that we build ourselves, and components provided by third-party vendors (usually Material UI). The guidelines above relate to adding local components. 

If a third party component is used, it should also be documented in Storybook. Fortunately, this is pretty easy to do as all you need for that is a stories file containing a few examples of its use and a README file containing its description and a link to the vendors' documentation for the component. 

For an example of documenting a third-party component, please take a look at the `md-button` component in `./src/vendor`


## Contributing

If you want to contribute components to the library, please review our [Development Standards Guidelines](https://github.com/serge-web/serge/blob/develop/docs/index.md) first.
