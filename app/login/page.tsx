import { LoginForm } from "@/components/login-form"
import prisma from "@/lib/prisma"

export default async function LoginPage() {
  const user =  await prisma.user.findFirst()
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
