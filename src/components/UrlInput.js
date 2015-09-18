/**
 * Created by s_vinnik on 17.09.2015.
 */

function validateURl(url) {
    if (/^(http:\/\/www\.|https:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url)) {
        return true;
    }
    return false;
}

var React = require('react'), Input = require('react-bootstrap').Input,UrlInput;

    UrlInput = React.createClass({

        getInitialState: function () {
            return {
                value: '',
                isValid:false
            };
        },
        validationState() {
            if (validateURl(this.state.value) ) {this.state.isValid=true; return 'success';}
            else  {this.state.isValid=false;return 'error'};
        },
        _entryChanged: function (e) {
            this.setState({value: this.refs.input.getValue()});
            if (this.props.onChange) {
                this.props.onChange(this.state.value);
            }
        },

        render: function () {
            return (
                <Input type="text"
                       bsSize="medium"
                       id={this.props.id}
                       className={this.props.className} onChange={this._entryChanged}
                       value={this.state.value}
                       placeholder="Enter product page url"
                       label="First product url"
                       help="Validation is based on url regexp."
                       bsStyle={this.validationState()}
                       hasFeedback
                       groupClassName="group-class"
                       labelClassName="label-class"
                       ref="input"
                    />
            )
        }
    });
module.exports = UrlInput;