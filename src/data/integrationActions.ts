// Integration actions data extracted from Autocalls platform
export interface ConfigField {
  name: string;
  required: boolean;
  type: string;
  description?: string;
  placeholder?: string;
}

export interface Action {
  name: string;
  description: string;
  configFields: ConfigField[];
}

export interface Trigger {
  name: string;
  description: string;
  configFields?: ConfigField[];
}

export interface IntegrationDetail {
  name: string;
  category: string;
  actionsCount: number;
  triggersCount: number;
  actions: Action[];
  triggers: Trigger[];
}

// Real integration data extracted from Autocalls
export const integrationActions: Record<string, IntegrationDetail> = {
  "Airtable": {
    name: "Airtable",
    category: "Productivity",
    actionsCount: 6,
    triggersCount: 2,
    actions: [
      {
        name: "Create Airtable Record",
        description: "Adds a record into an airtable",
        configFields: [
          { name: "Base", required: true, type: "DROPDOWN" },
          { name: "Table", required: true, type: "DROPDOWN" }
        ]
      },
      {
        name: "Find Airtable Record",
        description: "Find a record in airtable",
        configFields: [
          { name: "Personal Access Token", required: true, type: "SECRET_TEXT" },
          { name: "Base", required: true, type: "DROPDOWN" },
          { name: "Table", required: true, type: "DROPDOWN" },
          { name: "View", required: false, type: "DROPDOWN" },
          { name: "Search Field", required: true, type: "DROPDOWN" },
          { name: "Search Value", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Update Airtable Record",
        description: "Update a record in airtable",
        configFields: [
          { name: "Base", required: true, type: "DROPDOWN" },
          { name: "Table", required: true, type: "DROPDOWN" },
          { name: "Record ID", required: true, type: "SHORT_TEXT", description: "The ID of the record you want to update" }
        ]
      },
      {
        name: "Delete Airtable Record",
        description: "Deletes a record in airtable",
        configFields: [
          { name: "Base", required: true, type: "DROPDOWN" },
          { name: "Table", required: true, type: "DROPDOWN" },
          { name: "Record ID", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "List Records",
        description: "List all records from a table",
        configFields: [
          { name: "Base", required: true, type: "DROPDOWN" },
          { name: "Table", required: true, type: "DROPDOWN" },
          { name: "View", required: false, type: "DROPDOWN" }
        ]
      },
      {
        name: "Custom API Call",
        description: "Make a custom API call to a specific endpoint",
        configFields: [
          { name: "Method", required: true, type: "STATIC_DROPDOWN" },
          { name: "Headers", required: true, type: "OBJECT" },
          { name: "Query Parameters", required: true, type: "OBJECT" },
          { name: "Body", required: false, type: "JSON" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Record",
        description: "Triggers when a new record is created"
      },
      {
        name: "Record Updated",
        description: "Triggers when a record is updated"
      }
    ]
  },
  "Salesforce": {
    name: "Salesforce",
    category: "Sales and crm",
    actionsCount: 5,
    triggersCount: 2,
    actions: [
      {
        name: "Run Query (Advanced)",
        description: "Run a salesforce query",
        configFields: [
          { name: "Query", required: true, type: "SHORT_TEXT", description: "Enter the query" }
        ]
      },
      {
        name: "Create Object (Advanced)",
        description: "Create new object",
        configFields: [
          { name: "Object", required: true, type: "DROPDOWN", description: "Select the Object" },
          { name: "Data", required: true, type: "JSON", description: "Select mapped object" }
        ]
      },
      {
        name: "Update Object (Advanced)",
        description: "Update object by Id",
        configFields: [
          { name: "Object", required: true, type: "DROPDOWN" },
          { name: "Id", required: true, type: "SHORT_TEXT" },
          { name: "Data", required: true, type: "JSON" }
        ]
      },
      {
        name: "Batch Upsert (Advanced)",
        description: "Batch upsert a record by external id",
        configFields: [
          { name: "Object", required: true, type: "DROPDOWN" },
          { name: "Records", required: true, type: "JSON" },
          { name: "External Field", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Bulk Upsert (Advanced)",
        description: "Bulk upsert a record by external id",
        configFields: [
          { name: "Object", required: true, type: "DROPDOWN" },
          { name: "Records", required: true, type: "LONG_TEXT", description: "Select the Records (CSV format)" },
          { name: "External Field", required: true, type: "SHORT_TEXT" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Object",
        description: "Triggers when a new object is created"
      },
      {
        name: "Object Updated",
        description: "Triggers when an object is updated"
      }
    ]
  },
  "Shopify": {
    name: "Shopify",
    category: "Commerce",
    actionsCount: 27,
    triggersCount: 6,
    actions: [
      {
        name: "Create Order",
        description: "Create a new order",
        configFields: [
          { name: "Product", required: false, type: "NUMBER", description: "The ID of the product to create the order with" },
          { name: "Product Variant", required: false, type: "NUMBER" },
          { name: "Customer", required: false, type: "SHORT_TEXT" },
          { name: "Title", required: false, type: "SHORT_TEXT" },
          { name: "Price", required: false, type: "SHORT_TEXT" },
          { name: "Quantity", required: false, type: "NUMBER" },
          { name: "Email", required: false, type: "SHORT_TEXT" },
          { name: "Tags", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Update Order",
        description: "Update an existing order",
        configFields: [
          { name: "Order", required: true, type: "SHORT_TEXT", description: "The ID of the order" },
          { name: "Note", required: false, type: "SHORT_TEXT" },
          { name: "Tags", required: false, type: "SHORT_TEXT" },
          { name: "Email", required: false, type: "SHORT_TEXT" },
          { name: "Phone Number", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Get Product",
        description: "Get existing product",
        configFields: [
          { name: "Product", required: true, type: "SHORT_TEXT", description: "The ID of the product" }
        ]
      },
      {
        name: "Get Products",
        description: "Get existing products by title",
        configFields: [
          { name: "Title", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Get Customer",
        description: "Get an existing customer's information",
        configFields: [
          { name: "Customer ID", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Cancel Order",
        description: "Cancel an order",
        configFields: [
          { name: "Order", required: true, type: "NUMBER", description: "The ID of the order" }
        ]
      },
      {
        name: "Close Order",
        description: "Close an order",
        configFields: [
          { name: "Order", required: true, type: "NUMBER", description: "The ID of the order" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Order",
        description: "Triggers when a new order is created"
      },
      {
        name: "Order Updated",
        description: "Triggers when an order is updated"
      },
      {
        name: "New Customer",
        description: "Triggers when a new customer is created"
      },
      {
        name: "Product Created",
        description: "Triggers when a new product is created"
      },
      {
        name: "Order Cancelled",
        description: "Triggers when an order is cancelled"
      },
      {
        name: "Order Fulfilled",
        description: "Triggers when an order is fulfilled"
      }
    ]
  },
  "Notion": {
    name: "Notion",
    category: "Productivity",
    actionsCount: 7,
    triggersCount: 2,
    actions: [
      {
        name: "Create Page",
        description: "Create a page under a parent page",
        configFields: [
          { name: "Page", required: true, type: "DROPDOWN", description: "Select the page you want to use" },
          { name: "Title", required: false, type: "SHORT_TEXT" },
          { name: "Content", required: false, type: "LONG_TEXT" }
        ]
      },
      {
        name: "Append to Page",
        description: "Appends content to the end of a page",
        configFields: [
          { name: "Page", required: true, type: "DROPDOWN" },
          { name: "Content", required: true, type: "LONG_TEXT", description: "The content you want to append" }
        ]
      },
      {
        name: "Create Database Item",
        description: "Creates an item in a database",
        configFields: [
          { name: "Database", required: true, type: "DROPDOWN" },
          { name: "Fields", required: true, type: "DYNAMIC" },
          { name: "Content", required: false, type: "LONG_TEXT" }
        ]
      },
      {
        name: "Update Database Item",
        description: "Updates an item in database",
        configFields: [
          { name: "Database", required: true, type: "DROPDOWN" },
          { name: "Database Item", required: true, type: "DROPDOWN" },
          { name: "Fields", required: true, type: "DYNAMIC" }
        ]
      },
      {
        name: "Find Database Item",
        description: "Find an item in a database",
        configFields: [
          { name: "Database", required: true, type: "DROPDOWN" },
          { name: "Search Field", required: true, type: "SHORT_TEXT" },
          { name: "Search Value", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Get block content",
        description: "Retrieve the actual content of a page (represented by blocks)",
        configFields: [
          { name: "Page or parent block ID", required: true, type: "SHORT_TEXT" },
          { name: "Markdown", required: true, type: "CHECKBOX", description: "Convert Notion JSON blocks to Markdown" }
        ]
      },
      {
        name: "Custom API Call",
        description: "Make a custom API call to a specific endpoint",
        configFields: [
          { name: "Method", required: true, type: "STATIC_DROPDOWN" },
          { name: "Headers", required: true, type: "OBJECT" },
          { name: "Body", required: false, type: "JSON" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Page",
        description: "Triggers when a new page is created"
      },
      {
        name: "New Database Item",
        description: "Triggers when a new database item is created"
      }
    ]
  },
  "OpenAI": {
    name: "OpenAI",
    category: "Artificial intelligence",
    actionsCount: 9,
    triggersCount: 0,
    actions: [
      {
        name: "Ask ChatGPT",
        description: "Ask ChatGPT anything you want!",
        configFields: [
          { name: "Model", required: true, type: "DROPDOWN" },
          { name: "Question", required: true, type: "LONG_TEXT" },
          { name: "Maximum Tokens", required: true, type: "NUMBER" },
          { name: "Temperature", required: false, type: "NUMBER", description: "Controls randomness" },
          { name: "Memory Key", required: false, type: "SHORT_TEXT" },
          { name: "Top P", required: false, type: "NUMBER" },
          { name: "Roles", required: false, type: "JSON" }
        ]
      },
      {
        name: "Ask Assistant",
        description: "Ask a GPT assistant anything you want!",
        configFields: [
          { name: "Assistant", required: true, type: "DROPDOWN" },
          { name: "Question", required: true, type: "LONG_TEXT" },
          { name: "Memory Key", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Vision Prompt",
        description: "Ask GPT a question about an image",
        configFields: [
          { name: "Image", required: true, type: "FILE" },
          { name: "Question", required: true, type: "LONG_TEXT" },
          { name: "Detail", required: false, type: "DROPDOWN" },
          { name: "Maximum Tokens", required: false, type: "NUMBER" }
        ]
      },
      {
        name: "Generate Image",
        description: "Generate an image using text-to-image models",
        configFields: [
          { name: "Prompt", required: true, type: "LONG_TEXT" },
          { name: "Model", required: true, type: "DROPDOWN" },
          { name: "Size", required: false, type: "DROPDOWN" },
          { name: "Quality", required: false, type: "DROPDOWN" }
        ]
      },
      {
        name: "Transcribe Audio",
        description: "Transcribe audio to text using whisper-1 model",
        configFields: [
          { name: "API Key", required: true, type: "SECRET_TEXT" },
          { name: "Audio", required: true, type: "FILE" },
          { name: "Language of the Audio", required: false, type: "STATIC_DROPDOWN" }
        ]
      },
      {
        name: "Translate Audio",
        description: "Translate audio to text using whisper-1 model",
        configFields: [
          { name: "Audio", required: true, type: "FILE" }
        ]
      },
      {
        name: "Text to Speech",
        description: "Convert text to speech",
        configFields: [
          { name: "Text", required: true, type: "LONG_TEXT" },
          { name: "Voice", required: true, type: "DROPDOWN" },
          { name: "Model", required: false, type: "DROPDOWN" }
        ]
      },
      {
        name: "Create Embedding",
        description: "Create text embeddings",
        configFields: [
          { name: "Text", required: true, type: "LONG_TEXT" },
          { name: "Model", required: true, type: "DROPDOWN" }
        ]
      },
      {
        name: "Moderate Content",
        description: "Check if content complies with usage policies",
        configFields: [
          { name: "Content", required: true, type: "LONG_TEXT" }
        ]
      }
    ],
    triggers: []
  },
  "Gmail": {
    name: "Gmail",
    category: "Communication",
    actionsCount: 2,
    triggersCount: 1,
    actions: [
      {
        name: "Send Email",
        description: "Send an email through a Gmail account",
        configFields: [
          { name: "Receiver Email (To)", required: true, type: "ARRAY" },
          { name: "Subject", required: true, type: "SHORT_TEXT" },
          { name: "Body", required: true, type: "SHORT_TEXT" },
          { name: "Body Type", required: true, type: "STATIC_DROPDOWN" },
          { name: "CC Email", required: false, type: "ARRAY" },
          { name: "BCC Email", required: false, type: "ARRAY" },
          { name: "Reply-To Email", required: false, type: "ARRAY" },
          { name: "Attachment", required: false, type: "FILE" },
          { name: "Sender Name", required: false, type: "SHORT_TEXT" },
          { name: "Create draft", required: true, type: "CHECKBOX" }
        ]
      },
      {
        name: "Custom API Call",
        description: "Make a custom API call to a specific endpoint",
        configFields: [
          { name: "Method", required: true, type: "STATIC_DROPDOWN" },
          { name: "Body", required: false, type: "JSON" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Email",
        description: "Triggers when a new email is received"
      }
    ]
  },
  "Mailchimp": {
    name: "Mailchimp",
    category: "Marketing",
    actionsCount: 5,
    triggersCount: 2,
    actions: [
      {
        name: "Add Member to an Audience (List)",
        description: "Add a member to an existing Mailchimp audience (list)",
        configFields: [
          { name: "Audience", required: true, type: "DROPDOWN" },
          { name: "Email", required: true, type: "SHORT_TEXT" },
          { name: "Status", required: true, type: "STATIC_DROPDOWN" },
          { name: "First Name", required: false, type: "SHORT_TEXT" },
          { name: "Last Name", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Update Member in an Audience (List)",
        description: "Update a member in an existing Mailchimp audience (list)",
        configFields: [
          { name: "Audience", required: true, type: "DROPDOWN" },
          { name: "Email", required: true, type: "SHORT_TEXT" },
          { name: "Status", required: true, type: "STATIC_DROPDOWN" }
        ]
      },
      {
        name: "Add Subscriber to a tag",
        description: "Adds a subscriber to a tag",
        configFields: [
          { name: "Audience", required: true, type: "DROPDOWN" },
          { name: "Email", required: true, type: "SHORT_TEXT" },
          { name: "Tag Name", required: true, type: "ARRAY" }
        ]
      },
      {
        name: "Remove Subscriber from a tag",
        description: "Removes a subscriber from a tag",
        configFields: [
          { name: "Audience", required: true, type: "DROPDOWN" },
          { name: "Email", required: true, type: "SHORT_TEXT" },
          { name: "Tag Name", required: true, type: "ARRAY" }
        ]
      },
      {
        name: "Add Note to Subscriber",
        description: "Add a note to a subscriber",
        configFields: [
          { name: "Audience", required: true, type: "DROPDOWN" },
          { name: "Email", required: true, type: "SHORT_TEXT" },
          { name: "Note", required: true, type: "LONG_TEXT" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Subscriber",
        description: "Triggers when a new subscriber joins an audience"
      },
      {
        name: "Unsubscribed Email",
        description: "Triggers when someone unsubscribes"
      }
    ]
  },
  "Trello": {
    name: "Trello",
    category: "Productivity",
    actionsCount: 2,
    triggersCount: 2,
    actions: [
      {
        name: "Create Card",
        description: "Create a new card in Trello",
        configFields: [
          { name: "Boards", required: true, type: "DROPDOWN" },
          { name: "Lists", required: true, type: "DROPDOWN" },
          { name: "Task Name", required: true, type: "SHORT_TEXT" },
          { name: "Task Description", required: false, type: "LONG_TEXT" },
          { name: "Labels", required: false, type: "MULTI_SELECT_DROPDOWN" },
          { name: "Position", required: false, type: "STATIC_DROPDOWN" }
        ]
      },
      {
        name: "Get Card",
        description: "Get a card in Trello",
        configFields: [
          { name: "Card ID", required: true, type: "SHORT_TEXT" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Card",
        description: "Triggers when a new card is created"
      },
      {
        name: "Card Moved",
        description: "Triggers when a card is moved to a different list"
      }
    ]
  },
  "Zendesk": {
    name: "Zendesk",
    category: "Customer support",
    actionsCount: 1,
    triggersCount: 1,
    actions: [
      {
        name: "Custom API Call",
        description: "Send a custom API call to a specific endpoint",
        configFields: [
          { name: "Method", required: true, type: "STATIC_DROPDOWN" },
          { name: "Headers", required: true, type: "OBJECT" },
          { name: "Query Parameters", required: true, type: "OBJECT" },
          { name: "Body", required: false, type: "JSON" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Ticket",
        description: "Triggers when a new ticket is created"
      }
    ]
  },
  "Zuora": {
    name: "Zuora",
    category: "Sales and crm",
    actionsCount: 4,
    triggersCount: 0,
    actions: [
      {
        name: "Find Customer Account",
        description: "Retrieves account based on name",
        configFields: [
          { name: "Account Name", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Find Product",
        description: "Retrieves product based on sku",
        configFields: [
          { name: "Product SKU", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Create Invoice",
        description: "Create a standalone invoice",
        configFields: [
          { name: "Customer Account Number", required: true, type: "SHORT_TEXT" },
          { name: "Invoice Date", required: true, type: "DATE_TIME" },
          { name: "Due Date", required: true, type: "DATE_TIME" },
          { name: "Status", required: false, type: "STATIC_DROPDOWN" },
          { name: "Auto Pay?", required: false, type: "CHECKBOX" },
          { name: "Comments", required: false, type: "LONG_TEXT" }
        ]
      },
      {
        name: "Find Product Rate Plan",
        description: "Retrieves product rate plan with charges",
        configFields: [
          { name: "Product Rate Plan Name", required: true, type: "SHORT_TEXT" },
          { name: "Product ID", required: true, type: "SHORT_TEXT" }
        ]
      }
    ],
    triggers: []
  },
  "Stripe": {
    name: "Stripe",
    category: "Commerce",
    actionsCount: 5,
    triggersCount: 4,
    actions: [
      {
        name: "Create Invoice",
        description: "Create an Invoice in stripe",
        configFields: [
          { name: "Customer ID", required: true, type: "SHORT_TEXT" },
          { name: "Currency", required: true, type: "SHORT_TEXT" },
          { name: "Description", required: false, type: "LONG_TEXT" }
        ]
      },
      {
        name: "Create Customer",
        description: "Create a customer in stripe",
        configFields: [
          { name: "Name", required: true, type: "SHORT_TEXT" },
          { name: "Email", required: true, type: "SHORT_TEXT" },
          { name: "Phone", required: false, type: "SHORT_TEXT" },
          { name: "Address Line 1", required: false, type: "SHORT_TEXT" },
          { name: "City", required: false, type: "SHORT_TEXT" },
          { name: "State", required: false, type: "SHORT_TEXT" },
          { name: "Country", required: false, type: "SHORT_TEXT" },
          { name: "Postal Code", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Search Customer",
        description: "Search for a customer in stripe by email",
        configFields: [
          { name: "Email", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Retrieve Customer",
        description: "Retrieve a customer in stripe by id",
        configFields: [
          { name: "ID", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Custom API Call",
        description: "Send a custom API call to a specific endpoint",
        configFields: [
          { name: "Method", required: true, type: "STATIC_DROPDOWN" },
          { name: "Headers", required: true, type: "OBJECT" },
          { name: "Body", required: false, type: "JSON" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Payment",
        description: "Triggers when a new payment is made"
      },
      {
        name: "New Customer",
        description: "Triggers when a new customer is created"
      },
      {
        name: "Payment Failed",
        description: "Triggers when a payment fails"
      },
      {
        name: "Refund Created",
        description: "Triggers when a refund is created"
      }
    ]
  },
  "HubSpot": {
    name: "HubSpot",
    category: "Sales and crm",
    actionsCount: 45,
    triggersCount: 24,
    actions: [
      {
        name: "Create Contact",
        description: "Create a new contact in HubSpot",
        configFields: [
          { name: "Email", required: true, type: "SHORT_TEXT" },
          { name: "First Name", required: false, type: "SHORT_TEXT" },
          { name: "Last Name", required: false, type: "SHORT_TEXT" },
          { name: "Phone", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Update Contact",
        description: "Update an existing contact",
        configFields: [
          { name: "Contact ID", required: true, type: "SHORT_TEXT" },
          { name: "Properties", required: true, type: "OBJECT" }
        ]
      },
      {
        name: "Find Contact",
        description: "Find a contact by email",
        configFields: [
          { name: "Email", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Create Deal",
        description: "Create a new deal",
        configFields: [
          { name: "Deal Name", required: true, type: "SHORT_TEXT" },
          { name: "Amount", required: false, type: "NUMBER" },
          { name: "Pipeline", required: false, type: "STATIC_DROPDOWN" },
          { name: "Stage", required: false, type: "STATIC_DROPDOWN" }
        ]
      },
      {
        name: "Create Company",
        description: "Create a new company",
        configFields: [
          { name: "Company Name", required: true, type: "SHORT_TEXT" },
          { name: "Domain", required: false, type: "SHORT_TEXT" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Contact",
        description: "Triggers when a new contact is created"
      },
      {
        name: "Contact Updated",
        description: "Triggers when a contact is updated"
      },
      {
        name: "New Deal",
        description: "Triggers when a new deal is created"
      },
      {
        name: "Deal Stage Changed",
        description: "Triggers when a deal stage changes"
      }
    ]
  },
  "Slack": {
    name: "Slack",
    category: "Communication",
    actionsCount: 18,
    triggersCount: 4,
    actions: [
      {
        name: "Send Message",
        description: "Send a message to a Slack channel",
        configFields: [
          { name: "Channel", required: true, type: "DYNAMIC_DROPDOWN" },
          { name: "Message", required: true, type: "LONG_TEXT" },
          { name: "Username", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Send Direct Message",
        description: "Send a direct message to a user",
        configFields: [
          { name: "User", required: true, type: "DYNAMIC_DROPDOWN" },
          { name: "Message", required: true, type: "LONG_TEXT" }
        ]
      },
      {
        name: "Create Channel",
        description: "Create a new Slack channel",
        configFields: [
          { name: "Channel Name", required: true, type: "SHORT_TEXT" },
          { name: "Is Private", required: false, type: "CHECKBOX" }
        ]
      },
      {
        name: "Upload File",
        description: "Upload a file to a Slack channel",
        configFields: [
          { name: "Channel", required: true, type: "DYNAMIC_DROPDOWN" },
          { name: "File", required: true, type: "FILE" },
          { name: "Title", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Add Reaction",
        description: "Add a reaction emoji to a message",
        configFields: [
          { name: "Channel", required: true, type: "DYNAMIC_DROPDOWN" },
          { name: "Timestamp", required: true, type: "SHORT_TEXT" },
          { name: "Emoji", required: true, type: "SHORT_TEXT" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Message",
        description: "Triggers when a new message is posted",
        configFields: [
          { name: "Channel", required: true, type: "DYNAMIC_DROPDOWN" }
        ]
      },
      {
        name: "New Reaction",
        description: "Triggers when a reaction is added"
      },
      {
        name: "New User",
        description: "Triggers when a new user joins"
      },
      {
        name: "New File",
        description: "Triggers when a file is uploaded"
      }
    ]
  },
  "Google Drive": {
    name: "Google Drive",
    category: "Content and files",
    actionsCount: 16,
    triggersCount: 2,
    actions: [
      {
        name: "Upload File",
        description: "Upload a file to Google Drive",
        configFields: [
          { name: "File", required: true, type: "FILE" },
          { name: "Folder ID", required: false, type: "SHORT_TEXT" },
          { name: "File Name", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Create Folder",
        description: "Create a new folder",
        configFields: [
          { name: "Folder Name", required: true, type: "SHORT_TEXT" },
          { name: "Parent Folder ID", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Find File",
        description: "Find a file in Google Drive",
        configFields: [
          { name: "File Name", required: true, type: "SHORT_TEXT" },
          { name: "Folder ID", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Download File",
        description: "Download a file",
        configFields: [
          { name: "File ID", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Share File",
        description: "Share a file with specific users",
        configFields: [
          { name: "File ID", required: true, type: "SHORT_TEXT" },
          { name: "Email", required: true, type: "SHORT_TEXT" },
          { name: "Role", required: true, type: "STATIC_DROPDOWN" }
        ]
      }
    ],
    triggers: [
      {
        name: "New File",
        description: "Triggers when a new file is added"
      },
      {
        name: "File Modified",
        description: "Triggers when a file is modified"
      }
    ]
  }
};

// Category-based action templates for generating varied actions
const getCategoryActions = (integrationName: string, category: string): IntegrationDetail => {
  const templates: Record<string, IntegrationDetail> = {
    "Marketing": {
      name: integrationName,
      category,
      actionsCount: 4,
      triggersCount: 2,
      actions: [
        {
          name: "Create Campaign",
          description: `Create a new marketing campaign in ${integrationName}`,
          configFields: [
            { name: "Campaign Name", required: true, type: "SHORT_TEXT" },
            { name: "Description", required: false, type: "LONG_TEXT" },
            { name: "Start Date", required: false, type: "DATE_TIME" }
          ]
        },
        {
          name: "Add Contact",
          description: `Add a contact to ${integrationName}`,
          configFields: [
            { name: "Email", required: true, type: "SHORT_TEXT" },
            { name: "First Name", required: false, type: "SHORT_TEXT" },
            { name: "Last Name", required: false, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Update Contact",
          description: `Update contact information in ${integrationName}`,
          configFields: [
            { name: "Contact ID", required: true, type: "SHORT_TEXT" },
            { name: "Fields", required: true, type: "OBJECT" }
          ]
        },
        {
          name: "Send Email",
          description: `Send an email through ${integrationName}`,
          configFields: [
            { name: "To", required: true, type: "SHORT_TEXT" },
            { name: "Subject", required: true, type: "SHORT_TEXT" },
            { name: "Body", required: true, type: "LONG_TEXT" }
          ]
        }
      ],
      triggers: [
        { name: "New Contact", description: "Triggers when a new contact is added" },
        { name: "Campaign Sent", description: "Triggers when a campaign is sent" }
      ]
    },
    "Sales and crm": {
      name: integrationName,
      category,
      actionsCount: 5,
      triggersCount: 3,
      actions: [
        {
          name: "Create Lead",
          description: `Create a new lead in ${integrationName}`,
          configFields: [
            { name: "Name", required: true, type: "SHORT_TEXT" },
            { name: "Email", required: true, type: "SHORT_TEXT" },
            { name: "Phone", required: false, type: "SHORT_TEXT" },
            { name: "Company", required: false, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Update Lead",
          description: `Update an existing lead in ${integrationName}`,
          configFields: [
            { name: "Lead ID", required: true, type: "SHORT_TEXT" },
            { name: "Status", required: false, type: "STATIC_DROPDOWN" },
            { name: "Notes", required: false, type: "LONG_TEXT" }
          ]
        },
        {
          name: "Create Deal",
          description: `Create a new deal in ${integrationName}`,
          configFields: [
            { name: "Deal Name", required: true, type: "SHORT_TEXT" },
            { name: "Amount", required: false, type: "NUMBER" },
            { name: "Stage", required: false, type: "STATIC_DROPDOWN" }
          ]
        },
        {
          name: "Find Contact",
          description: `Find a contact in ${integrationName}`,
          configFields: [
            { name: "Email", required: true, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Add Note",
          description: `Add a note to a record in ${integrationName}`,
          configFields: [
            { name: "Record ID", required: true, type: "SHORT_TEXT" },
            { name: "Note", required: true, type: "LONG_TEXT" }
          ]
        }
      ],
      triggers: [
        { name: "New Lead", description: "Triggers when a new lead is created" },
        { name: "Deal Won", description: "Triggers when a deal is won" },
        { name: "Deal Lost", description: "Triggers when a deal is lost" }
      ]
    },
    "Communication": {
      name: integrationName,
      category,
      actionsCount: 3,
      triggersCount: 2,
      actions: [
        {
          name: "Send Message",
          description: `Send a message through ${integrationName}`,
          configFields: [
            { name: "Recipient", required: true, type: "SHORT_TEXT" },
            { name: "Message", required: true, type: "LONG_TEXT" },
            { name: "Priority", required: false, type: "STATIC_DROPDOWN" }
          ]
        },
        {
          name: "Create Channel",
          description: `Create a communication channel in ${integrationName}`,
          configFields: [
            { name: "Channel Name", required: true, type: "SHORT_TEXT" },
            { name: "Description", required: false, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Send Notification",
          description: `Send a notification through ${integrationName}`,
          configFields: [
            { name: "User", required: true, type: "SHORT_TEXT" },
            { name: "Title", required: true, type: "SHORT_TEXT" },
            { name: "Message", required: true, type: "SHORT_TEXT" }
          ]
        }
      ],
      triggers: [
        { name: "New Message", description: "Triggers when a new message is received" },
        { name: "Mention", description: "Triggers when you are mentioned" }
      ]
    },
    "Productivity": {
      name: integrationName,
      category,
      actionsCount: 4,
      triggersCount: 2,
      actions: [
        {
          name: "Create Task",
          description: `Create a new task in ${integrationName}`,
          configFields: [
            { name: "Title", required: true, type: "SHORT_TEXT" },
            { name: "Description", required: false, type: "LONG_TEXT" },
            { name: "Due Date", required: false, type: "DATE_TIME" },
            { name: "Priority", required: false, type: "STATIC_DROPDOWN" }
          ]
        },
        {
          name: "Update Task",
          description: `Update an existing task in ${integrationName}`,
          configFields: [
            { name: "Task ID", required: true, type: "SHORT_TEXT" },
            { name: "Status", required: false, type: "STATIC_DROPDOWN" },
            { name: "Notes", required: false, type: "LONG_TEXT" }
          ]
        },
        {
          name: "Create Project",
          description: `Create a new project in ${integrationName}`,
          configFields: [
            { name: "Project Name", required: true, type: "SHORT_TEXT" },
            { name: "Description", required: false, type: "LONG_TEXT" }
          ]
        },
        {
          name: "Add Comment",
          description: `Add a comment to an item in ${integrationName}`,
          configFields: [
            { name: "Item ID", required: true, type: "SHORT_TEXT" },
            { name: "Comment", required: true, type: "LONG_TEXT" }
          ]
        }
      ],
      triggers: [
        { name: "New Task", description: "Triggers when a new task is created" },
        { name: "Task Completed", description: "Triggers when a task is completed" }
      ]
    },
    "Commerce": {
      name: integrationName,
      category,
      actionsCount: 5,
      triggersCount: 3,
      actions: [
        {
          name: "Create Order",
          description: `Create a new order in ${integrationName}`,
          configFields: [
            { name: "Customer Email", required: true, type: "SHORT_TEXT" },
            { name: "Product ID", required: true, type: "SHORT_TEXT" },
            { name: "Quantity", required: true, type: "NUMBER" },
            { name: "Price", required: false, type: "NUMBER" }
          ]
        },
        {
          name: "Update Order",
          description: `Update an existing order in ${integrationName}`,
          configFields: [
            { name: "Order ID", required: true, type: "SHORT_TEXT" },
            { name: "Status", required: false, type: "STATIC_DROPDOWN" }
          ]
        },
        {
          name: "Create Customer",
          description: `Create a new customer in ${integrationName}`,
          configFields: [
            { name: "Email", required: true, type: "SHORT_TEXT" },
            { name: "Name", required: true, type: "SHORT_TEXT" },
            { name: "Phone", required: false, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Get Product",
          description: `Get product details from ${integrationName}`,
          configFields: [
            { name: "Product ID", required: true, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Process Refund",
          description: `Process a refund in ${integrationName}`,
          configFields: [
            { name: "Order ID", required: true, type: "SHORT_TEXT" },
            { name: "Amount", required: true, type: "NUMBER" },
            { name: "Reason", required: false, type: "SHORT_TEXT" }
          ]
        }
      ],
      triggers: [
        { name: "New Order", description: "Triggers when a new order is placed" },
        { name: "Order Fulfilled", description: "Triggers when an order is fulfilled" },
        { name: "Payment Received", description: "Triggers when a payment is received" }
      ]
    },
    "Artificial intelligence": {
      name: integrationName,
      category,
      actionsCount: 4,
      triggersCount: 0,
      actions: [
        {
          name: "Generate Text",
          description: `Generate text using ${integrationName}`,
          configFields: [
            { name: "Prompt", required: true, type: "LONG_TEXT" },
            { name: "Model", required: false, type: "DROPDOWN" },
            { name: "Max Tokens", required: false, type: "NUMBER" }
          ]
        },
        {
          name: "Analyze Text",
          description: `Analyze text with ${integrationName}`,
          configFields: [
            { name: "Text", required: true, type: "LONG_TEXT" },
            { name: "Analysis Type", required: true, type: "STATIC_DROPDOWN" }
          ]
        },
        {
          name: "Generate Image",
          description: `Generate an image using ${integrationName}`,
          configFields: [
            { name: "Prompt", required: true, type: "LONG_TEXT" },
            { name: "Size", required: false, type: "STATIC_DROPDOWN" }
          ]
        },
        {
          name: "Process Data",
          description: `Process data with ${integrationName} AI`,
          configFields: [
            { name: "Input Data", required: true, type: "JSON" },
            { name: "Processing Type", required: true, type: "STATIC_DROPDOWN" }
          ]
        }
      ],
      triggers: []
    },
    "Content and files": {
      name: integrationName,
      category,
      actionsCount: 5,
      triggersCount: 2,
      actions: [
        {
          name: "Upload File",
          description: `Upload a file to ${integrationName}`,
          configFields: [
            { name: "File", required: true, type: "FILE" },
            { name: "Folder", required: false, type: "SHORT_TEXT" },
            { name: "Name", required: false, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Create Folder",
          description: `Create a folder in ${integrationName}`,
          configFields: [
            { name: "Folder Name", required: true, type: "SHORT_TEXT" },
            { name: "Parent Folder", required: false, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Download File",
          description: `Download a file from ${integrationName}`,
          configFields: [
            { name: "File ID", required: true, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Share File",
          description: `Share a file in ${integrationName}`,
          configFields: [
            { name: "File ID", required: true, type: "SHORT_TEXT" },
            { name: "Share With", required: true, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Delete File",
          description: `Delete a file from ${integrationName}`,
          configFields: [
            { name: "File ID", required: true, type: "SHORT_TEXT" }
          ]
        }
      ],
      triggers: [
        { name: "New File", description: "Triggers when a new file is added" },
        { name: "File Modified", description: "Triggers when a file is modified" }
      ]
    },
    "Customer support": {
      name: integrationName,
      category,
      actionsCount: 4,
      triggersCount: 2,
      actions: [
        {
          name: "Create Ticket",
          description: `Create a support ticket in ${integrationName}`,
          configFields: [
            { name: "Subject", required: true, type: "SHORT_TEXT" },
            { name: "Description", required: true, type: "LONG_TEXT" },
            { name: "Priority", required: false, type: "STATIC_DROPDOWN" },
            { name: "Requester Email", required: true, type: "SHORT_TEXT" }
          ]
        },
        {
          name: "Update Ticket",
          description: `Update a support ticket in ${integrationName}`,
          configFields: [
            { name: "Ticket ID", required: true, type: "SHORT_TEXT" },
            { name: "Status", required: false, type: "STATIC_DROPDOWN" },
            { name: "Comment", required: false, type: "LONG_TEXT" }
          ]
        },
        {
          name: "Add Comment",
          description: `Add a comment to a ticket in ${integrationName}`,
          configFields: [
            { name: "Ticket ID", required: true, type: "SHORT_TEXT" },
            { name: "Comment", required: true, type: "LONG_TEXT" }
          ]
        },
        {
          name: "Search Tickets",
          description: `Search for tickets in ${integrationName}`,
          configFields: [
            { name: "Query", required: true, type: "SHORT_TEXT" },
            { name: "Status", required: false, type: "STATIC_DROPDOWN" }
          ]
        }
      ],
      triggers: [
        { name: "New Ticket", description: "Triggers when a new ticket is created" },
        { name: "Ticket Updated", description: "Triggers when a ticket is updated" }
      ]
    }
  };

  return templates[category] || templates["Productivity"];
};

// Generate actions for integrations without specific data
export const generateIntegrationActions = (integrationName: string, category: string): IntegrationDetail => {
  // Check if we have specific data
  if (integrationActions[integrationName]) {
    return integrationActions[integrationName];
  }
  
  // Use category-based template
  return getCategoryActions(integrationName, category);
};
