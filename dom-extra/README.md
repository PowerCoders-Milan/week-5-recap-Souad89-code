# Movies generator

Movies = [
 { title: "movie1", duration: 120, actor: "Meryl Streep"},
 { title: "movie2", duration: 150, actor: "Robert De Niro"},
 { title: "movie3", duration: 160, actor: "Jack Nicholson"},
 { title: "movie4", duration: 100, actor: "Denzel Washington"},
]

Create a button in the HTL file.

Add an event listener to the button that whenever you click it, it will:
- create 1 div per click with title, duration and actor of the movie
- at first click it will create movie1, at the second movie2 nd so on, taking it from the array
- when the last movie is created remove the event listener from the button

When you hover the movies the background becomes black and the text becomes white.

When you click the div of a movie, it will become green if the duration is more than 130 minutes.
