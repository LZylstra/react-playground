import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
      };
      
    state = {
       chamber: null,
       spinningTheChamber: false
     };

     componentWillUnmount() {
        clearTimeout(this.timeout)
      }

      handleButtonClick = () => {
        this.setState({
          spinningTheChamber: true,
        })

         this.timeout = setTimeout(() => {
             const randomChamer = Math.ceil(Math.random() * 8)

             this.setState({
                 chamber:randomChamer,
                 spinningTheChamber: false,
             })
         }, 2000)
       }

       renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
          return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
          return 'BANG!!!!!'
        } else {
          return 'you\'re safe!'
        }
      }


      render() {
        return (
          <div>
            <p>{this.renderDisplay()}</p>
            <button id = "trigger" onClick={this.handleButtonClick}>Pull the trigger!</button>
          </div>
        )
      }
  }

export default RouletteGun