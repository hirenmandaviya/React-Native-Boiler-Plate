# Boiler

## Description

This is a Basic Boiler Plate with all basic concepts and features.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Configuration](#configuration)
5. [License](#license)

## Installation

Instructions on how to install and set up the project locally.

### Prerequisites

- Node.js (>=12.x)
- npm or yarn
- Watchman (for macOS users)
- Xcode (for iOS development)
- Android Studio (for Android development)
- React Native CLI

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/hirenmandaviya/React-Native-Boiler-Plate.git
   ```
2. Navigate to the project directory:
   ```sh
   cd project-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
4. Install pods for iOS:
   ```sh
   npm run pods
   ```
   or
   ```sh
   yarn pods
   ```

## Usage

Guidelines on how to use the project after installation.

### Running the project

For Android:

```sh
npx react-native run-android
```

For iOS:

```sh
npx react-native run-ios
```

## Features

- Splash Screen.
- Welcome Screen.
- Stack Navigation.
- Bottom Tab Navigation.
- Drawer Navigation.
- Internet Check functionality with No Internet Message.
- Localization for Multi-Language.

## Configuration

#### For Change your Project Name

```
git init

npx react-native-rename "ProjectName" --skipGitStatusCheck

rm -rf .git
```

you have to also change the package name accordingly in android only the path should be for both release and debug :

#### main

```
android > app > src > main > java > com > "your package name"
```

#### release

```
android > app > src > release > java > com > "your package name"
```

#### debug

```
android > app > src > debug > java > com > "your package name"
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
