This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

///////////////////////
///////////////////////
# run client side
```
npm run dev
```

# run server side
```
npx prisma studio
```

# update database
```
npx prisma generate
```
```
npx prisa db push
```

# Key Features:

📡 Streaming using RTMP / WHIP protocols
🌐 Generating ingress
🔗 Connecting Next.js app to OBS / Your favorite streaming software
🔐 Authentication
📸 Thumbnail upload
👀 Live viewer count
🚦 Live statuses
💬 Real-time chat using sockets
🎨 Unique color for each viewer in chat
👥 Following system
🚫 Blocking system
👢 Kicking participants from a stream in real-time
🎛️ Streamer / Creator Dashboard
🐢 Slow chat mode
🔒 Followers only chat mode
📴 Enable / Disable chat
🔽 Collapsible layout (hide sidebars, chat etc, theatre mode etc.)
📚 Sidebar following & recommendations tab
🏠 Home page recommending streams, sorted by live first
🔍 Search results page with a different layout
🔄 Syncing user information to our DB using Webhooks
📡 Syncing live status information to our DB using Webhooks
🤝 Community tab
🎨 Beautiful design
⚡ Blazing fast application
📄 SSR (Server-Side Rendering)
🗺️ Grouped routes & layouts
🗃️ MySQL
🚀 Deployment






# Overview and Purpose:
A steaming platform that allows users to stream, record and save their videos as well as chat and interact with other users 


# Installation and setup: 

To run the applciation
```
npm run dev
```
to run backend and database
```
npx prisma studio
```


# API Documentation

If your backend exposes APIs, document each endpoint with details on request and response formats.
Include example API calls and responses.
Specify any authentication or authorization requirements.

# Code Structure:
(auth) folder for authentication and authorization
(browser) for dashboard and user client ui
_components folder (sidebar, navbar and more)
importing livekit opensource library in api folder

# Configuration:

Document any configuration files or settings and explain their purpose.
Specify default values and acceptable ranges for configuration parameters.

# Dependencies:
```
"@babel/core": "^7.23.9",
    "@babel/preset-env": "^7.23.9",
    "@babel/preset-react": "^7.23.3",
    "@clerk/nextjs": "^4.29.6",
    "@clerk/themes": "^1.7.9",
    "@livekit/components-react": "^2.0.0",
    "@prisma/client": "^5.9.1",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@uploadthing/react": "^6.2.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "date-fns": "^3.3.1",
    "jwt-decode": "^4.0.0",
    "livekit-client": "^2.0.1",
    "livekit-server-sdk": "^2.0.4",
    "lucide-react": "^0.323.0",
    "next": "^14.1.0",
    "next-themes": "^0.2.1",
    "qs": "^6.11.2",
    "query-string": "^8.2.0",
    "react": "^18",
    "react-dom": "^18",
    "sonner": "^1.4.0",
    "string-to-color": "^2.2.2",
    "svix": "^1.17.0",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7",
    "usehooks-ts": "^2.14.0",
    "uuid": "^9.0.1",
    "zustand": "^4.5.0"
```
# Testing:

coming soon....

# Security Considerations:
Using Clerk  and more.... 

