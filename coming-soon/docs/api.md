# API

## Creating a View

### Naming Convention

Decide what your view shall be called. Create a file within `./src/Views`. Name the file in this way: `ViewNameScreen.js`.

### Methods

If your view needs any methods specific to it, crete these methods in the `Game` component.

Create a method object for your view. In this object, each key have a value associated to it in the same name, pointing to your method.

For example:

```jsp
methods = {
  startScreenMethods: this.startScreenMethods,
  nameFormMethods: this.nameFormMethods,
  classFormMethods: this.classFormMethods
}
```

### Routing

Open up `./src/UtilityFunctions.js`. Import your view from `./src/Views`.

For example:

```javascript
import NameFormScreen from './Views/NameFormScreen'
```

Within `screenRoutes`, create a new object that will contain a `currentScreen` and `nextScreen` key.

Within `viewRoutes`, create a new object that will contain a `screenName` and `view` key.

The `screenName` is simply a string to name which screen to display to the user. The `view` corresponds to an anonymous function that will return a React component in `jsx` to render.

For example:

```javascript
{
  screenName: 'Start Screen',
  view: () => {
    if (fadeOut) {
      return (
        <StartScreen
          startScreenMethods={methods.startScreenMethods}
          player={player}
          gameUI={gameUI}
          className="animated fadeOutLeft"
        />
      )
    } else {
      return (
        <StartScreen
          startScreenMethods={methods.startScreenMethods}
          player={player}
          gameUI={gameUI}
          className="animated fadeInUpBig"
        />
      )
    }
  }
}
```

Notice that `view` will be an `if else` statement.

If `fadeOut` is set to `true`, return the component with the `className`: `animated fadeOutLeft` _(or similar)_. These classes are from [Animate.css](https://daneden.github.io/animate.css/).

By default, `fadeOut` is set to `false`. In this case, `view` will return the component with the `className`: `animated fadeInRight` (_or similar_).
