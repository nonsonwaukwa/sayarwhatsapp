import Airtable from 'airtable';

// Initialize Airtable
const base = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY
}).base(import.meta.env.VITE_AIRTABLE_BASE_ID);

export const saveEmailToWaitlist = async (email: string) => {
  try {
    const table = base(import.meta.env.VITE_AIRTABLE_TABLE_NAME);
    
    const result = await table.create([
      {
        fields: {
          Email: email,
          SignupDate: new Date().toISOString(),
        },
      },
    ]);

    return result;
  } catch (error) {
    console.error('Error saving to Airtable:', error);
    throw error;
  }
};
