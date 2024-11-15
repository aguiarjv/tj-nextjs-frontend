import { NewTradeDialog } from "@/components/trades/new-trade";
import { TradesTable } from "@/components/trades/trades-table";
import { Separator } from "@/components/ui/separator";

export default function Trades() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-secondary-foreground">Trades</h1>
        <NewTradeDialog />
      </div>
      <Separator className="bg-black/25 dark:bg-white/25 mb-5" />
      <TradesTable />
    </div>
  );
}
