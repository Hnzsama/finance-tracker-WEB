import {
  IconTrendingDown,
  IconTrendingUp,
  IconWallet,
  IconCreditCard,
} from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Pemasukan</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Rp 15.000.000
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
              <IconTrendingUp className="mr-1 size-3" />
              +25%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-green-600">
            Pemasukan bulan ini stabil
          </div>
          <div className="text-muted-foreground">
            Total pemasukan dari semua sumber
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Pengeluaran</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Rp 4.500.000
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
              <IconTrendingDown className="mr-1 size-3" />
              +10%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-red-600">
            Pengeluaran meningkat
          </div>
          <div className="text-muted-foreground">
            Total pengeluaran bulan ini
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Tabungan</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Rp 8.000.000
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              <IconWallet className="mr-1 size-3" />
              Target 80%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Konsisten menabung
          </div>
          <div className="text-muted-foreground">
            Total akumulasi tabungan
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Hutang</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Rp 2.500.000
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">
              <IconCreditCard className="mr-1 size-3" />
              Sisa 5 Bulan
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Pembayaran lancar
          </div>
          <div className="text-muted-foreground">Total sisa hutang</div>
        </CardFooter>
      </Card>
    </div>
  )
}
