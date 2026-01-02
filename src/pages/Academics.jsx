import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Calendar as CalendarIcon, BookOpen, FileQuestion } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/card";
import { Button } from "../components/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";

import Navbar from "../components/Navbar";
import "../styles/Academics.css";

const RESOURCES = [
  { type: "Booklet", title: "Data Structures & Algorithms", subject: "Computer Science", size: "2.4 MB", downloads: "1.2k", date: "Dec 10, 2024", link: "#" },
  { type: "PYQ", title: "Engineering Mathematics III (2020-2023)", subject: "Mathematics", size: "5.1 MB", downloads: "3.4k", date: "Nov 28, 2024", link: "#" },
  { type: "Notes", title: "Operating Systems Lecture Notes", subject: "Computer Science", size: "1.8 MB", downloads: "850", date: "Dec 05, 2024", link: "#" },
  { type: "Booklet", title: "Digital Logic Design Handbook", subject: "Electronics", size: "3.2 MB", downloads: "2.1k", date: "Oct 15, 2024", link: "#" },
  { type: "PYQ", title: "Physics End Semester Papers", subject: "Physics", size: "4.5 MB", downloads: "900", date: "Nov 12, 2024", link: "#" }
];

const SCHEDULE = [
  { date: "15 Jan", event: "Internal Assessment 1", type: "Exam" },
  { date: "22 Jan", event: "Project Submission", type: "Deadline" },
  { date: "10 Feb", event: "Mid-Semester Break", type: "Holiday" },
  { date: "20 Mar", event: "End Semester Exams", type: "Exam" }
];

export default function Academics() {
  return (
  <div className="academics-page">
    <div className="academics-wrapper">
      <div className="academics-grid">

        {/* Main Content */}
        <div className="academics-main">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="academics-title">Academic <span className="accent-text">Resources</span></h1>
            <p className="academics-subtitle">Access all study materials, question papers, and notes in one place.</p>

            <Tabs defaultValue="all" className="tabs-container">
              <TabsList className="tabs-list">
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="booklets">Booklets</TabsTrigger>
                <TabsTrigger value="pyqs">PYQs</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                {RESOURCES.map((res, idx) => <ResourceCard key={idx} resource={res} />)}
              </TabsContent>
              <TabsContent value="booklets">
                {RESOURCES.filter(r => r.type === "Booklet").map((res, idx) => <ResourceCard key={idx} resource={res} />)}
              </TabsContent>
              <TabsContent value="pyqs">
                {RESOURCES.filter(r => r.type === "PYQ").map((res, idx) => <ResourceCard key={idx} resource={res} />)}
              </TabsContent>
              <TabsContent value="notes">
                {RESOURCES.filter(r => r.type === "Notes").map((res, idx) => <ResourceCard key={idx} resource={res} />)}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="academics-sidebar">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card className="sidebar-card">
              <CardHeader className="sidebar-card-header">
                <CardTitle className="sidebar-card-title"><CalendarIcon className="icon" /> Academic Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="calendar-list">
                  {SCHEDULE.map((item, idx) => (
                    <div key={idx} className="calendar-item">
                      <div className="calendar-date">{item.date}</div>
                      <div className="calendar-info">
                        <p>{item.event}</p>
                        <span className={`calendar-type ${item.type.toLowerCase()}`}>{item.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="calendar-btn">View Full Calendar</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      <Navbar />

      </div>

      {/* Bottom Navbar */}
    </div>
  </div>
  );
}

function ResourceCard({ resource }) {
  const getIcon = (type) => {
    switch(type) {
      case "Booklet": return <BookOpen className="icon-blue" />;
      case "PYQ": return <FileQuestion className="icon-purple" />;
      default: return <FileText className="icon-gray" />;
    }
  };

  return (
    <Card className="resource-card">
      <div className="resource-info">
        <div className="resource-icon">{getIcon(resource.type)}</div>
        <div>
          <h3 className="resource-title">{resource.title}</h3>
          <div className="resource-meta">
            <span>{resource.subject}</span>
            <span className="dot" />
            <span>{resource.size}</span>
            <span className="dot" />
            <span>{resource.date}</span>
          </div>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="download-btn" asChild>
        <a href={resource.link} target="_blank" rel="noopener noreferrer"><Download /></a>
      </Button>
    </Card>
  );
}
