import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 40px;
`;

const divStyle = {
  border: "1px solid #fff",
  fontSize: "18px",
  padding: "8px 20px",
  borderRadius: "3px",
  width: "100%",
};

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.clearSearchBox = this.clearSearchBox.bind(this);
  }

  componentDidMount({ map, mapApi } = this.props) {
    const options = {
      // restrict your search to a specific type of result
      // types: ['geocode', 'address', 'establishment', '(regions)', '(cities)'],
      // restrict your search to a specific country, or an array of countries
      // componentRestrictions: { country: ['gb', 'us'] },
    };
    this.autoComplete = new mapApi.places.Autocomplete(
      this.searchInput,
      options
    );
    this.autoComplete.addListener("place_changed", this.onPlaceChanged);
    this.autoComplete.bindTo("bounds", map);
  }

  componentWillUnmount({ mapApi } = this.props) {
    mapApi.event.clearInstanceListeners(this.searchInput);
  }

  onPlaceChanged = ({ map, addplace } = this.props) => {
    const place = this.autoComplete.getPlace();

    if (!place.geometry) return;
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    addplace(place);
    this.searchInput.blur();
    // console.log("Place". place);
    // this.props.handleOrt(place);
  };

  clearSearchBox() {
    this.searchInput.value = "";
  }

  render() {
    return (
      <Wrapper>
        <input
          ref={(ref) => {
            this.searchInput = ref;
            console.log("Ref", ref);
          }}
          type="text"
          onFocus={this.clearSearchBox}
          placeholder=" Berlin"
          style={divStyle}
        />
      </Wrapper>
    );
  }
}

export default AutoComplete;
