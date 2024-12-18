import { NewStrategyDialog } from "@/components/strategies/new-strategy";
import { Separator } from "@/components/ui/separator";

export default function Strategies() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-secondary-foreground">
          Estratégias
        </h1>
        <NewStrategyDialog />
      </div>
      <Separator className="bg-black/25 dark:bg-white/25 mb-5" />
      <div>lista de estrategias</div>
    </div>
  );
}
