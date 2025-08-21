import { Navigation } from "@/components/Navigation";
import { StatCard } from "@/components/StatCard";
import { SearchBar } from "@/components/SearchBar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, DollarSign, TrendingUp, Building, ExternalLink, FileText } from "lucide-react";

const CMSData = () => {
  const mockCMSData = [
    {
      id: "CMS-2024-001",
      title: "Medicare Part D Prescription Drug Coverage",
      category: "Prescription Drugs",
      lastUpdated: "March 15, 2024",
      dataPoints: "2.3M records",
      description: "Comprehensive data on Medicare Part D prescription drug utilization, costs, and coverage patterns across different demographics and geographic regions.",
      relevantTrials: 23,
    },
    {
      id: "CMS-2024-002", 
      title: "Hospital Readmission Rates by Condition",
      category: "Hospital Care",
      lastUpdated: "March 10, 2024",
      dataPoints: "856K records",
      description: "Analysis of 30-day hospital readmission rates for various medical conditions, including heart failure, pneumonia, and surgical complications.",
      relevantTrials: 45,
    },
    {
      id: "CMS-2024-003",
      title: "Provider Quality Metrics and Outcomes",
      category: "Quality Measures",
      lastUpdated: "March 5, 2024", 
      dataPoints: "1.7M records",
      description: "Healthcare provider performance data including quality ratings, patient satisfaction scores, and clinical outcome measures.",
      relevantTrials: 18,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "prescription drugs":
        return "bg-medical-teal-light text-medical-teal";
      case "hospital care":
        return "bg-medical-blue-light text-medical-blue";
      case "quality measures":
        return "bg-medical-green-light text-medical-green";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">CMS Data Repository</h1>
          <p className="text-lg text-muted-foreground">
            Access Centers for Medicare & Medicaid Services data for healthcare research and analysis
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Data Sets"
            value="1,247"
            description="Available for analysis"
            icon={Database}
            trend={{ value: 15, isPositive: true }}
          />
          <StatCard
            title="Medicare Beneficiaries"
            value="64.3M"
            description="Covered individuals"
            icon={Building}
            trend={{ value: 2, isPositive: true }}
          />
          <StatCard
            title="Total Claims"
            value="$926B"
            description="Annual spending data"
            icon={DollarSign}
            trend={{ value: 4, isPositive: true }}
          />
          <StatCard
            title="Linked Trials"
            value="432"
            description="Connected studies"
            icon={TrendingUp}
            trend={{ value: 28, isPositive: true }}
          />
        </div>

        {/* Search */}
        <div className="mb-8">
          <SearchBar placeholder="Search CMS data by category, provider, condition..." />
        </div>

        {/* CMS Data List */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Recent CMS Data Sets</h2>
          {mockCMSData.map((dataset) => (
            <Card key={dataset.id} className="p-6 hover:shadow-elevated transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="font-mono">
                      {dataset.id}
                    </Badge>
                    <Badge className={getCategoryColor(dataset.category)}>
                      {dataset.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <FileText className="w-4 h-4" />
                      <span>{dataset.dataPoints}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {dataset.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {dataset.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Database className="w-4 h-4" />
                      <span>Last updated: {dataset.lastUpdated}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <TrendingUp className="w-4 h-4" />
                      <span>{dataset.relevantTrials} linked clinical trials</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 lg:ml-6">
                  <Button variant="medical" size="sm" className="whitespace-nowrap">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Dataset
                  </Button>
                  <Button variant="medical-outline" size="sm" className="whitespace-nowrap">
                    Link Trials
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Data Categories */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">Data Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Medicare Claims",
                description: "Part A, B, C, and D claims data",
                icon: FileText,
                count: "2.8B records"
              },
              {
                title: "Provider Data",
                description: "Healthcare provider quality and utilization",
                icon: Building,
                count: "45K providers"
              },
              {
                title: "Cost Analysis",
                description: "Healthcare spending and cost trends",
                icon: DollarSign,
                count: "$1.2T analyzed"
              }
            ].map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-medical-blue-light to-medical-teal-light rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-medical-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <p className="text-xs text-medical-blue font-medium mt-1">{category.count}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CMSData;