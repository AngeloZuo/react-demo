import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

export default class AzDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.dialogStatus.open) {
            this.handleOpen();
        }
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    handleOpen() {
        this.setState({
            open: true
        })
    }

    render() {
        return (
            this.state.open &&
            <Dialog open={this.state.open}>
                <AppBar>
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Customer Detail
                        </Typography>
                        <Button color="inherit" onClick={this.handleClose}>
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>
                {this.props.children}
            </Dialog>
        )
    }
}