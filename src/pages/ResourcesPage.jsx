import { useState } from "react";
import { STRATEGIC_PLAN_URL } from "../config.js";
import Hero from "../components/Hero/Hero.jsx";
import KnowledgeHub from "../components/KnowledgeHub/KnowledgeHub.jsx";
import ResourceGroup from "../components/Resources/Resources.jsx";
import "./Page.css";

const GROUPS = [
  {
    title: "Reports & assessments",
    rows: [
      {
        resource: "Shadow Report to the ESAAMLG Mutual Evaluation of Kenya",
        type: "Report",
        note: "Civil-society response to the MER",
        fileType: "",
        downloadUrl: "",
      },
      {
        resource: "Kenya NPO Sector TF Risk Assessment Report",
        type: "Report",
        note: "Rated sector risk low–medium (2024)",
        fileType: "",
        downloadUrl: "",
      },
    ],
  },
  {
    title: "Strategy & planning",
    rows: [
      {
        resource: "Strategic Plan 2025–2027",
        type: "Strategic Plan",
        note: "Vision, mission, goals, working areas",
        fileType: "PDF",
        downloadUrl: STRATEGIC_PLAN_URL,
      },
      {
        resource: "Strategy Implementation and CLA Plan",
        type: "Plan",
        note: "Operationalises the Strategy (v1.0, June 2026)",
        fileType: "",
        downloadUrl: "",
      },
    ],
  },
  {
    title: "Outcome documents & submissions",
    rows: [
      {
        resource: "Outcome Document 1 — Maanzoni",
        type: "Outcome doc",
        note: "From a #T2R / tri-sector session",
        fileType: "",
        downloadUrl: "",
      },
      {
        resource: "Outcome Document 2 — PBO Week",
        type: "Outcome doc",
        note: "PBO Week (15 April 2026)",
        fileType: "",
        downloadUrl: "",
      },
      {
        resource:
          "Submission on the Public Benefit Organisations Regulations 2025",
        type: "Submission",
        note: "Working Group's formal input",
        fileType: "",
        downloadUrl: "",
      },
    ],
  },
  {
    title: "Guidance",
    rows: [
      {
        resource: "AML/CFT Handbook for NPOs",
        type: "Handbook",
        note: "With TI-Kenya; add popular version when ready",
        fileType: "",
        downloadUrl: "",
      },
    ],
  },
  {
    title: "Blog",
    rows: [
      {
        resource: "Kenya NPO sector progress to exit the grey list",
        type: "Blog post",
        note: "Plain-language progress update",
        fileType: "",
        fileSize: "",
        downloadUrl: "",
      },
    ],
  },
];

function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFileType, setSelectedFileType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGroups = GROUPS.map((group) => ({
    ...group,
    rows: group.rows.filter((row) => {
      const matchesCategory =
        selectedCategory === "All" || group.title === selectedCategory;

      const matchesFileType =
        selectedFileType === "All" ||
        (selectedFileType === "PENDING" && !row.fileType) ||
        row.fileType?.toUpperCase() === selectedFileType;

      const matchesSearch =
        row.resource.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.note.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesFileType && matchesSearch;
    }),
  })).filter((group) => group.rows.length > 0);

  return (
    <>
      <Hero
        eyebrow="Resources"
        title="Resources & Publications"
        subtitle="Explore reports, strategies, submissions, guidance documents and publications from the Kenya NPO Working Group on the FATF."
      />

      <section className="section resources-page">
        <div className="container">
          <KnowledgeHub />
          <div className="resource-filters">
            <div className="resource-search">
              <label htmlFor="resource-search">Search resources</label>
              <input
                id="resource-search"
                type="search"
                placeholder="Search by resource name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="resource-filter">
              <label htmlFor="category-filter">Category</label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All categories</option>
                {GROUPS.map((group) => (
                  <option key={group.title} value={group.title}>
                    {group.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="resource-filter">
              <label htmlFor="file-filter">File type</label>
              <select
                id="file-filter"
                value={selectedFileType}
                onChange={(e) => setSelectedFileType(e.target.value)}
              >
                <option value="All">All file types</option>
                <option value="PDF">PDF</option>
                <option value="DOCX">DOCX</option>
                <option value="XLSX">XLSX</option>
                <option value="PENDING">Pending file details</option>
              </select>
            </div>
          </div>

          <div className="resource-results">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <ResourceGroup
                  title={group.title}
                  rows={group.rows}
                  key={group.title}
                />
              ))
            ) : (
              <p className="resource-empty">No resources match your search.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ResourcesPage;
