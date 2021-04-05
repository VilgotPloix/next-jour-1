const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

//   Sors-moi la liste des titres des livres du CDI

for(var i = 0; i < books.length; i++)
{
    console.log(books[i].title);
}

// Est-ce que tous les livres ont été empruntés au moins une fois ?
 console.log(" ");
for(var i = 0; i< books.length; i++)
{
    if(books[i].rented > 1)
    {
        console.log(books[i].title + " a été empreinté plus d'une fois !");
    }
}

// Quel est le livre le plus emprunté ?

console.log(" ");
console.log("le livre le plus empreinté : ");

let sort = []
for(var i = 0; i < books.length; i++)
{
    let list = (books[i].rented + " " +books[i].title)
    sort.push(list)
}

sort.sort()
console.log(sort[books.length - 1]);

// Quel est le livre le moins emprunté ?

console.log(" ")
console.log("le livre le moins empreinté :x")

let reversedSort = sort.reverse()

console.log(reversedSort[books.length - 1]);

// Supprime le livre avec l'ID 133712

console.log(" ");
console.log("le livre avec l'ID 133712 a été supprimé.");

let deletedItem = books.filter(suppr => (suppr.id === 133712))

books.splice(deletedItem, 1)

console.log(books);