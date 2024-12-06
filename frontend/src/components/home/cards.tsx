import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Activity,
  Globe,
  HandCoins,
  Percent,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const cardMainContent = {
  text: "text-2xl font-bold",
};

const cardInfoContent = {
  text: "text-sm text-muted-foreground",
  textGreen: "text-green-600 dark:text-green-500",
  textRed: "text-red-600 dark:text-red-500",
};

export function TotalTradesCard({ className = "" }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Total de Trades</CardTitle>
        <Activity className="size-5" />
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
        <CardTitle>Trades Vencedores</CardTitle>
        <TrendingUp className="size-5" />
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
        <CardTitle>Trades Perdedores</CardTitle>
        <TrendingDown className="size-5" />
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
        <CardTitle>Payoff Médio</CardTitle>
        <HandCoins className="size-5" />
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
        <CardTitle>Taxa de Acerto</CardTitle>
        <Percent className="size-5" />
      </CardHeader>
      <CardContent>
        <h6 className={cardMainContent.text}>56%</h6>
        <p className={cn(cardInfoContent.text)}>-5% no último mês</p>
      </CardContent>
    </Card>
  );
}

export function ResultPerAssetClassCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Resultado por Mercado</CardTitle>
        <Globe className="size-5" />
      </CardHeader>
      <CardContent className="flex gap-32 items-center -mt-2">
        <div className="flex flex-col gap-1 justify-start">
          <h6 className="text-md font-medium">Forex</h6>
          <h5 className="text-xl font-bold">$2,500</h5>
          <p className={cn(cardInfoContent.text)}>+$80 no último mês</p>
        </div>

        <div className="flex flex-col gap-1 justify-start">
          <h6 className="text-md font-medium">B3</h6>
          <h5 className="text-xl font-bold">R$7,120</h5>
          <p className={cn(cardInfoContent.text)}>+R$200 no último mês</p>
        </div>

        <div className="flex flex-col gap-1 justify-start">
          <h6 className="text-md font-medium">Crypto</h6>
          <h5 className="text-xl font-bold">$5,900</h5>
          <p className={cn(cardInfoContent.text)}>+$114 no último mês</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function ChartsCard({ className = "" }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Gráficos</CardTitle>
        <Percent className="size-5" />
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
