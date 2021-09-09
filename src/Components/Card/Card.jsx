/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CardData from "../CardData/CardData";
import axios from "axios";
import "./Card.css";
import Search from "../Search/Search";
import Loader from "../Loader/Loader";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conf: [],
      allEvents: [],
    };
    this.filterOnQueryChange = this.filterOnQueryChange.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences"
    )
      .then((response) => response.json())
      .then((response) => {
        const { free, paid } = response;
        const allEvents = [...free, ...paid];

        this.setState((state) => ({
          ...state,
          conf: response,
          allEvents,
          displayEvents: allEvents,
          isLoaded: true,
        }));
      });
  }

  filterOnQueryChange(query) {
    const { allEvents, displayEvents } = this.state;
    const queryString = query.toLowerCase();

    const filteredEvents =
      allEvents &&
      allEvents.filter((event) => {
        const { confName, city } = event;
        const matchTitle = confName.toLowerCase().includes(queryString);
        const matchCity = city.toLowerCase().includes(queryString);

        return matchTitle || matchCity;
      });

    this.setState((state) => ({
      ...state,
      displayEvents: filteredEvents,
    }));
  }

  onSearchChange(event) {
    const query = event.target.value;
    this.setState(
      (state) => ({
        ...state,
        query,
      }),
      () => {
        this.filterOnQueryChange(query);
      }
    );
  }

  render() {
    const { displayEvents, query, isLoaded } = this.state;

    return (
      <div className="App">
        <h2 className="heading mb-2">Conference</h2>
        <Search
          onSearch={(event) => this.onSearchChange(event)}
          value={query}
          className="mb-2"
        />
        {isLoaded ? (
          displayEvents && displayEvents.length !== 0 ? (
            displayEvents.map((event, index) => {
              return (
                <CardData
                  key={`${event.conference_id}_${index}`}
                  event={event}
                />
              );
            })
          ) : (
            <p>Sorry! No events to display</p>
          )
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default Card;
