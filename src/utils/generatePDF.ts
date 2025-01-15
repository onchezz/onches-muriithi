import { portfolioData } from "@/data/portfolio";

export const generatePDF = () => {
  // Create the content string
  const content = `
${portfolioData.personal_info.name}
${portfolioData.personal_info.tagline}

Contact Information:
Email: ${portfolioData.personal_info.contact.email}
Phone: ${portfolioData.personal_info.contact.phone}
LinkedIn: ${portfolioData.personal_info.contact.linkedin}
GitHub: ${portfolioData.personal_info.contact.github}

Summary:
${portfolioData.summary}

Skills:
${portfolioData.skills.join(", ")}

Experience:
${portfolioData.experience.map(exp => `
${exp.role} at ${exp.company}
${exp.duration}
Location: Remote

Responsibilities:
${exp.responsibilities.map(r => `- ${r}`).join("\n")}

${exp.achievements ? `Achievements:\n${exp.achievements.map(a => `- ${a}`).join("\n")}` : ""}
`).join("\n")}

Education:
${portfolioData.education.degree}
${portfolioData.education.institution}
${portfolioData.education.years}
  `;

  // Create Blob
  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  
  // Create download link
  const link = document.createElement('a');
  link.href = url;
  link.download = `${portfolioData.personal_info.name.replace(" ", "_")}_CV.txt`;
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};