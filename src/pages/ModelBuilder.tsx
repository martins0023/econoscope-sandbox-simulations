
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import EconomicChart from "@/components/EconomicChart";

const ModelBuilder = () => {
  const [modelName, setModelName] = useState("");
  const [selectedPolicy, setSelectedPolicy] = useState("ubi");

  const sampleData = [
    { name: 'Month 1', value: 1000 },
    { name: 'Month 2', value: 1200 },
    { name: 'Month 3', value: 1100 },
    { name: 'Month 4', value: 1400 },
    { name: 'Month 5', value: 1300 },
    { name: 'Month 6', value: 1600 },
  ];

  const policies = [
    { id: 'ubi', name: 'Universal Basic Income', description: 'Simulate unconditional income distribution' },
    { id: 'taxation', name: 'Progressive Taxation', description: 'Model tiered tax rate systems' },
    { id: 'inflation', name: 'Inflation Control', description: 'Test monetary policy responses' },
    { id: 'trade', name: 'Trade Policy', description: 'Analyze import/export regulations' },
  ];

  const agents = [
    { id: 'consumer', name: 'Consumer Agents', count: 10000, behavior: 'Price-sensitive purchasing' },
    { id: 'business', name: 'Business Agents', count: 1500, behavior: 'Profit maximization' },
    { id: 'government', name: 'Government Agent', count: 1, behavior: 'Policy implementation' },
    { id: 'bank', name: 'Banking Agents', count: 50, behavior: 'Lending and investment' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Economic Model Builder</h1>
          <p className="text-lg text-gray-600">Design and configure your economic simulation model</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Model Configuration</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="model-name">Model Name</Label>
                  <Input
                    id="model-name"
                    placeholder="Enter model name..."
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <Tabs defaultValue="policies" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="policies">Policies</TabsTrigger>
                    <TabsTrigger value="agents">Agents</TabsTrigger>
                    <TabsTrigger value="parameters">Parameters</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="policies" className="space-y-4">
                    <h3 className="font-semibold">Economic Policies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {policies.map((policy) => (
                        <Card
                          key={policy.id}
                          className={`p-4 cursor-pointer transition-all ${
                            selectedPolicy === policy.id
                              ? 'border-econoscope-blue bg-blue-50'
                              : 'hover:shadow-md'
                          }`}
                          onClick={() => setSelectedPolicy(policy.id)}
                        >
                          <h4 className="font-medium text-gray-900">{policy.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{policy.description}</p>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="agents" className="space-y-4">
                    <h3 className="font-semibold">Economic Agents</h3>
                    <div className="space-y-3">
                      {agents.map((agent) => (
                        <Card key={agent.id} className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">{agent.name}</h4>
                              <p className="text-sm text-gray-600">{agent.behavior}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-econoscope-blue">{agent.count.toLocaleString()}</p>
                              <p className="text-xs text-gray-500">instances</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="parameters" className="space-y-4">
                    <h3 className="font-semibold">Simulation Parameters</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="duration">Simulation Duration</Label>
                        <Input id="duration" placeholder="12 months" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="population">Population Size</Label>
                        <Input id="population" placeholder="100,000" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="gdp">Initial GDP</Label>
                        <Input id="gdp" placeholder="$1,000,000" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="inflation-rate">Inflation Rate</Label>
                        <Input id="inflation-rate" placeholder="2.5%" className="mt-1" />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </Card>

            <div className="flex gap-4">
              <Button className="bg-econoscope-blue hover:bg-econoscope-blue-dark text-white">
                Run Simulation
              </Button>
              <Button variant="outline" className="border-econoscope-blue text-econoscope-blue">
                Save Model
              </Button>
              <Button variant="outline">
                Load Template
              </Button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
              <EconomicChart
                data={sampleData}
                title="Economic Output Projection"
                type="area"
              />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Model Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Selected Policy:</span>
                  <span className="font-medium">
                    {policies.find(p => p.id === selectedPolicy)?.name || 'None'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Agents:</span>
                  <span className="font-medium">11,551</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Complexity Score:</span>
                  <span className="font-medium text-econoscope-blue">Medium</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Est. Runtime:</span>
                  <span className="font-medium">~5 minutes</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Recent Models</h3>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium">UBI Implementation Study</p>
                  <p className="text-gray-600">Modified 2 hours ago</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium">Progressive Tax Analysis</p>
                  <p className="text-gray-600">Modified 1 day ago</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium">Inflation Response Model</p>
                  <p className="text-gray-600">Modified 3 days ago</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelBuilder;
