import { create } from "zustand";

type IAppStore = {
    showSidebar: boolean,
    toggleSidebar: () => void
}

export const appStore = create<IAppStore>((set) => ({
    showSidebar: false,
    toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
}))