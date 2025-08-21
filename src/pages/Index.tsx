import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { StatCard } from "@/components/StatCard";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Database, Search, TrendingUp, Users, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Medical research and data visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Connecting Clinical Trials with CMS Healthcare Data
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Unlock insights by linking clinical trial outcomes with real-world Medicare and Medicaid data. 
              Accelerate medical research with comprehensive data analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/search">
                  <Search className="w-5 h-5 mr-2" />
                  Start Exploring Data
                </Link>
              </Button>
              <Button variant="medical-outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/clinical-trials">
                  <Activity className="w-5 h-5 mr-2" />
                  Browse Clinical Trials
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Platform Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Healthcare Data Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              MedLink bridges the gap between clinical research and real-world healthcare outcomes by providing 
              seamless access to both clinical trial data and CMS healthcare datasets.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              title="Clinical Trials"
              value="2,847"
              description="Active and completed studies"
              icon={Activity}
              trend={{ value: 12, isPositive: true }}
            />
            <StatCard
              title="CMS Data Sets"
              value="1,247"
              description="Medicare & Medicaid records"
              icon={Database}
              trend={{ value: 8, isPositive: true }}
            />
            <StatCard
              title="Linked Records"
              value="432"
              description="Connected data points"
              icon={TrendingUp}
              trend={{ value: 28, isPositive: true }}
            />
            <StatCard
              title="Research Centers"
              value="489"
              description="Participating institutions"
              icon={MapPin}
              trend={{ value: 15, isPositive: true }}
            />
          </div>
        </section>

        {/* Quick Search */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Quick Search</h3>
            <p className="text-muted-foreground">Find connections across clinical trials and CMS data</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </section>

        {/* Feature Cards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Platform Features</h3>
            <p className="text-lg text-muted-foreground">
              Powerful tools for healthcare research and data analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/clinical-trials" className="block">
              <Card className="p-6 hover:shadow-elevated transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-medical-blue-light to-medical-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Clinical Trials Database</h4>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Access comprehensive clinical trial data including study protocols, participant demographics, 
                  and outcome measures from leading research institutions.
                </p>
                <div className="flex items-center text-medical-blue font-medium group-hover:gap-3 transition-all">
                  <span>Explore Trials</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link to="/cms-data" className="block">
              <Card className="p-6 hover:shadow-elevated transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-medical-teal-light to-medical-teal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6 text-medical-teal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">CMS Healthcare Data</h4>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Analyze Medicare and Medicaid claims data, provider quality metrics, and healthcare 
                  utilization patterns across diverse patient populations.
                </p>
                <div className="flex items-center text-medical-teal font-medium group-hover:gap-3 transition-all">
                  <span>Browse CMS Data</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link to="/search" className="block">
              <Card className="p-6 hover:shadow-elevated transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-medical-green-light to-medical-green rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Search className="w-6 h-6 text-medical-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Advanced Search & Linking</h4>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Use AI-powered search to find meaningful connections between clinical trial outcomes 
                  and real-world healthcare data for deeper insights.
                </p>
                <div className="flex items-center text-medical-green font-medium group-hover:gap-3 transition-all">
                  <span>Start Searching</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="p-12 bg-gradient-to-r from-medical-blue-light/30 to-medical-teal-light/30 border-medical-blue/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Accelerate Your Healthcare Research?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading researchers and healthcare professionals using MedLink to uncover 
              insights that drive better patient outcomes and informed healthcare policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="medical" size="lg" asChild>
                <Link to="/search">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
