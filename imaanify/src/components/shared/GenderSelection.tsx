import { useState } from 'react';

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleGenderSelection = () => {
    if (!selectedGender) return;

    // In a real implementation, you would:
    // 1. Send gender to backend
    // 2. Update user profile
    // 3. Redirect to main page
    console.log(`Selected gender: ${selectedGender}`);
    
    // Simulated navigation (replace with actual navigation method)
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h2 className="text-2xl font-bold mb-6">Select Your Gender</h2>
      <div className="flex space-x-4">
        <button 
          onClick={() => setSelectedGender('male')}
          className={`w-40 h-40 border-2 rounded-lg ${
            selectedGender === 'male' 
              ? 'bg-blue-500 text-white border-blue-700' 
              : 'bg-white text-black border-gray-300'
          }`}
        >
          Male
        </button>
        <button 
          onClick={() => setSelectedGender('female')}
          className={`w-40 h-40 border-2 rounded-lg ${
            selectedGender === 'female' 
              ? 'bg-pink-500 text-white border-pink-700' 
              : 'bg-white text-black border-gray-300'
          }`}
        >
          Female
        </button>
      </div>
      <button 
        onClick={handleGenderSelection} 
        disabled={!selectedGender}
        className={`mt-6 px-6 py-2 rounded-lg ${
          selectedGender 
            ? 'bg-green-500 text-white' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
  );
};

export default GenderSelection;