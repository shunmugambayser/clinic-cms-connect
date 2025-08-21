import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const StatCard = ({ title, value, description, icon: Icon, trend }: StatCardProps) => {
  return (
    <Card className="p-6 hover:shadow-elevated transition-all duration-300 border-border bg-card">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
          {trend && (
            <div className="flex items-center mt-2">
              <span
                className={`text-xs font-medium ${
                  trend.isPositive ? "text-medical-green" : "text-destructive"
                }`}
              >
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
              <span className="text-xs text-muted-foreground ml-1">vs last month</span>
            </div>
          )}
        </div>
        <div className="w-12 h-12 bg-gradient-to-r from-medical-blue-light to-medical-teal-light rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-medical-blue" />
        </div>
      </div>
    </Card>
  );
};