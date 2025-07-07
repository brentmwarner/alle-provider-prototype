import { SearchIcon, Menu, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

// Navigation menu items data
const businessMenuItems = [
  { label: "Business Overview", active: false },
  { label: "Business Insights", active: false },
  { label: "Settings", active: false },
];

const locationMenuItems = [
  { label: "Dashboard", path: "/dashboard", active: false },
  { label: "Marketing", path: "/marketing", active: false, hasSubmenu: true },
  { label: "Store", path: "/store", active: false, hasSubmenu: true },
  { 
    label: "Insights", 
    path: "/insights", 
    active: false,
    submenu: [
      { label: "Analytics", path: "/insights/analytics" },
      { label: "Reports", path: "/insights/reports" }
    ]
  },
  { label: "Settings", path: "/settings", active: false },
];

interface PageTemplateProps {
  title: string;
  activeMenuItem?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  children: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  activeMenuItem = "Dashboard",
  showSearch = false,
  searchPlaceholder = "Search patients by name or number",
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);
  const [expandedMenus, setExpandedMenus] = React.useState<Record<string, boolean>>(() => {
    // Auto-expand Insights menu if on Analytics or Reports page
    if (location.pathname.startsWith('/insights/')) {
      return { 'Insights': true };
    }
    return {};
  });

  // Add global styles to ensure proper height inheritance
  React.useEffect(() => {
    // Set html and body height
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    
    // Set app container height
    const appElement = document.getElementById('app');
    if (appElement) {
      appElement.style.height = '100%';
    }

    // Override theme colors
    const style = document.createElement('style');
    style.textContent = `
      /* Override accent color for hover states */
      :root {
        --accent: 13 39% 58% / 0.08;
        --accent-foreground: 222.2 47.4% 11.2%;
      }
      
      /* Override button ghost variant hover state */
      button:hover.hover\\:bg-accent\\:hover {
        background-color: rgba(192, 134, 118, 0.1) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  const toggleSubmenu = (menuLabel: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuLabel]: !prev[menuLabel]
    }));
  };

  const isMenuActive = (item: any): boolean => {
    if (item.path && location.pathname === item.path) return true;
    if (item.submenu) {
      return item.submenu.some((sub: any) => location.pathname === sub.path);
    }
    return false;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Top Navigation Bar */}
      <header className="flex w-full h-16 items-center justify-between px-4 py-3 bg-[#090909] z-10">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="w-10 h-10 p-0 rounded-lg hover:bg-transparent hover:text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              isSidebarOpen ? (
                <ChevronLeft className="w-4 h-4 text-white" />
              ) : (
                <ChevronRight className="w-4 h-4 text-white" />
              )
            ) : (
              <Menu className="w-4 h-4 text-white" />
            )}
          </Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="24" viewBox="0 0 50 24" fill="none" className="h-8">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.5238 23.7239H20.9961V0H23.5238V23.7239ZM0 23.7239H2.46731L4.54343 17.4015H13.4197L15.5259 23.7239H18.1137L10.832 1.77983H7.40187L0 23.7239ZM8.99614 3.98976L12.7272 15.2838H5.26512L8.99614 3.98976ZM27.9111 23.7239H30.4384V0H27.9111V23.7239ZM47.8098 19.0896C47.2682 22.3123 44.6504 24 41.0998 24C36.6468 24 33.4874 20.8083 33.4874 15.867V15.6215C33.4874 10.7724 36.5264 7.39623 40.8592 7.39623C44.4999 7.39623 47.93 9.6368 47.93 15.3761V16.2046H36.0751C36.1953 19.8569 37.9103 21.8823 41.1298 21.8823C43.5671 21.8823 44.9814 20.9619 45.3125 19.0896H47.8098ZM36.1646 14.1486C36.5858 11.2942 38.3008 9.51425 40.8582 9.51425C43.4459 9.51425 45.131 10.834 45.3716 14.1486H36.1646ZM36.9175 1.87208V3.83624H44.8009V1.87208H36.9175Z" fill="white"/>
            <path d="M48.1345 23.3722H48.3511V22.9797H48.4546L48.6939 23.3722H48.9191L48.6578 22.9426C48.775 22.9055 48.8607 22.8224 48.8607 22.6699V22.6655C48.8607 22.4575 48.7119 22.3605 48.4819 22.3605H48.1345V23.3722ZM48.3511 22.8272V22.5314H48.4773C48.5854 22.5314 48.6488 22.5681 48.6488 22.6747V22.6791C48.6488 22.7761 48.5901 22.8272 48.4773 22.8272H48.3511ZM48.4773 23.7327C48.0174 23.7327 47.6566 23.3909 47.6566 22.8827C47.6566 22.3789 47.9994 22.0231 48.4773 22.0231C48.9552 22.0231 49.2979 22.3741 49.2979 22.8779C49.2979 23.3817 48.9418 23.7327 48.4773 23.7327ZM48.4773 23.8991C49.0366 23.8991 49.4785 23.4556 49.4785 22.8779C49.4785 22.3094 49.0456 21.8567 48.4773 21.8567C47.9179 21.8567 47.4761 22.3142 47.4761 22.8827C47.4761 23.46 47.9226 23.8991 48.4773 23.8991Z" fill="white"/>
          </svg>
        </div>

        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10 border border-solid border-[#cfcbca]">
            <AvatarImage
              src="/-avatar---bb---kristin-driver.svg"
              alt="User avatar"
            />
            <AvatarFallback>KD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        {isSidebarOpen && (
          <aside className="flex flex-col w-[270px] h-full bg-neutral-50 border-r border-[#dedad7]">
          <div className="flex flex-col h-full">
            {/* Business Section */}
            <div className="flex flex-col gap-4 p-4">
              <Button
                variant="ghost"
                className="justify-start h-9 gap-1.5 pl-1.5 pr-2 py-2"
              >
                <div className="flex items-center w-6 h-6 justify-center">
                  <img
                    className="w-5 h-5 object-cover"
                    alt="Business icon"
                    src="/union.png"
                  />
                </div>
                <span className="font-body-small-medium text-[#090909]">
                  SoCal Skin Care
                </span>
              </Button>

              <div className="flex flex-col gap-2">
                {businessMenuItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="justify-start h-9 gap-1 pl-2 pr-2.5 py-2"
                  >
                    <span className="font-body-small-regular text-[#090909]">
                      {item.label}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            <Separator className="my-4" />

            {/* Location Section */}
            <div className="flex flex-col gap-2 px-4">
              <div className="px-3">
                <span className="font-caption-medium-regular text-[#787676]">
                  Active Location
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1 px-3">
                  <span className="font-body-small-medium text-[#090909]">
                    Costa Mesa
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 p-2 rounded-lg border-[#dedad7]"
                >
                  <img
                    className="w-[9.33px] h-[9.95px]"
                    alt="Location selector"
                    src="/union-1.svg"
                  />
                </Button>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                {locationMenuItems.map((item, index) => {
                  const isActive = isMenuActive(item);
                  const isExpanded = expandedMenus[item.label];
                  
                  return (
                    <React.Fragment key={index}>
                      <Button
                        variant="ghost"
                        className={`justify-between h-9 ${
                          isActive
                            ? "bg-[#c086761f] text-[#9a6b5e] font-body-small-semi-bold"
                            : "text-[#090909] font-body-small-regular"
                        } ${item.hasSubmenu || item.submenu ? "pl-3 pr-2.5" : "pl-2 pr-2.5"}`}
                        onClick={() => {
                          if (item.submenu) {
                            toggleSubmenu(item.label);
                          } else if (item.path) {
                            handleNavigation(item.path);
                          }
                        }}
                      >
                        <span>{item.label}</span>
                        {(item.hasSubmenu || item.submenu) && (
                          <div className="w-5 h-5 flex items-center justify-center">
                            {item.submenu ? (
                              <ChevronDown 
                                className={`w-4 h-4 transition-transform ${
                                  isExpanded ? "rotate-180" : ""
                                }`} 
                              />
                            ) : (
                              <img
                                className="w-[9px] h-[5px]"
                                alt="Expand menu"
                                src="/union-2.svg"
                              />
                            )}
                          </div>
                        )}
                      </Button>
                      
                      {/* Render submenu items */}
                      {item.submenu && isExpanded && (
                        <div className="flex flex-col gap-1 ml-4">
                          {item.submenu.map((subItem, subIndex) => (
                            <Button
                              key={subIndex}
                              variant="ghost"
                              className={`justify-start h-8 px-3 ${
                                location.pathname === subItem.path
                                  ? "bg-[#c086761f] text-[#9a6b5e] font-body-small-semi-bold"
                                  : "text-[#090909] font-body-small-regular"
                              }`}
                              onClick={() => handleNavigation(subItem.path)}
                            >
                              <span className="text-sm">{subItem.label}</span>
                            </Button>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-start gap-[60px] px-14 py-0 overflow-auto">
          <div className="flex self-stretch w-full flex-col items-start">
            {/* Location Header */}
            <div className="flex flex-col w-full items-start pt-6 pb-0 px-0 bg-white">
              <div className="flex items-center w-full">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-normal text-[#090909]">
                    Costa Mesa (1032 South Main Street)
                  </span>
                </div>
              </div>

              {/* Page Header */}
              <header className="flex flex-wrap items-start gap-[12px] px-0 py-6 w-full">
                <div className="flex flex-col min-w-[603px] items-start gap-2 flex-1">
                  <h1 className="self-stretch text-4xl font-medium text-[#090909]" style={{ fontSize: '36px' }}>
                    {title}
                  </h1>
                </div>
              </header>
            </div>

            {/* Search Input (if enabled) */}
            {showSearch && (
              <div className="mt-6 w-full max-w-[1056px]">
                <Card className="border-[#dedad7] rounded-lg">
                  <CardContent className="p-0">
                    <div className="flex items-center">
                      <div className="p-5 flex items-center">
                        <SearchIcon className="w-4 h-[17px] text-[#090909]" />
                      </div>
                      <Input
                        className="border-0 shadow-none h-auto py-[3px] font-body-large-regular text-[#777575] focus-visible:ring-0"
                        placeholder={searchPlaceholder}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Page Content */}
            <div className="w-full mt-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};