'use client'

import { useActionState, useState } from "react"
import { MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { login } from "@/app/login/actions"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, action, isPending] = useActionState(login, undefined)
  const [value, setValue] = useState("")

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form action={action}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
              <MessageCircle className="size-6" />
            </div>
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground text-sm max-w-[280px]">
              Enter the 6-digit access token sent to your WhatsApp number.
            </p>
          </div>

          <Field className="w-full flex justify-center mt-4 flex-col items-center">
            <FieldLabel htmlFor="token" className="sr-only">Token</FieldLabel>
            {/* Hidden input to pass the value to the server action */}
            <input type="hidden" name="token" value={value} />

            <InputOTP
              maxLength={6}
              value={value}
              onChange={(val) => setValue(val)}
              containerClassName="justify-center"
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {/* Combined Error Display */}
            {(state?.message || state?.errors?.uniqueCode) && (
              <div className="flex items-center justify-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg mt-4 w-full animate-in fade-in slide-in-from-top-1">
                <span className="text-sm font-medium">
                  {state?.errors?.uniqueCode ? state.errors.uniqueCode[0] : state.message}
                </span>
              </div>
            )}
          </Field>

          <Field className="flex justify-center mt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isPending}
            >
              {isPending ? 'Logging in...' : 'Access Dashboard'}
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <div className="text-center text-sm text-muted-foreground">
        Don&apos;t have a token? <br />
        <a href="#" className="font-medium text-primary hover:underline">
          Chat with our WhatsApp Bot
        </a>
      </div>
    </div>
  )
}
