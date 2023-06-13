import {Grid,Box, Typography, Button,Link} from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

function Page(){
return (
    <>
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} align={"center"} paddingTop={2} paddingBottom={3}>
            <Box sx={{borderRadius:0,borderStyle:"solid",width:200,height:40,display:"flex",flexDirection:"column",justifyContent:"center",fontSize:20, fontWeight:"bold",fontStyle:"italic"}}>YOUR LOGO</Box>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} align={"center"} bgcolor={"#F6F4F1"} paddingTop={5} paddingBottom={8}>
            <img src="PIC-1.jpg" alt="pic-1" width={"100%"} height={"600px"}/>
            <Grid xs={12} sm={12} md={12} lg={12} xl={12} align={"center"}>
                <Typography variant="h5" align={"center"} padding={2} fontSize={30} fontWeight={700}>UPTO 50% OFF</Typography>
                <Typography variant="body1" align={"center"} paddingBottom={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <Button variant="contained" sx={{bgcolor:"#F7990C",width:250,height:45,fontSize:19,fontWeight:600}}>SHOP NOW</Button> 
                </Box>
            </Grid>
        </Grid>        
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                <img src="PIC-2.jpg" alt="pic-2" height={500} width={"100%"}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5} bgcolor={"#F7990C"} height={500} sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <Typography variant="h5" color={"#FFFF"} align={"center"} paddingBottom={3} fontWeight={700} fontSize={45}>NEW STYLE</Typography>
                <Typography variant="body1" align={"center"} paddingBottom={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                   <Button variant="contained" sx={{bgcolor:"#000",width:250,height:45,fontSize:19,fontWeight:600}}>BUY NOW</Button>
                </Box>
            </Grid>
        </Grid>
        <Grid container bgcolor={"#F6F4F1"}>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5} bgcolor={"#F7990C"} height={500} sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <Typography variant="h5" color={"#FFFF"} align={"center"} paddingBottom={3} fontWeight={700} fontSize={45}>NEW SEASON</Typography>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <Button variant="contained" sx={{bgcolor:"#000",height:45,fontSize:19,fontWeight:600}}>SHOP NOW</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                <img src="PIC-3.jpg" height={500} width={"100%"}/>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} padding={10} >
                <img src="PIC-4.jpg" height={400} width={"100%"}/>
                <Box align={"center"}>
                    <Typography padding={2} fontSize={30} fontWeight={700}>$50</Typography>
                    <Typography padding={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Typography>
                    <Button variant="contained" sx={{bgcolor:"#000",height:45,fontSize:19,fontWeight:600}}>BUY NOW</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} padding={10}>
                <img src="PIC-5.jpg" height={400} width={"100%"}/>
                <Box align={"center"}>
                    <Typography padding={2} fontSize={30} fontWeight={700}>$50</Typography>
                    <Typography padding={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Typography>
                    <Button variant="contained" sx={{bgcolor:"#000",height:45,fontSize:19,fontWeight:600}}>BUY NOW</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} padding={10}>
                <img src="PIC-6.jpg" height={400} width={"100%"}/>
                <Box align={"center"}>
                    <Typography padding={2} fontSize={30} fontWeight={700}>$50</Typography>
                    <Typography padding={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Typography>
                    <Button variant="contained" sx={{bgcolor:"#000",height:45,fontSize:19,fontWeight:600}}>BUY NOW</Button>
                </Box>
            </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} align={"center"}>
            <Typography variant="body1" align={"center"} paddingTop={10} paddingBottom={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. <br/>Ut enim ad minim veniam, quis nostrud exercitation.</Typography>
            <Button variant="contained" sx={{bgcolor:"#F7990C",width:250,height:45,fontSize:19,fontWeight:600}}>SHOP NOW</Button>
            <Typography variant="body1" align={"center"} paddingBottom={10} paddingTop={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam, quis nostrud exercitation.</Typography>
        </Grid>
        <Grid container bgcolor={"#F6F4F1"} paddingTop={5}>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} bgcolor={"#3E3C39"} height={500} sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <Typography variant="h5" color={"#FFFF"} align={"center"} paddingBottom={3} fontWeight={700} fontSize={45}>FASHION</Typography>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                  <Button variant="contained" sx={{bgcolor:"#F7990C",width:250,height:45,fontSize:19,fontWeight:600}}>SHOP NOW</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <img src="PIC-7.jpg" alt="PIC-7" height={500} width={"100%"}/>
            </Grid>
        </Grid>   
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}   bgcolor={"#F6F4F1"} sx={{display:"flex",flexDirection:"row",justifyContent:"center",padding:3}}>   
            <Grid item>
                <img  src="PIC-8.jpg" alt="PIC-8" height={200} width={250}/>
            </Grid>
            <Grid item sx={{display:"flex",flexDirection:"column",justifyContent:"center",bgcolor:"#FFFF",padding:5}} height={200} width={250}>      
                <Typography align={"center"} paddingBottom={1}>Lorem ipsum dolor sit amet,cons adipiscing elit, sed do serobid.</Typography>
                <Button variant="contained" sx={{bgcolor:"#000",height:45,fontSize:19,fontWeight:600}}>BUY NOW</Button>
            </Grid> 
        </Grid>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} bgcolor={"#F6F4F1"} sx={{display:"flex",flexDirection:"row",justifyContent:"center",padding:3}}>     
            <Grid item sx={{display:"flex",flexDirection:"column",justifyContent:"center",bgcolor:"#F7990C",padding:5}} height={200} width={250}>
                <Typography color={"#FFF"} align={"center"} paddingBottom={1}>Lorem ipsum dolor sit amet,cons adipiscing elit, sed do serobid.</Typography>
                <Button variant="contained" sx={{bgcolor:"#FFF",color:"#000",height:45,fontSize:19,fontWeight:600}}>BUY NOW</Button>  
            </Grid>
            <Grid item>      
            <img src="PIC-9.jpg" alt="PIC-9" height={200} width={250}/>
            </Grid>
        </Grid>
        <Grid  container xs={12} sm={12} md={12} lg={12} xl={12} bgcolor={"#F6F4F1"} sx={{display:"flex",flexDirection:"row",justifyContent:"center",padding:3}}>    
            <Grid item>
                <img src="PIC-10.jpg" alt="PIC-10" height={200} width={250} />
            </Grid>
            <Grid item sx={{display:"flex",flexDirection:"column",justifyContent:"center",bgcolor:"#FFFF",padding:5}} height={200} width={250}>
                <Typography align={"center"} paddingBottom={1}>Lorem ipsum dolor sit amet,cons adipiscing elit, sed do serobid.</Typography>
                <Button variant="contained" sx={{bgcolor:"#000",height:45,fontSize:19,fontWeight:600}}>BUY NOW</Button>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align={"center"} padding={4}>
               <Typography sx={{fontSize:20,fontWeight:700}} paddingBottom={2}>FOLLOW ALONG WITH US</Typography>
               <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}  paddingBottom={2}>
                    <Link href=""><FacebookIcon sx={{mr:4,color:"#FFF",bgcolor:"#F7990C",height:40,width:40,borderRadius:20}}/></Link>
                    <Link href=""><InstagramIcon sx={{mr:4,color:"#FFF",bgcolor:"#F7990C",height:40,width:40,borderRadius:20}}/></Link>
                    <Link href=""><TwitterIcon sx={{color:"#FFF",bgcolor:"#F7990C",height:40,width:40,borderRadius:20}}/></Link>
               </Box>
               <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </Grid>
        </Grid>
    </>
)
}

export default Page;
