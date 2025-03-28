'use client';

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Business",
    events: [
      {
        name: "GLOBAL STARTUPS CLUB",
        description: "STARTUP NETWORKING Chennai",
      },
      {
        name: "Task-based AI, Web3, Blockchain",
        description: "The Business Side of Building Tech Products",
      },
      {
        name: "Chennai Business Meet",
        description: "Networking event for entrepreneurs",
      }
    ],
  },
  {
    title: "Sports",
    events: [
      {
        name: "Little Champs Kids Run 2025",
        description: "4th Edition",
      },
      {
        name: "Aalam Deepam Chennai Duathlon",
        description: "2025 Edition",
      },
      {
        name: "INTER SCHOOL ATHLETICS MEET",
        description: "2025, Rajarathinam Stadium",
      }
    ],
  },
  {
    title: "Arts",
    events: [
      {
        name: "State level summer kids drawing competition",
        description: "Art Splash's Summer Camp",
      },
      {
        name: "Art Soiree",
        description: "Summer Camp, Art Soiree",
      },
      {
        name: "Theater Festival",
        description: "Chennai's biggest theater showcase",
      }
    ],
  },
  {
    title: "Exhibitions",
    events: [
      {
        name: "CAI CONSTRUCTION ARCHITECTURE INTERIOR EXPO",
        description: "2025 Edition",
      },
      {
        name: "THE ARCHITECT & INTERIOR EXPO",
        description: "2025 Edition",
      },
      {
        name: "RenewX 2025",
        description: "Expo on Renewable Energy",
      }
    ],
  },
];

export function MenuSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="business" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {categories.map((category) => (
            <TabsTrigger key={category.title} value={category.title.toLowerCase()}>
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.title} value={category.title.toLowerCase()}>
            <div className="grid gap-4 md:grid-cols-2">
              {category.events.map((event, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{event.name}</CardTitle>
                    <Button variant="outline" size="sm" className="h-8">
                      View Details <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
