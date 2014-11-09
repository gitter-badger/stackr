
var React = require('react'),
    Card = React.createFactory(require('./Card')),
    Header = React.createFactory(require('./Header')),
    Button = React.createFactory(require('./Button'));

var Stackr = React.createClass({

    render: function() {
        return (
            <div className="stckr">
                <Header />
                <div className="stacks">
                    <div className="main-stack">
                        <div className="stack">
                            <Card className="current" data={this.props.data[0]} />
                            <Card className="next"    data={this.props.data[1]} />
                            <Card className="next-2"  data={this.props.data[2]} />
                        </div>
                        <div className="buttons">
                            <Button className="trash" icon="trash"/>
                            <Button className="thumb" icon="thumbs-up"/>
                        </div>
                    </div>
                </div>
            </div>);
    }

});

module.exports = Stackr;
