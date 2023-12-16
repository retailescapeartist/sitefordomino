<!-- What needs to be worked on?
    1. The data for the GameLibrary Page need to be cleaned up. There's lots of unneeded stuff.
    2. Data cleanup has been moved to another date.
    3. the movies and music lists do need some sort of content.
    4. I still haven't figured out what to do with the clip of the week content.
       1. I decided on YouTube,TwitchTV-cards, and Movie trailers.
       2. Need to stylize the twitch card content.
    5. Button for Twitch clip or Title cards?
    6. Fix the movie suggestions player. It isn't lining up properly.
    7. Domino wanted the search all games to be like it is now, but on Show finished games, jsut display all the games that are marked as y for finished.
   Everything else seems to be looking good so far.
   Goal is to have the whole site done with by 12/11/2023 at the latest.
 -->
 <!-- Domino wants: The year, Title, Description, and if completed -->
 <!-- data layout:{
   "year":"",
   "game":"",
   "platform":"",
   "finished":"",
   "started":"",
   "description":""
 } -->
<!-- put ratchet and clank game in the jason file -->
<!-- Is there a way to make a search bar to find games that were finished? -->

<!-- The JSX file begins with necessary import statements, bringing in React, component dependencies, and assets. It defines a functional component called Popup, responsible for rendering a simple popup with content and a close button.

The main component, GameLibraryPage, is established next. It utilizes state hooks, including useState, to manage various aspects of the component's state. These include the search type ("all" or "finished"), the search term, the visibility of the popup, the content to display within the popup, and whether to show an introductory image.

Several functions are defined within the component. handleSearchType updates the search type when the user clicks either the "Show All Games" or "Show Finished Games" buttons. handleSearch is responsible for performing live searches based on the selected search type and the user's input, updating the state to display the results in a popup. handleReset resets the state, clearing the search term, hiding the popup, and showing the introductory image again. handleInputChange responds to changes in the search input, updating the search term and triggering live search functionality.

The JSX structure comprises the main layout of the game library page. It includes the Navbar component, a section containing a container for the game library, and a search bar. Buttons for "Show All Games" and "Show Finished Games" are conditionally rendered based on the absence of a search type, while the search input and related buttons are displayed when a search type is selected. An introductory image is shown initially and disappears when the user interacts with the search bar. A Popup component is conditionally rendered to display live search results.

The component concludes with the export statement, making the GameLibraryPage component available for use in other parts of the application. This breakdown summarizes the essential components, state management, and functionality encapsulated in the JSX file. -->
