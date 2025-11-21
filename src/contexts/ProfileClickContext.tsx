'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ProfileClickContextType {
  clickedProfiles: string[];
  addClickedProfile: (slug: string) => void;
}

const ProfileClickContext = createContext<ProfileClickContextType | undefined>(undefined);

export const ProfileClickProvider = ({ children }: { children: ReactNode }) => {
  const [clickedProfiles, setClickedProfiles] = useState<string[]>([]);

  const addClickedProfile = (slug: string) => {
    if (!clickedProfiles.includes(slug)) {
      console.log(`Profile clicked: ${slug}`);
      setClickedProfiles(prev => [...prev, slug]);
    }
  };

  return (
    <ProfileClickContext.Provider value={{ clickedProfiles, addClickedProfile }}>
      {children}
    </ProfileClickContext.Provider>
  );
};

export const useProfileClick = () => {
  const context = useContext(ProfileClickContext);
  if (context === undefined) {
    throw new Error('useProfileClick must be used within a ProfileClickProvider');
  }
  return context;
};
