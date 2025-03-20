import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { UserType } from "@/data/users"

interface UserCardProps {
  user: UserType
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="h-full transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={user.avatar || `/placeholder.svg?height=48&width=48`}
            alt=""
            className="object-cover"
            fill
            sizes="48px"
            priority={false}
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{user.name}</h3>
          <p className="text-sm text-muted-foreground">{user.role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-700">{user.description}</p>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

