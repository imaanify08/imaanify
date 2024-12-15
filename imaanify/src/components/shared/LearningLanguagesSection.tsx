// LearningLanguagesSection.tsx
import React from 'react';

interface LanguageResource {
  title: string;
  description: string;
  link: string;
}

interface LearningLanguagesProps {
  resources: LanguageResource[];
}

const LearningLanguagesSection: React.FC<LearningLanguagesProps> = ({ resources }) => {
  return (
    <div className="learning-languages-section bg-dark-2 p-6 rounded-xl">
      <h3 className="text-white text-xl mb-4">Learn Muslim Languages</h3>
      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div key={index} className="bg-dark-4 p-4 rounded-md">
            <h4 className="text-light-2 text-lg">{resource.title}</h4>
            <p className="text-light-3 text-sm mb-2">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-1 underline"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningLanguagesSection;
