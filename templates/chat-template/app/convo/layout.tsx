"use client"

import { usePathname } from "next/navigation"
import { SessionProvider } from "next-auth/react"

import { ChatList } from "@/components/chat-list.js"
import { ClientAuthProvider } from "@/components/client-auth-provider.js"

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const convoHasBeenSelected = pathname !== "/convo"
  return (
    <SessionProvider>
      <ClientAuthProvider>
        <div className="flex items-stretch h-screen">
          <div
            className={`md:basis-2/12 ${
              convoHasBeenSelected ? "hidden md:block" : "w-full"
            }`}
          >
            <ChatList />
          </div>
          <div className={`grow ${!convoHasBeenSelected && "hidden md:block"}`}>
            {children}
          </div>
        </div>
      </ClientAuthProvider>
    </SessionProvider>
  )
}
