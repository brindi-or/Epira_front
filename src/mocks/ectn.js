class TicketApi {
  getTickets() {
   const tickets = [
  {
    id:1,
    reference: "#1",
    numero_bl: '1',
    avatarSrc: '/avatars/4.png',
    value: 'Cristofer Aminoff',
    conditionning: 'm',
    statusColor: 'success',
    statusText: 'Verified',
    created_at: '2026-12-03',
  },
   {
    id:2,
    reference: "#2",
    numero_bl: '2',
    avatarSrc: '/avatars/4.png',
    value: 'rational akkf',
    conditionning: 'v',
   statusColor: 'warning',
    statusText: 'In creation',
    created_at: '2026-12-06',
  }
];
    return Promise.resolve(tickets);
  }
  getTicket() {
    const ticket =  {
    id:1,
    reference: "#1",
    numero_bl: '1',
    avatarSrc: '/avatars/4.png',
    value: 'Cristofer Aminoff',
    conditionning: 'm',
    statusColor: 'success',
    statusText: 'Verified',
    created_at: '2026-12-03',
  };
    return Promise.resolve(ticket);
  }
}
export const ticketApi = new TicketApi();
