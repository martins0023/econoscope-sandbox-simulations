
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Database, ArrowUp, LayoutDashboard } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import EconomicChart from "@/components/EconomicChart";

const Research = () => {
  const publications = [
    {
      title: "Agent-Based Modeling of Universal Basic Income Implementation: Evidence from Nordic Countries",
      authors: ["Dr. Sarah Chen", "Prof. Erik Lindqvist", "Dr. Maria Johansson"],
      journal: "Journal of Economic Dynamics and Control",
      year: 2024,
      citations: 89,
      downloads: 2341,
      impact: "High",
      tags: ["UBI", "Agent-Based Modeling", "Nordic Model"],
      abstract: "This study examines the economic implications of UBI implementation using agent-based modeling techniques..."
    },
    {
      title: "Carbon Pricing Mechanisms in Multi-Sector Economic Models: A Simulation Approach",
      authors: ["Prof. Michael Rodriguez", "Dr. Jennifer Kim"],
      journal: "Environmental Economics Review",
      year: 2024,
      citations: 156,
      downloads: 3421,
      impact: "Very High",
      tags: ["Carbon Pricing", "Environmental Economics", "Simulation"],
      abstract: "We develop a comprehensive simulation framework to analyze the effects of carbon pricing across multiple economic sectors..."
    },
    {
      title: "Cryptocurrency Integration in Traditional Banking: Economic Implications and Policy Recommendations",
      authors: ["Alex Thompson", "Dr. Robert Chen", "Prof. Lisa Wang"],
      journal: "Digital Finance Quarterly",
      year: 2024,
      citations: 67,
      downloads: 1987,
      impact: "Medium",
      tags: ["Cryptocurrency", "Banking", "Policy"],
      abstract: "This research explores the potential integration of cryptocurrencies into traditional banking systems..."
    }
  ];

  const caseStudies = [
    {
      title: "Finland's UBI Experiment: EconoScope Validation Study",
      country: "Finland",
      duration: "2017-2019",
      participants: "2,000 unemployed individuals",
      findings: "Modest positive effects on employment and well-being",
      accuracy: "94.2%"
    },
    {
      title: "Carbon Tax Implementation in British Columbia",
      country: "Canada",
      duration: "2008-2015",
      participants: "4.7M residents",
      findings: "Significant reduction in emissions with minimal economic impact",
      accuracy: "91.7%"
    },
    {
      title: "Swiss Basic Income Referendum Analysis",
      country: "Switzerland",
      duration: "2016",
      participants: "National referendum",
      findings: "Public opposition primarily due to funding concerns",
      accuracy: "89.3%"
    }
  ];

  const methodologySteps = [
    "Agent Initialization & Behavioral Parameterization",
    "Economic Environment Setup",
    "Policy Implementation Simulation",
    "Data Collection & Analysis",
    "Validation Against Historical Data",
    "Sensitivity Analysis & Robustness Testing"
  ];

  const publicationData = [
    { name: '2020', value: 12 },
    { name: '2021', value: 18 },
    { name: '2022', value: 24 },
    { name: '2023', value: 31 },
    { name: '2024', value: 42 },
  ];

  const impactData = [
    { name: 'Citations', value: 2847 },
    { name: 'Downloads', value: 18234 },
    { name: 'Policy References', value: 156 },
    { name: 'Media Mentions', value: 89 },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Very High': return 'bg-green-100 text-green-800';
      case 'High': return 'bg-blue-100 text-blue-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Research & Publications</h1>
            <p className="text-lg text-gray-600">Academic insights and validation studies from the EconoScope platform</p>
          </div>
          <Button className="bg-econoscope-blue hover:bg-econoscope-blue-dark text-white">
            Submit Research
          </Button>
        </div>

        {/* Research Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Published Papers"
            value="156"
            change="+24 this year"
            changeType="positive"
            icon={<LayoutDashboard className="h-6 w-6" />}
          />
          <MetricCard
            title="Total Citations"
            value="4,892"
            change="+486 this month"
            changeType="positive"
            icon={<ArrowUp className="h-6 w-6" />}
          />
          <MetricCard
            title="Case Studies"
            value="89"
            change="15 countries"
            changeType="neutral"
            icon={<Database className="h-6 w-6" />}
          />
          <MetricCard
            title="Validation Accuracy"
            value="92.4%"
            change="Average across studies"
            changeType="positive"
            icon={<ArrowUp className="h-6 w-6" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Publications */}
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Publications</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search papers..." className="pl-10 w-64" />
                </div>
              </div>
              
              <div className="space-y-6">
                {publications.map((paper, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{paper.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {paper.authors.join(", ")} • {paper.journal} ({paper.year})
                        </p>
                      </div>
                      <Badge className={getImpactColor(paper.impact)}>
                        {paper.impact} Impact
                      </Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-sm">{paper.abstract}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>{paper.citations} citations</span>
                        <span>{paper.downloads} downloads</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View Abstract</Button>
                        <Button size="sm" className="bg-econoscope-blue hover:bg-econoscope-blue-dark text-white">
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Case Studies */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Real-World Validation Case Studies</h2>
              <div className="space-y-4">
                {caseStudies.map((study, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-gray-900">{study.title}</h3>
                      <Badge variant="outline" className="text-econoscope-blue border-econoscope-blue">
                        {study.accuracy} accuracy
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                      <div>
                        <span className="font-medium">Location:</span> {study.country}
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> {study.duration}
                      </div>
                      <div>
                        <span className="font-medium">Scale:</span> {study.participants}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 mb-3">
                      <span className="font-medium">Key Findings:</span> {study.findings}
                    </p>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">View Details</Button>
                      <Button size="sm" variant="outline">Download Report</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Methodology */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">EconoScope Methodology</h2>
              <div className="space-y-4">
                <p className="text-gray-700 mb-6">
                  Our simulation methodology combines agent-based modeling, behavioral economics, and real-world data validation 
                  to create accurate economic predictions and policy impact assessments.
                </p>
                
                <div className="space-y-3">
                  {methodologySteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-econoscope-blue rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-gray-800">{step}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Validation Process:</strong> All models undergo rigorous validation against historical data 
                    with an average accuracy rate of 92.4% across different economic scenarios and time periods.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publication Trends */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Publication Trends</h3>
              <EconomicChart
                data={publicationData}
                title="Papers per Year"
                type="area"
                color="#00BFFF"
              />
            </Card>

            {/* Research Impact */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Research Impact</h3>
              <EconomicChart
                data={impactData}
                title="Impact Metrics"
                type="line"
                color="#FFDD57"
              />
            </Card>

            {/* Featured Researchers */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Featured Researchers</h3>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm">Dr. Sarah Chen</p>
                  <p className="text-xs text-gray-600">MIT Economics • UBI Specialist</p>
                  <p className="text-xs text-econoscope-blue mt-1">23 papers • 1,247 citations</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm">Prof. Michael Rodriguez</p>
                  <p className="text-xs text-gray-600">Stanford • Environmental Economics</p>
                  <p className="text-xs text-econoscope-blue mt-1">18 papers • 856 citations</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm">Dr. Lisa Park</p>
                  <p className="text-xs text-gray-600">University of Chicago • Monetary Policy</p>
                  <p className="text-xs text-econoscope-blue mt-1">31 papers • 2,134 citations</p>
                </div>
              </div>
            </Card>

            {/* Research Resources */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Research Resources</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Research Guidelines
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Data Access Portal
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Collaboration Network
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Citation Standards
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
