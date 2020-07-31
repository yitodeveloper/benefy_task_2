import React, {useEffect, useState} from "react";
import AppLayout from "../components/AppLayout";
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    IconButton,
    Avatar,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    LinearProgress
} from "@material-ui/core";
import {Create} from '@material-ui/icons';
import {HIDE_MODAL, REQUEST_USER_LIST, SEND_NEW_USER, SEND_UPDATE_USER, SHOW_MODAL} from "../redux/actions/types";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    appBar: {
        position: 'relative',
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    input: {
        marginTop: theme.spacing(2),
    },
    loading: {
        margin: 40,
    }
}));

const Home = () => {
    const dispatch = useDispatch();
    const action = (type, payload) => dispatch({type, payload});

    const {users, isLoading, isOpenCreateModal} = useSelector((state) => state.users);
    const classes = useStyles();

    const [editedName, setEditedName] = useState("");
    const [editedLastname, setEditedLastname] = useState("");
    const [editedMail, setEditedMail] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        action(REQUEST_USER_LIST)
    }, []);

    useEffect(() => {

        if(isOpenCreateModal){
            if(!selectedUser){
                setEditedMail('');
                setEditedLastname('');
                setEditedName('');
            }
        }else{
            setSelectedUser(null);
        }
    }, [isOpenCreateModal, selectedUser]);

    const showCreateDialog = () => {
        action(SHOW_MODAL)
    };

    const hideCreateDialog = () => {
        action(HIDE_MODAL)
    };

    const createOrEditUser = () => {
        action(HIDE_MODAL);

        if(selectedUser){
            action(SEND_UPDATE_USER, {
                id: selectedUser.id,
                name: editedName,
                lastname: editedLastname,
                mail: editedMail,
            })
        }else{
            action(SEND_NEW_USER, {
                name: editedName,
                lastname: editedLastname,
                mail: editedMail,
            })
        }

    };

    const editUser = (user) => {

        return () => {
            setSelectedUser(user);
            setEditedMail(user.mail);
            setEditedLastname(user.lastname);
            setEditedName(user.name);
            action(SHOW_MODAL);
        }
    };

    const canSave = () => editedName.length > 0 && editedLastname.length > 0 && editedMail.length > 0;

    return (
        <AppLayout>
            <AppBar position="absolute" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Administración de Usuarios
                    </Typography>
                    <Button variant="contained" color="default" onClick={showCreateDialog}>Crear Usuario</Button>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    {
                        isLoading &&
                            <LinearProgress className={classes.loading} />
                    }
                    <List component="nav">
                        {
                            users.map((user) => {

                                return(
                                <ListItem key={user.id}>
                                    <ListItemAvatar>
                                        <Avatar></Avatar>
                                    </ListItemAvatar>
                                    <ListItemText>
                                        <Typography>{user.name} {user.lastname}</Typography>
                                        <Typography>{user.mail}</Typography>
                                    </ListItemText>
                                    <IconButton onClick={editUser(user)}>
                                        <Create />
                                    </IconButton>
                                </ListItem>
                                )
                            })
                        }

                    </List>
                </Paper>
            </main>
            {/* Creación de usuario*/}
            <Dialog open={isOpenCreateModal} fullWidth onClose={hideCreateDialog}>
                <DialogTitle>
                    {selectedUser? "Editar Usuario":"Creación de Usuario"}
                </DialogTitle>
                <DialogContent>
                    {
                        selectedUser &&
                        <TextField
                            label="ID"
                            fullWidth
                            className={classes.input}
                            value={selectedUser.id}
                            disabled
                        />
                    }

                    <TextField
                        label="Nombre"
                        fullWidth
                        autoFocus
                        className={classes.input}
                        value={editedName} onChange={(ev) => setEditedName(ev.target.value)}
                    />
                    <TextField
                        label="Apellido"
                        fullWidth
                        className={classes.input}
                        value={editedLastname} onChange={(ev) => setEditedLastname(ev.target.value)}
                    />
                    <TextField
                        label="Correo Electrónico"
                        fullWidth
                        className={classes.input}
                        value={editedMail} onChange={(ev) => setEditedMail(ev.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={hideCreateDialog}>Cancelar</Button>
                    <Button variant="contained" color="primary" disabled={!canSave()} onClick={createOrEditUser}>{selectedUser? "Guardar":"Crear"}</Button>
                </DialogActions>
            </Dialog>
        </AppLayout>
    )
 };

export default Home;
