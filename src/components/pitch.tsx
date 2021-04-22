import React from 'react';
import {Grid, Button, Card, CardContent, CardMedia} from '@material-ui/core';

import style from './styles.module.scss';

import {DiscordBot} from '../api/MotherBrain/discordBots';

export default function Pitch(props:DiscordBot){
    return <Grid className={style.pitch}>
        <Card className={style.card}>
            <Grid container className={style.gridContainer}>
                <Grid item xs={4} className={style.botImageDiv}>
                    <CardMedia
                        className={style.botImage}
                        image={props.image}
                        title="Live from space album cover">
                    </CardMedia>
                </Grid>
                <Grid item xs={8}>
                    <CardContent>
                        <Grid item className={style.title}>{props.title}</Grid>
                        <Grid container item className={style.tags}>
                            {props.tags.map((tag,key) => (
                                <Grid item xs={2} key={key} className={style.tag}>
                                    {tag}
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item className={style.description}>{props.description}</Grid>
                        <Grid item><Button className={style.moreInfoButton}>more info</Button></Grid>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    </Grid>
};