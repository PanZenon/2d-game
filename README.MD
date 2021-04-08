# Handman | InDev 1.5

Handman is a game where one player is randomizing or setting the word and category which other players have to guess.

Game is available **[here](https://panzenon.github.io/2d-game/)**.

**Note:** Cookies won't work when using `file//` protocol.

### Features

- Game is able up to 12 players
- Every player have 10 mutual lives.
- Player can change his nickname and avatar after registration.
- Player can toggle music, change music volume or even change theme.

# Manual

### Singleplayer

Game where BOT randomize words from choosen categories which one player have to guess by choosing letters.

In this game mode are availables most of settings.

### Multiplayer

Game where players can't add AI as a player, but they can randomize words from choosen categories or set their own one with their own category.

In one room can be up to 12 players.

All of the settings are available.

### Lobbys // rooms

Player can create lobby open to everyone, or set the password up to 30 characters.
When player create lobby, he have to set categories for whole game.

After choosing categories, player can set new settings for game:

- time to set password (otherwise it'll randomize it) from 10 to 60s,
- time to guess letter (from 5 seconds up to 30 seconds / player),
- round time (from 5 minutes up to 20 minutes),
- maximum words length,
- type of game,
- words language,
- rounds (from 1 round up to 10 rounds),
    * Multiplayer - from 1 round up to 10 rounds,
    * Singleplayer - from 1 round up to 20 rounds,
        * one round ends when all players set or randomize their password.

#### Type of game
- game fully randomized (players can't set their own password)
- game depends on players (players can't randomize password)
- mixed game (players can randomize and set their own password)

Player can find open lobby, or join to existing one by code. Lobby with passwords is marked by padlock.

### Settings

Player can toggle music, change volume, toggle SFX (Sound Effects) or even toggle theme from dark to light.

### About

In About page are authors who made something in our **Handman**

# Screenshots

\-

# Changelog

### InDev

<details>
    <summary>v1.0</summary>

```
- [+] new repository,
- [+] simple layouts.
```

</details>

<details>
    <summary>v1.1</summary>

```
- [+] node.js and express.js,
- [+] ordered html to views and js,css,img,sounds to public,
- [+] designed buttons,
- [+] settings prompt-box,
- [+] about prompt-box,
- [+] play prompt-box,
- [/] layout.
```

</details>

<details>
    <summary>v1.2</summary>

```
- [+] made settings to work (toggling theme and music),
- [+] clicking sounds and background music,
- [+] handman image for light and dark theme,
- [+] cookies
- [/] about and settings desing.
```

</details>

<details>
    <summary>v1.3</summary>

```
- [+] categories menu,
- [+] multiswitches
- [/] light theme design
```

</details>

<details>
    <summary>v1.4</summary>

```
- [+] simple menu after play-button
- [+] back to main menu on header click
- [+] more categories to choose
- [+] Singleplayer and multiplayer to choose
- [+] username
- [+] saving username by cookies
- [+] singleplayer subsite
- [+] expandable settings with cool animation at singleplayer subsite
- [+] first easteregg
- [/] owr description
- [/] switch style
- [/] categories menu
```

</details>

<details>
    <summary>v1.5</summary>

```
- [+] settings content
- [/] improved expandable settings animation at singleplayer subsite.
```

</details>