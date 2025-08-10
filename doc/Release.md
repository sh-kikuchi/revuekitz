# Release Procedure

## Steps to Release an npm Library

### 1. Build

- Run the command:
  ```bash
  npm run build
  ```

### 2. Log in to npm

- Run the command:
  ```bash
  npm login
  ```

### 3. Publish the Package

- Run the command:
  ```bash
  npm publish
  ```

## How to Create and Push Git Tags

### 1. Create a Tag

- Run the command:
  ```bash
  git tag -a v1.0.0 -m "Release version 1.0.0"
  ```

### 2. Push the Tag to Remote (GitHub, etc.)

- Run the command:
  ```bash
  git push origin v1.0.0
  ```

## Template

### Commit Message

- `git commit -m"type:<component>_date"`

  #### Type

  - add — Add new features or files
  - update — Modify existing features or files
  - bugfix — Fix bugs
  - remove — Delete files or features
  - refactor — Code refactoring without functional changes
  - style — Formatting changes (spacing, indentation, line breaks)
  - docs — Documentation updates or additions
  - test — Add or modify test code
  - config — Add or modify configuration files

  #### Component

  - Always specify the component name. If needed, you may also include a brief description of the change.

  #### Date

  - yyyymmdd (ex. 20250811)

###

```
# Release Version vX.Y.Z
Release Date: YYYY-MM-DD

---

# vX.Y.Z - YYYY-MM-DD

## Changes
- Added feature XXX
- Fixed layout issue in YYY
- Improved API response time for ZZZ
```
