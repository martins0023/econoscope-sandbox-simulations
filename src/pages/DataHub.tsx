
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import EconomicChart from "@/components/EconomicChart";
import MetricCard from "@/components/MetricCard";
import { Database, ArrowUp, LayoutDashboard } from "lucide-react";

const DataHub = () => {
  const dataSources = [
    {
      name: "Federal Reserve Economic Data (FRED)",
      type: "Government",
      status: "active",
      coverage: "US Economic Indicators",
      lastUpdate: "2 hours ago",
      endpoints: 847,
      reliability: 99.9
    },
    {
      name: "World Bank Open Data",
      type: "International",
      status: "active",
      coverage: "Global Development Indicators",
      lastUpdate: "Daily",
      endpoints: 1200,
      reliability: 98.7
    },
    {
      name: "OECD Statistics",
      type: "Government",
      status: "active",
      coverage: "OECD Countries",
      lastUpdate: "6 hours ago",
      endpoints: 650,
      reliability: 99.2
    },
    {
      name: "European Central Bank",
      type: "Central Bank",
      status: "maintenance",
      coverage: "Eurozone Data",
      lastUpdate: "1 day ago",
      endpoints: 420,
      reliability: 97.8
    }
  ];

  const dataUsageData = [
    { name: 'Jan', value: 12000 },
    { name: 'Feb', value: 15000 },
    { name: 'Mar', value: 18000 },
    { name: 'Apr', value: 22000 },
    { name: 'May', value: 25000 },
    { name: 'Jun', value: 28000 },
  ];

  const qualityData = [
    { name: 'FRED', value: 99 },
    { name: 'World Bank', value: 97 },
    { name: 'OECD', value: 98 },
    { name: 'ECB', value: 96 },
    { name: 'IMF', value: 95 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'offline': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Integration Hub</h1>
            <p className="text-lg text-gray-600">Connect and manage real-world economic data sources</p>
          </div>
          <Button className="bg-econoscope-blue hover:bg-econoscope-blue-dark text-white">
            Add Data Source
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Active Sources"
            value="89"
            change="+5 this month"
            changeType="positive"
            icon={<Database className="h-6 w-6" />}
          />
          <MetricCard
            title="Data Points/Day"
            value="2.4M"
            change="+18% increase"
            changeType="positive"
            icon={<ArrowUp className="h-6 w-6" />}
          />
          <MetricCard
            title="API Calls"
            value="847K"
            change="Last 30 days"
            changeType="neutral"
            icon={<LayoutDashboard className="h-6 w-6" />}
          />
          <MetricCard
            title="Uptime"
            value="99.2%"
            change="All sources avg"
            changeType="positive"
            icon={<ArrowUp className="h-6 w-6" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Data Sources List */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Connected Data Sources</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search data sources..." className="pl-10 w-64" />
                </div>
              </div>
              
              <div className="space-y-4">
                {dataSources.map((source, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{source.name}</h3>
                        <p className="text-sm text-gray-600">{source.coverage}</p>
                      </div>
                      <Badge className={getStatusColor(source.status)}>
                        {source.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Type:</span> {source.type}
                      </div>
                      <div>
                        <span className="font-medium">Endpoints:</span> {source.endpoints}
                      </div>
                      <div>
                        <span className="font-medium">Reliability:</span> {source.reliability}%
                      </div>
                      <div>
                        <span className="font-medium">Updated:</span> {source.lastUpdate}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm" variant="outline">Test Connection</Button>
                      <Button size="sm" variant="outline">Configure</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Data Usage Trends</h2>
              <EconomicChart
                data={dataUsageData}
                title="Monthly API Calls (Thousands)"
                type="area"
              />
            </Card>
          </div>

          {/* Analysis Panel */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Data Quality Score</h3>
              <EconomicChart
                data={qualityData}
                title="Source Reliability (%)"
                type="line"
                color="#FFDD57"
              />
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Popular Datasets</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">GDP Growth Rates</span>
                  <Badge variant="secondary">12.4K uses</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Employment Statistics</span>
                  <Badge variant="secondary">8.7K uses</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Inflation Indices</span>
                  <Badge variant="secondary">6.2K uses</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Currency Exchange</span>
                  <Badge variant="secondary">5.8K uses</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Trade Balances</span>
                  <Badge variant="secondary">4.3K uses</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Data Alerts</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="font-medium text-red-800">ECB Maintenance</p>
                  <p className="text-sm text-red-600">Scheduled maintenance until 14:00 UTC</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="font-medium text-blue-800">New Dataset Available</p>
                  <p className="text-sm text-blue-600">OECD Employment Data Q2 2024</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-medium text-green-800">Performance Update</p>
                  <p className="text-sm text-green-600">FRED API response time improved by 15%</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Browse Data Catalog
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Setup Data Pipeline
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Export Data Sample
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  API Documentation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataHub;
