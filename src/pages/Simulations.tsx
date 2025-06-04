
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import EconomicChart from "@/components/EconomicChart";
import MetricCard from "@/components/MetricCard";
import { ArrowUp, Database, LayoutDashboard } from "lucide-react";

const Simulations = () => {
  const runningSimulations = [
    {
      id: 1,
      name: "Universal Basic Income - Nordic Model",
      status: "running",
      progress: 73,
      timeRemaining: "2 minutes",
      participants: 50000,
      type: "Policy Analysis"
    },
    {
      id: 2,
      name: "Carbon Tax Implementation",
      status: "completed",
      progress: 100,
      timeRemaining: "Completed",
      participants: 125000,
      type: "Environmental Policy"
    },
    {
      id: 3,
      name: "Cryptocurrency Integration Study",
      status: "queued",
      progress: 0,
      timeRemaining: "Starting soon",
      participants: 75000,
      type: "Monetary Policy"
    }
  ];

  const performanceData = [
    { name: 'Week 1', value: 2400 },
    { name: 'Week 2', value: 2800 },
    { name: 'Week 3', value: 2600 },
    { name: 'Week 4', value: 3200 },
    { name: 'Week 5', value: 3100 },
    { name: 'Week 6', value: 3600 },
  ];

  const comparisonData = [
    { name: 'Baseline', value: 100, secondary: 100 },
    { name: 'Policy A', value: 115, secondary: 108 },
    { name: 'Policy B', value: 122, secondary: 112 },
    { name: 'Policy C', value: 118, secondary: 125 },
    { name: 'Combined', value: 135, secondary: 130 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'queued': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Economic Simulations</h1>
            <p className="text-lg text-gray-600">Monitor and analyze your running economic models</p>
          </div>
          <Link to="/model-builder">
            <Button className="bg-econoscope-blue hover:bg-econoscope-blue-dark text-white">
              Create New Simulation
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Active Simulations"
            value="12"
            change="+3 this week"
            changeType="positive"
            icon={<LayoutDashboard className="h-6 w-6" />}
          />
          <MetricCard
            title="Total Participants"
            value="847K"
            change="+15% growth"
            changeType="positive"
            icon={<ArrowUp className="h-6 w-6" />}
          />
          <MetricCard
            title="Compute Hours"
            value="2,847"
            change="156h this week"
            changeType="neutral"
            icon={<Database className="h-6 w-6" />}
          />
          <MetricCard
            title="Success Rate"
            value="94.2%"
            change="+2.1% improvement"
            changeType="positive"
            icon={<ArrowUp className="h-6 w-6" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Simulation List */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Current Simulations</h2>
              <div className="space-y-4">
                {runningSimulations.map((sim) => (
                  <div key={sim.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{sim.name}</h3>
                        <p className="text-sm text-gray-600">{sim.type}</p>
                      </div>
                      <Badge className={getStatusColor(sim.status)}>
                        {sim.status}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">{sim.progress}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div 
                        className="bg-econoscope-blue h-2 rounded-full transition-all duration-300"
                        style={{ width: `${sim.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{sim.participants.toLocaleString()} participants</span>
                      <span>{sim.timeRemaining}</span>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm" variant="outline">Download Results</Button>
                      {sim.status === 'running' && (
                        <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                          Stop
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Performance Analysis</h2>
              <EconomicChart
                data={performanceData}
                title="Weekly Simulation Throughput"
                type="area"
              />
            </Card>
          </div>

          {/* Analysis Panel */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Policy Comparison</h3>
              <EconomicChart
                data={comparisonData}
                title="Economic Impact Score"
                type="line"
              />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Recent Results</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-medium text-green-800">UBI Study Completed</p>
                  <p className="text-sm text-green-600">Positive economic impact: +12% GDP growth</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="font-medium text-blue-800">Tax Reform Analysis</p>
                  <p className="text-sm text-blue-600">Neutral impact on consumer spending</p>
                </div>
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="font-medium text-yellow-800">Trade Policy Simulation</p>
                  <p className="text-sm text-yellow-600">Mixed results: 7% export increase</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Export All Results
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Schedule Batch Run
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View Analytics Dashboard
                </Button>
                <Link to="/model-builder" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Clone Existing Model
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulations;
