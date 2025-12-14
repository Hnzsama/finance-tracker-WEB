"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
    const pathname = usePathname()
    const router = useRouter()

    const handleLanguageChange = (lang: string) => {
        if (!pathname) return
        const segments = pathname.split('/')
        segments[1] = lang
        document.cookie = `i18next=${lang}; path=/; max-age=31536000`
        router.push(segments.join('/'))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Globe className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("id")}>
                    Indonesian
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
