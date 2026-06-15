# Service Booking Flow

How a user finds a donation item and completes the booking.

## Diagram

```mermaid
flowchart TD
    Browse[Browse Services] --> Select[Select a Service]
    Select --> Booking[Booking / Payment]
    Booking --> Confirm[Confirmation Screen]
    Confirm --> RequestTracking[Appears in Request Tracking]
    Confirm --> Done([Done])

    classDef page fill:#f4f4f4,stroke:#555,stroke-width:1px,color:#111;
    classDef terminal fill:#eee,stroke:#333,stroke-width:1px,color:#111;

    class Browse,Select,Booking,Confirm,Request tracking page;
    class Done terminal;
```

## Steps

| Step | What Happens |
|------|--------------|
| Browse Services | User scrolls or searches through available donation items |
| Select a Service | User clicks on an item to see full details and photos |
| Booking / Payment | User submits a request or completes payment if required |
| Confirmation | Both sides get a confirmation message |
| Request Tracking | The confirmed item shows up in the user's Request tracking page |

---

*Last updated: May 2026*
