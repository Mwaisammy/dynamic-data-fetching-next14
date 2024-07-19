import { create} from 'zustand';


type Props = {
    receivedMessages: Message[];
    setReceivedMessages: (fn: (prev : Message[]) => Message[]) => void;



}


export const useMessage = create<Props>()((set) => ({

    receivedMessages: [] ,
    setReceivedMessages: (fn) => set((state) => ({ receivedMessages: fn(state.receivedMessages) })) 

}))
