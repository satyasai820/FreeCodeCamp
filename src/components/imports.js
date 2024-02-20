
import { Box,Button, Typography, Grid, Hidden, Menu, MenuItem, Card, CardContent,CardMedia } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AccordionGetData } from "../Redux/Api/Getdata";
import { SetData2 } from "../Redux/Actions/Dropdataaction";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { auth } from '../FireBase';
import { signOut } from 'firebase/auth';


const controls = {
Button,
Typography,
Grid,
Accordion,
AccordionSummary,
AccordionDetails,
ExpandMoreIcon,
connect,
useParams,
Icon,
AccordionGetData,
SetData2,
useEffect,
useState,
Link,
Box,
useNavigate,
AppBar,
styled,
Toolbar,
IconButton,
InputBase,
SearchIcon,
Hidden,
Menu,
MenuItem,
auth,
signOut,
Card,
CardContent,
CardMedia
}


export default controls