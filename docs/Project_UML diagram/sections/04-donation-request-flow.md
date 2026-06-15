# Donation & Request Flow

How users create donation items, browse what is available, save items, and send requests.

## Diagram

```mermaid
flowchart TD
    Premium[Free Services / Donate] --> Create[Create Donation Item]
    Create --> Upload[Add Photos & Description]
    Upload --> Posts[Appears in My Posts]

    Posts --> Browse[Browse Items]
    Browse --> Save[Save to Saved Items]
    Browse --> Request[Request Item]

    Request --> Notify[Donor Gets Notification]
    Notify --> Incoming[Shows in Requests]

    Save --> Browse

    classDef page fill:#f4f4f4,stroke:#555,stroke-width:1px,color:#111;
    classDef decision fill:#fff,stroke:#555,stroke-width:1px,color:#111;

    class Premium,Create,Upload,Posts,Browse,Save,Request,Notify,Incoming page;
```

## Steps

| Step | What Happens |
|------|--------------|
| Free Services / Donate | User accesses the donate section from the dashboard |
| Create Donation Item | User fills in item name, category, condition, and photos |
| My Posts | The item appears in the user's list of posted items |
| Browse Items | Other users can find the item by browsing or searching |
| Saved Items | Users can bookmark items to request later |
| Request Item | A user clicks "request" on an item |
| Requests | The original poster sees incoming requests and can accept/decline |

---

*Last updated: May 2026*
