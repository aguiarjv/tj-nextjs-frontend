import {
  TotalTradesCard,
  TotalWinningTradesCard,
  TotalLosingTradesCard,
  AveragePayoffCard,
  WinRateCard,
  ChartsCard,
  FinancialResultCard,
  AverageWinningTradeCard,
  AverageLosingTradeCard,
} from "@/components/home/cards";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1 text-secondary-foreground">
        Resumo
      </h1>
      <Separator className="bg-black/25 dark:bg-white/20 mb-5" />
      <div className="grid grid-cols-4 gap-4">
        <FinancialResultCard />
        <TotalTradesCard />
        <TotalWinningTradesCard />
        <TotalLosingTradesCard />
        <AveragePayoffCard />
        <WinRateCard />
        <AverageWinningTradeCard />
        <AverageLosingTradeCard />
        <ChartsCard className="col-span-4" />
      </div>
    </div>
  );
}
