class TicketsLocalStorage {
    addString(string: string): void {
        const storedTickets = localStorage.getItem("tickets");
        const ticketsArray: string[] = storedTickets ? JSON.parse(storedTickets) : [];
        ticketsArray.push(string);
        localStorage.setItem("tickets", JSON.stringify(ticketsArray));
    }

    getTickets(): string[] {
        const storedTickets = localStorage.getItem("tickets");
        return storedTickets ? JSON.parse(storedTickets) : [];
    }

    removeFormValue() {
        localStorage.removeItem('tickets');
    }
}

const ticketsLocalStorageService = new TicketsLocalStorage();
export default ticketsLocalStorageService;
