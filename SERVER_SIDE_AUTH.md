# Server-Side Authentication Architecture

## Overview
This project uses a **secure server-side authentication system** with Bearer token authorization. All API calls are made from Server Components only.

## Architecture

### Key Helper
**File**: `utils/getToken.js`
- **Purpose**: Extract Bearer token using `next/headers` (server-only API)
- **Usage**: Called only from Server Components
- **Accepts**: `headers` object from `next/headers`
- **Returns**: Token object with `token` property

```javascript
import { getToken } from "@/utils/getToken";
import { headers } from "next/headers";

const headerStore = await headers();
const token = await getToken(headerStore);
```

## Removed
- ❌ `utils/fetch.js` - No longer used (removed shared fetch utility)
- ❌ Client-side token handling - All tokens handled server-side only

## Updated Components

### Server Components (Fetch Data)
These pages fetch data directly on the server with authentication:

1. **`src/app/home/page.jsx`** 
   - Fetches all doctors
   - Passes data to TopDoctors and DoctorsSection components

2. **`src/app/allDoctor/page.jsx`**
   - Fetches all doctors for listing
   - Passes to DoctorsList component

3. **`src/app/doctorList/[id]/page.jsx`**
   - Converts from "use client" to Server Component
   - Fetches single doctor data by ID
   - Passes to SingleDoctor component

### Client Components (Display Data)
These components receive data as props and handle UI interactivity:

1. **`components/topDoctor.jsx`**
   - Accepts `doctors` prop from parent
   - Sorts by rating client-side
   - No data fetching

2. **`components/showDoctor.jsx`**
   - Accepts `doctors` prop from parent
   - Displays first 3 doctors
   - No data fetching

3. **`components/singleDoctor.jsx`**
   - Accepts `doctor` prop from parent
   - Pure presentational component
   - No data fetching

## API Call Pattern

All server-side fetches follow this pattern:

```javascript
import { getToken } from "@/utils/getToken";
import { headers } from "next/headers";

export default async function Page() {
  const headerStore = await headers();
  const token = await getToken(headerStore);
  
  let data = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/endpoint`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token?.token || token}`,
        },
        cache: "no-store",
      }
    );
    if (response.ok) {
      const result = await response.json();
      data = result.data || [];
    }
  } catch (error) {
    console.error("Error fetching:", error);
  }

  return <Component data={data} />;
}
```

## Security Features

✅ **Server-Side Only**: All authentication happens on the server  
✅ **Bearer Token**: Secure token-based authorization  
✅ **No Client Tokens**: Tokens never exposed to client JavaScript  
✅ **next/headers API**: Only available in Server Components  
✅ **No Shared Fetch Util**: Each component independently handles its requests

## Environment Variables Required

```
NEXT_PUBLIC_API_URL=http://your-api-url
```

## Best Practices

1. Always await `headers()` before passing to `getToken()`
2. Handle errors gracefully in server components
3. Pass data to client components as props only
4. Never expose tokens to client-side code
5. Use `cache: "no-store"` for fresh data on each request
