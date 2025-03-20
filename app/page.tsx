import type { Metadata } from "next"
import { UserCard } from "@/components/user-card"
import { users } from "@/data/users"

export const metadata: Metadata = {
  title: "User Directory | Next.js 15 Demo",
  description: "A server-rendered list of users built with Next.js 15, optimized for SEO and accessibility.",
}

export default function UserListPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Directory</h1>

      <p className="mb-8 text-gray-700 max-w-2xl">
        Browse our community members below. This page is server-side rendered for optimal SEO performance and follows
        WCAG accessibility guidelines.
      </p>

      <section aria-labelledby="user-list-heading">
        <h2 id="user-list-heading" className="sr-only">
          List of users
        </h2>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

