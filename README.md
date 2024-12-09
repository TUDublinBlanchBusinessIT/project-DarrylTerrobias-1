#  **Custom Build Computer**


## Overview
The Custom Build Computer App is a mobile application designed to help users build a custom computer configuration based on their needs and budget. 
This app simplifies the process by providing tailored options for key components, ensuring compatibility, and calculating the total cost seamlessly.

## Features

### User Authentication

Login and Register:

Users can create an account or log in to an existing account;

-Email

-Password

Registration data is securely stored in Firebase.

### Component Selection

Dynamic Dropdowns:
The app features 7 dropdown menus for selecting components.
Users first pick a Tier:
Low, Mid, or High
Once a tier is selected, the dropdowns for GPU and CPU become visible, showing options specific to the selected tier.
The remaining dropdowns for RAM, Motherboard, Power Supply, and Storage remain the same across all tiers.
Before selecting a tier, only 5 dropdowns are visible.
After selecting a tier, all 7 dropdowns are displayed.

### Budget Calculation
Total Cost Calculation:
The app automatically calculates the total cost of the selected components.

### Navigation
Logout Feature:
Users can return to the login screen after completing their build or at any time during use.
