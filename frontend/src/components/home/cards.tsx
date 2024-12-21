import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Activity,
  Banknote,
  ChartNoAxesCombined,
  Coins,
  HandCoins,
  Percent,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { EquityCurveChart } from "./equity-curve-chart";

const cardTitleContent = {
  text: "text-md font-medium",
};

const cardMainContent = {
  text: "text-2xl font-bold",
};

const cardInfoContent = {
  text: "text-sm text-muted-foreground",
  textGreen: "text-green-600 dark:text-green-500",
  textRed: "text-red-600 dark:text-red-500",
};

const tabTriggerContent = {
  text: "data-[state=active]:bg-secondary data-[state=active]:text-card-foreground dark:data-[state=active]:bg-card dark:data-[state=active]:text-card-foreground/95",
};

export function FinancialResultCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          <span className={cardTitleContent.text}>Resultado</span>
          <Wallet className="size-5" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h6 className={cardMainContent.text}>$ 570</h6>
        <p className={cn(cardInfoContent.text)}>+$30 no último mês</p>
      </CardContent>
    </Card>
  );
}

export function TotalTradesCard({ className = "" }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          <span className={cardTitleContent.text}>Total de Trades</span>
          <Activity className="size-5" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h6 className={cardMainContent.text}>570</h6>
        <p className={cn(cardInfoContent.text)}>+30 no último mês</p>
      </CardContent>
    </Card>
  );
}

export function TotalWinningTradesCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          <span className={cardTitleContent.text}>Trades Vencedores</span>
          <TrendingUp className="size-5" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h6 className={cardMainContent.text}>290</h6>
        <p className={cn(cardInfoContent.text, cardInfoContent.textGreen)}>
          +30 no último mês
        </p>
      </CardContent>
    </Card>
  );
}

export function TotalLosingTradesCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          <span className={cardTitleContent.text}>Trades Perdedores</span>
          <TrendingDown className="size-5" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h6 className={cardMainContent.text}>280</h6>
        <p className={cn(cardInfoContent.text, cardInfoContent.textRed)}>
          +30 no último mês
        </p>
      </CardContent>
    </Card>
  );
}

export function AveragePayoffCard({ className = "" }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          <span className={cardTitleContent.text}>Payoff Médio</span>
          <HandCoins className="size-5" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h6 className={cardMainContent.text}>1,87</h6>
        <p className={cn(cardInfoContent.text)}>+0,12 no último mês</p>
      </CardContent>
    </Card>
  );
}

export function WinRateCard({
  className = "",
}: {
  className?: string | undefined;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          <span className={cardTitleContent.text}>Taxa de Acerto</span>
          <Percent className="size-5" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h6 className={cardMainContent.text}>56%</h6>
        <p className={cn(cardInfoContent.text)}>-5% no último mês</p>
      </CardContent>
    </Card>
  );
}

export function AverageWinningTradeCard({
  className = "",
}: {
  className?: string | undefined;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          <span className={cardTitleContent.text}>
            Res. Médio de Trade Vencedor
          </span>
          <Banknote className="size-5" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h6 className={cardMainContent.text}>$ 12.3</h6>
        <p className={cn(cardInfoContent.text)}>+$5.2 no último mês</p>
      </CardContent>
    </Card>
  );
}

export function AverageLosingTradeCard({
  className = "",
}: {
  className?: string | undefined;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between w-full">
          <span className={cardTitleContent.text}>
            Res. Médio de Trade Perdedor
          </span>
          <Coins className="size-5" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h6 className={cardMainContent.text}>$ 9.3</h6>
        <p className={cn(cardInfoContent.text)}>-$1.2 no último mês</p>
      </CardContent>
    </Card>
  );
}

export function ChartsCard({ className = "" }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-col pb-3">
        <CardTitle className="flex items-center justify-between w-full">
          <span className={cardTitleContent.text}>Gráficos</span>
          <ChartNoAxesCombined className="size-5" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="equity-curve">
          <TabsList className="bg-card dark:bg-muted border border-black/10 dark:border-white/5">
            <TabsTrigger
              className={tabTriggerContent.text}
              value="equity-curve"
            >
              Curva de Capital
            </TabsTrigger>
            <TabsTrigger
              className={tabTriggerContent.text}
              value="monthly-results"
            >
              Resultado Mensal
            </TabsTrigger>
            <TabsTrigger
              className={tabTriggerContent.text}
              value="trade-activity"
            >
              Ativos operados (radial)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="equity-curve">
            <EquityCurveChart />
          </TabsContent>
          <TabsContent value="monthly-results">monthly charts</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
