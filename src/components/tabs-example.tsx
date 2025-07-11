import React from 'react';
import { Tabs, TabsContent, TabsListLine, TabsTriggerLine } from '@/components/ui/tabs';

export function TabsLineExample() {
  return (
    <Tabs defaultValue="business" className="w-full">
      <TabsListLine>
        <TabsTriggerLine value="business">Business Performance</TabsTriggerLine>
        <TabsTriggerLine value="brand">Brand Performance</TabsTriggerLine>
        <TabsTriggerLine value="alle">Allē Performance</TabsTriggerLine>
      </TabsListLine>
      <TabsContent value="business">
        <div className="py-4">
          <p>Business Performance content goes here.</p>
        </div>
      </TabsContent>
      <TabsContent value="brand">
        <div className="py-4">
          <p>Brand Performance content goes here.</p>
        </div>
      </TabsContent>
      <TabsContent value="alle">
        <div className="py-4">
          <p>Allē Performance content goes here.</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}