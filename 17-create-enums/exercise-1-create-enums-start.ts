enum Currency {
    Euro = "Euro",
    Dollar = "Dollar",
  }
  
  interface Country {
    name: string;
    currency: Currency; // Update the type to use the `Currency` enum
  }
  
  const countries: Country[] = [
    {
      name: "France",
      currency: Currency.Euro, // Use the enum member instead of the string value
    },
    {
      name: "United States of America",
      currency: Currency.Dollar, // Use the enum member instead of the string value
    },
    {
      name: "Italy",
      currency: Currency.Euro, // Use the enum member instead of the string value
    },
    {
      name: "New Zealand",
      currency: Currency.Dollar, // Use the enum member instead of the string value
    },
  ];
  
  enum LanguageStatus {
    Primary = "primary",
    Secondary = "secondary",
  }
  
  const countryLanguages = [
    { language: "Spanish", status: LanguageStatus.Primary }, // Use the enum member instead of the string value
    { language: "English", status: LanguageStatus.Secondary }, // Use the enum member instead of the string value
  ];
  
  export {};
  