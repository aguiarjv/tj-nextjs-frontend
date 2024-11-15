import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Analytics() {
  return (
    <div>
      <h1>Análises</h1>
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
    </div>
  );
}
