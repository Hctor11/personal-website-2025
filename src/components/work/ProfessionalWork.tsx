import { Timeline, Events, Event } from "vertical-timeline-component-react";

const ProfessionalWork = () => {
  const customTheme = {
    borderDotColor: "#ffffff",
    descriptionColor: "#262626",
    dotColor: "#d0cdc4",
    eventColor: "#262626",
    lineColor: "#d0cdc4",
    subtitleColor: "#7c7c7c",
    titleColor: "#262626",
    yearColor: "#262626",
  };

  return (
    <Timeline
      lang="en"
      theme={customTheme}
      dateFormat="short"
      collapse
      withoutDay
    >
      <Events
        title="Frontend Developer"
        subtitle="Illuminodes"
        endDate="11/01/2024"
        startDate="09/01/2024"
        defaultClosed
      >
        <Event
          title="Description"
          description={[
            "Build reusable and responsive components using Next.js and Tailwind CSS.",
            "Optimize loading times and performance by lazy loading components, minimizing bundle sizes.",
            "Worked with the Bitcoin Lightning API to integrate cryptocurrency-related functionalities",
          ]}
        />
      </Events>
      <Events
        title="Frontend Developer | UI/UX Designer"
        subtitle="Colegio Salarrue"
        endDate="09/01/2023"
        startDate="02/01/2023"
        defaultClosed
      >
        <Event
          title="Description"
          description={[
            "Build and customize interactive forms using C# Windows Forms.",
            "Define User Experience (UX) Solutions with user testing.",
          ]}
        />
      </Events>
      <Events
        title="Frontend Developer | UI/UX Designer"
        subtitle="Cellworld"
        endDate="08/01/2022"
        startDate="02/01/2022"
        defaultClosed
      >
        <Event
          title="Description"
          description={[
            "Design and implement user interfaces using Java Swing for an inventory system.",
            "Apply OOP principles in Java, focusing on form functionality and integration.",
          ]}
        />
      </Events>
    </Timeline>
  );
};

export default ProfessionalWork;
