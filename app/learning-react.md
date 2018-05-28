# Learning React 

## Step 1: the basics

Read the [official documentation](https://reactjs.org/) to understand the main concepts:

* `props` VS `state`
* The component lifecycle
* "stateful" VS "stateless" 
* What is JSX?

`state` and `props` are both component data but a component can only change its own state, using `setState()` method, not its props.

If the `state` changes, or if the component gets new `props` from its parent, the component and all children are automatically updated.

Understand the golden rule: in React, everything is a *component*, we build interfaces by composing together **small** components.

A component is a function that given some inputs (the props), outputs HTML markup.

Use as much as possible the stateless components, using the functional syntax (no `class` keyword).

When you use the class syntax, don't attach data to the class instance.

Questions:

* How do you do a `IF THEN` statement in JSX? How do you do `IF THEN ELSE`?
* When to use classes, when to use functional components?


## ES6 tricks

We use a lot of ES6 syntax tricks in React.

### Destructuring

#### Example 1

```js
// BEFORE
const firstName = props.firstName
const lastName = props.lastName
```

```js
// AFTER
const { firstName, lastName } = props
```

#### Example 2: function parameters

```js
// BEFORE
const MyComponent = props => <div>{props.firstName}, {props.lastName}</div>
```

```js
// AFTER
const MyComponent = ({ firstName, lastName}) => <div>{firstName}, {lastName}</div>
```

### Spread operator

In React, as much as possible, we don't mutate variables, we create new variables that hold the new data, without mutating the old data.
We can use `Object.assign()` to create new objects but the `...` is a handy shortcut to avoid repeat object properies.

```js
// BEFORE
const user = { name: 'Larry', number: 33 }
const updatedUser = Object.assign({}, user, { team: 'Celtics'})
```

```js
// AFTER
const user = { name: 'Larry', number: 33 }
const updatedUser = { ...user, team: 'Celtics' }
```

The spread operator is very useful with the JSX syntax, when we want to pass all `props` from a parent to a child.

```js
BEFORE
<ChildComponent lastName={props.lastName} firstName={props.firstName} extraProperty="my-value" />
```

```js
AFTER
<ChildComponent {...props} extraProperty="my-value" />
```

### Using class properties to avoid "binding" problems

This is simple stateful component, with a button used to toggle the state (enabled / disabled)
We have to bind the event handler using `.bind(this)`, otherwise an error is thrown when the user clicks on the button.

```js
// BEFORE
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { enabled: false }
    this.toggle = this.toggle.bind(this) // this is required, otherwise it will not work!
  }
  toggle(e) {
    this.setState(state => ({ ...state, enabled: !state.enabled }))
  }
  render() {
    const { enabled } = this.state;
    return (
      <div>
      Now I am {enabled ? ':) enabled' : ':( disabled'}
      <button onClick={this.toggle}>PUSH ME!</button>
      </div >
    );
  }
}
```

The following version is more compact: no more constructor, no need to `bind` event handler to this keywords.

```js
// AFTER
class App extends React.Component { 
  state = {
    enabled: false
  };
  toggle = e => {
    this.setState(state => ({...state, enabled: !state.enabled}))
  }
  render() {
    const { enabled } = this.state;
    return (
      <div>
        Now I am {enabled ? ':) enabled' : ':( disabled'}
        </p>
        <button onClick={this.toggle}>PUSH ME!</button>
      </div>
    );
  }
}
```


### Import / Export

Understand the 2 kinds of import and exports:

* the `default` exports
* the `named` exports

## Step 3: Playing with `create-react-app`

Understanding why [`create-react-app` project](https://github.com/facebook/create-react-app) is great

Use https://codesandbox.io/, an online IDE, to create online "playgrounds" built from `create-reat-app` settings.

For example:

* Create your own sandbox, starting with the "class properties" example above.
* Create a `Widget` stateless component in its own file, that also renders "I'm enabled" or "I'm disabled", depending on the state of the parent.
* Add a button to toggle the parent state from the Widget


## Step 4: the advanced patterns

2 great references

* [React in Patterns](https://www.gitbook.com/book/krasimir/react-in-patterns/)
* [Advanced React Patterns v2](https://github.com/kentcdodds/advanced-react-patterns-v2)

Learn about:
* Higher Order Functions
* Render props patterns
* The eco system (state management)