import React from 'react';
import {Grid, Button} from '@material-ui/core';

import style from './styles.module.scss';

import {DiscordBot} from '../api/MotherBrain/discordBots';

export default function Pitch(props:DiscordBot){
    return <Grid container className={style.pitch}>
        <Grid item xs={12}>
            <Grid item>
                <img src={props.image} alt="discord bot"/>
            </Grid>
            <Grid item>{props.title}</Grid>
            {props.tags.map((tag,key) => (
                <Grid item key={key}>
                    {tag}
                </Grid>
            ))}
            <Grid item>{props.description}</Grid>
            <Grid item><Button>{props.link}</Button></Grid>
        </Grid>
    </Grid>
};