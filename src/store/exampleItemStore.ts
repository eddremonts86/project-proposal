import { create } from "zustand";

export interface ExampleItemStore {
  count: number;
  inc: () => void;
  data: unknown[];
  updateData: (data: unknown[]) => void;
}

const useExampleItemStore = create<ExampleItemStore>()((set) => ({
  count: 1,
  data: [],
  inc: () => set((state) => ({ count: state.count + 1 })),
  updateData: (data) => set({ data }),
}));
export default useExampleItemStore;
