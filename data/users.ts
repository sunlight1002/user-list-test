export interface UserType {
  id: string
  name: string
  role: string
  description: string
  avatar?: string
  skills: string[]
}

export const users: UserType[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Frontend Developer",
    description: "Passionate about creating accessible and performant user interfaces with React and Next.js.",
    avatar: "/placeholder.svg?height=100&width=100&text=AJ",
    skills: ["React", "TypeScript", "Accessibility"],
  },
  {
    id: "2",
    name: "Samantha Lee",
    role: "UX Designer",
    description: "Focused on creating intuitive user experiences that balance aesthetics with functionality.",
    avatar: "/placeholder.svg?height=100&width=100&text=SL",
    skills: ["UI/UX", "Figma", "User Research"],
  },
  {
    id: "3",
    name: "Marcus Chen",
    role: "Backend Engineer",
    description: "Building robust and scalable APIs with a focus on performance and security.",
    avatar: "/placeholder.svg?height=100&width=100&text=MC",
    skills: ["Node.js", "Python", "Databases"],
  },
  {
    id: "4",
    name: "Priya Patel",
    role: "Full Stack Developer",
    description: "Experienced in building end-to-end applications with modern web technologies.",
    avatar: "/placeholder.svg?height=100&width=100&text=PP",
    skills: ["Next.js", "MongoDB", "AWS"],
  },
  {
    id: "5",
    name: "Jordan Taylor",
    role: "DevOps Engineer",
    description: "Automating deployment pipelines and ensuring smooth operations in cloud environments.",
    avatar: "/placeholder.svg?height=100&width=100&text=JT",
    skills: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: "6",
    name: "Emma Wilson",
    role: "Product Manager",
    description: "Bridging the gap between business needs and technical implementation to deliver value.",
    avatar: "/placeholder.svg?height=100&width=100&text=EW",
    skills: ["Agile", "Product Strategy", "Analytics"],
  },
]

