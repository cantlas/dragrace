import React from "react";

class DragRace extends React.Component {
  constructor() {
    super();
    this.state = {
      team: [],
      cost: 0,
      queens: [
        {
          name: "Alaska",
          price: 250
        },
        {
          name: "Trixie Mattel",
          price: 225
        },
        {
          name: "Jinkx Monsoon",
          price: 220
        },
        {
          name: "Raja",
          price: 220
        },
        {
          name: "Shangela",
          price: 220
        },
        {
          name: "Detox",
          price: 215
        },
        {
          name: "Katya",
          price: 215
        },
        {
          name: "Alyssa Edwards",
          price: 210
        },
        {
          name: "Bianca Del Rio",
          price: 200
        },
        {
          name: "Sharon Needles",
          price: 190
        },
        {
          name: "Raven",
          price: 190
        },
        {
          name: "Bob the Drag Queen",
          price: 175
        },
        {
          name: "Aquaria",
          price: 175
        },
        {
          name: "BenDeLaCreme",
          price: 160
        },
        {
          name: "Latrice Royale",
          price: 150
        },
        {
          name: "Chad Michaels",
          price: 150
        },
        {
          name: "Trinity Taylor",
          price: 150
        },
        {
          name: "Adore Delano",
          price: 145
        },
        {
          name: "Sasha Velour",
          price: 140
        },
        {
          name: "Willam",
          price: 135
        },
        {
          name: "Violet Chachki",
          price: 135
        },
        {
          name: "Shea Coulee",
          price: 130
        },
        {
          name: "Manila Luzon",
          price: 125
        },
        {
          name: "Roxxy Andrews",
          price: 125
        },
        {
          name: "Nina Flowers",
          price: 120
        },
        {
          name: "Ginger Minj",
          price: 120
        },
        {
          name: "Naomi Smalls",
          price: 115
        },
        {
          name: "Thorgy Thor",
          price: 115
        },
        {
          name: "Pearl",
          price: 110
        },
        {
          name: "Kennedy Davenport",
          price: 110
        },
        {
          name: "Courtney Act",
          price: 105
        },
        {
          name: "Eureka",
          price: 105
        },
        {
          name: "Laganja Estranja",
          price: 105
        },
        {
          name: "Valentina",
          price: 105
        },
        {
          name: "Bebe Zahara Benet",
          price: 100
        },
        {
          name: "Chi Chi DeVayne",
          price: 100
        },
        {
          name: "Kim Chi",
          price: 100
        },
        {
          name: "Darienne Lake",
          price: 100
        },
        {
          name: "Peppermint",
          price: 95
        },
        {
          name: "Asia OHara",
          price: 95
        },
        {
          name: "Coco Montrese",
          price: 95
        },
        {
          name: "Ongina",
          price: 95
        },
        {
          name: "Jujubee",
          price: 90
        },
        {
          name: "Tatianna",
          price: 90
        },
        {
          name: "Kameron Michaels",
          price: 90
        },
        {
          name: "Tyra Sanchez",
          price: 90
        },
        {
          name: "Milk",
          price: 90
        },
        {
          name: "Miz Cracker",
          price: 90
        },
        {
          name: "Trinity K Bonet",
          price: 90
        },
        {
          name: "Pandora Boxx",
          price: 80
        },
        {
          name: "Ivy Winters",
          price: 80
        },
        {
          name: "Nina BoNina Brown",
          price: 80
        },
        {
          name: "Max",
          price: 80
        },
        {
          name: "Morgan McMichaels",
          price: 80
        },
        {
          name: "Farrah Moan",
          price: 80
        },
        {
          name: "Miss Fame",
          price: 75
        },
        {
          name: "Tammie Brown",
          price: 75
        },
        {
          name: "Mimi Imfurst",
          price: 75
        },
        {
          name: "Aja",
          price: 75
        },
        {
          name: "Gia Gunn",
          price: 75
        },
        {
          name: "Carmen Carrera",
          price: 75
        },
        {
          name: "Delta Work",
          price: 65
        },
        {
          name: "Vanessa Vanjie Mateo",
          price: 65
        },
        {
          name: "Phi Phi OHara",
          price: 65
        },
        {
          name: "Acid Betty",
          price: 65
        },
        {
          name: "Milan",
          priece: 65
        },
        {
          name: "Sahara Davenport",
          price: 60
        },
        {
          name: "Monet X Change",
          price: 60
        },
        {
          name: "Blair St Clair",
          price: 60
        },
        {
          name: "Monique Heart",
          price: 60
        },
        {
          name: "Jiggy Caliente",
          price: 60
        },
        {
          name: "Alexis Michelle",
          price: 60
        },
        {
          name: "Yara Sofia",
          price: 60
        },
        {
          name: "Dida Ritz",
          priece: 55
        },
        {
          name: "The Vixen",
          price: 55
        },
        {
          name: "Stacy Layne Matthews",
          price: 55
        },
        {
          name: "Alexis Mateo",
          price: 45
        },
        {
          name: "Derrick Barry",
          price: 45
        },
        {
          name: "Mariah",
          price: 45
        },
        {
          name: "Mayhem Miller",
          price: 45
        },
        {
          name: "Jaidynn Diore Fierce",
          price: 45
        },
        {
          name: "Naysha Lopez",
          price: 45
        },
        {
          name: "Cynthia Lee Fontaine",
          price: 35
        },
        {
          name: "Rebecca Glasscock",
          price: 35
        },
        {
          name: "Kalorie Kabdashian-Williams",
          price: 35
        },
        {
          name: "Yuhua Hamasaki",
          price: 35
        },
        {
          name: "Dusty Ray Bottoms",
          price: 35
        },
        {
          name: "Mrs Kasha Davis",
          price: 35
        },
        {
          name: "Joslyn Fox",
          price: 35
        },
        {
          name: "Shannel",
          price: 35
        },
        {
          name: "Monica Beverly Hillz",
          price: 35
        },
        {
          name: "Robbie Turner",
          price: 35
        },
        {
          name: "Lashauwn Beyond",
          price: 35
        },
        {
          name: "Vivienne Pinay",
          price: 35
        },
        {
          name: "April Carrion",
          price: 30
        },
        {
          name: "Vivacious",
          price: 30
        },
        {
          name: "Laila McQueen",
          price: 30
        },
        {
          name: "Lineysha Spax",
          price: 30
        },
        {
          name: "Victoria Porkchop Parker",
          price: 30
        },
        {
          name: "Kenya Michaels",
          price: 30
        },
        {
          name: "Jaymes Mansfield",
          price: 25
        },
        {
          name: "Kandy Ho",
          price: 25
        },
        {
          name: "Jade Jolie",
          price: 25
        },
        {
          name: "Tempest Dujour",
          price: 25
        },
        {
          name: "Jessica Wild",
          price: 25
        },
        {
          name: "Mystique Summers Madison",
          price: 25
        },
        {
          name: "Jasmine Masters",
          price: 25
        },
        {
          name: "Honey Mahogany",
          price: 25
        },
        {
          name: "Madame LaQueer",
          price: 25
        },
        {
          name: "The Princess",
          price: 25
        },
        {
          name: "Akashia",
          price: 15
        },
        {
          name: "India Ferrah",
          price: 15
        },
        {
          name: "Charlie Hides",
          price: 15
        },
        {
          name: "Kelly Mantle",
          price: 15
        },
        {
          name: "Sasha Belle",
          price: 15
        },
        {
          name: "Nicole Paige Brooks",
          price: 15
        },
        {
          name: "Sonique",
          price: 15
        },
        {
          name: "Alisa Summers",
          price: 10
        },
        {
          name: "Dax Exclamation Point",
          price: 10
        },
        {
          name: "Venus D-Lite",
          price: 10
        },
        {
          name: "Phoenix",
          price: 10
        },
        {
          name: "Penny Tration",
          price: 10
        },
        {
          name: "Jade",
          price: 10
        },
        {
          name: "Serena Cha Cha",
          price: 10
        },
        {
          name: "Magnolia Crawford",
          price: 10
        }
      ]
    };
    this.addQueen = this.addQueen.bind(this);
    this.removeQueen = this.removeQueen.bind(this);
  }
  addQueen(event) {
    let selected_queen = this.state.queens.filter(
      queen => queen.name == event.target.value
    );
    selected_queen = selected_queen[0];
    console.log(selected_queen);
    let newTeam = this.state.team;
    newTeam.push(selected_queen);
    console.log(newTeam);
    this.setState(
      {
        team: newTeam,
        cost: this.state.cost + selected_queen.price
      },
      () => console.log(this.state)
    );
  }
  removeQueen(event) {
    const index = this.state.team.findIndex(
      queen => queen.name == event.target.value
    );
    let updatedTeam = this.state.team;
    updatedTeam.splice(index, 1);
    console.log(updatedTeam);
    let queenToRemove = this.state.queens.filter(
      queen => queen.name == event.target.value
    );
    queenToRemove = queenToRemove[0];
    this.setState({
      team: updatedTeam,
      cost: this.state.cost - queenToRemove.price
    });
  }
  render() {
    return (
      <div>
        <select onChange={this.addQueen}>
          {this.state.queens.map(queen => (
            <option value={queen.name}>
              {queen.name} - {queen.price},000
            </option>
          ))}
        </select>
        <br />
        <h1>
          Funds spent: <span>${this.state.cost},000</span>
        </h1>
        {this.state.cost > 1000 ? (
          <h2 style={{ color: "red" }}>Salary cap exceeded.</h2>
        ) : (
          <h2 style={{ color: "green" }}>
            ${1000 - this.state.cost},000 remaining.
          </h2>
        )}
        {this.state.team.map(queen => (
          <div>
            {queen.name}{" "}
            <button value={queen.name} onClick={this.removeQueen}>
              Remove
            </button>
          </div>
        ))}
        <h3 style={{ color: "orange" }}>
          {this.state.team.length > 13
            ? "You can only draft 12 Queens"
            : 12 - this.state.team.length + " " + "Queens left to draft"}
        </h3>
      </div>
    );
  }
}

export default DragRace;
