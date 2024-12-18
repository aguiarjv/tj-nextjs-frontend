import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Analytics() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-secondary-foreground">
          Análises
        </h1>
      </div>
      <Separator className="bg-black/25 dark:bg-white/25 mb-5" />
      <MyTabs />
    </div>
  );
}

function MyTabs() {
  return (
    <Tabs defaultValue="forex" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="b3" className="data-[state=active]:bg-card">
          B3
        </TabsTrigger>
        <TabsTrigger value="forex">Forex</TabsTrigger>
        <TabsTrigger value="crypto">Crypto</TabsTrigger>
      </TabsList>
      <TabsContent value="b3">
        <p>b3</p>
      </TabsContent>
      <TabsContent value="forex">
        <p>forex</p>
      </TabsContent>
      <TabsContent value="crypto">
        <p>crypto</p>
      </TabsContent>
    </Tabs>
  );
}
