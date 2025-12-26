# Server-Driven UI (SDUI) - React Native Intern Assignment

This project is a React Native application built with Expo that implements a Server-Driven UI architecture. The app renders its screen content, structure, and styling dynamically based on a JSON response, allowing for real-time updates without requiring app store releases.

## Tasks Implemented

### 1. Primary Task: Dynamic UI Renderer
* **Goal:** Create a system to render native components from a JSON list.
* **Implementation:** Built a generic UIRenderer component that parses JSON data and maps specific types (text, image, button) to native React Native components using a scalable Component Registry.

### 2. Bonus Task 1: Conditional Rendering Logic
* **Goal:** Allow the server to control visibility based on client-side state (e.g., User Status).
* **Implementation:** Added a visibleIf property to the JSON schema. The renderer checks the local application state (e.g., isVIP: true) against this rule. If the condition is not met, the component is entirely removed from the render tree.

### 3. Bonus Task 2: Server-Driven Theming
* **Goal:** Enable the server to dictate the application's visual theme (Colors/Modes).
* **Implementation:** The API response includes a theme object defining the global color palette (Background, Primary, Text). These values are passed down to all atomic components, allowing for instant Dark Mode or seasonal theme updates driven strictly by the backend.

## Tech Stack

* **Framework:** React Native (Expo)
* **Language:** TypeScript
* **Styling:** StyleSheet and Dynamic Inline Styles
* **Validation:** Zod (for runtime Schema validation)

## Project Structure

* **App.tsx:** Main entry point handling state and mock API data.
* **UIRenderer.tsx:** Core logic that maps JSON objects to React components.
* **types.ts:** TypeScript interfaces for the API response and components.
* **schema.ts:** Zod schema definitions for runtime data validation.
* **components/:** Directory containing atomic components (SDText, SDImage, SDButton).

## API Response Format

The app uses a JSON structure containing a global theme object and a list of components.

```json
{
  "screen": "promo_page",
  "theme": {
    "backgroundColor": "#121212",
    "primaryColor": "#BB86FC",
    "textColor": "#FFFFFF"
  },
  "components": [
    {
      "type": "text",
      "value": "Welcome to Pizza Week!",
      "style": { "fontSize": 24, "fontWeight": "bold" }
    },
    {
      "type": "button",
      "text": "Unlock Secret Menu",
      "action": "unlock_vip",
      "visibleIf": "isVIP"
    }
  ]
}

```

## How to Run

### Prerequisites

* Node.js installed on your machine.
* Expo Go app installed on your physical Android/iOS device (or an Emulator).

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/mannan-b/react-native-sdui-assignment
cd sdui-assignment

```


2. **Install dependencies**
```bash
npm install

```


3. **Start the development server**
```bash
npx expo start

```


4. **Open the App**
* Scan the QR code displayed in the terminal using the Expo Go app on your phone.

5. **Screenshots**
![WhatsApp Image 2025-12-26 at 22 28 00 (1)](https://github.com/user-attachments/assets/2d0206ab-a11a-4456-a243-081ceb9daec2)
![WhatsApp Image 2025-12-26 at 22 28 00](https://github.com/user-attachments/assets/0295e513-15ed-4f54-9eb4-60364ae2f75a)
![WhatsApp Image 2025-12-26 at 22 28 00 (2)](https://github.com/user-attachments/assets/8094f3f1-fa3c-4d82-9371-6b846339d2dc)

