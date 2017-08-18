export interface IEvent {
  name: string;
  ocurrence: {
    startDate: any,
    endDate:any
  }
  location: {
    city: string,
    state: string,
    address: string
  },
  description: string,
  imageUrl: string,
  category?: string,
  type?: string
}
