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

export const integrationActions: Record<string, IntegrationDetail> = {
  "Zuora": {
    name: "Zuora",
    category: "Sales and crm",
    actionsCount: 4,
    triggersCount: 0,
    actions: [
      {
        name: "Find Customer Account",
        description: "Retrieves account based on name.",
        configFields: [
          { name: "Account Name", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Find Product",
        description: "Retrieves product based on sku.",
        configFields: [
          { name: "Product SKU", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Create Invoice",
        description: "Create a standalone invoice.",
        configFields: [
          { name: "Status", required: false, type: "STATIC_DROPDOWN" },
          { name: "Auto Pay?", required: false, type: "CHECKBOX", description: "Whether invoices are automatically picked up for processing in the corresponding payment run." },
          { name: "Due Date", required: true, type: "DATE_TIME", description: "Provide YYYY-MM-DD format." },
          { name: "Comments", required: false, type: "LONG_TEXT" },
          { name: "Invoice Date", required: true, type: "DATE_TIME", description: "Provide YYYY-MM-DD format." },
          { name: "Invoice Items", required: false, type: "ARRAY" },
          { name: "Customer Account Number", required: true, type: "SHORT_TEXT", description: "The number of the customer account associated with the invoice." }
        ]
      },
      {
        name: "Find Product Rate Plan",
        description: "Retrieves product rate plan with charges.",
        configFields: [
          { name: "Product Rate Plan Name", required: true, type: "SHORT_TEXT", placeholder: "i.e. StealthCo Premium" },
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
          { name: "Currency", required: true, type: "SHORT_TEXT", description: "Currency for the invoice (e.g., USD)" },
          { name: "Customer ID", required: true, type: "SHORT_TEXT", description: "Stripe Customer ID" },
          { name: "Description", required: false, type: "LONG_TEXT", description: "Description for the invoice" }
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
          { name: "Postal Code", required: false, type: "SHORT_TEXT" },
          { name: "Description", required: false, type: "LONG_TEXT" }
        ]
      },
      {
        name: "Custom API Call",
        description: "Send a custom API call to a specific endpoint",
        configFields: [
          { name: "Method", required: true, type: "STATIC_DROPDOWN" },
          { name: "Headers", required: true, type: "OBJECT", description: "Authorization headers are injected automatically from your connection." },
          { name: "Query Parameters", required: true, type: "OBJECT" },
          { name: "Body", required: false, type: "JSON" },
          { name: "Timeout (in seconds)", required: false, type: "NUMBER" },
          { name: "No Error on Failure", required: false, type: "CHECKBOX" }
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
          { name: "ID", required: true, type: "SHORT_TEXT" },
          { name: "Secret API Key", required: true, type: "SECRET_TEXT", description: "Secret key acquired from your Stripe dashboard" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Payment",
        description: "Triggers when a new payment is made",
        configFields: [
          { name: "Secret API Key", required: true, type: "SECRET_TEXT", description: "Secret key acquired from your Stripe dashboard" }
        ]
      },
      {
        name: "New Customer",
        description: "Triggers when a new customer is created"
      },
      {
        name: "Payment Failed",
        description: "Triggers when a payment fails",
        configFields: [
          { name: "Secret API Key", required: true, type: "SECRET_TEXT", description: "Secret key acquired from your Stripe dashboard" }
        ]
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
          { name: "Phone", required: false, type: "SHORT_TEXT" },
          { name: "Company", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Update Contact",
        description: "Update an existing contact in HubSpot",
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
        description: "Create a new deal in HubSpot",
        configFields: [
          { name: "Deal Name", required: true, type: "SHORT_TEXT" },
          { name: "Amount", required: false, type: "NUMBER" },
          { name: "Pipeline", required: false, type: "STATIC_DROPDOWN" },
          { name: "Stage", required: false, type: "STATIC_DROPDOWN" }
        ]
      },
      {
        name: "Create Company",
        description: "Create a new company in HubSpot",
        configFields: [
          { name: "Company Name", required: true, type: "SHORT_TEXT" },
          { name: "Domain", required: false, type: "SHORT_TEXT" },
          { name: "Industry", required: false, type: "SHORT_TEXT" }
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
        description: "Triggers when a deal moves to a different stage"
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
          { name: "Username", required: false, type: "SHORT_TEXT" },
          { name: "Icon Emoji", required: false, type: "SHORT_TEXT" }
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
        name: "Add Reaction",
        description: "Add a reaction emoji to a message",
        configFields: [
          { name: "Channel", required: true, type: "DYNAMIC_DROPDOWN" },
          { name: "Timestamp", required: true, type: "SHORT_TEXT" },
          { name: "Emoji", required: true, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "Upload File",
        description: "Upload a file to a Slack channel",
        configFields: [
          { name: "Channel", required: true, type: "DYNAMIC_DROPDOWN" },
          { name: "File", required: true, type: "FILE" },
          { name: "Title", required: false, type: "SHORT_TEXT" },
          { name: "Comment", required: false, type: "LONG_TEXT" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Message",
        description: "Triggers when a new message is posted to a channel",
        configFields: [
          { name: "Channel", required: true, type: "DYNAMIC_DROPDOWN" }
        ]
      },
      {
        name: "New Reaction",
        description: "Triggers when a reaction is added to a message"
      },
      {
        name: "New User",
        description: "Triggers when a new user joins the workspace"
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
        description: "Create a new folder in Google Drive",
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
        description: "Download a file from Google Drive",
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
        description: "Triggers when a new file is added",
        configFields: [
          { name: "Folder ID", required: false, type: "SHORT_TEXT" }
        ]
      },
      {
        name: "File Modified",
        description: "Triggers when a file is modified",
        configFields: [
          { name: "Folder ID", required: false, type: "SHORT_TEXT" }
        ]
      }
    ]
  }
};

// Generate basic actions for integrations without detailed data
export const generateBasicActions = (integrationName: string, category: string): IntegrationDetail => {
  return {
    name: integrationName,
    category,
    actionsCount: 3,
    triggersCount: 1,
    actions: [
      {
        name: "Create Record",
        description: `Create a new record in ${integrationName}`,
        configFields: [
          { name: "Data", required: true, type: "OBJECT", description: "Record data to create" }
        ]
      },
      {
        name: "Update Record",
        description: `Update an existing record in ${integrationName}`,
        configFields: [
          { name: "Record ID", required: true, type: "SHORT_TEXT" },
          { name: "Data", required: true, type: "OBJECT", description: "Updated record data" }
        ]
      },
      {
        name: "Find Record",
        description: `Find a record in ${integrationName}`,
        configFields: [
          { name: "Search Field", required: true, type: "SHORT_TEXT" },
          { name: "Search Value", required: true, type: "SHORT_TEXT" }
        ]
      }
    ],
    triggers: [
      {
        name: "New Record",
        description: `Triggers when a new record is created in ${integrationName}`
      }
    ]
  };
};
