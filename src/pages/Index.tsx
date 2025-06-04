
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import MetricCard from "@/components/MetricCard";
import EconomicChart from "@/components/EconomicChart";
import { ArrowUp, Database, LayoutDashboard, Search } from "lucide-react";

const Index = () => {
  // Sample data for the economic chart
  const economicData = [
    { name: 'Q1', value: 4200, secondary: 3800 },
    { name: 'Q2', value: 4500, secondary: 4100 },
    { name: 'Q3', value: 4300, secondary: 4000 },
    { name: 'Q4', value: 4800, secondary: 4400 },
  ];

  const features = [
    {
      icon: <LayoutDashboard className="h-8 w-8" />,
      title: "Model Builder Interface",
      description: "Drag-and-drop environment to build complex economic models with taxation, UBI, and inflation response scenarios.",
      link: "/model-builder"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Synthetic Agent Simulator",
      description: "Agents with behavioral profiles including consumers, businesses, and regulators for realistic simulations.",
      link: "/simulations"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Data Layer Integration",
      description: "Inject real-world economic indicators via APIs for realistic conditions and stress testing.",
      link: "/data-hub"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-econoscope-blue via-econoscope-blue-light to-econoscope-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                EconoScope
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Dynamic Simulation Engine for Decentralized Economic Experimentation
              </p>
              <p className="text-lg mb-8 text-blue-200">
                Explore and test new economic models without real-world risk. From UBI to local currencies, simulate and validate alternative economic paradigms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/model-builder">
                  <Button size="lg" className="bg-white text-econoscope-blue hover:bg-gray-100 font-semibold px-8 py-3">
                    Start Building Models
                  </Button>
                </Link>
                <Link to="/simulations">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-econoscope-blue font-semibold px-8 py-3">
                    View Simulations
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-scale-in">
              <EconomicChart
                data={economicData}
                title="Economic Model Preview"
                type="area"
                color="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Impact</h2>
            <p className="text-lg text-gray-600">Real-time metrics from our economic simulation ecosystem</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard
              title="Active Models"
              value="2,847"
              change="+12% this month"
              changeType="positive"
              icon={<LayoutDashboard className="h-6 w-6" />}
            />
            <MetricCard
              title="Simulations Run"
              value="18,392"
              change="+28% this week"
              changeType="positive"
              icon={<ArrowUp className="h-6 w-6" />}
            />
            <MetricCard
              title="Research Papers"
              value="156"
              change="8 published this month"
              changeType="positive"
              icon={<Search className="h-6 w-6" />}
            />
            <MetricCard
              title="Data Sources"
              value="89"
              change="5 new integrations"
              changeType="positive"
              icon={<Database className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Economic Modeling Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build, simulate, and validate complex economic scenarios with our comprehensive suite of modeling tools and real-world data integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-econoscope-blue mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <Link to={feature.link}>
                  <Button variant="outline" className="border-econoscope-blue text-econoscope-blue hover:bg-econoscope-blue hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-econoscope-slate text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Economic Research?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join researchers, policymakers, and economists worldwide who are using EconoScope to explore new economic possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/model-builder">
              <Button size="lg" className="bg-econoscope-blue hover:bg-econoscope-blue-dark text-white font-semibold px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/research">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-econoscope-slate font-semibold px-8 py-3">
                View Research
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
