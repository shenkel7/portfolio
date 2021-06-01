import create from 'zustand'

interface IState {
    secret1: boolean;
    setSecret1: (val: boolean) => void;
    scroll: boolean;
    setScroll: (val: boolean) => void;
    zoom: boolean;
    setZoom: (val: boolean) => void;
}

export const useStore = create<IState>(set => ({
  scroll: false,
  setScroll: (val) => set(state => ({ scroll: val})),
  zoom: false,
  setZoom: (val) => set(state => ({ zoom: val })),
  secret1: false,
  setSecret1: (val) => set(state => ({ secret1: val })),
}))