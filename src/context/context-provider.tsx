'use client';
 
import { createContext } from 'react';
 
export const Context = createContext({editor: false});
 
export function ContextProvider({
  children,
  data
}: {
  children: React.ReactNode,
  data: {
    editor: boolean
  }
}) {
  return <Context.Provider value={data}>{children}</Context.Provider>;
}
