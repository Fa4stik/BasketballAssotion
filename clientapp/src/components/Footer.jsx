import React, { Component } from "react";

export class Footer extends Component {
  constructor() {
    super();
    const nbaCreate = 1946;
    var currSeason = new Date(),
      season = `${currSeason.getFullYear() - 1}-${currSeason.getFullYear()}`,
      anniversary = currSeason.getFullYear() - nbaCreate;

    this.state = {
      season: season,
      anniversary: anniversary,
    };
  }

  render() {
    return (
      <>
        <footer className="bg-nba-blue">
          <p className="text-center text-[28px] text-white">
            The current season is {this.state.season}, and the NBA already has a
            history of {this.state.anniversary} years.
          </p>
        </footer>
      </>
    );
  }
}
