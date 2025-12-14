'use server'

import { z } from 'zod'
import prisma from '@/lib/prisma'
import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'

const LoginSchema = z.object({
    uniqueCode: z.string()
        .min(1, { message: 'Please enter your code' })
        .length(6, { message: 'Code must be exactly 6 digits' }),
})

export async function login(prevState: any, formData: FormData) {
    // Extract the 6 digits from the form. 
    // The InputOTP component usually sends individual inputs or a hidden input.
    // We'll assume the client combines them or we parse them.
    // Based on the previous view of login-form.tsx, it didn't strictly show a hidden input for the full value.
    // I will update login-form.tsx to ensure it sends the full value.

    const token = formData.get('token') as string

    const validatedFields = LoginSchema.safeParse({
        uniqueCode: token,
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid code provided.',
        }
    }

    const { uniqueCode } = validatedFields.data

    try {
        const user = await prisma.user.findUnique({
            where: { uniqueCode },
        })

        if (!user) {
            return {
                message: 'Invalid code. User not found.',
            }
        }

        await createSession(user.id)
    } catch (error) {
        return {
            message: 'Database Error: Failed to sign in.',
        }
    }

    redirect('/dashboard')
}

export async function logout() {
    await deleteSession()
    redirect('/login')
}
