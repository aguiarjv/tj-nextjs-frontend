import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";

export function NewStrategyDialog() {
  return (
    <Button variant="default" className="space-x-1">
      <PlusCircle className="size-5" />
      <span>Nova Estratégia</span>
    </Button>
  );
}
