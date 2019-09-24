import React from 'react';


class Switch extends React.Component {
  state = {
      isActive: false,
  }

  handleClick() {
      this.setState((prevState) => {
          return {
              isActive: !prevState.isActive,
          }
      }, () => {
          if (this.props.onClick) this.props.onClick(this.state.isActive)
      })
  }

  render() {
      return (
          <button onClick={() => this.handleClick()}>{this.state.isActive ? 'Activado' : 'Desactivado'}</button>
      )
  }
}


export default Switch;