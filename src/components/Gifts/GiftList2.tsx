
import { IconButton, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import BankCard from './BankCard';
import { Fade } from 'react-awesome-reveal';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { t } from 'i18next';
import { Trans } from 'react-i18next';
import { GiftListProps } from './../../models/component/giftList';


const GiftList2 = (props:GiftListProps) =>{
    const hasEnvelopeCard = Boolean(props.showEnvelope || props.secondPhrase || (props.bankDetails && props.bankDetails.length > 0));

    return (
        <Grid container spacing={2} display={"flex"} alignItems={"center"} padding={4} sx={{backgroundColor:props.bgColor}}>
            <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                {props.items && props.items?.length > 0 && (
                <Paper elevation={2} sx={{padding:3, backgroundColor: props.cardColor}}>
                    <Grid container spacing={2}>
                        {
                            props.mainPhrase && (
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                    <Fade direction="up" triggerOnce={true}>
                                        <Typography variant='h3' color={props.titleColor ? props.titleColor : props.textColor} textAlign={"center"} className={`${props.mainTypo}`} sx={{fontSize: props.fontSize ? props.fontSize : "3rem"}}>{ props.title ? props.title : t("gifts.giftTable")}</Typography>
                                    </Fade>
                                </Grid>
                            )
                        }
                        {props.giftIcon && (
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} sx={{display:"flex",justifyContent:"center"}} >
                                <img height={props.iconSize? props.iconSize : "60px"}  src={props.giftIcon}/>
                            </Grid>
                        )}
                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                            <Typography variant='body1'  textAlign={"center"} className={`${props.bodyTypo}`} sx={{color: props.textColor}}>{props.mainPhrase}</Typography>
                        </Grid>

                        { props.items && props.items?.length === 1 &&
                        (
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                <Paper elevation={0} sx={{backgroundColor: props.cardColor}} >
                                    <Grid container>
                                        <Grid size={{xs:12,sm:12,md:12,lg:12}} sx={{display:"flex",justifyContent:"center"}} >
                                            <img width="175px" src={props.items[0].icon}/>
                                        </Grid>

                                        <Grid size={{xs:12,sm:12,md:12,lg:12}} >
                                            <Typography
                                                variant="body1"
                                                textAlign="center"
                                                className={props.bodyTypo}
                                                sx={{ color: props.textColor, marginTop: 2 }}
                                            >
                                                <Trans
                                                    i18nKey="gifts.clickHereText"
                                                    components={{
                                                        1: (
                                                            <a
                                                                href={props.items[0].link}
                                                                style={{ color: props.textColor  }}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            />
                                                        ),
                                                    }}
                                                />
                                            </Typography>

                                        </Grid>
                                    </Grid>

                                </Paper>
                            </Grid>

                        )
                        }
                        { props.items && props.items?.length > 1 &&
                        (
                            <Grid size={{xs:12,sm:12,md:12,lg:12}} display={'flow'} justifyItems={'center'} >
                                {props.items?.map((item, index) => (
                                    <Paper elevation={2} key={index} sx={{
                                        border:"1px solid rgb(215, 174, 84, .2)",
                                        boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                                        marginBottom:2,
                                        display:'flex',
                                        padding:2,
                                        alignItems:'center',justifyContent:'space-between'
                                    }}  >

                                        <img style={{width:"175px"}} src={item.icon}/>

                                        <IconButton href={item.link}>
                                            <KeyboardArrowRightRoundedIcon sx={{color:props.titleColor}} />
                                        </IconButton>
                                    </Paper>
                                ))}
                            </Grid>

                        )}
                    </Grid>
                </Paper>
                )}
            </Grid>

            {hasEnvelopeCard && (
                <Grid size={{xs:12,sm:12,md:12,lg:12}}>
                    <Paper elevation={2} sx={{padding:3, backgroundColor: props.cardColor}}>
                        <Grid container spacing={2}>
                            { props.showEnvelope &&
                            (
                                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}  >
                                    <Fade direction="up" triggerOnce={true} >
                                        <Typography variant='h3' color={props.envelopeTitleColor ? props.envelopeTitleColor : props.textColor} textAlign={"center"} className={`${ props.envelopeMainTypo ? props.envelopeMainTypo : props.mainTypo}`} sx={{fontSize: props.envelopeFontSize ? props.envelopeFontSize : "3rem"}}>{t("gifts.rainEnvelopes")}</Typography>
                                        <div style={{display:"block", justifyItems:"center"}}>
                                            { props.bankIconStart &&
                                            (
                                                <Grid container>
                                                    <Grid size={{xs:12,sm:12,md:12,lg:12}} sx={{display:"flex",justifyContent:"center"}} >
                                                        <img height={props.iconSize? props.iconSize : "60px"} src={props.bankIconStart}/>
                                                    </Grid>
                                                </Grid>
                                            )}

                                            <Typography variant='body1' textAlign={"center"} className={`${props.bodyTypo}`} color={props.textColor} >{props.envelopePhrase}</Typography>

                                            { props.bankIconEnd &&
                                            (
                                                <Grid container>
                                                    <Grid size={{xs:12,sm:12,md:12,lg:12}} sx={{display:"flex",justifyContent:"center"}} >
                                                        <img height={props.iconSize? props.iconSize : "60px"} src={props.bankIconEnd}/>
                                                    </Grid>
                                                </Grid>

                                            )}
                                        </div>
                                    </Fade>

                                </Grid>

                            )}
                            {props.secondPhrase &&(
                                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} >
                                    <Fade direction="up" triggerOnce={true} >
                                        <Typography variant='body1' textAlign={"center"} className={`${props.bodyTypo}`} color={props.textColor} >{props.secondPhrase}</Typography>
                                    </Fade>
                                </Grid>
                            )}
                            { props.bankDetails &&
                            (
                                <Grid size={{xs:12,sm:12,md:12,lg:12}} display={"flex"} justifyContent={"center"}>

                                    <Grid container spacing={2} display={"flex"} alignItems={"center"} justifyContent={"center"} padding={2} >
                                        {props.bankDetails?.map((item, index) => (
                                            <BankCard key={index} numbers={item.numbers} bank={item.bank} name={item.name} color={item.textColor} bodyTypo={props.bodyTypo} bgColor={item.bgColor ? item.bgColor : "black"} outlineColor={item.outlineColor}></BankCard>
                                        ))}
                                    </Grid>
                                </Grid>

                            )}
                        </Grid>
                    </Paper>
                </Grid>
            )}
           
	    </Grid>
    )
}

export default GiftList2;