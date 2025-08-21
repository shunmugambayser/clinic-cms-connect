import { Navigation } from "@/components/Navigation";
import { SearchBar } from "@/components/SearchBar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Database, Link, Calendar, MapPin, Users, Building } from "lucide-react";

const Search = () => {
  const mockResults = {
    trials: [
      {
        id: "NCT12345678",
        title: "Phase III Study of Novel Cancer Treatment",
        status: "Recruiting",
        location: "Johns Hopkins, Baltimore MD",
        relevance: 95
      },
      {
        id: "NCT87654321", 
        title: "Diabetes Management Digital Intervention Study",
        status: "Active",
        location: "Mayo Clinic, Rochester MN",
        relevance: 88
      }
    ],
    cmsData: [
      {
        id: "CMS-2024-001",
        title: "Medicare Part D Prescription Drug Coverage",
        category: "Prescription Drugs",
        lastUpdated: "March 15, 2024",
        relevance: 92
      },
      {
        id: "CMS-2024-002",
        title: "Hospital Readmission Rates by Condition", 
        category: "Hospital Care",
        lastUpdated: "March 10, 2024",
        relevance: 85
      }
    ],
    linkedData: [
      {
        trialId: "NCT12345678",
        trialTitle: "Phase III Study of Novel Cancer Treatment",
        cmsId: "CMS-2024-001",
        cmsTitle: "Medicare Part D Prescription Drug Coverage",
        linkStrength: "Strong",
        commonFactors: ["Cancer treatment", "Drug utilization", "Medicare population"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Search & Link Data</h1>
          <p className="text-lg text-muted-foreground">
            Find connections between clinical trials and CMS data using advanced search
          </p>
        </div>

        {/* Advanced Search */}
        <div className="mb-8">
          <SearchBar placeholder="Search across clinical trials and CMS data..." />
        </div>

        {/* Search Results */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Results</TabsTrigger>
            <TabsTrigger value="trials">Clinical Trials</TabsTrigger>
            <TabsTrigger value="cms">CMS Data</TabsTrigger>
            <TabsTrigger value="linked">Linked Data</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Clinical Trials Results */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-medical-blue" />
                  Clinical Trials ({mockResults.trials.length})
                </h3>
                <div className="space-y-4">
                  {mockResults.trials.map((trial) => (
                    <Card key={trial.id} className="p-4 hover:shadow-card transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs font-mono">
                              {trial.id}
                            </Badge>
                            <Badge className="bg-medical-green-light text-medical-green text-xs">
                              {trial.status}
                            </Badge>
                            <span className="text-xs text-medical-blue font-medium">
                              {trial.relevance}% match
                            </span>
                          </div>
                          <h4 className="font-medium text-foreground mb-1">{trial.title}</h4>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {trial.location}
                          </p>
                        </div>
                        <Button variant="medical-outline" size="sm">
                          View
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CMS Data Results */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-medical-teal" />
                  CMS Data ({mockResults.cmsData.length})
                </h3>
                <div className="space-y-4">
                  {mockResults.cmsData.map((dataset) => (
                    <Card key={dataset.id} className="p-4 hover:shadow-card transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs font-mono">
                              {dataset.id}
                            </Badge>
                            <Badge className="bg-medical-teal-light text-medical-teal text-xs">
                              {dataset.category}
                            </Badge>
                            <span className="text-xs text-medical-blue font-medium">
                              {dataset.relevance}% match
                            </span>
                          </div>
                          <h4 className="font-medium text-foreground mb-1">{dataset.title}</h4>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Updated {dataset.lastUpdated}
                          </p>
                        </div>
                        <Button variant="medical-outline" size="sm">
                          View
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trials" className="space-y-4">
            {mockResults.trials.map((trial) => (
              <Card key={trial.id} className="p-6 hover:shadow-elevated transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="font-mono">
                        {trial.id}
                      </Badge>
                      <Badge className="bg-medical-green-light text-medical-green">
                        {trial.status}
                      </Badge>
                      <span className="text-medical-blue font-medium">
                        {trial.relevance}% relevance score
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {trial.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{trial.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="medical-outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="medical" size="sm">
                      Link CMS Data
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="cms" className="space-y-4">
            {mockResults.cmsData.map((dataset) => (
              <Card key={dataset.id} className="p-6 hover:shadow-elevated transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="font-mono">
                        {dataset.id}
                      </Badge>
                      <Badge className="bg-medical-teal-light text-medical-teal">
                        {dataset.category}
                      </Badge>
                      <span className="text-medical-blue font-medium">
                        {dataset.relevance}% relevance score
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {dataset.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Last updated: {dataset.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="medical-outline" size="sm">
                      View Dataset
                    </Button>
                    <Button variant="medical" size="sm">
                      Link Trials
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="linked" className="space-y-4">
            {mockResults.linkedData.map((link, index) => (
              <Card key={index} className="p-6 hover:shadow-elevated transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Link className="w-5 h-5 text-medical-blue" />
                      <span className="font-semibold text-foreground">Data Link Analysis</span>
                      <Badge className={`${
                        link.linkStrength === "Strong" 
                          ? "bg-medical-green-light text-medical-green"
                          : "bg-medical-blue-light text-medical-blue"
                      }`}>
                        {link.linkStrength} Connection
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Activity className="w-4 h-4" />
                        <span>Clinical Trial</span>
                      </div>
                      <div className="pl-6">
                        <Badge variant="outline" className="text-xs font-mono mb-2">
                          {link.trialId}
                        </Badge>
                        <p className="font-medium text-foreground">{link.trialTitle}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Database className="w-4 h-4" />
                        <span>CMS Dataset</span>
                      </div>
                      <div className="pl-6">
                        <Badge variant="outline" className="text-xs font-mono mb-2">
                          {link.cmsId}
                        </Badge>
                        <p className="font-medium text-foreground">{link.cmsTitle}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Common Factors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {link.commonFactors.map((factor, factorIndex) => (
                        <Badge key={factorIndex} variant="secondary" className="text-xs">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="medical" size="sm">
                      Analyze Connection
                    </Button>
                    <Button variant="medical-outline" size="sm">
                      Export Data
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Search;