import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoImage from "@assets/WhatsApp_Image_2026-01-22_at_15.41.07_1769110238733.jpeg";
import {
  Users,
  Target,
  FileText,
  Megaphone,
  MessageSquare,
  GraduationCap,
  Heart,
  Stethoscope,
  Dumbbell,
  Factory,
  Truck,
  BookOpen,
  Wheat,
  Briefcase,
  ChevronRight,
  Vote,
  Scale,
  Building2,
  ClipboardCheck,
  ArrowDown,
} from "lucide-react";

const targetGroups = [
  {
    title: "First-Time Voters & Youth",
    icon: Vote,
    description: "Democracy education programmes, debates, mock elections, campus interactions, and digital civic awareness content.",
  },
  {
    title: "Women & SHGs",
    icon: Heart,
    description: "Health awareness camps, women conclaves, entrepreneurship programmes, SHG meetings, and community consultations.",
  },
  {
    title: "Anganwadi & ASHA Workers",
    icon: Users,
    description: "Rights awareness sessions, policy-reality dialogues, expert interactions, and structured documentation meetings.",
  },
  {
    title: "Medical Students",
    icon: Stethoscope,
    description: "Public health forums, expert-led seminars, policy discussions, and mentorship interactions.",
  },
  {
    title: "Sports Community",
    icon: Dumbbell,
    description: "Interactive sessions with senior players and coaches, panel discussions, skill camps, marathons, and opportunity awareness programmes.",
  },
  {
    title: "Labour Unions",
    icon: Factory,
    description: "Reality-check workshops, income versus cost-of-living discussions, legal awareness sessions, and collective leadership-building initiatives.",
  },
  {
    title: "Gig Workers",
    icon: Truck,
    description: "Rights awareness sessions, social security audits, accident liability discussions, and systematic documentation of worker experiences.",
  },
  {
    title: "Teachers",
    icon: BookOpen,
    description: "Professional development forums, recognition programmes, mentorship initiatives, and education policy dialogue sessions.",
  },
  {
    title: "Farmers",
    icon: Wheat,
    description: "Farmers' sabhas, cost-versus-income workshops, policy gap mapping sessions, and consultations with rural youth.",
  },
  {
    title: "Entrepreneurs",
    icon: Briefcase,
    description: "Policy dialogue forums, access-to-finance workshops, peer networking platforms, and expert-led discussions.",
  },
];

const approachItems = [
  {
    icon: Target,
    title: "Focused Issue-Based Events",
    description: "Theme-specific events centered on real civic and governance issues affecting different sections of society. Moving public engagement from slogans to substance.",
  },
  {
    icon: Users,
    title: "Targeted Community Engagement",
    description: "Customised programmes reflecting lived realities and concerns of specific communities. Building trust and ensuring democratic participation at grassroots level.",
  },
  {
    icon: MessageSquare,
    title: "Expert-Led Public Discussions",
    description: "Public conversations led by subject experts and experienced practitioners. Ensuring evidence-based dialogue and countering misinformation with credibility.",
  },
  {
    icon: FileText,
    title: "Documentation of Lived Experiences",
    description: "Systematic recording of public testimonies, data points, and governance gaps. Converting lived experiences into structured evidence for accountability.",
  },
  {
    icon: Megaphone,
    title: "Digital Amplification",
    description: "Amplifying issue-based insights through reels, explainers, and collaborations with community voices. Extending civic awareness beyond physical events.",
  },
];

const objectiveItems = [
  {
    icon: Scale,
    title: "Rights & Entitlements",
    description: "Understanding constitutional rights and entitlements every citizen deserves.",
  },
  {
    icon: Building2,
    title: "Governance Structures",
    description: "Learning how governance works and decisions are made at various levels.",
  },
  {
    icon: ClipboardCheck,
    title: "Public Policies",
    description: "Exploring public policies and their intended outcomes for society.",
  },
  {
    icon: Target,
    title: "Implementation Gaps",
    description: "Identifying gaps in implementation and failures of accountability.",
  },
];

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b" data-testid="nav-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="DOCK Logo"
                className="h-10 w-auto"
                data-testid="img-logo"
              />
            </div>
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("objective")}
                data-testid="link-objective"
              >
                Objective
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("approach")}
                data-testid="link-approach"
              >
                Approach
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("target-groups")}
                data-testid="link-target-groups"
              >
                Target Groups
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                data-testid="button-get-involved"
              >
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6" data-testid="badge-nonprofit">
              Non-Partisan Civic Pressure Group
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
              Democratic Organisation for{" "}
              <span className="text-primary">Civic Knowledge</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-description">
              Strengthening democratic awareness, constitutional values, and issue-based public engagement. 
              DOCK functions as a bridge between citizens, experts, and public policy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("objective")}
                data-testid="button-learn-more"
              >
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("target-groups")}
                data-testid="button-explore-programmes"
              >
                Explore Programmes
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground/50" />
        </div>
      </section>

      {/* Objective Section */}
      <section id="objective" className="py-20 bg-card" data-testid="section-objective">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-objective">
              Our Mission
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-objective-title">
              Objective of DOCK
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg" data-testid="text-objective-description">
              DOCK is dedicated to strengthening democratic awareness, constitutional values, 
              and issue-based public engagement. We enable people to understand:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectiveItems.map((item, index) => (
              <Card key={index} className="group hover-elevate overflow-visible" data-testid={`card-objective-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block max-w-3xl" data-testid="card-objective-statement">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Through structured engagement and evidence-based dialogue, DOCK aims to transform 
                  civic participation from passive opinion to{" "}
                  <span className="text-foreground font-semibold">informed democratic action</span>."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20" data-testid="section-approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-approach">
              How We Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-approach-title">
              Our Approach
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg" data-testid="text-approach-description">
              DOCK adopts an issue-centred, participatory, and evidence-driven approach 
              to civic engagement, prioritising real public concerns over rhetoric.
            </p>
          </div>

          <div className="space-y-6">
            {approachItems.map((item, index) => (
              <Card key={index} className="group hover-elevate overflow-visible" data-testid={`card-approach-${index}`}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                          {index + 1}
                        </span>
                        <h3 className="font-semibold text-xl">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section id="target-groups" className="py-20 bg-card" data-testid="section-target-groups">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4" data-testid="badge-target-groups">
              Who We Serve
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-target-groups-title">
              Target Groups
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg" data-testid="text-target-groups-description">
              Our engagement strategy focuses on social groups directly impacted by public policy, 
              governance effectiveness, and service delivery outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetGroups.map((group, index) => (
              <Card
                key={index}
                className="group hover-elevate overflow-visible"
                data-testid={`card-target-group-${index}`}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent mb-4 transition-transform group-hover:scale-110">
                    <group.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{group.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{group.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="py-20" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden" data-testid="card-cta">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10" />
            <CardContent className="relative p-8 sm:p-12 lg:p-16 text-center">
              <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-cta-title">
                Join the Movement
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8" data-testid="text-cta-description">
                Be part of a transformative civic engagement initiative. Together, we can strengthen 
                democratic awareness and create meaningful change in our communities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" data-testid="button-volunteer">
                  Become a Volunteer
                </Button>
                <Button size="lg" variant="outline" data-testid="button-partner">
                  Partner With Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="DOCK Logo"
                className="h-8 w-auto"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left" data-testid="text-copyright">
              Democratic Organisation for Civic Knowledge. Strengthening democracy through informed participation.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("objective")}
                data-testid="footer-link-objective"
              >
                Objective
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("approach")}
                data-testid="footer-link-approach"
              >
                Approach
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("target-groups")}
                data-testid="footer-link-target-groups"
              >
                Groups
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
