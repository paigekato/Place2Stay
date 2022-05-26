# Navigation

- Modal Stack
  - Bottom Tabs Stack
    - Home Stack
      - Home Screen
      - Place Screen
    - Trips Stack
      - Trips Home Screen
      - Trips Stay Screen
  - Search Stack
      - Search Home Screen
      - Search Dates Screen
      - Search Guests Screen
      - Search Results Screen

Bottom Tabs Home Screen is typed as:

`type HomeProps = NativeStackScreenProps<ModalStackScreens>;`

But when trying to navigate from Home to the Place screen which is nested under the Home Stack, it throws a TS error since Modal Stack Screens only contains Bottom Tabs Stack and Search Stack.