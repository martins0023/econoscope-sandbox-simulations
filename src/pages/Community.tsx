
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, ArrowUp, Database, LayoutDashboard } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import { Link } from "react-router-dom";

const Community = () => {
  const featuredModels = [
    {
      title: "Universal Basic Income - Scandinavian Model",
      author: "Dr. Sarah Chen",
      institution: "MIT Economics",
      downloads: 2847,
      stars: 156,
      description: "Comprehensive UBI implementation based on Nordic economic principles with agent-based modeling.",
      tags: ["UBI", "Social Policy", "Agent-Based"],
      lastUpdated: "3 days ago",
      complexity: "Advanced"
    },
    {
      title: "Carbon Tax Impact Assessment",
      author: "Prof. Michael Rodriguez",
      institution: "Stanford University",
      downloads: 1923,
      stars: 89,
      description: "Multi-sector analysis of carbon pricing mechanisms on economic growth and environmental outcomes.",
      tags: ["Environmental", "Taxation", "Climate"],
      lastUpdated: "1 week ago",
      complexity: "Intermediate"
    },
    {
      title: "Cryptocurrency Integration Framework",
      author: "Alex Thompson",
      institution: "Economic Policy Institute",
      downloads: 1456,
      stars: 203,
      description: "Simulation framework for integrating digital currencies into traditional economic systems.",
      tags: ["Cryptocurrency", "Monetary Policy", "Innovation"],
      lastUpdated: "5 days ago",
      complexity: "Advanced"
    }
  ];

  const discussions = [
    {
      title: "Best practices for modeling behavioral economics in agent simulations",
      author: "Emma Wilson",
      replies: 23,
      lastActivity: "2 hours ago",
      tags: ["Behavioral Economics", "Agents"]
    },
    {
      title: "How to calibrate inflation response parameters?",
      author: "David Kim",
      replies: 15,
      lastActivity: "4 hours ago",
      tags: ["Inflation", "Parameters"]
    },
    {
      title: "Seeking collaborators for multi-country trade policy study",
      author: "Maria Garcia",
      replies: 8,
      lastActivity: "1 day ago",
      tags: ["Trade Policy", "Collaboration"]
    }
  ];

  const researchers = [
    {
      name: "Dr. Sarah Chen",
      institution: "MIT Economics",
      expertise: "Behavioral Economics, UBI",
      models: 12,
      followers: 247
    },
    {
      name: "Prof. Michael Rodriguez",
      institution: "Stanford University",
      expertise: "Environmental Economics",
      models: 8,
      followers: 189
    },
    {
      name: "Dr. Lisa Park",
      institution: "University of Chicago",
      expertise: "Monetary Policy, Central Banking",
      models: 15,
      followers: 312
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Hub</h1>
            <p className="text-lg text-gray-600">Collaborate, share, and discover economic models from researchers worldwide</p>
          </div>
          <Button className="bg-econoscope-blue hover:bg-econoscope-blue-dark text-white">
            Share Your Model
          </Button>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Community Models"
            value="1,247"
            change="+89 this month"
            changeType="positive"
            icon={<LayoutDashboard className="h-6 w-6" />}
          />
          <MetricCard
            title="Active Researchers"
            value="3,892"
            change="+156 new members"
            changeType="positive"
            icon={<ArrowUp className="h-6 w-6" />}
          />
          <MetricCard
            title="Model Downloads"
            value="47.2K"
            change="This month"
            changeType="neutral"
            icon={<Database className="h-6 w-6" />}
          />
          <MetricCard
            title="Collaboration Projects"
            value="234"
            change="+12 active"
            changeType="positive"
            icon={<ArrowUp className="h-6 w-6" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Models */}
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Featured Models</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search models..." className="pl-10 w-64" />
                </div>
              </div>
              
              <div className="space-y-6">
                {featuredModels.map((model, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{model.title}</h3>
                        <p className="text-sm text-gray-600">
                          by <span className="font-medium">{model.author}</span> • {model.institution}
                        </p>
                      </div>
                      <Badge className={getComplexityColor(model.complexity)}>
                        {model.complexity}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{model.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {model.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>↓ {model.downloads} downloads</span>
                        <span>★ {model.stars} stars</span>
                        <span>Updated {model.lastUpdated}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">View</Button>
                        <Link to="/model-builder">
                          <Button size="sm" className="bg-econoscope-blue hover:bg-econoscope-blue-dark text-white">
                            Fork
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Community Discussions */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Community Discussions</h2>
              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div key={index} className="border-l-4 border-econoscope-blue pl-4 py-3 hover:bg-gray-50 transition-colors">
                    <h3 className="font-medium text-gray-900 mb-1">{discussion.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span>by {discussion.author}</span>
                      <span>{discussion.replies} replies</span>
                      <span>Last activity {discussion.lastActivity}</span>
                    </div>
                    <div className="flex gap-2">
                      {discussion.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6">
                View All Discussions
              </Button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Top Contributors</h3>
              <div className="space-y-4">
                {researchers.map((researcher, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Avatar>
                      <AvatarFallback>{researcher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{researcher.name}</p>
                      <p className="text-xs text-gray-600">{researcher.institution}</p>
                      <p className="text-xs text-gray-500 mt-1">{researcher.expertise}</p>
                      <div className="flex gap-3 text-xs text-gray-500 mt-1">
                        <span>{researcher.models} models</span>
                        <span>{researcher.followers} followers</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Start Discussion
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Find Collaborators
                </Button>
                <Link to="/model-builder" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Upload Model
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  Join Research Group
                </Button>
              </div>
            </Card>

            {/* Trending Tags */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Trending Topics</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">#UBI</Badge>
                <Badge variant="secondary">#Climate</Badge>
                <Badge variant="secondary">#AgentBased</Badge>
                <Badge variant="secondary">#Cryptocurrency</Badge>
                <Badge variant="secondary">#Taxation</Badge>
                <Badge variant="secondary">#TradePolicy</Badge>
                <Badge variant="secondary">#Behavioral</Badge>
                <Badge variant="secondary">#MacroEcon</Badge>
              </div>
            </Card>

            {/* Events */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="font-medium text-blue-800 text-sm">Economic Modeling Workshop</p>
                  <p className="text-xs text-blue-600">Dec 15, 2024 • Virtual Event</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-medium text-green-800 text-sm">UBI Research Symposium</p>
                  <p className="text-xs text-green-600">Jan 20, 2025 • MIT Campus</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
