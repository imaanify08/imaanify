// PrayerTimesSection.tsx
import React from 'react';

interface PrayerTimesProps {
  prayerTimes: any;
}

const PrayerTimesSection: React.FC<PrayerTimesProps> = ({ prayerTimes }) => {
  return (
    <div className="prayer-times-section bg-dark-3 p-6 rounded-xl">
      <h3 className="text-white text-xl mb-4">Prayer Times Today</h3>
      <div className="grid grid-cols-2 gap-4">
        {prayerTimes ? (
          Object.entries(prayerTimes.timings).map(([key, value]) => (
            <div key={key} className="bg-dark-4 p-4 rounded-md">
              <p className="text-light-2 text-sm">{key}</p>
              <h4 className="text-white text-lg">{value as string}</h4>
            </div>
          ))
        ) : (
          <p>Loading prayer times...</p>
        )}
      </div>
    </div>
  );
};

export default PrayerTimesSection;
