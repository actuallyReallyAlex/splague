/* eslint react/display-name: off, no-console: off */
import React from 'react'
import StartScreen from './Views/StartScreen'
import MainGame from './Views/MainGame'
import NameFormScreen from './Views/NameFormScreen'
import ClassFormScreen from './Views/ClassFormScreen'
import Skip from './Skip'
import bubonicIcon from './bubonic.svg'
import septicemicIcon from './septicemic.svg'
import pneumonicIcon from './pneumonic.svg'
import earthTribeIcon from './earthTribe.svg'
import warlordsIcon from './warlords.svg'
import tradesmenIcon from './tradesmen.svg'

/**
 * Database of screen routes.
 */
const screenRoutes = [
  {
    currentScreen: 'Start Screen',
    nextScreen: 'Name Form Screen'
  },
  {
    currentScreen: 'Name Form Screen',
    nextScreen: 'Class Form Screen'
  },
  {
    currentScreen: 'Class Form Screen',
    nextScreen: 'Main Game'
  }
]

/**
 * Utility function to help find the next screen to display to the user.
 * @param {String} currentScreen The current screen being displayed to the user. Will be faded out of view.
 * @returns {String} The next screen to be displayed to the user.
 */
export function findNextScreen(currentScreen) {
  const correspondingRoute = screenRoutes.find(route => {
    return route.currentScreen === currentScreen
  })

  if (correspondingRoute) {
    const nextScreen = correspondingRoute.nextScreen
    if (nextScreen) {
      return nextScreen
    } else {
      console.error(
        'Could not locate next screen in screenRoutes.\nRoute was: ' +
          correspondingRoute
      )
      return null
    }
  } else {
    if (currentScreen === 'Main Game') {
      return null
    } else {
      console.error(
        'Could not locate corresponding route in screenRoutes.\nCurrent screen was: ' +
          currentScreen
      )
      return null
    }
  }
}

/**
 * Used to render a view based on a screenName.
 * @param {String} screenName The name of the screen to render.
 * @param {Object} gameUI The gameUI state from the Game component.
 * @param {Object} player The player state from the Game component.
 * @param {Object} plague The plague state from the Game component.
 * @param {Object} cure The cure state from the Game component.
 * @param {Object} world The world state from the Game component.
 * @param {Object} log The log state from the Game component.
 * @param {Object} methods All methods that are to be used by components. From the state from the Game Component.
 * @param {Boolean} fadeOut If true, the view will fade out upon render. If false, the view will not fade out. Default = false.
 * @returns {React Component} View - Returns the react component that makes up the view.
 */
export function renderView(
  screenName,
  gameUI,
  player,
  plague,
  cure,
  world,
  log,
  methods,
  fadeOut = false
) {
  /**
   * Database of view routes.
   */
  const viewsRoutes = [
    {
      screenName: 'Start Screen',
      view: () => {
        if (fadeOut) {
          return (
            <div>
              <Skip startScreenMethods={methods.startScreenMethods} />
              <StartScreen
                startScreenMethods={methods.startScreenMethods}
                gameUI={gameUI}
                player={player}
                plague={plague}
                cure={cure}
                world={world}
                log={log}
                className="animated fadeOutLeft"
              />
            </div>
          )
        } else {
          return (
            <div className="full-height">
              <Skip startScreenMethods={methods.startScreenMethods} />
              <StartScreen
                startScreenMethods={methods.startScreenMethods}
                gameUI={gameUI}
                player={player}
                plague={plague}
                cure={cure}
                world={world}
                log={log}
                className="animated fadeInUpBig"
              />
            </div>
          )
        }
      }
    },
    {
      screenName: 'Name Form Screen',
      view: () => {
        if (fadeOut) {
          return (
            <NameFormScreen
              nameFormMethods={methods.nameFormMethods}
              gameUI={gameUI}
              player={player}
              plague={plague}
              cure={cure}
              world={world}
              log={log}
              className="animated fadeOutLeft"
            />
          )
        } else {
          return (
            <NameFormScreen
              nameFormMethods={methods.nameFormMethods}
              gameUI={gameUI}
              player={player}
              plague={plague}
              cure={cure}
              world={world}
              log={log}
              className="animated fadeInRight"
            />
          )
        }
      }
    },
    {
      screenName: 'Class Form Screen',
      view: () => {
        if (fadeOut) {
          return (
            <ClassFormScreen
              classFormMethods={methods.classFormMethods}
              gameUI={gameUI}
              player={player}
              plague={plague}
              cure={cure}
              world={world}
              log={log}
              className="animated fadeOutLeft"
            />
          )
        } else {
          return (
            <ClassFormScreen
              classFormMethods={methods.classFormMethods}
              gameUI={gameUI}
              player={player}
              plague={plague}
              cure={cure}
              world={world}
              log={log}
              className="animated fadeInRight"
            />
          )
        }
      }
    },
    {
      screenName: 'Main Game',
      view: () => {
        if (fadeOut) {
          return (
            <MainGame
              plagueMethods={methods.plagueMethods}
              gameMethods={methods.gameMethods}
              gameUI={gameUI}
              player={player}
              plague={plague}
              cure={cure}
              world={world}
              log={log}
              resetBackground={methods.startScreenMethods.resetBackground}
              className="animated fadeOutLeft delay-1s"
            />
          )
        } else {
          return (
            <MainGame
              plagueMethods={methods.plagueMethods}
              gameMethods={methods.gameMethods}
              gameUI={gameUI}
              player={player}
              plague={plague}
              cure={cure}
              world={world}
              log={log}
              resetBackground={methods.startScreenMethods.resetBackground}
              className="animated fadeIn"
            />
          )
        }
      }
    }
  ]

  const view = viewsRoutes.find(route => {
    return route.screenName === screenName
  }).view

  return view()
}

export const factionOptions = [
  {
    text: 'Earth Tribe',
    value: 'Earth Tribe',
    image: { avatar: true, src: earthTribeIcon }
  },
  {
    text: 'Tradesmen',
    value: 'Tradesmen',
    image: { avatar: true, src: tradesmenIcon }
  },
  {
    text: 'Warlords',
    value: 'Warlords',
    image: { avatar: true, src: warlordsIcon }
  }
]

export const plagueOptions = [
  {
    text: 'Bubonic',
    value: 'Bubonic',
    image: { avatar: true, src: bubonicIcon }
  },
  {
    text: 'Septicemic',
    value: 'Septicemic',
    image: { avatar: true, src: septicemicIcon }
  },
  {
    text: 'Pneumonic',
    value: 'Pneumonic',
    image: { avatar: true, src: pneumonicIcon }
  }
]
