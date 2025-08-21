import { Navigation } from "@/components/Navigation";
import { StatCard } from "@/components/StatCard";
import { SearchBar } from "@/components/SearchBar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Users, MapPin, Calendar, ExternalLink } from "lucide-react";

const ClinicalTrials = () => {
  const mockTrials = [
    {
      id: "NCT12345678",
      title: "Phase III Study of Novel Cancer Treatment",
      status: "Recruiting",
      phase: "Phase 3",
      location: "Johns Hopkins, Baltimore MD",
      participants: "500 participants",
      startDate: "March 2024",
      description: "A randomized, double-blind, placebo-controlled study evaluating the efficacy and safety of a novel immunotherapy treatment in patients with advanced melanoma.",
    },
    {
      id: "NCT87654321",
      title: "Diabetes Management Digital Intervention Study",
      status: "Active",
      phase: "Phase 2",
      location: "Mayo Clinic, Rochester MN",
      participants: "250 participants",
      startDate: "January 2024",
      description: "Investigating the effectiveness of a digital health platform for improving glucose control in Type 2 diabetes patients.",
    },
    {
      id: "NCT11223344",
      title: "Alzheimer's Disease Prevention Trial",
      status: "Enrolling",
      phase: "Phase 1",
      location: "Stanford University, Palo Alto CA",
      participants: "100 participants",
      startDate: "February 2024",
      description: "Early-stage study examining the potential of a new drug compound to prevent cognitive decline in at-risk populations.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "recruiting":
      case "enrolling":
        return "bg-medical-green-light text-medical-green";
      case "active":
        return "bg-medical-blue-light text-medical-blue";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Clinical Trials Database</h1>
          <p className="text-lg text-muted-foreground">
            Explore ongoing and completed clinical trials with comprehensive data analysis
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Trials"
            value="2,847"
            description="Currently recruiting"
            icon={Activity}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Total Participants"
            value="156,293"
            description="Across all studies"
            icon={Users}
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Completed Studies"
            value="1,429"
            description="With results available"
            icon={Calendar}
            trend={{ value: 5, isPositive: true }}
          />
          <StatCard
            title="Research Centers"
            value="489"
            description="Participating institutions"
            icon={MapPin}
            trend={{ value: 3, isPositive: true }}
          />
        </div>

        {/* Search */}
        <div className="mb-8">
          <SearchBar placeholder="Search clinical trials by condition, intervention, location..." />
        </div>

        {/* Trials List */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Recent Clinical Trials</h2>
          {mockTrials.map((trial) => (
            <Card key={trial.id} className="p-6 hover:shadow-elevated transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="font-mono">
                      {trial.id}
                    </Badge>
                    <Badge className={getStatusColor(trial.status)}>
                      {trial.status}
                    </Badge>
                    <Badge variant="secondary">{trial.phase}</Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {trial.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {trial.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{trial.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{trial.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Started {trial.startDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 lg:ml-6">
                  <Button variant="medical" size="sm" className="whitespace-nowrap">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="medical-outline" size="sm" className="whitespace-nowrap">
                    Link CMS Data
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ClinicalTrials;