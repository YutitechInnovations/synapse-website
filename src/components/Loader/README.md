# Reusable Loader Component

A comprehensive loader system that displays the Synapse favicon with spinning animation during page transitions and API calls.

## Features

- ✅ Uses the provided `favicon.svg` icon with spinning animation
- ✅ Centered display with Tailwind CSS styling
- ✅ Automatic page transition loading
- ✅ Manual control for login, logout, and feature switching
- ✅ Light overlay background matching brand colors
- ✅ Optional loading messages
- ✅ Easy import and conditional rendering

## Components

### 1. Loader Component (`src/components/Loader/Loader.js`)
Basic loader component with customizable size.

```jsx
import Loader from '@/components/Loader/Loader';

// Usage
<Loader size="w-8 h-8" />
```

### 2. GlobalLoader Component (`src/components/GlobalLoader/GlobalLoader.js`)
Global loader that integrates with the LoaderContext.

### 3. LoaderContext (`src/context/LoaderContext.js`)
Context provider for managing global loader state.

## Usage

### Basic Usage

```jsx
import { useLoader } from '@/context/LoaderContext';

const MyComponent = () => {
  const { showLoader, hideLoader, withLoader } = useLoader();

  // Simple loader
  const handleSimpleAction = () => {
    showLoader('Loading...');
    // Do something
    hideLoader();
  };

  // Async loader
  const handleAsyncAction = async () => {
    await withLoader(async () => {
      // Your async operation
      await someApiCall();
    }, 'Processing your request...');
  };

  return (
    <div>
      <button onClick={handleSimpleAction}>Simple Loader</button>
      <button onClick={handleAsyncAction}>Async Loader</button>
    </div>
  );
};
```

### Integration Examples

#### Login/Logout
```jsx
// Already integrated in AuthContext
const login = async () => {
  await withLoader(async () => {
    // Login logic
  }, "Signing you in...");
};

const logout = async () => {
  await withLoader(async () => {
    // Logout logic
  }, "Signing you out...");
};
```

#### API Calls
```jsx
const fetchData = async () => {
  await withLoader(async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  }, 'Fetching data...');
};
```

#### Page Navigation
```jsx
const handleNavigation = async () => {
  await withLoader(async () => {
    await router.push('/new-page');
  }, 'Loading page...');
};
```

## Styling

The loader uses Tailwind CSS classes:
- Background: `bg-[#E6F2EF]/80` (brand color with opacity)
- Animation: `animate-spin` (Tailwind's spinning animation)
- Positioning: `fixed inset-0` (full screen overlay)
- Z-index: `z-[9999]` (highest priority)

## Automatic Features

1. **Page Transitions**: Automatically shows during route changes
2. **Minimum Display Time**: 500ms minimum to prevent flickering
3. **Backdrop Blur**: Adds subtle blur effect to background

## Customization

### Size
```jsx
<Loader size="w-16 h-16" /> // Large
<Loader size="w-8 h-8" />   // Small
```

### Custom Messages
```jsx
showLoader('Custom loading message');
await withLoader(async () => {
  // Operation
}, 'Custom message');
```

## File Structure

```
src/
├── components/
│   ├── Loader/
│   │   ├── Loader.js          # Basic loader component
│   │   └── README.md          # This documentation
│   └── GlobalLoader/
│       └── GlobalLoader.js    # Global loader with context
├── context/
│   └── LoaderContext.js       # Loader state management
└── app/
    └── layout.js              # Global loader integration
```

## Integration Points

The loader is automatically integrated in:
- ✅ Root layout for global availability
- ✅ AuthContext for login/logout
- ✅ LoginForm component
- ✅ Navbar logout functionality
- ✅ Page transitions via Next.js routing

## Best Practices

1. **Use `withLoader` for async operations** - automatically handles show/hide
2. **Provide meaningful messages** - helps users understand what's happening
3. **Keep operations quick** - loader should not stay visible for too long
4. **Handle errors gracefully** - loader will hide even if operation fails

## Example Component

See `src/components/LoaderExample/LoaderExample.js` for complete usage examples. 