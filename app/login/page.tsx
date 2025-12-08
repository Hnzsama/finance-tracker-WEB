import { LoginForm } from "@/components/login-form"
import prisma from "@/lib/prisma"

export default function LoginPage() {
  const user = prisma.user.findFirst()
  console.log(user)
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
