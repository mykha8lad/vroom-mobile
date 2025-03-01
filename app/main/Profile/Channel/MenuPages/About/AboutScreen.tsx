import React, { useState, useRef, useEffect } from 'react';

import TikTokIcon from '@/app/main/Profile/Channel/social-image/TikTok.svg';
import InstagramIcon from '@/app/main/Profile/Channel/social-image/Instagram.svg';
import XIcon from '@/app/main/Profile/Channel/social-image/X.svg';
import DiscordIcon from '@/app/main/Profile/Channel/social-image/Discord.svg';
import TelegramIcon from '@/app/main/Profile/Channel/social-image/Telegram.svg';
import LinkIcon from '@/app/main/Profile/Channel/social-image/Link.svg';

import EmailIcon from './channel-details-Icons/Email.svg';
import WorldIcon from './channel-details-Icons/World.svg';
import PeopleIcon from './channel-details-Icons/People.svg';
import VideosIcon from './channel-details-Icons/Videos.svg';
import ChartIcon from './channel-details-Icons/Chart.svg';
import InformationIcon from './channel-details-Icons/Information.svg';
import LocationIcon from './channel-details-Icons/Location.svg';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,  
  StatusBar,
  SafeAreaView,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';

type LinkProps = {
    Icon: React.FC;
    name: string;
    url: string;
};

type ChannelDetailProps = {
    Icon: React.FC;
    name: string;
};

const Link: React.FC<LinkProps> = ({ Icon: Icon, name, url }) => {
    // const handlePress = () => {
    //   if (url) {
    //     Linking.openURL(url).catch(err => console.error('Ошибка при открытии ссылки:', err));
    //   }
    // };
  
    return (        
        <View style={styles.linkContainer}>
            <View>
                <Icon />
            </View>
            <View>
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity>
                    <Text style={styles.url}>{url}</Text>
                </TouchableOpacity>
            </View>
        </View>        
    );
};

const ChannelDetail: React.FC<ChannelDetailProps> = ({ Icon: Icon, name }) => {    
    return (
        <View>
            <View style={styles.channelDetailTitleContainer}>
                <Icon />
                <Text style={styles.detailName}>{name}</Text>                
            </View>
        </View>
    );
};

export default function AboutScreen() {
    return(
        <ScrollView>
            <View style={{paddingLeft: 16, paddingBottom: 10, flexDirection: 'column', rowGap: 16}}>
                <View>
                    <Text style={styles.sectionTitle}>
                        Description
                    </Text>
                    
                    <View>
                        <Text>subscribe for more cats (and design content, of course)</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>
                        Links
                    </Text>

                    <View style={styles.linksRow}>
                        <Link Icon={TikTokIcon} name='tik tok //short tutorials' url='tiktok.com/@juxtopposed' />
                        <Link Icon={InstagramIcon} name='instagram //only for the cats' url='instagram.com/juxtopposed' />
                        <Link Icon={XIcon} name='x dot com //tweet me something' url='x.com/juxtopposed' />
                        <Link Icon={DiscordIcon} name='discord //join hospitable designers community' url='discord.gg/juxtopposed' />
                        <Link Icon={TelegramIcon} name='telegram //message me for business' url='t.me/juxtopposed' />
                        <Link Icon={LinkIcon} name='personal site //links n stuff' url='juxtopposed.com' />
                    </View>
                </View>

                <View>
                    <Text style={styles.sectionTitle}>
                        Channel details
                    </Text>

                    <View style={styles.channelDetailsContainer}>
                        <View style={styles.channelDetailsRow}>
                            <ChannelDetail Icon={EmailIcon} name='Email'/>
                            <ChannelDetail Icon={WorldIcon} name='Channel link'/>
                            <ChannelDetail Icon={PeopleIcon} name='Follower count'/>
                            <ChannelDetail Icon={VideosIcon} name='Total videos'/>
                            <ChannelDetail Icon={ChartIcon} name='Total views'/>
                            <ChannelDetail Icon={InformationIcon} name='Joined VRoom'/>
                            <ChannelDetail Icon={LocationIcon} name='Location'/>
                        </View>

                        <View style={styles.channelDetailsRow}>
                            <Text>juxtopposed.contact@gmail.com</Text>
                            <TouchableOpacity>
                                <Text style={{color: '#295FCC'}}>https://www.vroom.tv/@juxtopposed</Text>
                            </TouchableOpacity>
                            <Text>273K</Text>
                            <Text>29</Text>
                            <Text>9,556,031</Text>
                            <Text>25 Aug 2022</Text>
                            <Text>United States</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,       
    },
    name: {
        fontSize: 14,
        fontWeight: 'regular',
    },
    url: {
        fontSize: 14,
        color: '#295FCC',
        fontWeight: 'regular',
    },
    linksRow: {
        flexDirection: 'column',
        rowGap: 8,
    },

    sectionTitle: {
        fontSize: 16, 
        fontWeight: 500,  
        marginBottom: 8,     
    },

    channelDetailsContainer: {
        flexDirection: 'row',
        columnGap: 10,
    },
    channelDetailsRow: {
        rowGap: 5,
    },
    channelDetailTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },
    detailName: {
        fontSize: 14,
        fontWeight: 500,
    },
  });