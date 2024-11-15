import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";

export function NewTradeDialog() {
  return (
    <Button variant="default" className="space-x-2">
      <PlusCircle className="size-5" />
      <span>Novo Trade</span>
    </Button>
  );
}
