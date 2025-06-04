// context/NavigationLoaderContext.tsx
import { createContext, useContext, useState } from 'react';

interface NavigationLoaderContextProps {
  loading: boolean;
  setLoading: (val: boolean) => void;
}

const NavigationLoaderContext = createContext<NavigationLoaderContextProps | undefined>(undefined);

export const useNavigationLoader = () => {
  const context = useContext(NavigationLoaderContext);
  if (!context) throw new Error('useNavigationLoader debe usarse dentro de NavigationLoaderProvider');
  return context;
};

export const NavigationLoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <NavigationLoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </NavigationLoaderContext.Provider>
  );
};
